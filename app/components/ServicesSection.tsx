'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Full Stack Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">Full Stack Development</h3>
						<p className="text-gray-400 mb-6">
							End-to-end web application development using Laravel, React, and modern technologies. From database design to deployment.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• Laravel & PHP Development</li>
							<li>• React.js Frontend</li>
							<li>• RESTful API Design</li>
							<li>• Database Architecture</li>
						</ul>
					</motion.div>

					{/* System Architecture */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">System Architecture</h3>
						<p className="text-gray-400 mb-6">
							Designing scalable, high-performance systems with microservices, multi-tenancy, and cloud-native architectures.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• Microservices Design</li>
							<li>• Multi-tenant Architecture</li>
							<li>• Cloud Deployment</li>
							<li>• Performance Optimization</li>
						</ul>
					</motion.div>

					{/* API Development */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">API Development</h3>
						<p className="text-gray-400 mb-6">
							Building robust, secure APIs with comprehensive documentation, authentication, and third-party integrations.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• RESTful APIs</li>
							<li>• GraphQL Development</li>
							<li>• API Documentation</li>
							<li>• Third-party Integrations</li>
						</ul>
					</motion.div>

					{/* Team Leadership */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">Team Leadership</h3>
						<p className="text-gray-400 mb-6">
							Leading development teams, mentoring junior developers, and ensuring project delivery with best practices.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• Technical Leadership</li>
							<li>• Code Reviews</li>
							<li>• Mentoring</li>
							<li>• Project Management</li>
						</ul>
					</motion.div>

					{/* DevOps & Deployment */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">DevOps & Deployment</h3>
						<p className="text-gray-400 mb-6">
							Setting up CI/CD pipelines, containerization with Docker, and managing cloud infrastructure for scalable deployments.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• Docker & Containerization</li>
							<li>• CI/CD Pipelines</li>
							<li>• Cloud Deployment</li>
							<li>• Server Management</li>
						</ul>
					</motion.div>

					{/* Consulting */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors">
						<div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold mb-4">Technical Consulting</h3>
						<p className="text-gray-400 mb-6">
							Providing expert advice on technology choices, system architecture, and development best practices for your projects.
						</p>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>• Technology Strategy</li>
							<li>• Architecture Review</li>
							<li>• Performance Audits</li>
							<li>• Security Assessment</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 