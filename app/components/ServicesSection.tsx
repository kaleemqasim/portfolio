'use client';

import { motion } from 'framer-motion';

const services = [
	{
		title: 'AI Engineering',
		description: 'Building production-grade AI systems — autonomous agents, RAG pipelines, and intelligent chatbots powered by the Anthropic API and FastAPI.',
		gradient: 'from-orange-500 to-pink-500',
		hoverBorder: 'hover:border-orange-500/50',
		items: ['Autonomous AI Agents', 'RAG Pipelines', 'Anthropic / Claude API', 'Tool Use & Function Calling'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
		),
	},
	{
		title: 'Full Stack Development',
		description: 'End-to-end web application development using Laravel, React/Next.js, and modern technologies — from database design to deployment.',
		gradient: 'from-violet-500 to-blue-500',
		hoverBorder: 'hover:border-violet-500/50',
		items: ['Laravel & PHP Development', 'React.js / Next.js', 'RESTful API Design', 'Database Architecture'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>
		),
	},
	{
		title: 'System Architecture',
		description: 'Designing scalable, high-performance systems with multi-tenancy, microservices, and cloud-native architectures that support thousands of users.',
		gradient: 'from-blue-500 to-cyan-500',
		hoverBorder: 'hover:border-blue-500/50',
		items: ['Multi-tenant SaaS Design', 'Microservices Architecture', 'Cloud Deployment', 'Performance Optimization'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
			</svg>
		),
	},
	{
		title: 'API Development',
		description: 'Building robust, secure APIs with comprehensive documentation, authentication, and third-party integrations at scale.',
		gradient: 'from-emerald-500 to-teal-500',
		hoverBorder: 'hover:border-emerald-500/50',
		items: ['RESTful APIs', 'OAuth 2.0 / RBAC', 'API Documentation', 'Third-party Integrations'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
			</svg>
		),
	},
	{
		title: 'Team Leadership',
		description: 'Leading development teams, mentoring engineers, and ensuring project delivery with clean code standards and best practices.',
		gradient: 'from-orange-500 to-amber-500',
		hoverBorder: 'hover:border-orange-500/50',
		items: ['Technical Leadership', 'Code Reviews', 'Engineer Mentoring', 'Agile Project Management'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
		),
	},
	{
		title: 'DevOps & Deployment',
		description: 'Setting up CI/CD pipelines, containerization with Docker, and managing Linux server infrastructure for reliable, scalable deployments.',
		gradient: 'from-indigo-500 to-violet-500',
		hoverBorder: 'hover:border-indigo-500/50',
		items: ['Docker & Containerization', 'CI/CD Pipelines', 'Nginx / Apache', 'Linux Server Management'],
		icon: (
			<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
			</svg>
		),
	},
];

export default function ServicesSection() {
	return (
		<section id="services" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<span className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-4">
						What I Do
					</span>
					<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services I Offer</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.08 }}
							className={`bg-gray-900/50 p-7 rounded-xl border border-gray-800 ${service.hoverBorder} hover:-translate-y-1 transition-all duration-200`}
						>
							<div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
								{service.icon}
							</div>
							<h3 className="text-lg font-bold mb-3">{service.title}</h3>
							<p className="text-gray-400 text-sm mb-5 leading-relaxed">{service.description}</p>
							<ul className="space-y-2">
								{service.items.map((item) => (
									<li key={item} className="flex items-center gap-2 text-sm text-gray-400">
										<span className="w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
