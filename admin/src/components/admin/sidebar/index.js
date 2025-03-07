import React, { Component } from "react";
import { getCookie } from "../../../function";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    let role = getCookie("role");
    const isActive = (url) => {
      return window.location.pathname === url ? "nav-link active" : "nav-link";
    };
    
    return (
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <Link className="nav-link active" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Dashboard
              </Link>

              {/* <Link
                className="nav-link collapsed"
                to="/admin/shop/list"
                data-toggle="collapse"
                data-target="#collapseShops"
                aria-expanded="false"
                aria-controls="collapseShops"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-store" />
                </div>
                Vendors
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </Link> */}
              {/* <div
                className="collapse"
                id="collapseShops"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link sub_nav_link" to="/admin/shop/list">
                    list
                  </Link>
                  <a
                    className="nav-link sub_nav_link"
                    href="/admin/shop/create"
                  >
                    create
                  </a>
                  {/* <Link
                    className="nav-link sub_nav_link"
                    to="/admin/vendor/product/list"
                  >
                    Product
                  </Link> 
                </nav>
              </div> */}
              <a
                className="nav-link collapsed"
                href="/admin/product/list"
                data-toggle="collapse"
                data-target="#collapseProducts"
                aria-expanded="false"
                aria-controls="collapseProducts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-box" />
                </div>
                  Sản phẩm
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseProducts"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/product/list"
                  >
                    Tất cả sản phẩm
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/product/create"
                  >
                    Thêm sản phẩm
                  </Link>
                </nav>
              </div>
              {/* <Link
                className="nav-link collapsed"
                to="/admin/category/list"
                data-toggle="collapse"
                data-target="#collapseCategories"
                aria-expanded="false"
                aria-controls="collapseCategories"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-list" />
                </div>
                  Thể loại sản phẩm
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </Link> */}
              {/* <div
                className="collapse"
                id="collapseCategories"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/category/list"
                  >
                    Tất cả thể loại sản phẩm
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/category/create"
                  >
                    Thêm thể loại sản phẩm
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/category/sub-create"
                  >
                    Thêm thể loại sản phẩm con
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/category/sub-child-create"
                  >
                    Add Child-Category
                  </Link>
                </nav>
              </div> */}
              {/* <Link
                className="nav-link collapsed"
                to="/admin/location/list"
                data-toggle="collapse"
                data-target="#collapseLocations"
                aria-expanded="false"
                aria-controls="collapseLocations"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                Locations
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </Link>
              <div
                className="collapse"
                id="collapseLocations"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/location/list"
                  >
                    All Locations
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/location/create"
                  >
                    Add Location
                  </Link>
                </nav>
              </div> */}
              {/* <Link
                className="nav-link collapsed"
                to="/admin/area/list"
                data-toggle="collapse"
                data-target="#collapseAreas"
                aria-expanded="false"
                aria-controls="collapseAreas"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-map-marked-alt" />
                </div>
                Areas
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </Link>
              <div
                className="collapse"
                id="collapseAreas"
                aria-labelledby="headingTwo"
                data-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link sub_nav_link" to="/admin/area/list">
                    All Areas
                  </Link>
                  <Link
                    className="nav-link sub_nav_link"
                    to="/admin/area/create"
                  >
                    Add Area
                  </Link>
                </nav>
              </div> */}
              <Link
                className={role === "admin" ? isActive("/admin/user/list") : "d-none"}
                to="/admin/user/list"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users" />
                </div>
                Quản lý người dùng cấp 1
              </Link>
              <Link className={isActive("/admin/customer/list")} to="/admin/customer/list">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users" />
                </div>
                Quản lý người dùng cấp 2
              </Link>
              <Link className="nav-link" to="/admin/settings">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users" />
                </div>
                Cài đặt hệ thống
              </Link>
              {/* <Link className={isActive("/admin/voucher/list")} to="/admin/voucher/list">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-gift" />
                </div>
                Voucher
              </Link> */}
              <Link className={isActive("/admin/contact/list")} to="/admin/contact/list">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-gift" />
                </div>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
