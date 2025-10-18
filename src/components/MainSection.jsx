import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import StatsSection from './StatsSection'
import SkillsSection from './SkillsSection'
import ResumeSection from './ResumeSection'
import PortFolioSection from './PortFolioSection'
import ServiceSection from './ServiceSection'
import ContactSection from './ContactSection'

import TechStackSection from './TechStackSection'
import ProjectsSection from './ProjectSection'

export default function MainSection() {
    
    return (
        <main className="main">
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <ProjectsSection /> 
            <TechStackSection />
            <SkillsSection />
            <ResumeSection />
            <PortFolioSection />
            <ServiceSection />
            <ContactSection />
        </main>

    )
}
