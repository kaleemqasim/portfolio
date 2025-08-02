'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ExperienceSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ServicesSection />
			<ContactSection />
			<FooterSection />
		</main>
	);
}
