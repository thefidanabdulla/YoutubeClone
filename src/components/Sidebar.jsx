import { categories } from "../utils/constants";
import { Stack } from "@mui/material";
import React from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        overflowY: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          key={category.name}
        >
          <span
            style={{
              color: selectedCategory === category.name ? "#fff" : "#f00",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: selectedCategory === category.name ? "1" : ".8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
