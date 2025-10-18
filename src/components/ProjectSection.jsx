import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Silver Note",
      videoUrl: "/personal-portfolio/public/v1.mp4", // Replace with your video URL
      description:
        "An note application mad in laravel where the mvc cycle is introduce and create read update delete operation are apply in this scenario.",
    },
    {
      title: "Ibong Adarna ang Paglalakbay",
      videoUrl: "/personal-portfolio/public/v2.mp4", // Replace with your video URL
      description:
        "A group application that helps students from grade 8 to have an interactive learning experience by turning ibong adarna into a web digital game format.",
    },
  ];

  return (
    <section id="projects" className="projects section py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Projects</h2>
          <p className="text-muted fs-5">
            Here are some of my recent projects with short explanations.
          </p>
        </div>

        <div className="row gy-5">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="project-item bg-white shadow-sm rounded-4 p-3 h-100"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="fw-semibold">{project.title}</h5>
                <p className="text-muted">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
