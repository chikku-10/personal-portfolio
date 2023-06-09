import React from "react";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <header>
      <Box
        display="flex"
        sx={{
          width: "100%",
          height:"10vh",
        
          // background:"linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)",
          backgroundColor:"#eceff1",
          color: "white",
          justifyContent: "flex-start",
          columnGap: "2rem",
          padding: "1rem",
        }}
      >
        <IconButton aria-label="menu"  sx={{ 
          borderRadius:"0px", 
          display: { xs :"flex", md : "none"},
          "&.MuiIconButton-root":{
            padding : "8px 4px"
          }
          }}>
        <MenuIcon/>
        </IconButton>
        <Link
          href="www.google.com"
          underline="none"
          sx={{ color: "black", ":hover": { color: "black" } }}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="www.google.com"
          underline="none"
          sx={{ color: "black", ":hover": { color: "black" } }}
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </header>
  );
};

export default Header;
