import React, { useState, useEffect } from "react";
import { GetCategoryDetails } from "../../../../services";
import Edit from "./edit";
import swal from "sweetalert";
import { Button, Typography } from "@material-ui/core";

const MainCategory = (props) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [getList, setGetList] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setSlug(e.target.value.trim().replaceAll(" ", "-").toLowerCase())
    }
  };

  const handleBack = () => {
    props.history.goBack();
  };

  const getCategory = async () => {
    let list = await GetCategoryDetails.getCategoryList();
    setGetList(list.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name: name, slug: slug };
    swal({
      title: "Bạn có chắc chắn?",
      text: "Bạn muốn thêm địa điểm mới",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      if(success== null) {
      }
      if (success) {
        let list = await GetCategoryDetails.createCategoryList(data);
        if (list) {
          getCategory();
        }
        setName("")
      }
    });
  };

  const handlDeleteById = async (id) => {
    swal({
      title: "Bạn có chắc chắn?",
      text: "Bạn muốn xóa thể loại khỏi danh sách",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      if(success== null) {
        
      }
      if (success) {
        let value = await GetCategoryDetails.getChildDeleteById(id);
        if (value) {
          getCategory();
        }
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Thể loại</h2>
        </div>
        <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
          <Button variant="contained" onClick={handleBack}>
            <i className="fas fa-arrow-left" /> Trở lại
          </Button>
        </div>
      </div>
      <ol className="breadcrumb mb-30">
        <li className="breadcrumb-item">
          <a href="/">Bảng điều khiển</a>
        </li>
        <li className="breadcrumb-item active">Thể loại</li>
      </ol>
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="card card-static-2 mb-30">
            <div className="card-title-2">
              <h4>Thêm thể loại chính</h4>
            </div>
            <div className="card-body-table">
              <div className="news-content-right pd-20">
                <div className="form-group">
                  <label className="form-label">Tên*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên thể loại"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="form-group mb-0">
                  <label className="form-label">Slug*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="grocery-staple"
                    name="slug"
                    value={slug}
                    onChange={handleChange}
                  />
                </div> */}
                <button
                  className="save-btn hover-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Thêm mới
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="all-cate-tags">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-md-12">
                <div className="card card-static-2 mb-30">
                  <div className="card-title-2">
                    <h4>Tất cả thể loại chính</h4>
                  </div>
                  <div className="card-body-table">
                    <div className="table-responsive">
                      <table className="table ucp-table table-hover">
                        <thead>
                          <tr>
                            <th style={{ width: 60 }}>
                              <input type="checkbox" className="check-all" />
                            </th>
                            <th scope="col">Tên</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Ngày</th>
                            <th scope="col">Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getList.map((row, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="checkbox"
                                  className="check-item"
                                  name="ids[]"
                                  defaultValue={5}
                                />
                              </td>
                              <td>{row.name}</td>
                              <td>{row.slug}</td>
                              <td>
                                <span className="delivery-time">
                                  {formatDate(row.createdAt)}
                                </span>
                              </td>
                              <td className="action-btns">
                                <Edit state={row} />
                                <td className="action-btns">
                                  {/* <SubEdit state={row} /> */}
                                  <Typography
                                    className="delete-btn"
                                    onClick={(e) => handlDeleteById(row.id)}
                                  >
                                    <i className="fas fa-trash-alt" />
                                  </Typography>
                                </td>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
