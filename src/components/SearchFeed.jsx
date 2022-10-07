import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`).then((data) => {
      setVideos(data.items);
    });
  }, []);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }} p={2}>
      <Typography sx={{ color: "#fff" }} fontWeight="bold" variant="h4" mb={2}>
        Search Results for: <span style={{ color: "#f31503" }}>videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
