import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import "bootstrap/dist/js/bootstrap";

export default function Header() {
  return (
    <Typography component='div' variant='body1'>
      <Box bgcolor='primary.main' color='primary.contrastText' p={2}>
        Four Paws pet Medicines
      </Box>
    </Typography>
  );
}
