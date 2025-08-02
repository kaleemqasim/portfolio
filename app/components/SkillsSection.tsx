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

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Backend Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Backend</h3>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">PHP/Laravel</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">REST APIs</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">WebSockets</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">MySQL</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Redis</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Frontend Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Frontend</h3>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">React.js</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Vue.js</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">JavaScript</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">HTML/CSS</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Tailwind CSS</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* DevOps & Tools */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">DevOps</h3>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Docker</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Git</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">CI/CD</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">AWS/VPS</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Linux</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Integrations & APIs */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white">Integrations</h3>
						</div>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Stripe</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">OpenAI API</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">QuickBooks</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">Webhooks</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-300">OAuth 2.0</span>
								<div className="w-20 bg-gray-700 rounded-full h-2">
									<div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Additional Skills */}
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12">
					<h3 className="text-2xl font-bold text-center mb-8">Additional Skills</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{['Microservices', 'Multi-tenancy', 'Performance Optimization', 'Security Best Practices', 'Agile/Scrum', 'Team Leadership', 'Code Review', 'Technical Documentation', 'API Design', 'Database Design', 'System Architecture', 'Problem Solving'].map((skill, index) => (
							<div key={index} className="bg-gray-900/30 px-4 py-2 rounded-lg border border-gray-800 text-center">
								<span className="text-sm text-gray-300">{skill}</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
} 