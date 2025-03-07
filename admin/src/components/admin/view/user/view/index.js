import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { GetUserLogin } from "../../../../services";
import { NotificationManager } from "react-notifications";
import swal from "sweetalert";
import Loader from "../../../../loader";
import Pagination from "./Pagination"; // Import the Pagination component
import "./View.css"; // Import your custom CSS for styling

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getList: [],
      isLoaded: false,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  async componentDidMount() {
    this.setState({ isLoaded: true });
    await this.getCustomer();
  }

  async getCustomer() {
    let list = await GetUserLogin.getAllUserList();
    if (list) {
      this.setState({ getList: list.data, isLoaded: false });
    }
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleBack() {
    this.props.history.goBack();
  }

  handlDeleteById(id) {
    swal({
      title: "Xác nhận",
      text: "Bạn có chắc muốn xoá người này khỏi danh sách người dùng cấp 1",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      if (success) {
        let value = await GetUserLogin.getDeleteUserList(id);
        if (value) {
          NotificationManager.success(value.msg, "Status");
          setTimeout(async function () {
            window.location.reload();
          }, 1000);
        }
      }
    });
  }

  handlEditRow(row) {
    this.props.history.push({
      pathname: `/admin/user/edit/${row.id}`,
      state: row,
    });
  }

  handleAddNewUser() {
    this.props.history.push({ pathname: `/admin/user/create` });
  }

  render() {
    const { getList, isLoaded, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = getList.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-9 col-lg-6">
            <h2 className="mt-30 page-title">Quản lý người dùng cấp 1</h2>
          </div>
          <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
            <Button variant="contained" onClick={(e) => this.handleBack()}>
              <i className="fas fa-arrow-left" /> Back
            </Button>
          </div>
        </div>
        <ol className="breadcrumb mb-30">
          <li className="breadcrumb-item">Dashboard</li>
          <li className="breadcrumb-item active">User</li>
        </ol>
        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-12">
            {isLoaded ? <Loader /> : ""}
            <div className="card card-static-2 mt-30 mb-30">
              <div className="card-title-2">
                <h4>Tất cả người dùng</h4>
              </div>
              <div className="card-body-table">
                <div className="table-responsive">
                  <table className="table ucp-table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Phân quyền</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((row, index) => (
                        <tr key={index}>
                          <td>{++index}</td>
                          <td>{row.firstName}</td>
                          <td>{row.lastName}</td>
                          <td>{row.email}</td>
                          <td>{row.role}</td>
                          <td>
                            {row.verify ? (
                              <span className="text-success">Đã xác nhận</span>
                            ) : (
                              <span className="text-danger">Chờ xác nhận</span>
                            )}
                          </td>
                          <td className="action-btns">
                            <a onClick={(e) => this.handlEditRow(row)}>
                              <i className="fas fas fa-edit" />
                            </a>
                            <Typography
                              className="delete-btn"
                              onClick={(e) => this.handlDeleteById(row.id)}
                            >
                              <i className="fas fa-trash-alt" />
                            </Typography>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={getList.length}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default View;
