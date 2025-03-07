import mailer from "../../../mailer";
import { db } from "../../../models";
import {
  sendOrderEmail,
  sendPaymentSuccess,
} from "../../../service/MailService";
import fs from "fs";
import moment from "moment";
import round2number from "../../../util/round2number";
var Sequelize = require("sequelize");
const fetch = require('node-fetch');

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Hàm tạo PDF từ HTML


// Hàm gửi email kèm file PDF
const pdfFile = async (data) => {
  const { shipping, total } = data;
  const dataSetting = await db.setting.findOne();
  // Nội dung HTML cho file PDF
  const htmlContent = `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hóa đơn</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 20px;
      }

      .invoice {
        max-width: 800px;
        margin: auto;
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .header {
        display: flex;
        justify-content: space-between;
      }

      .header .left,
      .header .right {
        width: 48%;
      }

      .header h2 {
        margin: 0 0 10px;
      }

      .header p {
        margin: 0 0 5px;
      }

      .payment-info {
        border: 1px solid #000;
        padding: 10px;
        margin: 20px 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }

      table th,
      table td {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
      }

      table th {
        background-color: #f4f4f4;
      }

      .total {
        text-align: right;
      }

      .total p {
        font-size: 1.2em;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="invoice">
      <!-- Header -->
      <div class="header">
        <div class="left">
          <h2>Rechnung</h2>
          <div>
            <p>Lieferant:</p>
            <p><img src="https://memorri.com/static/media/logo_web_dark.1700b53eb3dd54c6fe2e.png" style="width: 100px;" /></p>
            <p>Bahnhoftstr. 37<br />65510 Idstein</p>
          </div>
          <p>
            Email:
            <a href="mailto:Memorri.me@gmail.com">Memorri.me@gmail.com</a>
          </p>
          <p>Web: <a href="https://Memorri.com">Memorri.com</a></p>
        </div>
        <div class="right">
          <div>
            <p><strong>Abnehmer: ${data?.firstName} ${data?.lastName}</strong></p>

            <p><strong>Adresse: ${data?.shipping?.address}</strong></p>
            <p><strong>PLZ: ${data?.zipCode}, ${data?.state}</strong></p>
            <p><strong>Ort: ${data?.city}</strong></p>
          </div>
        </div>
        <div>
            <p>Zahlungsart: ${data?.method}</p>
            <p><strong>Ausstellungsdatum:</strong> ${moment(
              data?.createdAt || new Date()
            ).format("DD-MM-YYYY")}</p>
          </div>
      </div>

     
      <div class="payment-info">
        <p><strong>Bankname:</strong> ${dataSetting?.bank_name}</p>
        <p><strong>Kontoinhaber:</strong> ${dataSetting?.bank_account}</p>
        <p><strong>Kontonummer:</strong> ${dataSetting?.iban}</p>
        <p><strong>Bic:</strong> ${dataSetting?.bic}</p>
        <p><strong>Verwendungszweck:</strong> ${data?.orderID}</p>
      </div>

      <!-- Table -->
      <table>
        <thead>
          <tr>
            <th>Liefererschein</th>
            <th>Anzahl von<br />Maßeinheiten</th>
            <th>Maßeinheit</th>
            <th>Preis/Maßeinheit</th>
            <th>MwSt.</th>
            <th>Basis</th>
            <th>MwSt.</th>
            <th>Insgesamt</th>
          </tr>
        </thead>
        <tbody>
          ${data?.payload
            ?.map(
              (item, index) => `
            <tr>
              <td>Magnete Foto 78x53 mm</td>
              <td>${item?.qty}</td>
              <td>St.</td>
              <td>${item?.price} €</td>
              <td>${data?.discount} %</td>
              <td>${round2number(
                item?.price * (1 - parseFloat(data?.discount) / 100)
              )} €</td>
              <td>3,2 €</td>
              <td>${round2number(
                item?.price * (1 - parseFloat(data?.discount) / 100)
              )} €</td>
          </tr>
          `
            )
            .join("")}
          <tr>
            <td>Versandkosten</td>
            <td>1</td>
            <td>St.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${data?.deliveryChange} €</td>
          </tr>
        </tbody>
      </table>

      <!-- Total -->
      <div class="total">
        <p><strong>Gesamtsumme zu zahlen: ${round2number(
          data?.total
        )} €</strong></p>

      </div>
    </div>
  </body>
</html>

  `;
  //
  {
    /* <p>Abnehmer: ${data?.payer?.name}</p> */
  }
  // Tạo file PDF từ HTML
  const pdfPath = await generatePDF(htmlContent);
  return pdfPath;
};

export default {
  async index(req, res) {
    try {
      let id;
      if (req.user) {
        id = req.user.id;
      } else {
        id = 0;
      }
      const {
        customerId,
        method,
        orderID,
        shipping,
        product,
        total,
        deliveryCharge,
        currency,
        payload,
      } = req.body;
      let status = "";

      if (method == "paypal") {
        const data = await db.setting.findOne();
        let client_key;
        let secret_key;
        let paypal_api;
        // console.log(data.mode_payment);
        if (data.mode_payment === true) {
          client_key = data.client_key_live;
          secret_key = data.secret_key_live;
          paypal_api = process.env.PAYPAL_API_LIVE;
        } else {
          client_key = data.client_key_demo;
          secret_key = data.secret_key_demo;
          paypal_api = process.env.PAYPAL_API_DEMO;
        }
        const auth = Buffer.from(`${client_key}:${secret_key}`).toString(
          "base64"
        );

        try {
          // Gọi PayPal API để kiểm tra trạng thái của order
          const response = await fetch(
            `${paypal_api}/v2/checkout/orders/${orderID}`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          // Kiểm tra trạng thái thanh toán
          // console.log("data.status", data.status);
          if (data.status === "COMPLETED") {
            // Xử lý lưu đơn hàng vào database, hoặc các hành động cần thiết
            status = data.status;
            const pdff = await pdfFile(req.body);
            await sendOrderEmail(req.body, pdff);

            if (id) {
              await db.product.destroy({ where: { user_id: id } });
            }
          } else {
            status = data.status;
          }
        } catch (error) {
          status = "error";
          console.error("Error checking PayPal order status:", error);
          return res.status(500).json({ errors: ["Error adding cart"] });
        }
      }
      if (method == "banking") {
        const pdff = await pdfFile(req.body);
        await sendOrderEmail(req.body, pdff);
        status = "waiting";
      }
      if (method == "credit") {
        const pdff = await pdfFile(req.body);

        await sendOrderEmail(req.body, pdff);
        status = "waiting";
      }
      // console.log(voucherId)
      await db.Order.create({
        custId: id,
        number: orderID,
        grandtotal: total,
        paymentmethod: method,
        deliveryFee: deliveryCharge,
        status: status,
        unit: currency,
      })
        .then((order) => {
          if (order) {
            if(method=== "paypal") {
              return db.Address.create({
                orderId: order.id,
                custId: 1,
                fullname: shipping ? shipping.name : "",
                phone: shipping ? shipping.phone : "",
                email: shipping ? shipping.email : "",
                discrict: shipping?.address
                  ? shipping?.address?.address_line_1
                  : "",
                city: shipping?.address ? shipping?.admin_area_1 : "",
                states: shipping?.address ? shipping?.country_code : "",
                shipping: shipping?.address
                  ? shipping.address?.address_line_1 +
                    shipping.address?.admin_area_2 +
                    shipping.address?.admin_area_1
                  : "",
              }).then((p) => [order, p]);
            }
            else {
              return db.Address.create({
                orderId: order.id,
                custId: 1,
                fullname: shipping ? shipping.name : "",
                phone: shipping ? shipping.phone : "",
                email: shipping ? shipping.email : "",
                discrict: req?.body?.address,
                city: req?.body?.state,
                states: req?.body?.city,
                shipping: req?.body?.address+ "," + req?.body?.state+ "," + req?.body?.city + "," + req?.body?.zipCode,
              }).then((p) => [order, p]);
            }
          }
        })
        .then(([order, p]) => {
          let cartEntries = [];
          payload?.map((item) => {
            const id = generateRandomString(12);
            JSON.parse(item?.image)?.map((item2) =>
              cartEntries.push({
                orderId: order.id,
                addressId: p.id,
                photo: item2.product,
                name: id.toString(),
              })
            );
          });
          // for (var i = 0; i < payload?.length; i++) {
          //     cartEntries.push({
          //         orderId: order.id,
          //         addressId: p.id,
          //         photo: payload?.image[i].product,
          //     })
          // }
          return db.Cart.bulkCreate(cartEntries).then((r) => [r]);
        })
        .then((success) => {
          // mailer.sendUserOrder(deliveryAddress?.email ||"", "You have ordered successfully, ordered at "+ new Date())
          res.status(200).json({
            success: true,
            ok: true,
            status: "COMPLETED",
            orderID: orderID,
          });
        })
        .catch(function (err) {
          // mailer.sendUserOrder(deliveryAddress?.email ||"", "You have ordered failed, ordered at "+ new Date())
          console.log(err);
          res.status(500).json({ errors: ["Error adding cart"] });
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: err });
    }
  },

  async getAllOrderList(req, res, next) {
    let limit = 10;
    let sort = ["createdAt", "DESC"];
    let offset = 0;
    let page = 1;
    if (req.query.limit != undefined) {
      limit = parseInt(req.query.limit);
    }
    if (req.query.page != undefined) {
      page = req.query.page;
      if (page < 1) page = 1;
    }
    if (req.query.sort) {
      if (req.query.sort == "name") {
        sort = ["name"];
      }
    }
    try {
      db.Order.findAll({
        order: [["createdAt", "DESC"]],
        include: [{ model: db.Address }, { model: db.Cart }],
      })
        .then((list) => {
          res.status(200).json({ success: true, order: list });
        })
        .catch(function (err) {
          next(err);
        });
    } catch (err) {
      res.status(500).json({ errors: "" + err });
    }
  },

  async statusUpdate(req, res, next) {
    try {
      const { id, status, deliverydate } = req.body;
      db.Order.findOne({ where: { id: id } })
        .then((list) => {
          if (req.body?.status === "delieverd") {
            // mailer.sendUserOrder(
            //   req.body?.email || "",
            //   `Your #ORDER-${list.number} have delivered successfully, delivered at ` +
            //     req.body?.deliverydate
            // );
          }
          if (req.body?.status === "processing") {
            // mailer.sendUserOrder(
            //   req.body?.email || "",
            //   `Your #ORDER-${list.number} is processing, delivered at ` +
            //     req.body?.deliverydate
            // );
          }
          if (req.body?.status === "shipping") {
            // mailer.sendUserOrder(
            //   req.body?.email || "",
            //   `Your #ORDER-${list.number} is shipping, shipping at ` +
            //     req.body?.deliverydate
            // );
          }
          if (req.body?.status === "cancel") {
            // mailer.sendUserOrder(
            //   req.body?.email || "",
            //   `Your #ORDER-${list.number} is canceled, reason: ${
            //     req.body?.reason || ""
            //   }, cancel at ` + req.body?.deliverydate
            // );
          }
          return db.Order.update(
            {
              status: status,
              deliverydate: deliverydate ? deliverydate : list.deliverydate,
              reason: req.body.reason || "",
            },
            { where: { id: id } }
          );
        })
        .then((success) => {
          res
            .status(200)
            .json({ success: true, msg: "Successfully Updated Status" });
        })
        .catch(function (err) {
          next(err);
        });
    } catch (err) {
      res.status(500).json({ errors: "" + err });
    }
  },

  async getAllOrderListById(req, res, next) {
    try {
      db.Order.findAll({
        where: { custId: req.body.id },
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: db.Address,
            include: [{ model: db.Cart, include: [{ model: db.product }] }],
          },
        ],
      })
        .then((list) => {
          res.status(200).json({ success: true, order: list });
        })
        .catch(function (err) {
          next(err);
        });
    } catch (err) {
      res.status(500).json({ errors: "" + err });
    }
  },
  async getAllOrderStatus(req, res, next) {
    try {
      db.Order.findAll({
        where: { status: req.body.status },
        order: [["createdAt", "DESC"]],
        include: [{ model: db.Address, include: [{ model: db.Cart }] }],
      })
        .then((list) => {
          res.status(200).json({ success: true, order: list });
        })
        .catch(function (err) {
          next(err);
        });
    } catch (err) {
      res.status(500).json({ errors: "" + err });
    }
  },
  async getAllOrderCount(req, res, next) {
    try {
      db.Order.findAll({
        attributes: [
          "status",
          [Sequelize.fn("COUNT", Sequelize.col("status")), "total"],
        ],
        group: ["status"],
      })
        .then((list) => {
          res.status(200).json({ success: true, data: list });
        })
        .catch(function (err) {
          next(err);
        });
    } catch (err) {
      res.status(500).json({ errors: "" + err });
    }
  },
  async getOrderPayment(req, res) {
    const { id } = req.user;
    try {
      const data = await db.Order.findAll({
        where: {
          custId: id,
        },
      });
      return res.status(200).json({ ok: true, data });
    } catch (error) {
      return res.status(500).json({ err, ok: false });
    }
  },
  async deleteOrder(req, res) {
    const { id } = req.body;
    try {
      await db.Order.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ err, ok: false });
    }
  },
  async updateOrder(req, res) {
    try {
      await sendPaymentSuccess({
        email: req.body?.Addresses?.[0]?.email,
        orderID: req.body?.number,
      });
      await db.Order.update(
        { status: "COMPLETED" },
        { where: { id: req.body.id } }
      );
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ err, ok: false });
    }
  },
};
