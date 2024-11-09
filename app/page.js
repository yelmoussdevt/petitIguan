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
    // { image: "/surf.jpg", title: "Vagues parfaites, esprit tranquille", subtitle: "Une aventure surf & yoga inoubliable" },
    { image: "/yoga.jpg", title: "Équilibre et Sérénité", subtitle: "Connectez-vous à votre moi intérieur" },
    { image: "/surfer.jpg", title: "Soleil, mer et bien-être", subtitle: "Vivez la paix et la liberté" },
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
