import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import More from "./Disclaimer";
import "./Alert.css";
import Translation from "./Translate2";
export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <div id="alertt">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Translation />
          <More />
        </Alert>
      </Collapse>
    </div>
  );
}
