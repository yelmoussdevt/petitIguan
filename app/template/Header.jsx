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
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { title: "About", path: "/about" },
  { title: "Packages", path: "/packages" },
  { title: "Locations", path: "/locations" },
  { title: "Typical Day", path: "/typical-day" },
  { title: "Follow Us", path: "/follow-us" },
  { title: "Contact", path: "/contact" },
  { title: "Book Now", path: "/book" },
  { title: "FAQ", path: "/faq" },
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
    <AppBar position="fixed" sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo visible sur grands écrans */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            component={Link}
            href="/"
          >
            <Image
              src="/logotransparent.png"
              alt="Logo"
              width={150}
              height={150}
              style={{ height: "40px", width: "auto" }} // Ajustement de la taille
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
              {pages.map(({ title, path }) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link} href={path} sx={{ color: "black" }}>
                    {title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo visible sur petits écrans */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}
            component={Link}
            href="/"
          >
            <Image
              src="/logotransparent.png"
              alt="Logo"
              width={150}
              height={150}
              style={{ height: "40px", width: "auto" }}
            />
          </Box>

          {/* Liens de navigation pour grands écrans */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ title, path }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
                component={Link}
                href={path}
              >
                {title}
              </Button>
            ))}
          </Box>

          {/* Section utilisateur ou avatar (optionnel) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/avatar.jpg" /> {/* Ajoutez votre image d'avatar */}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
