import { TextField, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import pallette from "../pallette";

const Login = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "35%",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Typography variant="h4" color={{ pallette }}></Typography>
          <TextField
            sx={{ width: "50%" }}
            id="standard-basic"
            label="Username"
            variant="standard"
          />
          <TextField
            sx={{ width: "50%" }}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
