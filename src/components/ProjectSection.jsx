import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Silver Note",
      videoUrl: "/personal-portfolio/public/videos/silver-note.mp4",
      description:
        "A note-taking web application built with Laravel, demonstrating the MVC pattern and full CRUD functionality.",
    },
    {
      title: "Ibong Adarna: Ang Paglalakbay",
      videoUrl: "/personal-portfolio/public/videos/ibong-adarna.mp4",
      description:
        "An educational web game designed for Grade 8 students, transforming the classic Ibong Adarna story into an interactive digital experience.",
    },
  ];

  return (
    <section id="projects" className="projects section py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Projects</h2>
          <p className="text-muted fs-5">
            Explore some of my featured works demonstrating creativity and
            technical expertise.
          </p>
        </div>

        <div className="row gy-5">
          {projects.map((project, index) => (
            <div className="col-lg-6 col-md-12" key={index}>
              <div
                className="project-item bg-white shadow-sm rounded-4 p-3 h-100 d-flex flex-column"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div className="ratio ratio-16x9 mb-3">
                  <video
                    className="w-100 rounded"
                    controls
                    preload="metadata"
                    poster="/assets/img/portfolio/branding-1.jpg" // optional preview image
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fw-semibold">{project.title}</h5>
                  <p className="text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
