import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { GetOrderDetails } from "../../../../services";
import { NotificationManager } from "react-notifications";
import Moment from "react-moment";
import get_detail_voucher from "../../../../../api/get_detail_voucher";
import numberWithCommas from "../../../../../util/number_thousand_separator";
import swal from "sweetalert";
import CancelPopup from "./CancelPopup";

const Edit = (props) => {
  const [status, setStatus] = useState(props.location.state.row.status);
  const [open, setOpen]= useState(false)
  const [reason, setReason]= useState("")
  const [deliveryDate, setDeliveryDate] = useState("");
  const [self, setSelf] = useState({
    row: { Addresses: [], Carts: [], voucherId: 0 },
  });
  const [dataVoucher, setDataVoucher] = useState({
    data: { discount: 0 },
    ok: false,
  });

  useEffect(() => {
    (async () => {
      const voucherId = self.row.voucherId || 0;
      if(voucherId != 0) {
        const result = await get_detail_voucher(voucherId);
        setDataVoucher(result);
      }
    })();
  }, [self.row]);

  const handleBack = () => {
    props.history.goBack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      setStatus(value);
    } else if (name === "deliverydate") {
      setDeliveryDate(value);
    }
  };
  console.log(self)
  const handleUpdateStatus = async () => {
    if(status=== "cancel") {
      if(reason.length <= 0) {
        setOpen(true)

      }
     if(reason.length > 0) {
      const data = {
        status: status,
        id: self.row.id,
        deliverydate: new Date(deliveryDate),
        reason,
        email: self.row.Addresses[0].states
      };
  
      if (data) {
        const update = await GetOrderDetails.getOrderStatusUpdate(data);
        if (update) {
          NotificationManager.success(update.msg, "Status");
          setTimeout(function () {
            window.location.href = "/admin";
          }, 1000);
        } else {
          NotificationManager.error("Check Status", "Status");
        }
      }
  
      console.log("Edit -> handleUpdateStatus -> data", data);
     }
    }
    else {
      const data = {
        status: status,
        id: self.row.id,
        deliverydate: new Date(deliveryDate),
        reason,
        email: self.row.Addresses[0].states
      };
  
      if (data) {
        const update = await GetOrderDetails.getOrderStatusUpdate(data);
        if (update) {
          NotificationManager.success(update.msg, "Status");
          setTimeout(function () {
            window.location.href = "/admin";
          }, 1000);
        } else {
          NotificationManager.error("Check Status", "Status");
        }
      }
  
      console.log("Edit -> handleUpdateStatus -> data", data);
    }
  };

  useEffect(() => {
    setSelf(props.location.state);
  }, [props.location.state]);

  return (
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-9 col-lg-6">
              <h2 className="mt-30 page-title">Orders</h2>
            </div>
            <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
              <Button variant="contained" onClick={handleBack}>
                <i className="fas fa-arrow-left" /> Back
              </Button>
            </div>
          </div>
          <ol className="breadcrumb mb-30">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">Orders</a>
            </li>
            <li className="breadcrumb-item active">Order Edit</li>
          </ol>
          <div className="row">
            {self.row ? (
              <div className="col-xl-12 col-md-12">
                <div className="card card-static-2 mb-30">
                  <div className="card-title-2">
                    <h2 className="title1458">Invoice</h2>
                    <span className="order-id">
                      Order #ORDR-{self.row.number}
                    </span>
                  </div>
                  <div className="invoice-content">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="ordr-date">
                          <b>Order Date :</b>{" "}
                          <Moment format="MMMM Do YYYY">
                            {self.row.createdAt}
                          </Moment>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        {self.row.Addresses.map((data, index) => (
                          <div className="ordr-date right-text" key={index}>
                            {/* <b>Order Date :</b> */}
                            <br />#{data.shipping},<br />
                            {data.area},<br />
                            {data.city},<br />
                            {data.discrict},<br />
                            {data.states},<br />
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <div className="card card-static-2 mb-30 mt-30">
                          <div className="card-title-2">
                            <h4>Recent Orders</h4>
                          </div>
                          <div className="card-body-table">
                            <div className="table-responsive">
                              <table className="table ucp-table table-hover">
                                <thead>
                                  <tr>
                                    <th style={{ width: 130 }}>#</th>
                                    <th>Image</th>
                                    <th>Item</th>
                                    <th
                                      style={{ width: 150 }}
                                      className="text-center"
                                    >
                                      Price
                                    </th>
                                    <th
                                      style={{ width: 150 }}
                                      className="text-center"
                                    >
                                      Discount(%)
                                    </th>
                                    <th
                                      style={{ width: 150 }}
                                      className="text-center"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      style={{ width: 100 }}
                                      className="text-center"
                                    >
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {self.row.Carts.map((p, index) => (
                                    <tr key={index}>
                                      <td>{p.id}</td>
                                      <td>
                                        <img
                                          src={p.photo}
                                          alt="cartimage"
                                          style={{ height: "50px" }}
                                        />
                                      </td>
                                      <td>{p.name}</td>
                                      <td className="text-center">
                                        VND{numberWithCommas(p.price)}
                                      </td>
                                      <td className="text-center">
                                        {p.discount}%
                                      </td>
                                      <td className="text-center">{p.qty}</td>
                                      <td className="text-center">
                                        VND{numberWithCommas(parseInt(p.price) * parseInt(p.qty) * (1 - (p.discount || 0) / 100))}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7" />
                      <div className="col-lg-5">
                        {/* <div className="order-total-dt">
                          <div className="order-total-left-text">Sub Total</div>
                          <div className="order-total-right-text">
                            VND{self.row.grandtotal}
                          </div>
                        </div> */}
                        <div className="order-total-dt">
                          <div className="order-total-left-text">
                            Delivery Fees
                          </div>
                          <div className="order-total-right-text">VND{numberWithCommas(self.row.deliveryFee)}</div>
                        </div>
                        {self.row.voucherId != 0 && (
                          <div className="order-total-dt">
                            <div className="order-total-left-text">
                              Discount
                            </div>
                            <div className="order-total-right-text">
                              VND{numberWithCommas(dataVoucher.data.discount)}
                            </div>
                          </div>
                        )}
                        <div className="order-total-dt">
                          <div className="order-total-left-text fsz-18">
                            Total Amount
                          </div>
                          <div className="order-total-right-text fsz-18">
                            VND{numberWithCommas(self.row.grandtotal)}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7" />
                      <div className="col-lg-5">
                        <div className="select-status">
                          <label htmlFor="status">Delivery Date*</label>
                          <div className="input-group">
                            <input
                              className="custom-select"
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              name="deliverydate"
                              value={deliveryDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="select-status">
                          <label htmlFor="status">Status*</label>
                          <div className="input-group">
                            <select
                              id="status"
                              name="status"
                              className="custom-select"
                              value={status}
                              onChange={handleChange}
                            >
                              <option value="processing">Processing</option>
                              <option value="shipping">Shipping</option>
                              <option value="delieverd">Delivered</option>
                              <option value="cancel">Cancel</option>
                            </select>
                            <div className="input-group-append">
                              <button
                                className="status-btn hover-btn"
                                type="submit"
                                onClick={handleUpdateStatus}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Loading"
            )}
          </div>
        </div>
      </main>
      <CancelPopup open={open} setOpen={setOpen} reason={reason} setReason={setReason} />
    </div>
  );
};

export default Edit;
