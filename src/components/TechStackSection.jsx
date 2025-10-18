import React from "react";

export default function TechStackSection() {
  // Data from your GitHub portfolio
  const techStack = [
    { icon: "https://skillicons.dev/icons?i=html", title: "HTML5", desc: "Core markup language for web pages." },
    { icon: "https://skillicons.dev/icons?i=css", title: "CSS3", desc: "Styling web pages for modern responsive designs." },
    { icon: "https://skillicons.dev/icons?i=js", title: "JavaScript", desc: "Scripting language for interactive web applications." },
    { icon: "https://skillicons.dev/icons?i=react", title: "React", desc: "Frontend library for building dynamic user interfaces." },
    { icon: "https://skillicons.dev/icons?i=php", title: "PHP", desc: "Server-side language for backend development." },
    { icon: "https://skillicons.dev/icons?i=laravel", title: "Laravel", desc: "PHP framework for clean and scalable APIs." },
    { icon: "https://skillicons.dev/icons?i=python", title: "Python", desc: "Versatile language for scripting and automation." },
    { icon: "https://skillicons.dev/icons?i=java", title: "Java", desc: "Object-oriented language for web and desktop apps." },
    { icon: "https://skillicons.dev/icons?i=cpp", title: "C++", desc: "High-performance programming for algorithms and systems." },
    { icon: "https://skillicons.dev/icons?i=cs", title: "C#", desc: "Language for .NET applications and game development." },
    { icon: "https://skillicons.dev/icons?i=mysql", title: "MySQL", desc: "Relational database management for web applications." },
    { icon: "https://skillicons.dev/icons?i=figma", title: "Figma", desc: "Design tool for UI/UX and prototypes." },
    { icon: "https://skillicons.dev/icons?i=tailwind", title: "Tailwind CSS", desc: "Utility-first CSS framework for responsive design." },
    { icon: "https://skillicons.dev/icons?i=git", title: "Git", desc: "Version control system for tracking code changes." },
    { icon: "https://skillicons.dev/icons?i=github", title: "GitHub", desc: "Platform for hosting and collaborating on code projects." },
    { icon: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4", title: "Inertia.js", desc: "Framework for building modern single-page apps." },
    { icon: "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg", title: "XAMPP", desc: "Local development environment for PHP projects." },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/1200px-VB.NET_Logo.svg.png", title: "VB.NET", desc: "Microsoft language for desktop and web apps." },
    { icon: "https://n8n.io/favicon.ico", title: "n8n", desc: "Workflow automation and integration tool." },
  ];

  return (
    <section id="tech-stack" className="tech-stack section py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Tech Stack</h2>
          <p className="text-muted fs-5">
            A collection of technologies, frameworks, and tools I use to build efficient and impactful digital experiences.
          </p>
        </div>

        <div className="row gy-4">
          {techStack.map((tech, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="tech-item text-center p-4 bg-white shadow-sm rounded-4 h-100"
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
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="mb-3"
                  style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
                <h5 className="fw-semibold">{tech.title}</h5>
                <p className="text-muted small mb-0">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
