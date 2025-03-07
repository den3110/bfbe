import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import {Link } from "react-router-dom"
import reply_contact from "../../../../../api/reply_contact";
import swal from "sweetalert";

export default function ReplyContact(props) {
  const {id, setChange }= props
  const [open, setOpen] = React.useState(false);
  const [reply, setReply] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link onClick={handleClickOpen} className="edit-btn" title={"Reply"}>
        <i className="fas fa-reply" />
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Reply contact"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              style={{
                width: 500,
                height: 40,
                marginTop: 12,
                marginBottom: 12,
              }}
              placeholder={"Reply contact"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={async ()=> {
                const result= await reply_contact(props.email, props.content, id, reply)
                if(result.ok=== true) {
                    swal("Notice", "Phản hồi thành công", "success")
                    .then(()=> setChange(prev=> !prev))
                    .then(()=> handleClose())
                }
                else {
                    swal("Notice", "Phản hồi thất bại", "error")

                }
            }}
            color="primary"
            variant={"contained"}
            autoFocus
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
