/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from './data/portfolioData';
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

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
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

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
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
