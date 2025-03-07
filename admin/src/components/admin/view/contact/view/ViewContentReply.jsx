import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Link } from "react-router-dom"

export default function ViewContentReply(props) {
  const { content }= props
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link onClick={handleClickOpen} className="edit-btn" title={"View content"}>
        <i className="fas fa-info-circle" />
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"View content"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <textarea rows={40} cols={40} value={content} style={{width: 500, height: 200, marginTop: 12, marginBottom: 12, fontSize: 16, resize: "none", border: "1px solid #555", padding: 5, borderRadius: 5}} placeholder={"Content"} readOnly />
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
