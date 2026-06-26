'use client';

import { motion } from 'framer-motion';

const skillGroups = [
	{
		title: 'Backend',
		color: 'violet',
		barColor: 'bg-violet-500',
		bgColor: 'bg-violet-500/15',
		borderColor: 'border-violet-500/30',
		textColor: 'text-violet-400',
		icon: (
			<svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
			</svg>
		),
		skills: [
			{ name: 'PHP / Laravel', pct: 95 },
			{ name: 'REST APIs', pct: 92 },
			{ name: 'MySQL / Redis', pct: 90 },
			{ name: 'WebSockets', pct: 85 },
			{ name: 'Multi-tenant SaaS', pct: 88 },
		],
	},
	{
		title: 'Frontend',
		color: 'blue',
		barColor: 'bg-blue-500',
		bgColor: 'bg-blue-500/15',
		borderColor: 'border-blue-500/30',
		textColor: 'text-blue-400',
		icon: (
			<svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
		skills: [
			{ name: 'React.js / Next.js', pct: 90 },
			{ name: 'JavaScript / TS', pct: 92 },
			{ name: 'Tailwind CSS', pct: 88 },
			{ name: 'HTML / CSS', pct: 92 },
			{ name: 'Responsive Design', pct: 90 },
		],
	},
	{
		title: 'AI Engineering',
		color: 'orange',
		barColor: 'bg-orange-500',
		bgColor: 'bg-orange-500/15',
		borderColor: 'border-orange-500/30',
		textColor: 'text-orange-400',
		icon: (
			<svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
		),
		skills: [
			{ name: 'Anthropic API', pct: 92 },
			{ name: 'FastAPI / Python', pct: 88 },
			{ name: 'RAG Systems', pct: 85 },
			{ name: 'AI Agents', pct: 90 },
			{ name: 'Vector Search', pct: 83 },
		],
	},
	{
		title: 'DevOps',
		color: 'emerald',
		barColor: 'bg-emerald-500',
		bgColor: 'bg-emerald-500/15',
		borderColor: 'border-emerald-500/30',
		textColor: 'text-emerald-400',
		icon: (
			<svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
		skills: [
			{ name: 'Docker / Linux', pct: 85 },
			{ name: 'Nginx / Apache', pct: 82 },
			{ name: 'Git / CI-CD', pct: 88 },
			{ name: 'VPS Deployment', pct: 85 },
			{ name: 'Supabase', pct: 80 },
		],
	},
];

const additionalSkills = [
	'Microservices', 'Multi-tenancy', 'Performance Optimization', 'RBAC / Security',
	'Agile / Scrum', 'Team Leadership', 'Code Review', 'Tool Use / Function Calling',
	'API Design', 'Database Design', 'System Architecture', 'Chrome Extensions',
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<span className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
						Expertise
					</span>
					<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Technical Skills</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skillGroups.map((group, idx) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:-translate-y-1 transition-all duration-200 group"
						>
							<div className="flex flex-col items-center text-center mb-6">
								<div className={`w-14 h-14 ${group.bgColor} border ${group.borderColor} rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
									{group.icon}
								</div>
								<h3 className={`text-lg font-semibold ${group.textColor}`}>{group.title}</h3>
							</div>
							<div className="space-y-3.5">
								{group.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between items-center mb-1">
											<span className="text-xs text-gray-300">{skill.name}</span>
											<span className={`text-xs font-medium ${group.textColor}`}>{skill.pct}%</span>
										</div>
										<div className="w-full bg-gray-700/60 rounded-full h-1.5">
											<div
												className={`${group.barColor} h-1.5 rounded-full transition-all duration-700`}
												style={{ width: `${skill.pct}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12">
					<h3 className="text-lg font-semibold text-center text-gray-400 mb-6">More Competencies</h3>
					<div className="flex flex-wrap justify-center gap-3">
						{additionalSkills.map((skill) => (
							<span
								key={skill}
								className="px-4 py-1.5 bg-gray-900/60 border border-gray-700/80 rounded-full text-sm text-gray-300 hover:border-gray-600 hover:text-white transition-colors"
							>
								{skill}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
