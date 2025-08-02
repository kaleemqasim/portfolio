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
								<div>
									<h3 className="text-2xl font-bold text-white">Technical Lead</h3>
									<div className="text-lg text-purple-400 mb-2">Foxtek Systems</div>
								</div>
								<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Sep 2022 – Present</span>
							</div>
							
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Led a team of 5 developers in building scalable Laravel applications</li>
										<li>• Implemented complex integrations with QuickBooks and Microsoft Dynamics</li>
										<li>• Developed real-time features using WebSockets for live tracking</li>
										<li>• Optimized database performance for high-traffic applications</li>
										<li>• Conducted code reviews and mentored junior developers</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Reduced API response time by 40% through optimization</li>
										<li>• Implemented multi-tenancy architecture serving 200+ clients</li>
										<li>• Successfully migrated legacy systems to modern Laravel stack</li>
										<li>• Established CI/CD pipelines reducing deployment time by 60%</li>
									</ul>
								</div>
							</div>
							
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">WebSockets</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">QuickBooks API</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">MySQL</span>
								<span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm">Team Leadership</span>
							</div>
						</div>
					</motion.div>

					{/* Software Engineer - Devsinc */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
						<div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-blue-500 border border-gray-800">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-2xl font-bold text-white">Software Engineer</h3>
									<div className="text-lg text-blue-400 mb-2">Devsinc</div>
								</div>
								<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Dec 2021 – Sep 2022</span>
							</div>
							
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Developed full-stack features using Laravel and React</li>
										<li>• Implemented secure REST APIs with comprehensive documentation</li>
										<li>• Improved application performance through optimization techniques</li>
										<li>• Integrated Stripe payment gateway for seamless transactions</li>
										<li>• Collaborated with cross-functional teams on project delivery</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Built 15+ RESTful APIs with 99.9% uptime</li>
										<li>• Improved page load speed by 35% through optimization</li>
										<li>• Implemented automated testing reducing bugs by 50%</li>
										<li>• Successfully delivered 8 major features on schedule</li>
									</ul>
								</div>
							</div>
							
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">REST APIs</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">Stripe</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">Performance Optimization</span>
								<span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm">Testing</span>
							</div>
						</div>
					</motion.div>

					{/* Software Engineer - Digimark Developers */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
						<div className="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-green-500 border border-gray-800">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-2xl font-bold text-white">Software Engineer</h3>
									<div className="text-lg text-green-400 mb-2">Digimark Developers</div>
								</div>
								<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Mar 2021 – Dec 2021</span>
							</div>
							
							<div className="grid md:grid-cols-2 gap-6 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Developed Chrome extensions for browser automation</li>
										<li>• Built real-time Laravel applications with WebSocket integration</li>
										<li>• Created scalable backend systems with microservices architecture</li>
										<li>• Implemented automated cron jobs for system maintenance</li>
										<li>• Worked on multiple client projects simultaneously</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
									<ul className="space-y-2 text-gray-300 text-sm">
										<li>• Developed 3 Chrome extensions with 10K+ downloads</li>
										<li>• Built real-time tracking system handling 1000+ concurrent users</li>
										<li>• Implemented microservices reducing system downtime by 80%</li>
										<li>• Automated 15+ manual processes saving 20 hours/week</li>
									</ul>
								</div>
							</div>
							
							<div className="flex flex-wrap gap-2">
								<span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">Chrome Extensions</span>
								<span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Laravel</span>
								<span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">WebSockets</span>
								<span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">Cron Jobs</span>
								<span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full text-sm">Scalable Systems</span>
								<span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm">Microservices</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 