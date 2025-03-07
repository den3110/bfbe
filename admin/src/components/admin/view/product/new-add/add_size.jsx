import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { v4 } from "uuid";
import { MdOutlineClear } from "react-icons/md";

export default function AddSize(props) {
  const { updateSize, size, isupdate } = props;
  const [open, setOpen] = React.useState(false);
  const [listSize, setListSize] = React.useState([]);
  const [currentSize, setCurrentSize] = React.useState("");
  const [currentAmount, setCurrentAmount]= React.useState()
  
  const isDisabled = currentSize.trim().length > 0 ? false : true;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {isupdate=== true ? "Update size" : "Add size"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add size"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{width: 400}}>
            <div style={{display: "flex", alignItems: "center", gap: 10}}>
              <TextField
                value={currentSize}
                onChange={(e) => setCurrentSize(e.target.value)}
                style={{ flex: 1, height: 40 }}
                variant={"filled"}
                label={"size"}
              />
              <TextField
                value={currentAmount}
                onChange={(e) => setCurrentAmount(e.target.value)}
                style={{ flex: 1, height: 40 }}
                variant={"filled"}
                label={"amont"}
              />
            </div>
            <div></div>
            <br />
            <div></div>
            <div style={{ width: "100%" }}>
              {size.map((item, key) => (
                <div
                  key={key}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                    padding: 10,
                    borderRadius: 10,
                    border: "1px solid #e7e7e7"
                  }}
                >
                  <div>Size: {item.size}, Amount: {item.amount}</div>
                  <div
                    onClick={() =>
                      updateSize(size.filter((item2) => item2.id != item.id))
                    }
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <MdOutlineClear />
                  </div>
                </div>
              ))}
            </div>
            <div></div>
            <br />
            <div></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setListSize({ id: v4(), size: currentSize });
              updateSize([...size, { id: v4(), size: currentSize, amount: parseInt(currentAmount) }]);
              setCurrentSize("")
            }}
            disabled={isDisabled}
            variant={"contained"}
            color={"primary"}
          >
            Add
          </Button>
          <Button
            style={{ marginLeft: 12 }}
            variant={"contained"}
            color={"default"}
            onClick={() => handleClose()}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
