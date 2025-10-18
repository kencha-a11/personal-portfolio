import React from 'react';

export default function ResumeSection() {
    return (
        <section id="resume" className="resume section">
            {/* Resume Section */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>
                    A journey of growth and accomplishments in both design and development, blending creativity with technology to deliver meaningful digital experiences.
                </p>
                {/* ✅ Download Button */}
                <a
                    href={`${import.meta.env.BASE_URL}Student.pdf`}
                    download="Aljon_Ken_Fernandez_Resume.pdf"
                >
                    Download Portfolio (PDF)
                </a>

            </div>

            {/* End Section Title */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Aljon Ken Fernandez</h4>
                            <p>
                                <em>
                                    Data analyst and web developer passionate about turning ideas into practical solutions. Adept at collaboration, problem-solving, and creating digital experiences that have real impact.
                                </em>
                            </p>
                            <ul>
                                <li>P3 B8 L6 Ontario ST. Highview Hills Subd. Sampaloc, Apalit, Pampanga</li>
                                <li>(+63) 968-595-5585</li>
                                <li>aljonkenfernandez36@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Information and Communication Technology (ICT)</h4>
                            <h5>2019 - 2020</h5>
                            <p>
                                <em>La Verdad Christian College, Apalit, Pampanga</em>
                            </p>
                            <p>
                                Built a strong foundation in technology principles and digital tools.
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Science Technology Engineering Mathematics (STEM)</h4>
                            <h5>2021 - 2022</h5>
                            <p>
                                <em>La Verdad Christian College, Apalit, Pampanga</em>
                            </p>
                            <p>
                                Developed analytical and problem-solving skills through in-depth study of science, technology, and engineering principles.
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Science in Information Systems (BSIS)</h4>
                            <h5>2023 - Present</h5>
                            <p>
                                <em>La Verdad Christian College, Apalit, Pampanga</em>
                            </p>
                            <p>
                                Focused on applying IT solutions to optimize business operations and create innovative digital systems.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                        <h3 className="resume-title">Experience</h3>
                        <div className="resume-item">
                            <h4>IT Marketing Web Designer | Sakses</h4>
                            <h5>2024</h5>
                            <p>
                                <em>La Verdad Christian College (LVCC)</em>
                            </p>
                            <ul>
                                <li>Designed and implemented marketing materials including logos, brochures, and presentations for events and campaigns.</li>
                                <li>Managed multiple projects simultaneously under tight deadlines while maintaining high-quality output.</li>
                                <li>Led creative strategy and execution for visual communication materials.</li>
                                <li>Advised clients on optimal design solutions to enhance brand presence.</li>
                                <li>Developed a system to help small-scale entrepreneurs establish and manage their online presence effectively.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>E-Commerce Website | Rebook</h4>
                            <h5>2024</h5>
                            <p>
                                <em>LVCC</em>
                            </p>
                            <ul>
                                <li>Directed design, layout, and implementation of the website's frontend and graphic assets.</li>
                                <li>Supervised quality and accuracy of all visual elements.</li>
                                <li>Developed an online platform for school and office supplies, optimizing user experience and navigation.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>E-Commerce & Inventory System | DSC</h4>
                            <h5>2025 - Present</h5>
                            <p>
                                <em>LVCC</em>
                            </p>
                            <ul>
                                <li>Lead development and deployment of a web-based system to manage business transactions and inventory online.</li>
                                <li>Provide ongoing maintenance and feature updates to ensure system efficiency and reliability.</li>
                                <li>Consult with clients to deliver tailored web solutions that optimize their business processes.</li>
                                <li>Enhance online presence and operational workflow for clients through technology-driven solutions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Resume Section */}
        </section>
    );
}
