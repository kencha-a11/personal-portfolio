import { useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";

// ✅ Vendor CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "../public/assets/css/main.css";

// ✅ Vendor JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

function App() {
  useEffect(() => {
    // ✅ Wait for React to fully mount, then initialize
    const timer = setTimeout(() => {
      console.log("🔄 Initializing vendor libraries...");

      // Initialize AOS
      if (AOS) {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }

      // Initialize GLightbox
      const lightbox = GLightbox({
        selector: ".glightbox",
      });

      // Initialize Isotope
      const portfolioContainer = document.querySelector(".portfolio-container");
      if (portfolioContainer) {
        const iso = new Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });

        imagesLoaded(portfolioContainer, () => iso.layout());

        const filters = document.querySelectorAll("#portfolio-flters li");
        filters.forEach((filter) => {
          filter.addEventListener("click", (e) => {
            e.preventDefault();
            filters.forEach((el) => el.classList.remove("filter-active"));
            filter.classList.add("filter-active");

            const filterValue = filter.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
          });
        });
      }

      // Scroll-to-top
      const scrollTop = document.querySelector(".scroll-top");
      if (scrollTop) {
        scrollTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      // Hide preloader
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("preloader-hidden");
        setTimeout(() => preloader.remove(), 600);
      }
    }, 300); // short delay ensures DOM fully rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderSection />
      <MainSection />
      <FooterSection />

      {/* Scroll Top Button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Optional Preloader */}
      {/* <div id="preloader"></div> */}
    </>
  );
}

export default App;
