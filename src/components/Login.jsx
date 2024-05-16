import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import pallette from "../pallette";
import logo from "../assets/UTM Logo.png";
import { Link } from "react-router-dom";

const colours = pallette();

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
          minWidth: "35%",
          paddingY: 10,
          paddingX: 5,
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
          <img src={logo} />
          <Typography variant="p" color={colours.utmMaroon}>
            Timetable and Space Management System
          </Typography>
          <TextField
            sx={{ minWidth: "50%" }}
            id="standard-basic"
            label="Username"
            variant="standard"
          />
          <TextField
            sx={{ minWidth: "50%" }}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
          <Button
            component={Link}
            to="/announcements"
            sx={{ background: colours.utmMaroon, color: "white" }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
