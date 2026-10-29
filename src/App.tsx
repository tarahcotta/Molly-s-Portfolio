/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project, FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const allProjects = [...FEATURED_PROJECTS, ...ADDITIONAL_PROJECTS];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#111111] selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* Skip to Main Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#FFFFFF] focus:text-xs focus:font-mono focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] rounded-[4px]"
      >
        Skip to main content
      </a>

      {/* 3-Zone Navigation Header with Active Scrollspy and Reading Progress */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Hero Section with Molly's Portrait and Quantified Impact Strip */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Featured Work (Top 3 Projects Showcase + Interactive "Read More" for Projects 4, 5, 6) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Leadership Philosophy & Six Core Principles */}
        <PhilosophySection />

        {/* Career Chronology, Education, Clearances & Honors */}
        <ExperienceSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Contact & Collaboration Section */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Clean Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Case Study Deep-Dive Modal with Carousel Navigation */}
      <ProjectModal
        project={selectedProject}
        allProjects={allProjects}
        onNavigate={(project) => setSelectedProject(project)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
