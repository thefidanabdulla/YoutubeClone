import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia 
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
          alt={channelDetail?.snippet?.title}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
        </Typography>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
