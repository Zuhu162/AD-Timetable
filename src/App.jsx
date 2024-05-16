import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Schedule from "./components/Schedule";
import { Box } from "@mui/material";
import ResponsiveDrawer from "./components/Sidebar";
import { Announcement } from "@mui/icons-material";
import Announcements from "./components/Announcements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterSubject from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <ResponsiveDrawer></ResponsiveDrawer> */}
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ResponsiveDrawer />}>
            <Route path="announcements" element={<Announcements />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="register" element={<RegisterSubject />} />
          </Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
