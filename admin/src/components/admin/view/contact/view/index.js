import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { GetPaymentDetails } from "../../../../services";
import { NotificationManager } from "react-notifications";
import Loader from "../../../../loader";
import swal from "sweetalert";
import Axios from "axios";
import { API_URL } from "../../../../../config1";
import ReplyContact from "./reply_contact";
import delete_contact from "../../../../../api/delete_contact";
import ViewReply from "./view_replied_contact";
import ViewContentReply from "./ViewContentReply";

const View = () => {
  const history = useHistory();
  const [getList, setGetList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [change, setChange]= useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Số lượng item trên mỗi trang

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(true);
      await getContact();
    };
    fetchData();
  }, [change]);

  const handleBack = () => {
    history.goBack();
  };

  const getContact = async () => {
    const res = await Axios({
      url: API_URL + "/api/contact",
      method: "get",
    });
    const result = await res.data;
    let list = result.data;
    if (list) {
      setGetList(list);
      setIsLoaded(false);
    }
  };

  const handlDeleteById = async (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete User from the List",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      if(success== null) {
      }
      if (success) {
        let value = await GetPaymentDetails.getDeleteUserList(id);
        if (value) {
          NotificationManager.success(value.msg, "Status");
          setTimeout(async function () {
            window.location.reload();
          }, 1000);
        }
      }
    });
  };

  const handleAddNewUser = () => {
    // history.push({ pathname: `/admin/user/create` });
  };

  // Hàm để lấy danh sách item trên trang hiện tại
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return getList.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Tính tổng số trang
  const totalPages = Math.ceil(getList.length / itemsPerPage);

  // Tạo mảng các trang trung tâm
  const centerPages = () => {
    const totalPageCount = Math.min(5, totalPages); // Hiển thị tối đa 5 trang trung tâm
    let centerPages = [];
    const startPage = Math.max(2, currentPage - Math.floor(totalPageCount / 2));
    for (let i = 0; i < totalPageCount; i++) {
      centerPages.push(startPage + i);
    }
    return centerPages;
  };

  // Xác định xem có hiển thị nút '...' bên trái
  const showLeftDots = () => {
    return centerPages()[0] > 2;
  };

  // Xác định xem có hiển thị nút '...' bên phải
  const showRightDots = () => {
    return centerPages()[centerPages().length - 1] < totalPages - 1;
  };

  // Xử lý chuyển đến trang trước
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Xử lý chuyển đến trang tiếp theo
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Xử lý chuyển đến trang cụ thể
  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Contact List</h2>
        </div>
        <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
          <Button variant="contained" onClick={handleBack}>
            <i className="fas fa-arrow-left" /> Back
          </Button>
        </div>
      </div>
      <ol className="breadcrumb mb-30">
        <li className="breadcrumb-item">Dashboard</li>
        <li className="breadcrumb-item active">voucher</li>
      </ol>
      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12">
          {isLoaded ? <Loader /> : ""}
          <div className="card card-static-2 mt-30 mb-30">
            <div className="card-title-2">
              <h4>All Contact</h4>
            </div>
            <div className="card-body-table">
              <div className="table-responsive">
                <table className="table ucp-table table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>ID</th>
                      <th>Customer name</th>
                      <th>Date send</th>
                      <th>Content</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Hiển thị danh sách item của trang hiện tại */}
                    {getCurrentItems().map((row, index) => (
                      <tr key={index}>
                        <td>{++index}</td>
                        <td>{row.name}</td>
                        <td>{row.createdAt}</td>
                        <td>
                          <p style={{overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200, display: "inline"}}>{row.content}</p>
                        </td>
                        <td>{row.email}</td>
                        <td>{row.phone || "No data"}</td>
                        <td>{row.status}</td>
                        <td className="action-btns">
                          {
                            row.status === "waiting for reply" ? <ReplyContact {...row} setChange={setChange} /> 
                            :
                            <ViewReply {...row} />
                          }
                          <Link
                            title={"Delete"}
                            className="edit-btn"
                            onClick={()=> {
                              swal("Notice", "Bạn có muốn xóa không ?", {buttons: {
                                ok: "OK",
                                cancel: "Cancel"
                              }})
                              .then(async (value)=> {
                                if(value=== "ok") {
                                  const result= await delete_contact(row.id)
                                  if(result.ok=== true) {
                                    swal("Notice", "Đã xóa thành công", "success")
                                    .then(()=> setChange(prev=> !prev))
                                  }
                                  else {
                                    swal("Notice", "Xóa thất bại", "error")
                                  }
                                }
                              })
                              .catch(()=> {
                                swal("Notice", "Xóa thất bại", "error")
                              })
                            }}
                          >
                            <i className="fas fa-trash" />
                          </Link>
                          <ViewContentReply content={row.content} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pagination">
              <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </Button>

              {/* Hiển thị nút chuyển đến trang đầu tiên */}
              {currentPage >= 1 && (
                <Button onClick={() => goToPage(1)}>
                  1
                </Button>
              )}

              {/* Hiển thị nút '...' bên trái */}
              {showLeftDots() && (
                <Button disabled>...</Button>
              )}

              {/* Hiển thị các trang trung tâm */}
              {centerPages().map((page) => (
                <Button key={page} onClick={() => goToPage(page)} disabled={currentPage === page}>
                  {page}
                </Button>
              ))}

              {/* Hiển thị nút '...' bên phải */}
              {showRightDots() && (
                <Button disabled>...</Button>
              )}

              {/* Hiển thị nút chuyển đến trang cuối cùng */}
              {currentPage < totalPages && (
                <Button onClick={() => goToPage(totalPages)}>
                  {totalPages}
                </Button>
              )}

              <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
