import React from 'react'

export default function StatsSection() {
    return (
        <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">

                    {/* Courses Completed */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-journal-bookmark" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={11}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Courses Completed</strong> <span>Knowledge gained</span>
                            </p>
                        </div>
                    </div>

                    {/* Projects Done */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-code-slash" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={5}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Projects</strong> <span>Hands-on work</span>
                            </p>
                        </div>
                    </div>

                    {/* Skills Learned */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-lightbulb" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={8}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Skills</strong> <span>New abilities</span>
                            </p>
                        </div>
                    </div>

                    {/* Clubs / Community */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-people" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={5}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Clubs & Community</strong> <span>Connections</span>
                            </p>
                        </div>
                    </div>

                    {/* Disciplined */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-check2-square" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={95}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Disciplined</strong> <span>Consistency in studies</span>
                            </p>
                        </div>
                    </div>

                    {/* Automation */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-gear" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={70}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Automation</strong> <span>Efficiency & workflows</span>
                            </p>
                        </div>
                    </div>

                    {/* Artificial Intelligence */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-cpu" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={40}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Artificial Intelligence</strong> <span>Learning models</span>
                            </p>
                        </div>
                    </div>

                    {/* Prompt Engineering */}
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-terminal" />
                            <span
                                data-purecounter-start={0}
                                data-purecounter-end={60}
                                data-purecounter-duration={1}
                                className="purecounter"
                            />
                            <p>
                                <strong>Prompt Engineering</strong> <span>Effective AI queries</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
