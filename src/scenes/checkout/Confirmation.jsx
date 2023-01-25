import { Alert, AlertTitle, Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../state";

const Confirmation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You Have Successfully Placed your Order.
        <strong>Congrats on making your Purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
