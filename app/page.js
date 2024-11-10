"use client";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutUs = dynamic(() => import("./components/AboutUs/AboutUs"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Packages = dynamic(() => import("./components/Packages"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  const videoSrc = "/V.mp4"; // Chemin de la vidéo
  const title = ["Perfect waves, peaceful mind", "Balance and Serenity", "Sun, sea, and well-being"]; // Titre à afficher
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