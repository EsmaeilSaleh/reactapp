import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Todo = (props) => {
  const [open, setOpen] = useState(false);

  const deleteHandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleModal = {
    position: "absolute",
    width: 500,
    height: 150,
    left: "50%",
    top: "25%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 2,
    border: "1px solid #000",
  };
  return (
    <div>
      <Card sx={{ margin: "0 auto", width: "28em", marginBottom: "0.5em" }}>
        <CardHeader title={props.title} subheader="29 Esfand, 1400" />
        <CardContent>
          <h4>{props.text}</h4>
          <Button
            variant="contained"
            sx={{ left: "80%", backgroundColor: "darkRed" }}
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </CardContent>
      </Card>

      {/*
###########################################################################
#                            Modal Section                                #
###########################################################################
*/}

      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <Box sx={{ padding: "1em" }}>
            <Typography>Are You Sure?</Typography>
          </Box>
          <Box sx={{ marginTop: "2em" }}>
            <Button
              sx={{ marginRight: "1em" }}
              onClick={handleClose}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "darkRed" }}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Todo;
