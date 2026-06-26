'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const techBadges = [
	{ label: 'PHP/Laravel', color: 'bg-violet-500/15 text-violet-400 border border-violet-500/30' },
	{ label: 'ReactJS/Next.js', color: 'bg-blue-500/15 text-blue-400 border border-blue-500/30' },
	{ label: 'Anthropic API', color: 'bg-orange-500/15 text-orange-400 border border-orange-500/30' },
	{ label: 'FastAPI/Python', color: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' },
	{ label: 'AI Agents', color: 'bg-pink-500/15 text-pink-400 border border-pink-500/30' },
	{ label: 'MySQL/Redis', color: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' },
];

type StackKey = 'frontend' | 'backend' | 'ai' | 'devops';

const stackConfig: Record<StackKey, { color: string; border: string; bg: string; dot: string }> = {
	frontend: { color: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-500/10', dot: 'bg-blue-500' },
	backend: { color: 'text-violet-400', border: 'border-violet-500/50', bg: 'bg-violet-500/10', dot: 'bg-violet-500' },
	ai: { color: 'text-orange-400', border: 'border-orange-500/50', bg: 'bg-orange-500/10', dot: 'bg-orange-500' },
	devops: { color: 'text-emerald-400', border: 'border-emerald-500/50', bg: 'bg-emerald-500/10', dot: 'bg-emerald-500' },
};

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<StackKey | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			{/* Background grid + gradient blobs */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					{/* Status badge */}
					<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm mb-6">
						<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
						Available for new opportunities
					</motion.div>

					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-orange-400">
							Kaleem Qasim
						</h1>
						<h2 className="text-xl md:text-3xl font-bold text-white">
							Technical Lead &nbsp;·&nbsp;
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">PHP</span>
							&nbsp;&amp;&nbsp;
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">AI Engineer</span>
						</h2>
						<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
							7+ years building scalable web applications and production-grade AI systems — autonomous agents, RAG pipelines, and intelligent SaaS products.
						</p>
						<p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
							Currently Technical Lead at{' '}
							<span className="text-violet-400 font-medium">Nextek Systems LTD</span> &mdash; previously at{' '}
							<span className="text-blue-400 font-medium">Devsinc</span> &amp;{' '}
							<span className="text-emerald-400 font-medium">Enigmatix LTD</span>
						</p>
					</div>

					{/* Tech badges */}
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						{techBadges.map((badge) => (
							<span key={badge.label} className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium ${badge.color}`}>
								{badge.label}
							</span>
						))}
					</div>

					{/* CTA buttons */}
					<div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10">
						<a
							href="#contact"
							className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
						>
							Get In Touch
						</a>
						<a
							href="#projects"
							className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full font-medium text-sm hover:bg-white/10 transition-colors"
						>
							View Projects
						</a>
					</div>
				</motion.div>

				{/* Interactive Stack Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4 md:p-8 shadow-xl shadow-black/30"
					>
						<p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-widest">Tech Stack</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
							{(
								[
									{ key: 'frontend' as StackKey, title: 'Frontend', items: ['React.js / Next.js', 'JavaScript / TypeScript', 'Tailwind CSS'] },
									{ key: 'backend' as StackKey, title: 'Backend', items: ['PHP / Laravel', 'RESTful APIs', 'WebSockets'] },
									{ key: 'ai' as StackKey, title: 'AI Engineering', items: ['Anthropic API', 'FastAPI / Python', 'RAG · AI Agents'] },
									{ key: 'devops' as StackKey, title: 'DevOps', items: ['Docker · Linux', 'Nginx / Apache', 'MySQL · Redis'] },
								] as const
							).map((stack) => {
								const cfg = stackConfig[stack.key];
								const isActive = selectedStack === stack.key;
								return (
									<div
										key={stack.key}
										className={`p-4 md:p-5 rounded-xl transition-all duration-200 border-2 cursor-default ${
											isActive ? `${cfg.bg} ${cfg.border}` : 'bg-gray-800/40 border-transparent hover:bg-gray-800/70'
										}`}
										onMouseEnter={() => setSelectedStack(stack.key)}
										onMouseLeave={() => setSelectedStack(null)}
									>
										<h3 className={`text-sm md:text-base font-semibold mb-3 ${cfg.color}`}>{stack.title}</h3>
										<ul className="space-y-1.5">
											{stack.items.map((item) => (
												<li key={item} className="flex items-center gap-2 text-xs text-gray-400">
													<div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
													{item}
												</li>
											))}
										</ul>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
