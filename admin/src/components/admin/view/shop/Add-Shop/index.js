import React, { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
// import Searchlocationlist from "../../../../common/searchLocation";
// import Arealist from "../../../../common/searchArea";
import { GetLocationDetails, GetSupplierDetails } from "../../../../services";
import swal from "sweetalert";

const Createshop = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [getAreaList, setGetAreaList] = useState([]);
  const [storename, setStorename] = useState("");
  const [status, setStatus] = useState("");
  const [shopaddress, setShopaddress] = useState("");
  const [shopdesc, setShopdesc] = useState("");
  const [ownername, setOwnername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [owneraddress, setOwneraddress] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [IFSC, setIFSC] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [branchName, setBranchName] = useState("");
  const [adharCardNo, setAdharCardNo] = useState("");
  const [panCardNo, setPanCardNo] = useState("");
  const [GSTNo, setGSTNo] = useState("");

  const handleBack = () => {
    // Logic xử lý khi bấm nút Back
  };

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
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "owneraddress":
        setOwneraddress(value);
        break;
      case "bankName":
        setBankName(value);
        break;
      case "accountHolderName":
        setAccountHolderName(value);
        break;
      case "IFSC":
        setIFSC(value);
        break;
      case "accountNo":
        setAccountNo(value);
        break;
      case "branchName":
        setBranchName(value);
        break;
      case "adharCardNo":
        setAdharCardNo(value);
        break;
      case "panCardNo":
        setPanCardNo(value);
        break;
      case "GSTNo":
        setGSTNo(value);
        break;
      default:
        break;
    }
  };

  const handleChangeLocation = async (value) => {
    const locationId = value;
    try {
      const list = await GetLocationDetails.getAllAreaByLocation(locationId);
      setGetAreaList(list.data);
    } catch (error) {
      // Xử lý khi gặp lỗi
    }
  };

  const handleChangeArea = (value) => {
    setSelectedArea(value);
  };

  // g
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      storename: storename,
      status: status,
      shopaddress: shopaddress,
      shopdesc: shopdesc,
      ownername: ownername,
      owneraddress: owneraddress,
      email: email,
      password: password,
      phone: phone,
      areaId: selectedArea,
      accountNo: accountNo,
      IFSC: IFSC,
      bankName: bankName,
      accountHolderName: accountHolderName,
      branchName: branchName,
      adharCardNo: adharCardNo,
      panCardNo: panCardNo,
      GSTNo: GSTNo,
    };
    try {
      const success = await swal({
        title: "Are you sure?",
        text: "You want to Add New Vendor",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (success) {
        const list = await GetSupplierDetails.createSupplierList(data);
        if (list) {
          window.location.href = "/admin/shop/list";
        }
      }
    } catch (error) {
      // Xử lý khi gặp lỗi
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Vendors</h2>
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
        <li className="breadcrumb-item">Vendor</li>
        <li className="breadcrumb-item active">Add Vendor</li>
      </ol>
      {/* vendor details */}
      <Paper>
        <Grid
          container
          spacing={4}
          style={{ padding: "1rem", marginBottom: "2rem" }}
        >
          <div className="card-title-2">
            <h4>
              <b>Vendor Details</b>
            </h4>
          </div>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Full Name*</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Name"
                name="ownername"
                value={ownername}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Email Address*</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </Grid>
          {/* <Grid item xs={4}>
                        <div className="form-group">
                            <label className="form-label">password*</label>
                            <input className="form-control" type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
                        </div>
                    </Grid> */}
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Phone Number*</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Address*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <textarea
                    className="text-control"
                    placeholder="Enter Address"
                    name="owneraddress"
                    value={owneraddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/* Shop details with product */}
      <Paper>
        <Grid
          container
          spacing={4}
          style={{ padding: "1rem", marginBottom: "2rem" }}
        >
          <div className="card-title-2">
            <h4>
              <b>Vendor Store Details</b>
            </h4>
          </div>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="store name"
                name="storename"
                value={storename}
                onChange={handleChange}
              />
            </div>
          </Grid>
          {/* <Grid item xs={4}>
                            <div className="form-group">
                                <label className="form-label">Location*</label>
                                <Searchlocationlist onSelectCategory={handleChangeLocation} />
                            </div>
                        </Grid> */}
          {/* <Grid item xs={4}>
                            <div className="form-group">
                                <label className="form-label">Area*</label>
                                <Arealist state={getAreaList} onSelectArea={handleChangeArea} />
                            </div>
                        </Grid> */}
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label"> Status*</label>
              <select
                id="status"
                className="form-control"
                name="status"
                value={status}
                onChange={handleChange}
              >
                <option selected>--Select Status--</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Shop Address*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <textarea
                    className="text-control"
                    placeholder="Enter Address"
                    name="shopaddress"
                    value={shopaddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Shop Description*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <textarea
                    className="text-control"
                    placeholder="Enter Description"
                    name="shopdesc"
                    value={shopdesc}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Paper>

      {/* bank Details  */}

      <Paper style={{ padding: "1rem", marginBottom: "2rem" }}>
        <Grid container spacing={4}>
          <div className="card-title-2">
            <h4>
              {/* g */}
              <b>Bank Details(Optional)</b> 
            </h4>
          </div>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Account No*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter accountNo"
                    name="accountNo"
                    value={accountNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Bank Code*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter IFSC Code"
                    name="IFSC"
                    value={IFSC}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">Bank Name *</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Bank Name"
                    name="bankName"
                    value={bankName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="form-group">
              <label className="form-label">AccountHolder Name *</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter accountholder "
                    name="accountHolderName"
                    value={accountHolderName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ display: "none" }}>
            <div className="form-group">
              <label className="form-label">Branch Name *</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Bank "
                    name="branchName"
                    value={branchName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ display: "none" }}>
            <div className="form-group">
              <label className="form-label">Adhar Card *</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter adharcard "
                    name="adharCardNo"
                    value={adharCardNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ display: "none" }}>
            <div className="form-group">
              <label className="form-label">PAN No *</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter pancard "
                    name="panCardNo"
                    value={panCardNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ display: "none" }}>
            <div className="form-group">
              <label className="form-label">GST No*</label>
              <div className="card card-editor">
                <div className="content-editor">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter GSTNo"
                    name="GSTNo"
                    value={GSTNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Grid>{" "}
        </Grid>
        <button
          className="save-btn hover-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Save Vendors
        </button>
      </Paper>
      {/* end */}
    </div>
  );
};

export default Createshop;
