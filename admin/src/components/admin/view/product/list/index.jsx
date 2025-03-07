import React, { useState, useEffect } from "react";
import { Button, TableHead, Typography } from "@material-ui/core";
import { GetProductDetails } from "../../../../services";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import swal from "sweetalert";
import numberWithCommas from "../../../../../util/number_thousand_separator";
import { v4 as uuidv4 } from 'uuid';

const Arrays = (data, fieldName, fieldValue) => {
  let arrayItem = [];
  if (data && Array.isArray(data)) {
    data.map((item, key) => {
      arrayItem.push({
        label: ++key + "--" + item[fieldName],
        value: item[fieldValue],
      });
      return null;
    });
  }
  return arrayItem;
};

const List = () => {
  const [getList, setGetList] = useState([]);
  const [listSearch, setListSearch]= useState([])
  const [searchText, setSearchText] = useState("");
  const isSearching= searchText.length > 0 ? true : false
  const [isloaded, setIsLoaded] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(30);
  const [orgtableData, setOrgtableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    // your code here
    // For example:
    // props.history.goBack();
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  const getProductList = async () => {
    setIsLoaded(false);
    let list = await GetProductDetails.getAllProductList();
    if (list) {
      var tdata = list.product;
      var slice = tdata.slice(offset, offset + perPage);
      setGetList(slice);
      setOrgtableData(tdata);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    if(event.target.value.length <= 0) {

    }
    if (!searchText) {
      setGetList(orgtableData); // Hiển thị toàn bộ danh sách nếu không có từ khóa tìm kiếm
      return;
    }
  
    const filteredList = orgtableData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    setListSearch(filteredList);
  };

  const handleSearch = () => {
    if (!searchText) {
      setGetList(orgtableData); // Hiển thị toàn bộ danh sách nếu không có từ khóa tìm kiếm
      return;
    }
  
    const filteredList = orgtableData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    setListSearch(filteredList);
  };

  const handlDeleteById = async (id) => {
    swal({
      title: "Xác nhận",
      text: "Bạn có chắc muốn xoá sản phẩm này",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      if(success== null) {
      }
      if (success) {
        let value = await GetProductDetails.getDeleteProduct(id);
        if (value) {
          getProductList();
        }
      }
    });
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const newOffset = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(newOffset);
    loadMoreData();
  };

  const loadMoreData = () => {
    const data = orgtableData;
    const slice = data.slice(offset, offset + perPage);
    setGetList(slice);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Sản phẩm</h2>
        </div>
        <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
          <Button variant="contained" onClick={handleBack}>
            <i className="fas fa-arrow-left" /> Quay lại
          </Button>
        </div>
      </div>
      <ol className="breadcrumb mb-30">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Sản phẩm</li>
      </ol>
      <div className="row justify-content-between">
        <div className="col-lg-12">
          <a href="/admin/product/create" className="add-btn hover-btn">
            Tạo sản phẩm
          </a>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <br />
              <input
                style={{width: "100%", height: "42px", border: "1px solid #e7e7e7", borderRadius: 10, padding: 10}}
                type="text"
                value={searchText}
                onChange={handleSearchInputChange}
                placeholder="Nhập tên sản phẩm..."
              />
            </div>
            <div className="col-lg-2 col-md-2">
              <button
                className="save-btn hover-btn"
                onClick={handleSearch}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="card card-static-2 mt-30 mb-30">
            <div className="card-title-2">
              <h4>Tất cả sản phẩm</h4> 
            </div>
            <div className="card-body-table">
              <div className="table-responsive">
                <table className="table ucp-table table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>Id</th>
                      <th style={{ width: 100, whiteSpace: "nowrap" }}>Ảnh sản phẩm</th>
                      <th style={{whiteSpace: "nowrap"}}>Tên sản phẩm</th>
                      <th style={{whiteSpace: "nowrap"}}>Thể loại sản phẩm</th>
                      <th style={{whiteSpace: "nowrap"}}>Nhãn hiện</th>
                      {/* <th>Unit</th> */}
                      <th style={{whiteSpace: "nowrap"}}>Giá nhập</th>
                      <th style={{whiteSpace: "nowrap"}}>Giá bán</th>
                      <th style={{whiteSpace: "nowrap"}}>Giảm giá(%)</th>
                      <th style={{whiteSpace: "nowrap"}}>Trạng thái sp</th>
                      <th style={{whiteSpace: "nowrap"}}>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!isSearching
                      && getList.map((row, index) => (
                          <tr key={index}>
                            <td>{row.id}</td>
                            <td>
                              <div className="cate-img-5">
                                <img src={row.photo} alt="product-name" />
                              </div>
                            </td>
                            <td>{row.name}</td>
                            <td>
                              {row.SubCategory
                                ? row.SubCategory.category.name
                                : ".."}
                            </td>
                            <td>{row.brand}</td>
                            {/* <td>{row.unitSize}</td> */}
                            <td>VND{numberWithCommas(row.buyerPrice)}</td>
                            <td>VND{numberWithCommas(row.price)}</td>
                            <td>{row.discountPer}%</td>
                            <td>
                              {row.status === "active" ? (
                                <span className="badge-item badge-status-success">
                                  {row.status}
                                </span>
                              ) : (
                                <span className="badge-item badge-status">
                                  {row.status}
                                </span>
                              )}
                            </td>
                            <td className="action-btns">
                              <Link
                                to={{
                                  pathname: `/admin/product/edit`,
                                  state: { row },
                                }}
                              >
                                <Typography className="edit-btn">
                                  <i className="fas fa-edit" />
                                </Typography>
                              </Link>
                              <Typography
                                className="delete-btn"
                                onClick={() => handlDeleteById(row.id)}
                              >
                                <i className="fas fa-trash-alt" />
                              </Typography>
                            </td>
                          </tr>
                        ))
                        }
                      {
                        isSearching 
                      && listSearch.map((row, index) => (
                          <tr key={index}>
                            <td>{row.id}</td>
                            <td>
                              <div className="cate-img-5">
                                <img src={row.photo} alt="product-name" />
                              </div>
                            </td>
                            <td>{row.name}</td>
                            <td>
                              {row.SubCategory
                                ? row.SubCategory.category.name
                                : ".."}
                            </td>
                            <td>{row.brand}</td>
                            <td>{row.unitSize}</td>
                            <td>VND{numberWithCommas(row.buyerPrice)}</td>
                            <td>VND{numberWithCommas(row.price)}</td>
                            <td>{row.discountPer}%</td>
                            <td>
                              {row.status === "active" ? (
                                <span className="badge-item badge-status-success">
                                  {row.status}
                                </span>
                              ) : (
                                <span className="badge-item badge-status">
                                  {row.status}
                                </span>
                              )}
                            </td>
                            <td className="action-btns">
                              <Link
                                to={{
                                  pathname: `/admin/product/edit`,
                                  state: { row },
                                }}
                              >
                                <Typography className="edit-btn">
                                  <i className="fas fa-edit" />
                                </Typography>
                              </Link>
                              <Typography
                                className="delete-btn"
                                onClick={() => handlDeleteById(row.id)}
                              >
                                <i className="fas fa-trash-alt" />
                              </Typography>
                            </td>
                          </tr>
                        ))
                      }
                  </tbody>
                </table>
              </div>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(orgtableData.length / perPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
