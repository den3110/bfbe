import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import Moment from "react-moment";
import get_detail_voucher from "../../../../../api/get_detail_voucher";
import numberWithCommas from "../../../../../util/number_thousand_separator";
import lightGallery from "lightgallery"; // Import lightGallery
import lgThumbnail from "lightgallery/plugins/thumbnail"; // Plugin hiển thị ảnh thumbnail
import lgFullscreen from "lightgallery/plugins/fullscreen"; // Plugin fullscreen
import lgZoom from "lightgallery/plugins/zoom"; // Plugin zoom
import "lightgallery/css/lightgallery.css"; // Import CSS của lightGallery
import "lightgallery/css/lg-thumbnail.css"; // Import CSS của thumbnail
import "lightgallery/css/lg-fullscreen.css"; // Import CSS của fullscreen
import "lightgallery/css/lg-zoom.css"; // Import CSS của zoom

const View = (props) => {
  const [self, setSelf] = useState({ Addresses: [], Carts: [], voucherId: 0 });
  const [dataVoucher, setDataVoucher] = useState({
    data: { discount: 0 },
    ok: false,
  });

  const galleryRef = useRef(null); // Ref cho lightGallery

  useEffect(() => {
    (async () => {
      const voucherId = self.voucherId || 0;
      if (voucherId !== 0) {
        const result = await get_detail_voucher(voucherId);
        setDataVoucher(result);
      }
    })();
  }, [self]);

  useEffect(() => {
    setSelf(props.location.state);
  }, [props.location.state]);

  // Khởi tạo lightGallery
  useEffect(() => {
    if (galleryRef.current && self.Carts.length > 0) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgFullscreen, lgZoom],
        thumbnail: true,
        zoom: true,
        fullscreen: true,
      });
    }
  }, [self.Carts]);

  const handleBack = () => {
    props.history.goBack();
  };

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
            <li className="breadcrumb-item active">Order View</li>
          </ol>
          <div className="row">
            {self ? (
              <div className="col-xl-12 col-md-12">
                <div className="card card-static-2 mb-30">
                  <div className="card-title-2">
                    <h2 className="title1458">Invoice</h2>
                    <span className="order-id">Order #ORDR-{self.number}</span>
                  </div>
                  <div className="invoice-content">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="ordr-date">
                          <b>Order Date :</b>{" "}
                          <Moment format="MMMM Do YYYY">
                            {self.createdAt}
                          </Moment>
                        </div>
                        <div className="ordr-date">
                          <b>Phone :</b>{" "}
                            {self?.Addresses?.[0]?.phone}
                        </div>
                        <div className="ordr-date">
                          <b>Email :</b>{" "}
                            {self?.Addresses?.[0]?.email}
                        </div>
                        {/* Hiển thị các ngày dựa theo trạng thái */}
                        {/* ... */}
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        {self.Addresses.map((data, index) => (
                          <div className="ordr-date right-text" key={index}>
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
                                  </tr>
                                </thead>
                                <tbody>
                                  {self.Carts.map((p, index) => (
                                    <tr key={index}>
                                      <td>{p.id}</td>
                                      <td>
                                        <div
                                          className="gallery-item"
                                          ref={galleryRef}
                                        >
                                          <a href={p.photo}>
                                            <img
                                              src={p.photo}
                                              alt="cartimage"
                                              style={{ height: "50px" }}
                                            />
                                          </a>
                                        </div>
                                      </td>
                                      <td>{p.name}</td>
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
                        <div className="select-status">
                          <label htmlFor="status">Status*</label>
                          <div className="input-group">
                            <div className="status-active">{self.status}</div>
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
    </div>
  );
};

export default View;
