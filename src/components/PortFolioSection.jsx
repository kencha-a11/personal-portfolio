import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";

import "glightbox/dist/css/glightbox.min.css";

// Images
import img1 from "../assets/sakses1.png";
import img2 from "../assets/sakses2.png";
import img3 from "../assets/sakses3.png";
import img4 from "../assets/rebook1.png";
import img5 from "../assets/rebook2.png";
import img6 from "../assets/rebook3.png";
import img7 from "../assets/dsc1.png";
import img8 from "../assets/dsc2.png";
import img9 from "../assets/dsc3.png";
import img10 from "../assets/prompt1.png";
import img11 from "../assets/prompt2.png";
import img12 from "../assets/prompt3.png";
import img13 from "../assets/book1.png";
import img14 from "../assets/book2.png";
import img15 from "../assets/p1.png";
import img16 from "../assets/p2.png";
import img17 from "../assets/p3.png";
import img18 from "../assets/p4.png";

export default function PortfolioSection() {
  useEffect(() => {
    const grid = document.querySelector(".isotope-container");
    let iso;

    if (grid) {
      iso = new Isotope(grid, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      });
    }

    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((f) => f.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });

    const lightbox = GLightbox({ selector: ".glightbox" });

    return () => {
      filters.forEach((filter) => filter.removeEventListener("click", () => {}));
      if (iso) iso.destroy();
      lightbox.destroy();
    };
  }, []);

  const portfolioData = [
    { images: [img1, img2, img3], title: "Sakses", filter: "filter-app", category: "App" },
    { images: [img4, img5, img6], title: "Rebook", filter: "filter-app", category: "App" },
    { images: [img7, img8, img9], title: "DSC", filter: "filter-product", category: "Project" },
    { images: [img10, img11, img12], title: "Prompt", filter: "filter-product", category: "Project" },
    { images: [img15, img16, img17, img18], title: "Personal Project", filter: "filter-product", category: "Project" },
    { images: [img13, img14], title: "Book", filter: "filter-books", category: "Books" },
  ];

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          A curated collection of my projects and creations, from web
          applications to research work and books.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Project</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
            {portfolioData.map((item, idx) =>
              item.images.map((img, i) => (
                <div key={`${item.title}-${i}`} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                  <div className="portfolio-content h-100">
                    <img src={img} className="img-fluid" alt={`${item.title} ${i + 1}`} />
                    <div className="portfolio-info">
                      <h4>{item.title} {i + 1}</h4>
                      <p>{item.category}</p>
                      <a href={img} data-gallery={`portfolio-gallery-${item.filter}`} className="glightbox preview-link">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
