import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { GetProductDetails } from "../../../../services";
import RichTextEditor from "../../../../RichTextEditor";
import Loader from "../../../../loader";
import { NotificationManager } from "react-notifications";
import swal from "sweetalert";
import Axios from "axios";
import { API_URL } from "../../../../../config1";
import AddSize from "../new-add/add_size";
import { Fragment } from "react";
import _ from "lodash";
import { v4 } from "uuid";

const Edit = (props) => {
  const self = props.location.state.row;
  const [getList, setGetList] = useState([]);
  const [getsublist, setGetSubList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [blockHide, setBlockHide] = useState(false);
  const [productId, setProductId] = useState(self.id);
  const [name, setName] = useState(self.name);
  const [slug, setSlug] = useState(self.slug);
  const [brand, setBrand] = useState(self.brand);
  const [status, setStatus] = useState(self.status === "active" ? 1 : 0);
  const [unit, setUnit] = useState(self.unitSize);
  const [image, setImage] = useState("");
  const [content, setContent] = useState(self.desc);
  const [buyerPrice, setBuyerPrice] = useState(self.buyerPrice);
  const [price, setPrice] = useState(self.price);
  const [qty, setQty] = useState(self.qty);
  const [discount, setDiscount] = useState(self.discount);
  const [discountPer, setDiscountPer] = useState(self.discountPer);
  const [total, setTotal] = useState(self.total);
  const [grand_total, setGrandTotal] = useState(self.netPrice);
  const [images, setImages] = useState([]);
  const [currentIdPhoto, setCurrentIdPhoto] = useState(0);
  const [size, setSize] = useState([]);
  const [photo, setPhoto] = useState(self.photo);
  const [photoTemp, setPhotoTemp] = useState("");
  const [newAddImage, setNewAddImage]= useState([])
  const [newAddImageUrl, setNewAddImageUrl]= useState([])

  const handleBack = () => {
    props.history.goBack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "slug":
        setSlug(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "unit":
        setUnit(value);
        break;
      case "buyerPrice":
        setBuyerPrice(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "qty":
        setQty(value);
        break;
      case "discount":
        setDiscount(value);
        break;
      case "discountPer":
        setDiscountPer(value);
        break;
      default:
        break;
    }
  };

  const onFileChange = (event) => {
    setImage(event.target.files[0]);
    setPhotoTemp(URL.createObjectURL(event.target.files[0]));
  };

  const handleContentChange = (contentHtml) => {
    setContent(contentHtml);
  };

  const calculationTable = () => {
    const newPrice = parseFloat(price);
    const newQty = parseFloat(qty);
    const newDiscountPer = parseFloat(discountPer);

    if (newPrice > 0 && newQty > 0 && newDiscountPer >= 0) {
      const newDiscount = Math.round((newPrice * newQty * newDiscountPer) / 100);
      const newTotal = Math.round(newPrice * newQty);
      const newGrandTotal = Math.round(newPrice * newQty - newDiscount);

      setTotal(newTotal);
      setGrandTotal(newGrandTotal);
      setDiscount(newDiscount);
    } else {
      NotificationManager.error(
        "Negative value & Zero Price not allowed",
        "Input Field"
      );
    }
  };

  const handleCheckPrice = () => {
    calculationTable();
    setToggle(!toggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("brand", brand);
    formData.append("status", status);
    formData.append("unitSize", unit);
    formData.append("desc", content);
    formData.append("photo", image);
    formData.append("buyerPrice", buyerPrice);
    formData.append("price", price);
    formData.append("qty", _.sumBy(size, "amount"));
    formData.append("discountPer", discountPer);
    formData.append("discount", discount);
    formData.append("total", total);
    formData.append("netPrice", grand_total);
    formData.append("images", JSON.stringify(images));
    formData.append("size", JSON.stringify(size));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    swal({
      title: "Xác nhận",
      text: "Bạn có muốn cập nhật sản phẩm này ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (success) => {
      console.log(success)
      if(success== null) {
        setLoading(false);
      }
      if (success) {
        const imgList= await uploadImages(newAddImage)
        formData.append("newaddimage", JSON.stringify(imgList))
        let list = await GetProductDetails.getUpdateProduct(formData, config);
        if (list) {
          setLoading(false);
          props.history.push("/admin/product/list");
        } else {
          NotificationManager.error("Vui lòng check lại các trường", "Input Field");
        }
      }
    });
  };

  const fetchData = async () => {
    try {
      const response = await Axios({
        url: API_URL + "/api/product/photo",
        method: "get",
        params: {
          productId: productId,
        },
      });
      const result = response.data;
      setImages(result.data);
    } catch (error) {}
  };

  const fetchData2 = async () => {
    try {
      const response = await Axios({
        url: API_URL + "/api/product/size",
        method: "get",
        params: {
          productId: productId,
        },
      });
      const result = response.data;
      setSize(result.data);
    } catch (error) {}
  };

  const updateSize = (size) => {
    setSize(size);
  };
  const cloudinaryConfig = {
    cloud_name: "cockbook",
    upload_preset: "uem2kud5",
  };
  const uploadImageToCloudinary = async (imageObject) => {
    try {
      const { image } = imageObject;
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", cloudinaryConfig.upload_preset);
  
      const response = await Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`,
        formData
      );
  
      const imageUrl = response.data.secure_url;
  
      return {
        ...imageObject,
        imageUrl,
      };
    } catch (error) {
      console.error("Lỗi khi upload hình ảnh:", error);
      return imageObject;
    }
  };
  
  const uploadImages = async (imageObjects) => {
    const uploadedImages = await Promise.all(
      imageObjects.map((imageObject) => uploadImageToCloudinary(imageObject))
    );
    
    return uploadedImages;
  };
  
  useEffect(() => {
    fetchData();
    fetchData2();
  }, [productId]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Products</h2>
        </div>
        <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
          <Button variant="contained" onClick={(e) => handleBack()}>
            <i className="fas fa-arrow-left" /> Back
          </Button>
        </div>
      </div>
      <ol className="breadcrumb mb-30">
        <li className="breadcrumb-item">
          <a href="/">Dashboard</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/admin/product/create">Sản phẩm</a>
        </li>
        <li className="breadcrumb-item active">Cập nhật sản phẩm</li>
      </ol>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="card card-static-2 mb-30">
            <div className="card-title-2">
              <h4>Cập nhật sản phẩm</h4>
            </div>
            <div className="card-body-table">
              {loading ? <Loader /> : ""}
              <div className="news-content-right pd-20">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                      <label className="form-label">Tên sản phẩm*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên sản phẩm"
                        name="name"
                        value={name}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Link tới sản phẩm*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link tới sản phẩm"
                        name="slug"
                        value={slug}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Nhãn hiệu*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhãn hiệu"
                        name="brand"
                        value={brand}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Kích cỡ*</label>
                      <input
                        readOnly
                        type="size"
                        className="form-control"
                        name="image"
                        value={size.map((item) => item.size)}
                        style={{ marginBottom: 12 }}
                      />
                      <AddSize isupdate={true} updateSize={updateSize} size={size} />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Ảnh đại diện sản phẩm*</label>
                      {photoTemp.length > 0 ? (
                        <Fragment>
                          <img
                            src={photoTemp}
                            className={"mr-3 mb-3"}
                            style={{
                              width: 130,
                              height: 130,
                              borderRadius: 10,
                              objectFit: "cover",
                              marginBottom: 12,
                              marginTop: 12,
                            }}
                          />
                          <Button
                            onClick={() => setPhotoTemp("")}
                            style={{ marginTop: 12 }}
                            variant={"contained"}
                            color={"#f00"}
                          >
                            Xoá
                          </Button>
                        </Fragment>
                      ) : (
                        <img
                          src={photo}
                          className={"mr-3 mb-3"}
                          style={{
                            width: 130,
                            height: 130,
                            borderRadius: 10,
                            objectFit: "cover",
                            marginBottom: 12,
                            marginTop: 12,
                          }}
                        />
                      )}
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={onFileChange}
                      />
                    </div>
                  </div>
                </div>
                {/* new */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group w-100">
                    <label className="form-label">Các ảnh sản phẩm*</label>
                    <br />
                    <div
                      className={"d-flex align-items-center g-10 mr-2 flex-wrap mb-3"}
                    >
                      {images.length > 0 &&
                        images.map((item, key) => (
                          <div key={key} style={{ position: "relative" }}>
                            <img
                              key={key}
                              src={item.imgUrl}
                              className={"mr-3 mb-3"}
                              style={{
                                width: 130,
                                height: 130,
                                borderRadius: 10,
                                objectFit: "cover",
                              }}
                            />
                            <button
                              onClick={() => {
                                setImages(images.filter((item2) => item2.id !== item.id));
                              }}
                              style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                              }}
                            >
                              X
                            </button>
                          </div>
                        ))}
                        {
                          newAddImage.map((item, key)=> <div key={key} style={{ position: "relative" }}>
                          <img
                              src={item.previewUrl}
                              className={"mr-3 mb-3"}
                              style={{
                                width: 130,
                                height: 130,
                                borderRadius: 10,
                                objectFit: "cover",
                              }}
                            />
                            <button
                              onClick={() => {
                                setNewAddImage(newAddImage.filter((item2) => item2.id !== item.id));
                              }}
                              style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                              }}
                            >
                              X
                            </button>
                          </div>)
                        }
                        <div
                          className={"mr-3 mb-3"}
                          style={{
                            width: 130,
                            height: 130,
                            borderRadius: 10,
                            objectFit: "cover",
                            backgroundColor: "#f2f0f5",
                            marginLeft: 12,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative"
                          }}
                        >
                          <input style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0, opacity: 0}} type="file" onChange={(e)=> {
                            e.persist()
                            setNewAddImage(prev=> [...prev, {id: v4(), previewUrl: URL.createObjectURL(e.target.files[0]), image: e.target.files[0]}])
                          }} />
                          Cập nhật sản phẩm
                        </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row" style={{ paddingTop: "2rem" }}>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Trạng thái sản phẩm*</label>
                      <select
                        id="status"
                        name="status"
                        className="form-control"
                        value={status}
                        onChange={(e) => handleChange(e)}
                      >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Giá nhập vào*</label>
                      <input
                        type="number"
                        className="form-control"
                        name="buyerPrice"
                        value={buyerPrice}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Giá bán ra*</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={price}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <label className="form-label">Số lượng sản phẩm*</label>
                      <input
                        style={{ width: 80 }}
                        readOnly
                        type="number"
                        className="form-control"
                        name="qty"
                        value={_.sumBy(size, "amount")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1">
                    <div className="form-group">
                      <label className="form-label">Giảm giá(%)*</label>
                      <input
                        type="number"
                        className="form-control"
                        name="discountPer"
                        value={discountPer}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row" style={{ paddingTop: "2rem" }}>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="form-label">Mô tả chi tiết sản phẩm*</label>
                      <RichTextEditor
                        content={content}
                        handleContentChange={handleContentChange}
                        placeholder="insert text here..."
                      />
                    </div>
                  </div>
                </div>
                <div className="button_price">
                  <div
                    className="form-group"
                    style={toggle ? { display: "block" } : { display: "none" }}
                  >
                    <button
                      className="save-btn hover-btn"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Cập nhật sản phẩm
                    </button>
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

export default Edit;
