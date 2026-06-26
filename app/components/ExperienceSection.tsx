'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		role: 'Technical Lead (PHP)',
		type: 'Remote',
		company: 'Nextek Systems LTD',
		location: 'Atlanta, GA, United States',
		period: 'Oct 2022 – Present',
		accentColor: 'border-violet-500',
		badgeBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
		companyColor: 'text-violet-400',
		responsibilities: [
			'Architected and deployed autonomous AI agents and intelligent chatbots using the Anthropic API and FastAPI with dynamic tool use and function calling',
			'Designed and optimized a RAG system with vector-based semantic search, improving response accuracy and cutting query resolution time by 30%+',
			'Led full-stack development of scalable multi-tenant web applications using PHP, Laravel, MySQL, and React.js, serving 10,000+ active users',
			'Spearheaded database optimization reducing average query response times by 40% and maintaining 99.9% uptime',
			'Mentored a team of 5+ engineers, establishing code review standards and clean code practices',
		],
		achievements: [
			'70%+ of routine customer queries automated via AI agents with real-time product data',
			'40% reduction in API response times through performance optimization',
			'200+ client multi-tenant architecture with 99.9% uptime SLA',
			'25% reduction in production bugs after introducing code review standards',
		],
		tags: ['Laravel', 'React.js', 'Anthropic API', 'FastAPI', 'RAG', 'AI Agents', 'MySQL', 'Team Leadership'],
	},
	{
		role: 'Sr. Software Engineer',
		type: 'Remote',
		company: 'Devsinc',
		location: 'San Jose, CA, United States',
		period: 'Mar 2021 – Oct 2022',
		accentColor: 'border-blue-500',
		badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
		companyColor: 'text-blue-400',
		responsibilities: [
			'Engineered and maintained high-performance applications using PHP/Laravel and React.js/Next.js, serving 5,000+ daily active users with 99.5% uptime',
			'Designed secure RESTful APIs with robust authentication, authorization, and RBAC, supporting 15+ integrated client modules',
			'Optimized database performance through advanced indexing, query optimization, and caching, reducing page load times by 35%',
			'Integrated 10+ third-party services including payment gateways, social auth providers, and external APIs',
			'Developed real-time features using WebSockets and built Google Chrome extensions to enhance browser workflows',
		],
		achievements: [
			'15+ RESTful APIs with 99.9% uptime across all deployments',
			'35% improvement in page load speed through caching and query optimization',
			'50% bug reduction through automated testing implementation',
			'8 major features delivered on schedule across multiple client projects',
		],
		tags: ['Laravel', 'React.js', 'Next.js', 'REST APIs', 'RBAC', 'Stripe', 'WebSockets', 'Chrome Extensions'],
	},
	{
		role: 'Software Engineer',
		type: 'On-site',
		company: 'Enigmatix LTD',
		location: 'Bahawalpur, PB, Pakistan',
		period: 'Oct 2019 – Feb 2021',
		accentColor: 'border-emerald-500',
		badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
		companyColor: 'text-emerald-400',
		responsibilities: [
			'Developed user-focused web applications with modular, reusable Laravel components, cutting feature development time by 20%',
			'Designed and implemented efficient APIs, collaborating across frontend and backend teams to ensure seamless data integration',
			'Refactored legacy codebases to eliminate technical debt, improving application performance by 25%',
			'Assisted in building Python/Django web applications, adhering to strict technical requirements and project specifications',
			'Enforced clean code standards (SOLID, DRY, MVC) and improved internal development workflows',
		],
		achievements: [
			'20% faster feature development via reusable Laravel component library',
			'25% performance improvement through legacy system refactoring',
			'Laid groundwork for horizontal scalability in core platform',
			'Improved team processes with clean code standards and code review practices',
		],
		tags: ['Laravel', 'PHP', 'Python', 'Django', 'REST APIs', 'MySQL', 'SOLID', 'Performance'],
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<span className="inline-block px-4 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm mb-4">
						Work History
					</span>
					<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Professional Experience</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((exp, idx) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
						>
							<div className={`bg-gray-900/50 p-6 md:p-8 rounded-2xl border-l-4 ${exp.accentColor} border border-gray-800 hover:border-gray-700 transition-colors`}>
								<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
									<div>
										<div className="flex items-center gap-2 flex-wrap mb-1">
											<h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
											<span className={`text-xs px-2 py-0.5 border rounded-full ${exp.badgeBg}`}>{exp.type}</span>
										</div>
										<div className={`text-base md:text-lg font-medium ${exp.companyColor}`}>{exp.company}</div>
										<div className="text-sm text-gray-500">{exp.location}</div>
									</div>
									<span className={`self-start text-sm px-3 py-1 border rounded-full whitespace-nowrap ${exp.badgeBg}`}>
										{exp.period}
									</span>
								</div>

								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Key Responsibilities</h4>
										<ul className="space-y-2 text-gray-400 text-sm">
											{exp.responsibilities.map((r, i) => (
												<li key={i} className="flex gap-2">
													<span className="text-gray-600 mt-0.5 flex-shrink-0">•</span>
													{r}
												</li>
											))}
										</ul>
									</div>
									<div>
										<h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Key Achievements</h4>
										<ul className="space-y-2 text-gray-400 text-sm">
											{exp.achievements.map((a, i) => (
												<li key={i} className="flex gap-2">
													<span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
													{a}
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="flex flex-wrap gap-2">
									{exp.tags.map((tag) => (
										<span key={tag} className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
