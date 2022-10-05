import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import React, { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          sx={{ mt: 1.5, color: "#fff" }}
          className="copyright"
          variant="body2"
        >
          Copyright 2022 thefidanabdulla
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }} p={2}>
        <Typography
          sx={{ color: "#fff" }}
          fontWeight="bold"
          variant="h4"
          mb={2}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
