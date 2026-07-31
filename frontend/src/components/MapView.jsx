import { Paper, Typography } from "@mui/material";

function MapView() {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 3,
        height: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h5">
        Google Map will appear here
      </Typography>
    </Paper>
  );
}

export default MapView;