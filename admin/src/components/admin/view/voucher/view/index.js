import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Typography,
  TextField,
} from "@material-ui/core";
import swal from "sweetalert";
import get_setting from "../../../../../api/get_setting";
import update_key from "../../../../../api/update_key";

const View = () => {
  const history = useHistory();

  // State cho số USDT và PNL hôm nay
  const [usdt, setUsdt] = useState("");
  const [pnlToday, setPnlToday] = useState("");

  // Hàm quay lại trang trước
  const handleBack = () => {
    history.goBack();
  };

  // Hàm xử lý lưu
  const handleSave = async () => {
    try {
      const res = await update_key({
        client_key_demo: usdt,
        secret_key_demo: pnlToday,
      });
      if (res.ok === true) {
        swal(
          "Thông báo",
          "Cập nhật thành công!",
          "success"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      (async () => {
        try {
          const response = await get_setting();
          setUsdt(response?.data?.client_key_demo);
          setPnlToday(response?.data?.secret_key_demo);
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-9 col-lg-6">
          <h2 className="mt-30 page-title">Cập nhật thông tin</h2>
        </div>
        <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
          <Button variant="contained" onClick={handleBack}>
            <i className="fas fa-arrow-left" /> Quay lại
          </Button>
        </div>
      </div>
      <ol className="breadcrumb mb-30">
        <li className="breadcrumb-item">Dashboard</li>
      </ol>

      <Box mb={1}>
        <Card>
          <Typography variant="h6" style={{ padding: 16 }}>
            Cập nhật số USDT và PNL hôm nay
          </Typography>
          <Box style={{ padding: 16, marginTop: 8 }}>
            <TextField
              fullWidth
              label="Số USDT"
              variant="outlined"
              value={usdt}
              onChange={(e) => setUsdt(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <TextField
              fullWidth
              label="PNL hôm nay"
              variant="outlined"
              value={pnlToday}
              onChange={(e) => setPnlToday(e.target.value)}
              style={{ marginBottom: 10 }}
            />
          </Box>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            fullWidth
          >
            Lưu
          </Button>
        </Card>
      </Box>
    </div>
  );
};

export default View;
