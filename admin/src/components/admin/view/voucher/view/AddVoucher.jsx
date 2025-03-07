import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import create_voucher from "../../../../../api/create_voucher";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
  },
}));

export default function AddVoucher(props) {
    const {setChange }= props
  const [open, setOpen] = React.useState(false);
  const [expire, setExpire] = useState()
  const [discount, setDiscount]= useState()
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color={"primary"}
        variant="contained"
        className="status-btn hover-btn"
        onClick={handleClickOpen}
      >
        Create voucher
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create new voucher"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className={classes.container} noValidate>
              <TextField
                placeholder="Expire"
                value={expire}
                onChange={(e)=> setExpire(e.target.value)}
                id="datetime-local"
                label="Expire"
                type="datetime-local"
                // defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <br />
            <TextField value={discount} onChange={(e)=> setDiscount(e.target.value)} placeholder="Discount (VND)" style={{ width: 400, height: 40 }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            variant={"contained"}
            onClick={async () => {
                if(!expire || !discount) {
                    return swal("Notice", "Vui lòng nhập đầy đủ các trường ", "error")
                }
                const result= await create_voucher({discount: parseInt(discount), expire, code: generateVoucher(8)})
                if(result.ok=== true) {
                    swal("Notice", "Successfully created voucher", "success")
                    .then(()=> {
                        setExpire()
                        setDiscount()
                    })
                    .then(()=> {
                        setChange(prev=> !prev)
                    })
                    .then(()=> handleClose())
                }
                else {
                    swal("Notice", "Voucher creation failed", "error")
                }
            }}
            color="primary"
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function generateVoucher(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let voucher = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      voucher += charset[randomIndex];
    }
  
    return voucher;
  }