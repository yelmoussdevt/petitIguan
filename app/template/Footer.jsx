"use client";
import React from "react";
import { Container, Grid, Typography,  Box } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: "rgba(0,0,0,0.7)" }} className="text-white py-5">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                Established in 2013 and renowned for offering the best service
                possible, Surf Taghazout is a popular option for surfers from
                all over the World. We provide both budget and luxury
                accommodation. Our service remains stellar no matter your budget
                though! Our aim is to give you the best holiday ever and we
                guarantee the best value for money.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <ul className="list-none p-0">
                <li>
                  <Link href="/" color="inherit" underline="hover">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" color="inherit" underline="hover">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" color="inherit" underline="hover">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" color="inherit" underline="hover">
                    Contact
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram />
                </Link>
              </div>
            </Grid>
          </Grid>
          <div className="text-center mt-8">
            &copy; 2023 Company Name | All Rights Reserved
          </div>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
