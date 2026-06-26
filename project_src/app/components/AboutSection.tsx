'use client';

import { motion } from 'framer-motion';

const stats = [
	{ value: '7+', label: 'Years Experience', color: 'text-violet-400' },
	{ value: '50+', label: 'Projects Shipped', color: 'text-blue-400' },
	{ value: '10K+', label: 'Users Served', color: 'text-emerald-400' },
	{ value: '5+', label: 'Engineers Led', color: 'text-orange-400' },
];

export default function AboutSection() {
	return (
		<section id="about" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<span className="inline-block px-4 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm mb-4">
						About Me
					</span>
					<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Who I Am</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
						<p className="text-lg text-gray-300 leading-relaxed">
							Results-driven Full Stack PHP and AI Engineer with 7 years of experience building scalable web applications and
							production-grade AI systems — including autonomous agents and Retrieval-Augmented Generation (RAG) pipelines
							powered by the <span className="text-orange-400 font-medium">Anthropic API</span> and <span className="text-emerald-400 font-medium">FastAPI</span>.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed">
							Skilled in <span className="text-violet-400 font-medium">Laravel</span>, MySQL, and <span className="text-blue-400 font-medium">React/Next.js</span>,
							with a proven track record of optimizing system performance, leading engineering teams, and shipping AI-driven features
							that improve response accuracy and reduce operational overhead.
						</p>
						<p className="text-base text-gray-400 leading-relaxed">
							I combine deep backend expertise with hands-on AI orchestration to deliver intelligent, efficient, and maintainable
							software — from multi-tenant SaaS platforms to autonomous hiring agents.
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							{['BS Computer Science', 'KFUEIT 2019', 'Claude Code Certified', 'Lahore, Pakistan'].map((tag) => (
								<span key={tag} className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-400">
									{tag}
								</span>
							))}
						</div>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 hover:-translate-y-0.5 transition-all duration-200"
							>
								<div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
								<div className="text-gray-400 text-sm">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
