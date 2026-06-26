'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<span className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
						Portfolio
					</span>
					<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Featured Projects</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="space-y-12">
					{/* LinenTech.net */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
						<div className="p-6 md:p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-5">
									<div>
										<div className="flex items-center gap-3 mb-3">
											<h3 className="text-2xl font-bold">LinenTech.net</h3>
											<span className="px-2.5 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-xs">SaaS</span>
										</div>
										<p className="text-gray-400 text-sm leading-relaxed">
											Multi-tenant laundry management SaaS platform serving 200+ clients globally. Features real-time tracking, automated billing, and seamless integrations with Datamars RFID systems and QuickBooks accounting.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-5">
										<div>
											<h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2.5">Frontend</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />React.js Dashboard</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Real-time Tracking</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Stripe Integration</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Multi-tenant UI</li>
											</ul>
										</div>
										<div>
											<h4 className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2.5">Backend</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Laravel Framework</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />WebSockets Real-time</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />QuickBooks API</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Datamars RFID</li>
											</ul>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{['Laravel', 'React.js', 'WebSockets', 'MySQL', 'Redis', 'Stripe', 'QuickBooks API', 'RFID'].map((t) => (
											<span key={t} className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300">{t}</span>
										))}
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-5">
									<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="360" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="44" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">React.js Frontend (Multi-tenant)</text>
											</g>
											<g>
												<rect x="20" y="75" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<rect x="210" y="75" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<text x="105" y="99" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Laravel API</text>
												<text x="295" y="99" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">WebSocket Server</text>
											</g>
											<g>
												<rect x="20" y="130" width="170" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<rect x="210" y="130" width="170" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<text x="105" y="150" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">QuickBooks API</text>
												<text x="295" y="150" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">Datamars RFID</text>
											</g>
											<g>
												<rect x="20" y="177" width="170" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="177" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<text x="105" y="201" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">MySQL Database</text>
												<text x="295" y="201" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Redis Cache</text>
											</g>
											<g>
												<rect x="20" y="232" width="360" height="30" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="200" y="252" textAnchor="middle" className="fill-orange-300 text-[11px]" fontSize="11">Stripe Payment Gateway</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1" strokeDasharray="3,2">
												<line x1="200" y1="58" x2="200" y2="75" />
												<line x1="105" y1="113" x2="105" y2="130" />
												<line x1="295" y1="113" x2="295" y2="130" />
												<line x1="105" y1="160" x2="105" y2="177" />
												<line x1="295" y1="160" x2="295" y2="177" />
												<line x1="200" y1="215" x2="200" y2="232" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Prioflow.ai */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-colors relative">
						{/* AI badge ribbon */}
						<div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
							<span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
							<span className="text-orange-400 text-xs font-medium">AI-Powered</span>
						</div>
						<div className="p-6 md:p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-5">
									<div>
										<div className="flex items-center gap-3 mb-3">
											<h3 className="text-2xl font-bold">Prioflow.ai</h3>
											<span className="px-2.5 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs">AI SaaS</span>
										</div>
										<p className="text-gray-400 text-sm leading-relaxed">
											AI-based hiring management SaaS that transforms the recruitment workflow. Autonomous AI agents conduct candidate screenings, generate objective scores, and surface the best-fit candidates — removing manual overhead from hiring decisions.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-5">
										<div>
											<h4 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2.5">AI Features</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" />Autonomous Screening Agents</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" />AI Candidate Scoring</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" />Best-fit Recommendations</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full" />Full Hiring Workflows</li>
											</ul>
										</div>
										<div>
											<h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2.5">Tech Stack</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />React.js Frontend</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Supabase (DB + Auth)</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Anthropic API (Claude)</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />FastAPI Backend</li>
											</ul>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{['React.js', 'Supabase', 'Anthropic API', 'FastAPI', 'AI Agents', 'Tool Use', 'Vector Search', 'RAG'].map((t) => (
											<span key={t} className="px-3 py-1 bg-orange-500/5 border border-orange-500/20 rounded-full text-xs text-orange-300">{t}</span>
										))}
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-5">
									<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">AI System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="15" width="360" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="39" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">React.js Hiring Dashboard</text>
											</g>
											<g>
												<rect x="20" y="70" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<rect x="210" y="70" width="170" height="38" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="105" y="94" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">FastAPI Backend</text>
												<text x="295" y="94" textAnchor="middle" className="fill-orange-300 text-[11px]" fontSize="11">AI Agent Orchestrator</text>
											</g>
											<g>
												<rect x="20" y="125" width="110" height="30" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<rect x="145" y="125" width="110" height="30" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<rect x="270" y="125" width="110" height="30" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="75" y="145" textAnchor="middle" className="fill-orange-300 text-[9.5px]" fontSize="9.5">Screening Agent</text>
												<text x="200" y="145" textAnchor="middle" className="fill-orange-300 text-[9.5px]" fontSize="9.5">Scoring Engine</text>
												<text x="325" y="145" textAnchor="middle" className="fill-orange-300 text-[9.5px]" fontSize="9.5">Rec. Agent</text>
											</g>
											<g>
												<rect x="20" y="172" width="170" height="30" rx="6" className="fill-pink-500/20 stroke-pink-500" strokeWidth="1" />
												<rect x="210" y="172" width="170" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<text x="105" y="192" textAnchor="middle" className="fill-pink-300 text-[10px]" fontSize="10">Anthropic API (Claude)</text>
												<text x="295" y="192" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">Vector / RAG Search</text>
											</g>
											<g>
												<rect x="20" y="220" width="360" height="38" rx="6" className="fill-cyan-500/20 stroke-cyan-500" strokeWidth="1" />
												<text x="200" y="244" textAnchor="middle" className="fill-cyan-300 text-[11px]" fontSize="11">Supabase (PostgreSQL + Auth + Storage)</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1" strokeDasharray="3,2">
												<line x1="200" y1="53" x2="200" y2="70" />
												<line x1="105" y1="108" x2="75" y2="125" />
												<line x1="200" y1="108" x2="200" y2="125" />
												<line x1="295" y1="108" x2="325" y2="125" />
												<line x1="75" y1="155" x2="105" y2="172" />
												<line x1="200" y1="155" x2="200" y2="172" />
												<line x1="325" y1="155" x2="295" y2="172" />
												<line x1="200" y1="202" x2="200" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* MapleHR.io */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
						<div className="p-6 md:p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-5">
									<div>
										<div className="flex items-center gap-3 mb-3">
											<h3 className="text-2xl font-bold">MapleHR.io</h3>
											<span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs">SaaS</span>
										</div>
										<p className="text-gray-400 text-sm leading-relaxed">
											Comprehensive HR management system with modules for project management, attendance tracking, expense claims, and inventory management. Built with multi-tenant architecture and subscription-based feature access.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-5">
										<div>
											<h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2.5">HR Modules</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Project Management</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Attendance Tracking</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Expense Management</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full" />Inventory Control</li>
											</ul>
										</div>
										<div>
											<h4 className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2.5">Backend</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Laravel Multi-tenant</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />RESTful APIs</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Subscription System</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />RBAC</li>
											</ul>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{['Laravel', 'React.js', 'MySQL', 'REST APIs', 'Multi-tenant', 'Stripe', 'RBAC'].map((t) => (
											<span key={t} className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300">{t}</span>
										))}
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-5">
									<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">HR System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="360" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="44" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">React.js HR Dashboard</text>
											</g>
											<g>
												<rect x="20" y="75" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<rect x="210" y="75" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<text x="105" y="99" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Laravel API</text>
												<text x="295" y="99" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Multi-tenant Service</text>
											</g>
											<g>
												<rect x="20" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<rect x="145" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<rect x="270" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<text x="75" y="150" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">Project Mgmt</text>
												<text x="200" y="150" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">Attendance</text>
												<text x="325" y="150" textAnchor="middle" className="fill-emerald-300 text-[10px]" fontSize="10">Expenses</text>
											</g>
											<g>
												<rect x="20" y="177" width="170" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="177" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<text x="105" y="201" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">MySQL Database</text>
												<text x="295" y="201" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Subscription DB</text>
											</g>
											<g>
												<rect x="20" y="232" width="360" height="30" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="200" y="252" textAnchor="middle" className="fill-orange-300 text-[11px]" fontSize="11">Stripe Payment System</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1" strokeDasharray="3,2">
												<line x1="200" y1="58" x2="200" y2="75" />
												<line x1="105" y1="113" x2="105" y2="130" />
												<line x1="295" y1="113" x2="295" y2="130" />
												<line x1="75" y1="160" x2="75" y2="177" />
												<line x1="200" y1="160" x2="200" y2="177" />
												<line x1="325" y1="160" x2="325" y2="177" />
												<line x1="200" y1="215" x2="200" y2="232" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* ProCopy.ai */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
						<div className="p-6 md:p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-5">
									<div>
										<div className="flex items-center gap-3 mb-3">
											<h3 className="text-2xl font-bold">ProCopy.ai</h3>
											<span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs">AI Tool</span>
										</div>
										<p className="text-gray-400 text-sm leading-relaxed">
											AI-powered productivity platform offering content generation, PDF writing, plagiarism checking, and image generation. Integrated with OpenAI APIs and monetized through Stripe and Paddle payment gateways.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-5">
										<div>
											<h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">AI Features</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" />Content Generation</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" />PDF Writing Tools</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" />Plagiarism Checking</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full" />Image Generation</li>
											</ul>
										</div>
										<div>
											<h4 className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2.5">Backend</h4>
											<ul className="space-y-1.5 text-sm text-gray-400">
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Laravel Framework</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />OpenAI API</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />Stripe + Paddle</li>
												<li className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full" />User Management</li>
											</ul>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{['Laravel', 'OpenAI API', 'React.js', 'Stripe', 'Paddle', 'MySQL', 'AI Content'].map((t) => (
											<span key={t} className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300">{t}</span>
										))}
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-5">
									<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">AI System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="360" height="38" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="44" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">React.js AI Productivity Platform</text>
											</g>
											<g>
												<rect x="20" y="75" width="170" height="38" rx="6" className="fill-violet-500/20 stroke-violet-500" strokeWidth="1" />
												<rect x="210" y="75" width="170" height="38" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<text x="105" y="99" textAnchor="middle" className="fill-violet-300 text-[11px]" fontSize="11">Laravel API</text>
												<text x="295" y="99" textAnchor="middle" className="fill-emerald-300 text-[11px]" fontSize="11">OpenAI Integration</text>
											</g>
											<g>
												<rect x="20" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<rect x="145" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<rect x="270" y="130" width="110" height="30" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1" />
												<text x="75" y="150" textAnchor="middle" className="fill-emerald-300 text-[9.5px]" fontSize="9.5">Content Gen</text>
												<text x="200" y="150" textAnchor="middle" className="fill-emerald-300 text-[9.5px]" fontSize="9.5">PDF Writing</text>
												<text x="325" y="150" textAnchor="middle" className="fill-emerald-300 text-[9.5px]" fontSize="9.5">Image Gen</text>
											</g>
											<g>
												<rect x="20" y="177" width="170" height="38" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<rect x="210" y="177" width="170" height="38" rx="6" className="fill-orange-500/20 stroke-orange-500" strokeWidth="1" />
												<text x="105" y="201" textAnchor="middle" className="fill-orange-300 text-[11px]" fontSize="11">Stripe Payments</text>
												<text x="295" y="201" textAnchor="middle" className="fill-orange-300 text-[11px]" fontSize="11">Paddle Payments</text>
											</g>
											<g>
												<rect x="20" y="232" width="360" height="30" rx="6" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="252" textAnchor="middle" className="fill-blue-300 text-[11px]" fontSize="11">MySQL Database</text>
											</g>
											<g className="stroke-gray-600" strokeWidth="1" strokeDasharray="3,2">
												<line x1="200" y1="58" x2="200" y2="75" />
												<line x1="105" y1="113" x2="105" y2="130" />
												<line x1="295" y1="113" x2="295" y2="130" />
												<line x1="75" y1="160" x2="75" y2="177" />
												<line x1="200" y1="160" x2="200" y2="177" />
												<line x1="325" y1="160" x2="325" y2="177" />
												<line x1="200" y1="215" x2="200" y2="232" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
