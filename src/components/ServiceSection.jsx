import React from 'react';

export default function ServiceSection() {
  const services = [
    { icon: 'bi bi-pencil-square', title: 'Designing', description: 'Crafting intuitive interfaces and visually appealing designs.' },
    { icon: 'bi bi-diagram-3', title: 'Managing', description: 'Coordinating projects efficiently.' },
    { icon: 'bi bi-bar-chart-line', title: 'Analyst', description: 'Providing actionable data insights.' },
    { icon: 'bi bi-check2-square', title: 'Testing', description: 'Ensuring software performs reliably.' },
    { icon: 'bi bi-graph-up-arrow', title: 'Statistics', description: 'Analyzing patterns and trends.' },
    { icon: 'bi bi-speedometer2', title: 'Optimizing', description: 'Improving workflows and performance.' },
  ];

  return (
    <section id="services" className="services section py-5">
      <div className="container section-title text-center" data-aos="fade-up">
        <h2 className="mb-3">Services</h2>
        <p className="text-muted">
          Explore the professional areas where I bring expertise and measurable impact.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="service-card p-4 h-100 shadow-sm rounded bg-white d-flex flex-column">
                <div className="icon mb-3 text-primary fs-2">
                  <i className={service.icon}></i>
                </div>
                <h4 className="title mb-2">{service.title}</h4>
                <p className="description text-muted flex-grow-1">{service.description}</p>
                <a href="service-details.html" className="mt-3 btn btn-outline-primary btn-sm align-self-start">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-up">
        <h3 className="mb-3 text-center">My Simple Vanilla Project</h3>
        <p className="text-center text-muted mb-4">
          Built using plain HTML, CSS, and JavaScript without frameworks. Leveraging AI for enhancements.
        </p>
        <div className="d-flex justify-content-center">
          <a href="https://prompt-engineer-lecture.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            View Project
          </a>
        </div>
      </div>

      <style>{`
        .service-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        .service-card .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #e7f1ff;
        }
      `}</style>
    </section>
  );
}
