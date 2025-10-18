import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilepicture from "../Assets/my-profile-pic2.jpeg";

export default function HeroSection() {
  const typedRef = useRef(null); // Reference for the <span>

  useEffect(() => {
    const typedElement = typedRef.current;

    if (typedElement) {
      const items = typedElement.getAttribute("data-typed-items");
      const strings = items ? items.split(",").map((s) => s.trim()) : [];

      // Initialize Typed.js
      const typed = new Typed(typedElement, {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
      });

      // Cleanup on unmount
      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      {/* Hero Section */}
      <img src={profilepicture} alt="" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <h2>Aljon Fernandez</h2>
        <p>
          I'm{" "}
          <span
            ref={typedRef}
            className="typed"
            data-typed-items="Web Developer, Data Analyst, Taekwondo Master, Designer"
          ></span>
        </p>
      </div>
    </section>
  );
}
