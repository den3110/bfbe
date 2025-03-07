import React, { useState, useEffect } from 'react';
import {
    Button, Typography
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { GetSupplierDetails } from '../../../../services';
import swal from 'sweetalert';

const Allshop = () => {
    const [getdata, setGetData] = useState([]);
    const [getdataSearch, setgetdataSearch]= useState([])
    const [searchText, setSearchText]= useState("")
    const isSearching= searchText.length > 0 ? true : false

    const handleBack = () => {
        // Logic xử lý khi bấm nút Back
    };   


    const formatDate = (date) => {
        // Logic xử lý format ngày tháng  
    };

    const getSellarList = async () => {
        try {
            const list = await GetSupplierDetails.getAllSellerList();
            setGetData(list.data);
        } catch (error) {
            // Xử lý khi gặp lỗi
        }
    };

    const handleDeleteById = async (id) => {
        try {
            const success = await swal({
                title: "Are you sure?",
                text: "You want to delete Category from the List",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });

            if (success) {
                const value = await GetSupplierDetails.getDeleteSellerList(id);
                if (value) {
                    getSellarList();
                }
            }
        } catch (error) {
            // Xử lý khi gặp lỗi
        }
    };

    useEffect(() => {
        getSellarList();
        return ()=> setGetData([])
    }, []);

    const handleSearch = (e) => {
        setSearchText(e.target.value)
        if (e.target.value.length <= 0) {
          setgetdataSearch(getdata); // Hiển thị toàn bộ danh sách nếu không có từ khóa tìm kiếm
          return;
        }
      
        const filteredList = getdata.filter((item) =>
          item.storename.toLowerCase().includes(e.target.value.toLowerCase())
        );
      
        setgetdataSearch(filteredList);
      };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-9 col-lg-6">
                    <h2 className="mt-30 page-title">Vendor</h2>
                </div>
                <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                    <Button variant="contained" onClick={handleBack}><i className="fas fa-arrow-left" /> Back</Button>
                </div>
            </div>
            <ol className="breadcrumb mb-30">
                <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                <li className="breadcrumb-item active">Vendor</li>
            </ol>
            <div className="row justify-content-between">
                <div className="col-lg-12">
                    <a href="/admin/shop/create" className="add-btn hover-btn">Add New</a>
                </div>
                <div className="col-lg-3 col-md-4">
                    {/* <div className="bulk-section mt-30">
                        <div className="input-group">
                            <select id="action" name="action" className="form-control">
                                <option selected>Bulk Actions</option>
                                <option value={1}>Active</option>
                                <option value={2}>Inactive</option>
                                <option value={3}>Delete</option>
                            </select>
                            <div className="input-group-append">
                                <button className="status-btn hover-btn" type="submit">Apply</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-12 col-md-6">
                    <div className="bulk-section mt-30">
                        <div className="search-by-name-input">
                            <input value={searchText} onChange={(e)=> handleSearch(e)} className="form-control" placeholder="Search" />
                        </div>
                        <div className="input-group">
                            {/* <select id="categeory" name="categeory" className="form-control">
                                <option selected>Active</option>
                                <option value={1}>Inactive</option>
                            </select> */}
                            <div className="input-group-append">
                                <button className="status-btn hover-btn" type="submit">Search Product</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="card card-static-2 mt-30 mb-30">
                        <div className="card-title-2">
                            <h4>All Shops</h4>
                        </div>
                        <div className="card-body-table">
                            <div className="table-responsive">
                                <table className="table ucp-table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 60 }}><input type="checkbox" className="check-all" /></th>
                                            <th style={{ width: 60 }}>ID</th>
                                            <th>Name</th>
                                            <th>Users</th>
                                            <th style={{ width: 200 }}>Locations</th>
                                            <th style={{ width: 120 }}>Status</th>
                                            <th style={{ width: 200 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isSearching=== false && getdata.map((row, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" className="check-item" name="ids[]" defaultValue={5} /></td>
                                                <td>{++index}</td>
                                                <td>{row.storename}</td>
                                                <td>{row.ownername}</td>
                                                <td>{row.area ? row.area.location.name : ''}</td>
                                                <td>
                                                    {row.status === 'active' ? <span className="badge-item badge-status-success">{row.status}</span> :
                                                        <span className="badge-item badge-status">{row.status}</span>
                                                    }
                                                </td>
                                                <td className="action-btns">
                                                    <Link to={{
                                                        pathname: `/admin/shop/view`,
                                                        state: { row }
                                                    }}>
                                                        <Typography className="view-shop-btn"><i className="fas fa-eye" /></Typography>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: `/admin/shop/shop-product`,
                                                    }}>
                                                        <Typography className="list-btn"><i className="fas fa-list-alt" /></Typography>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: `/admin/shop/edit`,
                                                        state: { row }
                                                    }}>
                                                        <Typography className="edit-btn"><i className="fas fa-edit" /></Typography>
                                                    </Link>
                                                    <Typography className="delete-btn" onClick={(e) => handleDeleteById(row.id)} ><i className="fas fa-trash-alt" /></Typography>
                                                </td>
                                            </tr>
                                        ))}
                                        {
                                            isSearching=== true && getdataSearch.map((row, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" className="check-item" name="ids[]" defaultValue={5} /></td>
                                                <td>{++index}</td>
                                                <td>{row.storename}</td>
                                                <td>{row.ownername}</td>
                                                <td>{row.area ? row.area.location.name : ''}</td>
                                                <td>
                                                    {row.status === 'active' ? <span className="badge-item badge-status-success">{row.status}</span> :
                                                        <span className="badge-item badge-status">{row.status}</span>
                                                    }
                                                </td>
                                                <td className="action-btns">
                                                    <Link to={{
                                                        pathname: `/admin/shop/view`,
                                                        state: { row }
                                                    }}>
                                                        <Typography className="view-shop-btn"><i className="fas fa-eye" /></Typography>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: `/admin/shop/shop-product`,
                                                    }}>
                                                        <Typography className="list-btn"><i className="fas fa-list-alt" /></Typography>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: `/admin/shop/edit`,
                                                        state: { row }
                                                    }}>
                                                        <Typography className="edit-btn"><i className="fas fa-edit" /></Typography>
                                                    </Link>
                                                    <Typography className="delete-btn" onClick={(e) => handleDeleteById(row.id)} ><i className="fas fa-trash-alt" /></Typography>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allshop;
