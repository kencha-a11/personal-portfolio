document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const headerToggleBtn = document.querySelector(".header-toggle");
  if (headerToggleBtn) {
    const headerToggle = () => {
      document.querySelector("#header").classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    };
    headerToggleBtn.addEventListener("click", headerToggle);
  }

  // Hide mobile nav on same-page/hash links
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".header-show")) {
        headerToggleBtn?.click();
      }
    });
  });

  // Preloader
  const preloader = document.querySelector("#preloader");
  if (preloader) window.addEventListener("load", () => preloader.remove());

  // Scroll top
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const toggleScrollTop = () =>
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");

    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }

  // AOS
  if (window.AOS) {
    window.addEventListener("load", () =>
      AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false })
    );
  }

  // Typed.js
  const selectTyped = document.querySelector(".typed");
  if (selectTyped && window.Typed) {
    const typed_strings = selectTyped.getAttribute("data-typed-items")?.split(",");
    new Typed(".typed", {
      strings: typed_strings || [],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // PureCounter
  if (window.PureCounter) new PureCounter();

  // Skills animation
  document.querySelectorAll(".skills-animation").forEach((item) => {
    if (window.Waypoint) {
      new Waypoint({
        element: item,
        offset: "80%",
        handler: () => {
          item.querySelectorAll(".progress .progress-bar").forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    }
  });

  // Glightbox
  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox" });
  }

  // Isotope layout
  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    const container = isotopeItem.querySelector(".isotope-container");
    if (!container || !window.imagesLoaded || !window.Isotope) return;

    imagesLoaded(container, () => {
      const initIsotope = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: isotopeItem.getAttribute("data-layout") || "masonry",
        filter: isotopeItem.getAttribute("data-default-filter") || "*",
        sortBy: isotopeItem.getAttribute("data-sort") || "original-order",
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filter) => {
        filter.addEventListener("click", () => {
          isotopeItem
            .querySelector(".isotope-filters .filter-active")
            ?.classList.remove("filter-active");
          filter.classList.add("filter-active");
          initIsotope.arrange({ filter: filter.getAttribute("data-filter") });
          if (typeof AOS !== "undefined") AOS.refresh();
        });
      });
    });
  });

  // Swiper sliders
  if (window.Swiper) {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      try {
        const config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        new Swiper(swiperElement, config);
      } catch (e) {
        console.warn("Swiper init failed", e);
      }
    });
  }

  // Hash scrolling
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
          window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: "smooth" });
        }, 100);
      }
    }
  });

  // Navmenu scrollspy
  const navmenulinks = document.querySelectorAll(".navmenu a");
  const navmenuScrollspy = () => {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
});
