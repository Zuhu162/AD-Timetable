import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import pallette from "../pallette";

const Announcements = () => {
  return (
    <Box sx={{ color: pallette().primary, textAlign: "center" }}>
      <Card sx={{ width: "100%", marginBottom: "20px", textAlign: "left" }}>
        <CardContent sx={{ color: pallette().primary }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Session</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={700}>2023/2024</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Semester</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={700}>2</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Start/End Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={700}>2024-03-17 / 2024-06-29</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Typography>
        Jika anda mempunyai sebarang komen atau pertanyaan mengenai halaman web
        ini sila hubungi webmaster di ttms@fc.utm.my 
      </Typography>
      <Typography fontWeight={700}>
        Hakcipta Terpelihara © 2002-2024, Fakulti Komputeran, UTM
      </Typography>
    </Box>
  );
};

export default Announcements;
