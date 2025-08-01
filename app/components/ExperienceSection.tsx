'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="space-y-8">
					{/* Technical Lead - Foxtek Systems */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
						<div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-purple-500 border border-gray-800">
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-2xl font-bold text-white">Technical Lead</h3>
								<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Sep 2022 – Present</span>
							</div>
							<div className="text-lg text-purple-400 mb-4">Foxtek Systems</div>
							<p className="text-gray-300 leading-relaxed mb-4">
								Led a team of 5 developers in building scalable Laravel applications with multi-tenancy architecture. Implemented complex integrations with QuickBooks and Microsoft Dynamics, developed real-time features using WebSockets, and optimized database performance for high-traffic applications.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">WebSockets</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">QuickBooks API</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">MySQL</span>
							</div>
						</div>
					</motion.div>

					{/* Software Engineer - Devsinc */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
						<div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-blue-500 border border-gray-800">
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-2xl font-bold text-white">Software Engineer</h3>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Dec 2021 – Sep 2022</span>
							</div>
							<div className="text-lg text-blue-400 mb-4">Devsinc</div>
							<p className="text-gray-300 leading-relaxed mb-4">
								Developed full-stack features using Laravel and React. Implemented secure REST APIs, improved application performance through optimization, and integrated Stripe payment gateway for seamless transactions.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">REST APIs</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">Stripe</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">Performance Optimization</span>
							</div>
						</div>
					</motion.div>

					{/* Software Engineer - Digimark Developers */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
						<div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-green-500 border border-gray-800">
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-2xl font-bold text-white">Software Engineer</h3>
								<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mar 2021 – Dec 2021</span>
							</div>
							<div className="text-lg text-green-400 mb-4">Digimark Developers</div>
							<p className="text-gray-300 leading-relaxed mb-4">
								Worked on Chrome extensions, real-time Laravel applications, and scalable backend systems. Implemented WebSockets for real-time communication and developed automated cron jobs for system maintenance.
							</p>
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Chrome Extensions</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">WebSockets</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">Cron Jobs</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">Scalable Systems</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 