'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
						<p className="text-lg text-gray-300 leading-relaxed">
							Full Stack PHP Developer with 7+ years of experience in developing scalable web applications, optimizing system performance, and leading cross-functional teams. Passionate about clean code, Laravel, API development, and building modern digital products.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed">
							I specialize in creating robust, scalable applications that solve real-world problems. From concept to deployment, I ensure every project meets the highest standards of quality and performance.
						</p>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
						<div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
							<div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
							<div className="text-gray-400">Years Experience</div>
						</div>
						<div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
							<div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
							<div className="text-gray-400">Projects Completed</div>
						</div>
						<div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
							<div className="text-3xl font-bold text-green-600 mb-2">15+</div>
							<div className="text-gray-400">Technologies</div>
						</div>
						<div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
							<div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
							<div className="text-gray-400">Team Lead</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 