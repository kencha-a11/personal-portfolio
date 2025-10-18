import React, { useEffect } from "react";

export default function SkillsSection() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const animateProgressBars = () => {
      progressBars.forEach((bar) => {
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = `${value}%`;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    const section = document.querySelector("#skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section py-5 bg-light">
      <div className="container text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold text-dark mb-3">Technical Skills</h2>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "720px" }}>
          A showcase of my technical expertise and the tools I use to craft scalable,
          efficient, and visually engaging web applications.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-6">
            <SkillProgress name="HTML" value={100} />
            <SkillProgress name="CSS" value={90} />
            <SkillProgress name="JavaScript" value={85} />
            <SkillProgress name="React" value={80} />
          </div>
          <div className="col-lg-6">
            <SkillProgress name="PHP" value={85} />
            <SkillProgress name="Laravel" value={80} />
            <SkillProgress name="C#" value={75} />
            <SkillProgress name="MySQL" value={70} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ name, value }) {
  return (
    <div className="progress mb-4">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="fw-semibold text-dark">{name}</span>
        <span className="fw-medium text-muted">{value}%</span>
      </div>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
