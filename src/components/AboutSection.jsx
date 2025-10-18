import React from 'react'
import profilepicture from '../Assets/my-profile-pic1.jpg'

export default function AboutSection() {
    return (
        <section id="about" className="about section">
            {/* About Section */}
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>
                    Hi there! I'm a passionate UI/UX Designer and Web Developer. 
                    I love creating beautiful, functional, and user-friendly websites and applications. 
                    I have a strong foundation in both design principles and coding practices, 
                    allowing me to bridge the gap between aesthetics and functionality. 
                    My goal is to deliver exceptional digital experiences that not only look great but also provide seamless usability.
                </p>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img
                            src={profilepicture}
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-8 content">
                        <h2>UI/UX Designer &amp; Web Developer.</h2>
                        <p className="fst-italic py-3">
                            With a background in design and development, I bring a unique perspective to every project I undertake.
                            I am dedicated to staying updated with the latest industry trends and technologies to ensure that my work is always cutting-edge and effective.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>Birthday:</strong> <span>18 Nov 2004</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>Website:</strong> <span>www.example.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                                        <span>+63 968 595 5585</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                                        <span>Apalit Pampanga, Philippines</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                                        <span>20</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                                        <span>Undergraduate BSIS</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                                        <span>aljonkenfernandez36@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right" />{" "}
                                        <strong>Freelance:</strong> <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            I am always eager to take on new challenges and collaborate with others who share my passion for creating outstanding digital experiences.
                            Let's work together to bring your ideas to life!
                        </p>
                    </div>
                </div>
            </div>
            {/* /About Section */}
        </section>
    )
}
