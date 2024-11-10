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
  const [carouselItems] = useState([
    { image: "/surf.jpg", title: "Perfect waves, peaceful mind", subtitle: "An unforgettable surf & yoga adventure" },
    { image: "/yoga.jpg", title: "Balance and Serenity", subtitle: "Connect with your inner self" },
    { image: "/surfer.jpg", title: "Sun, sea, and well-being", subtitle: "Experience peace and freedom" },
  ]);
  const testimonials = [
    { quote: "Un séjour exceptionnel qui a changé ma vie. Les cours de yoga et de surf sont parfaits !", name: "Marie Dupont" },
    { quote: "Le cadre est magnifique, l’équipe très accueillante. Un voyage à refaire sans hésiter !", name: "Ahmed Benyahia" },
    { quote: "Un lieu unique où l’on peut vraiment se ressourcer. Merci pour cette belle expérience !", name: "Sophie Martin" },
  ];

  const packages = ["Surf", "Yoga", "Surf & Yoga"];

  return (
    <main>
      <ParallaxProvider>
        <HeroSection carouselItems={carouselItems} />
        <AboutUs />        
        
        <Packages packages={packages} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </ParallaxProvider>
    </main>
  );
}
