'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Testimonial 1 */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
								JD
							</div>
							<div className="ml-4">
								<h4 className="text-white font-semibold">John Davis</h4>
								<p className="text-gray-400 text-sm">CTO, LinenTech.net</p>
							</div>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed">
							&ldquo;Kaleem&apos;s technical expertise and leadership skills were instrumental in scaling our laundry management platform to serve 200+ clients globally. His ability to architect complex systems and lead development teams is exceptional.&rdquo;
						</p>
						<div className="flex text-yellow-400 mt-4">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
					</motion.div>

					{/* Testimonial 2 */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
								SM
							</div>
							<div className="ml-4">
								<h4 className="text-white font-semibold">Sarah Mitchell</h4>
								<p className="text-gray-400 text-sm">Product Manager, MapleHR.io</p>
							</div>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed">
							&ldquo;Working with Kaleem on our HR platform was a game-changer. His understanding of multi-tenant architecture and ability to implement complex business logic made our product launch seamless and scalable.&rdquo;
						</p>
						<div className="flex text-yellow-400 mt-4">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
					</motion.div>

					{/* Testimonial 3 */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
								AR
							</div>
							<div className="ml-4">
								<h4 className="text-white font-semibold">Alex Rodriguez</h4>
								<p className="text-gray-400 text-sm">Founder, ProCopy.ai</p>
							</div>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed">
							&ldquo;Kaleem&apos;s expertise in AI integration and payment systems was crucial for our AI platform. He delivered a robust, scalable solution that handles thousands of users daily with excellent performance.&rdquo;
						</p>
						<div className="flex text-yellow-400 mt-4">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 