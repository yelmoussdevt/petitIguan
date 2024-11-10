// pages/Home.js
"use client";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import Contact from "./components/Contact";

export default function Home() {
  const videoSrc = "/V(1).mp4"; // Chemin de la vidéo
  const title = ["Perfect waves, peaceful mind",  "Balance and Serenity",  "Sun, sea, and well-being"]; // Titre à afficher
  const subtitle = ["An unforgettable surf & yoga adventure", "Connect with your inner self", "Experience peace and freedom"]; // Sous-titre à afficher

  const testimonials = [
    { quote: "Un séjour exceptionnel qui a changé ma vie. Les cours de yoga et de surf sont parfaits !", name: "Marie Dupont" },
    { quote: "Le cadre est magnifique, l’équipe très accueillante. Un voyage à refaire sans hésiter !", name: "Ahmed Benyahia" },
    { quote: "Un lieu unique où l’on peut vraiment se ressourcer. Merci pour cette belle expérience !", name: "Sophie Martin" },
  ];

  const packages = ["Surf", "Yoga", "Surf & Yoga"];

  return (
    <main>
      <ParallaxProvider>
        <HeroSection videoSrc={videoSrc} title={title} subtitle={subtitle} />
        <AboutUs />        
        <Packages packages={packages} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </ParallaxProvider>
    </main>
  );
}