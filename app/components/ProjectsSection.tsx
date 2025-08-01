'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Featured Projects
				</motion.h2>

				<div className="space-y-16">
					{/* LinenTech.net */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">LinenTech.net</h3>
										<p className="text-gray-400">
											Multi-tenant laundry management SaaS platform serving 200+ clients globally. Features real-time tracking, automated billing, and seamless integrations with Datamars RFID systems and QuickBooks accounting.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• React.js Dashboard</li>
												<li>• Real-time Tracking</li>
												<li>• Stripe Payment Integration</li>
												<li>• Multi-tenant Architecture</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Laravel Framework</li>
												<li>• WebSockets Real-time</li>
												<li>• QuickBooks API Integration</li>
												<li>• Datamars RFID Integration</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 200+ Global Clients</li>
											<li>• Real-time RFID Tracking</li>
											<li>• Automated Billing System</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													React.js Frontend (Multi-tenant)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Laravel API
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													WebSocket Server
												</text>
											</g>

											{/* Integration Layer */}
											<g>
												<rect x="20" y="140" width="170" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="140" width="170" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													QuickBooks API
												</text>
												<text x="295" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Datamars RFID
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MySQL Database
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Redis Cache
												</text>
											</g>

											{/* Payment Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Stripe Payment Gateway
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* MapleHR.io */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">MapleHR.io</h3>
										<p className="text-gray-400">
											Comprehensive HR management system with modules for project management, attendance tracking, expense claims, and inventory management. Built with multi-tenant architecture and subscription-based feature access.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• React.js Interface</li>
												<li>• Project Management</li>
												<li>• Attendance Tracking</li>
												<li>• Expense Management</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Laravel Multi-tenant</li>
												<li>• RESTful APIs</li>
												<li>• Subscription System</li>
												<li>• Inventory Management</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Multi-tenant Architecture</li>
											<li>• Subscription-based Access</li>
											<li>• Comprehensive HR Modules</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">HR System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													React.js HR Dashboard
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Laravel API
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Multi-tenant Service
												</text>
											</g>

											{/* Modules Layer */}
											<g>
												<rect x="20" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="145" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="270" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="75" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Project Mgmt
												</text>
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Attendance
												</text>
												<text x="325" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Expenses
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MySQL Database
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Subscription DB
												</text>
											</g>

											{/* Payment Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Stripe Payment System
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="75" y1="170" x2="75" y2="190" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="325" y1="170" x2="325" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* ProCopy.ai */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">ProCopy.ai</h3>
										<p className="text-gray-400">
											AI-powered productivity platform offering content generation, PDF writing, plagiarism checking, and image generation. Integrated with OpenAI APIs and monetized through Stripe and Paddle payment gateways.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">AI Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Content Generation</li>
												<li>• PDF Writing Tools</li>
												<li>• Plagiarism Checking</li>
												<li>• Image Generation</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Laravel Framework</li>
												<li>• OpenAI API Integration</li>
												<li>• Stripe & Paddle Payments</li>
												<li>• User Management</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">AI Integration</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• OpenAI GPT Integration</li>
											<li>• Multiple Payment Gateways</li>
											<li>• Content Processing Pipeline</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">AI System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													AI Productivity Platform
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Laravel API
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													OpenAI Integration
												</text>
											</g>

											{/* AI Services */}
											<g>
												<rect x="20" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="145" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="270" y="140" width="110" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="75" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Content Gen
												</text>
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													PDF Writing
												</text>
												<text x="325" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Image Gen
												</text>
											</g>

											{/* Payment Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Stripe Payments
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Paddle Payments
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MySQL Database
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="75" y1="170" x2="75" y2="190" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="325" y1="170" x2="325" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
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
