"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info"; // About
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Packages
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Locations
import TodayIcon from "@mui/icons-material/Today"; // Typical Day
import ShareIcon from "@mui/icons-material/Share"; // Follow Us
import MailIcon from "@mui/icons-material/Mail"; // Contact
import BookIcon from "@mui/icons-material/Book"; // Book Now
import HelpIcon from "@mui/icons-material/Help"; // FAQ
import { useState } from "react";

const pages = [
  { title: "About", path: "/about", icon: <InfoIcon /> },
  { title: "Packages", path: "/packages", icon: <LocalOfferIcon /> },
  { title: "Locations", path: "/locations", icon: <LocationOnIcon /> },
  { title: "Typical Day", path: "/typical-day", icon: <TodayIcon /> },
  { title: "Follow Us", path: "/follow-us", icon: <ShareIcon /> },
  { title: "Contact", path: "/contact", icon: <MailIcon /> },
  // { title: "Book Now", path: "/book", icon: <BookIcon /> },
  { title: "FAQ", path: "/faq", icon: <HelpIcon /> },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo visible sur grands écrans */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, p: 1 }}
            component={Link}
            href="/"
          >
            <Image
              src="/blanc.png"
              alt="Logo"
              width={180}
              height={180}
         
            />
          </Box>

          {/* Menu mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(({ title, path, icon }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    href={path}
                    sx={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                    <span style={{ marginLeft: "8px" }}>{title}</span>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo visible sur petits écrans */}

          {/* Liens de navigation pour grands écrans */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ title, path, icon }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "secondary.main",
                  display: "block",
                  "&:hover": {
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                  display: "flex",
                  alignItems: "center",
                }}
                component={Link}
                href={path}
                startIcon={icon}
              >
                {title}
              </Button>
            ))}
          </Box>

          {/* Section utilisateur ou avatar (optionnel) */}
          <Box sx={{ flexGrow: { xs: 5, md: 0 } }}>
            <Tooltip title="Open settings">
              <Button variant="contained" color="secondary">
                Book now
              </Button>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

          {/* Logo */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
              <Image
              src="/blanc.png"
              alt="Logo"
              width={180}
              height={180}
         
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
