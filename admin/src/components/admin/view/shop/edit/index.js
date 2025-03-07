import React, { useState, useEffect } from 'react';
import {
    Button
} from "@material-ui/core";
import { GetSupplierDetails } from '../../../../services';
import swal from 'sweetalert';

const Edit = (props) => {
    const [selectedArea, setSelectedArea] = useState('');
    const [getList, setGetList] = useState([]);
    const [id, setId] = useState('');
    const [storename, setStorename] = useState('');
    const [status, setStatus] = useState('');
    const [shopaddress, setShopaddress] = useState('');
    const [shopdesc, setShopdesc] = useState('');
    const [ownername, setOwnername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [owneraddress, setOwneraddress] = useState('');

    useEffect(() => {
        const self = props.location.state.row;
        const value = self.status === "active" ? 1 : 0;

        setId(self.id);
        setStorename(self.storename);
        setStatus(value);
        setShopaddress(self.shopaddress);
        setShopdesc(self.shopdesc);
        setOwnername(self.ownername);
        setEmail(self.email);
        setPhone(self.phone);
        setOwneraddress(self.owneraddress);
    }, []);

    const handleBack = () => {
        props.history.goBack();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "storename":
                setStorename(value);
                break;
            case "status":
                setStatus(value);
                break;
            case "shopaddress":
                setShopaddress(value);
                break;
            case "shopdesc":
                setShopdesc(value);
                break;
            case "ownername":
                setOwnername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "owneraddress":
                setOwneraddress(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            id: id,
            storename: storename,
            status: status,
            shopaddress: shopaddress,
            shopdesc: shopdesc,
            ownername: ownername,
            owneraddress: owneraddress,
            email: email,
            phone: phone
        };

        swal({
            title: "Are you sure?",
            text: "You want to Add New Location",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    const list = await GetSupplierDetails.getUpdateSellerList(data);
                    if (list) {
                        window.location.href = "/admin/shop/list";
                    }
                }
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-9 col-lg-6">
                    <h2 className="mt-30 page-title">Shops</h2>
                </div>
                <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                    <Button variant="contained" onClick={handleBack}><i className="fas fa-arrow-left" /> Back</Button>
                </div>
            </div>
            <ol className="breadcrumb mb-30">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="shops.html">Shops</a></li>
                <li className="breadcrumb-item active">Update Shop</li>
            </ol>
            <div className="row">
                <div className="col-lg-12">
                    <div className="add-new-shop">
                        <div className="card card-static-2 mb-30">
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-title-2">
                                        <h4>Update Shop</h4>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="add-shop-content pd-20">
                                            <div className="form-group">
                                                <label className="form-label">Name*</label>
                                                <input type="text" className="form-control" placeholder="store name" name="storename" value={storename} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label"> Status*</label>
                                                <select id="status" className="form-control" name="status" value={status} onChange={handleChange}>
                                                    <option>--Select Status--</option>
                                                    <option value={1}>active</option>
                                                    <option value={0}>inactive</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Shop Address*</label>
                                                <div className="card card-editor">
                                                    <div className="content-editor">
                                                        <textarea className="text-control" placeholder="Enter Address" name="shopaddress" value={shopaddress} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Shop Description*</label>
                                                <div className="card card-editor">
                                                    <div className="content-editor">
                                                        <textarea className="text-control" placeholder="Enter Description" name="shopdesc" value={shopdesc} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="save-btn hover-btn" type="submit" onClick={handleSubmit}>Update</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-title-2">
                                        <h4>Update Shop</h4>
                                    </div>
                                    <div className="card-title-2">
                                        <h4>Shop Owner</h4>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="add-shop-content pd-20">
                                            <div className="form-group">
                                                <label className="form-label">Full Name*</label>
                                                <input className="form-control" type="text" placeholder="Enter Full Name" name="ownername" value={ownername} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email Address*</label>
                                                <input className="form-control" type="email" placeholder="Enter Email Address" name="email" value={email} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Phone Number*</label>
                                                <input className="form-control" type="text" placeholder="Enter Phone Number" name="phone" value={phone} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Owner Address*</label>
                                                <div className="card card-editor">
                                                    <div>
                                                        <div className="content-editor">
                                                            <textarea className="text-control" placeholder="Enter Address" name="owneraddress" value={owneraddress} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
}

export default Edit;
