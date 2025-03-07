import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import {Link } from "react-router-dom"
import { useEffect } from "react";
import get_info_user from "../../../../../api/get_info_user";
import { Fragment } from "react";

export default function ViewReply(props) {
  const {id, reply_text }= props
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData]= React.useState()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=> {
    (async ()=> {
      const result= await get_info_user()
      return setUserData(result)
    })()
  }, [])

  return (
    <div>
      <Link onClick={handleClickOpen} className="edit-btn" title={"View reply message"}>
        <i className="fas fa-eye" />
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Replied"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              disabled
              value={reply_text}
            //   onChange={(e) => setReply(e.target.value)}
              style={{
                width: 500,
                height: 40,
                marginTop: 12,
                marginBottom: 12,
              }}
              placeholder={"Replied"}
            />
            <div></div>
            <br />
            <div></div>
            {
              userData &&
              <Fragment>
                <div style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>User reply</div>
                <div style={{marginBottom: 12}}>Email: {userData.data.email}</div>
                <div style={{marginBottom: 12}}>First name: {userData.data.firstName}</div>
                <div style={{marginBottom: 12}}>Last name: {userData.data.lastName}</div>
              </Fragment>
              
            }

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
