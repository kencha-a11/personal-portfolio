import React from 'react';

export default function ContactSection() {
    return (
        <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Get in touch for collaborations, inquiries, or project discussions.</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                                <i className="bi bi-geo-alt flex-shrink-0" />
                                <div>
                                    <h3>Address</h3>
                                    <p>P3 B8 L6 Ontario ST. Highview Hills Subd. Sampaloc, Apalit, Pampanga</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                                <i className="bi bi-telephone flex-shrink-0" />
                                <div>
                                    <h3>Call</h3>
                                    <p>(+63) 968-595-5585</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                                <i className="bi bi-envelope flex-shrink-0" />
                                <div>
                                    <h3>Email</h3>
                                    <p>aljonkenfernandez36@gmail.com</p>
                                </div>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d120.7525!3d15.153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396d648f46b2f2f%3A0xabcdef123456789!2sSampaloc%2C%20Apalit%2C%20Pampanga%2C%20Philippines!5e0!3m2!1sen!2sph!4v1697400000000!5m2!1sen!2sph"
                                frameBorder={0}
                                style={{ border: 0, width: "100%", height: 270 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">
                        <form
                            action="forms/contact.php"
                            method="post"
                            className="php-email-form"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                                    <input type="email" name="email" id="email-field" className="form-control" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                                    <input type="text" name="subject" id="subject-field" className="form-control" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Message</label>
                                    <textarea name="message" id="message-field" rows={10} className="form-control" required />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* End Contact Form */}
                </div>
            </div>
        </section>
    );
}
