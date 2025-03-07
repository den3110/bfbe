import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import { API_URL } from '../../../../../config1';
import swal from 'sweetalert';
import moment from "moment"

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
export default function VoucherSchedule() {
  const [open, setOpen] = React.useState(false);
  const [dateStart, setDateStart]= React.useState()
  const [dateEnd, setDateEnd]= React.useState()
  const [amountVoucher, setAmountVoucher]= React.useState()
  const [dataVoucher, setDataVoucher]= React.useState({data: undefined})
  const isExist= dataVoucher.data ? true : false
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createVoucher= async ()=> {
    swal("Notice", "Bạn có chắc muốn tạo ra lịch săn voucher như trên không, sau khi bạn xác nhận sẽ không thể thay đổi", {buttons: {
        ok: "Xác nhận",
        cancel: "Hủy"
    }})
    .then(async value=> {
        if(value=== "ok") {

            const res= await axios({
                url: API_URL+ "/api/voucher/schedule",
                method: "post",
                data: {
                    date_start: dateStart || new Date(), date_end: dateEnd, amount_voucher: amountVoucher
                }
            })
            const result= await res.data
            if(result.ok=== true) {
                swal("Notice", "Tạo lịch săn sale thành công", "success")
                .then(()=> {
                    setAmountVoucher("")
                    setDateStart()
                    setDateEnd()
                }
                )
                .then(()=> handleClose())
                .then(()=> window.location.reload())
            }
            else {
                swal("Notice", "Tạo lịch săn sale thất bại", "error")
            }
        }
        else {
            return null
        }
    })
  }
  useEffect(()=> {
    (async()=> {
        const res= await axios({
            url: API_URL+ "/api/voucher/schedule",
            method: "get"
        })
        const result= await res.data
        setDataVoucher(result)
    })()
  }, [])

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create voucher schedule
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create voucher schedule"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
                !isExist &&
                <Fragment>
                <TextField
                onChange={(e)=> setDateStart(e.target.value)}
                id="datetime-local"
                label="Date start"
                type="datetime-local"
                defaultValue="2023-07-09T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <div>
            <TextField
                onChange={(e)=> setDateEnd(e.target.value)}
                id="datetime-local"
                label="Date end"
                type="datetime-local"
                defaultValue="2023-07-09T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </div>
            <TextField value={amountVoucher} onChange={(e)=> setAmountVoucher(e.target.value)} label={"Amount voucher"} style={{width: 400, height: 40, marginBottom: 12}} />
                </Fragment>
            }
            {
                isExist && <Fragment>
                    <div style={{marginBottom: 12}}>Scheduled</div>
                    <div style={{marginBottom: 12}}>Date start: {moment(dataVoucher.data.date_start).format("DD-MM-YYYY HH:mm:ss")}</div>
                    <div style={{marginBottom: 12}}>Date end: {moment(dataVoucher.data.date_end).format("DD-MM-YYYY HH:mm:ss")}</div>
                    <div style={{marginBottom: 12}}>Amount voucher: {(dataVoucher.data.amount_voucher)}</div>

                </Fragment>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {
            !isExist &&
            <Button onClick={createVoucher} color="primary" varaint={"contained"}>
                Create
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}
