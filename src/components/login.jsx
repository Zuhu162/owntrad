import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import palette from "./pallete";

const Login = () => {
  let buttonColor = palette.purple;
  return (
    <div>
      <Box
        sx={{
          backgroundColor: palette.background,
          height: "85vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "60vh",
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <Typography variant="h5">OWNTRAD</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Hi, Welcome Back</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  color: buttonColor,
                  cursor: "pointer",
                }}
                variant="p"
              >
                SIGN UP
              </Typography>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Typography variant="caption">OR</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ backgroundColor: buttonColor, color: "white" }}
              >
                Click here to Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
