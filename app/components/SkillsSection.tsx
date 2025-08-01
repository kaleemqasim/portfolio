'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Backend Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Backend Development</h3>
						</div>
						<div className="space-y-3">
							<div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">PHP (Laravel)</div>
							<div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">RESTful APIs</div>
							<div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">WebSockets</div>
							<div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">MySQL</div>
							<div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">Redis</div>
						</div>
					</motion.div>

					{/* Frontend Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Frontend Development</h3>
						</div>
						<div className="space-y-3">
							<div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">HTML/CSS</div>
							<div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">JavaScript</div>
							<div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">ReactJS</div>
							<div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">Redux</div>
							<div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">Bootstrap</div>
						</div>
					</motion.div>

					{/* DevOps & Tools */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">DevOps & Tools</h3>
						</div>
						<div className="space-y-3">
							<div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">Docker</div>
							<div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">Git</div>
							<div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">VPS</div>
							<div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">Stripe</div>
							<div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">OpenAI</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 