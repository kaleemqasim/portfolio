import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kaleem Qasim - Full Stack PHP Developer',
	description:
		'Full Stack PHP Developer with 7+ years of experience in Laravel, ReactJS, VueJS, and modern web technologies. Specializing in scalable applications, API development, and real-time systems.',
	keywords: [
		'Full Stack Developer',
		'PHP Developer',
		'Laravel Developer',
		'ReactJS Developer',
		'VueJS Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'Laravel',
		'React',
		'Vue.js',
		'WebSockets',
		'API Development',
		'MySQL',
		'Redis',
		'Docker',
		'Git',
		'Stripe',
		'OpenAI',
		'Web Development',
		'Kaleem Qasim',
	],
	authors: [{ name: 'Kaleem Qasim' }],
	creator: 'Kaleem Qasim',
	openGraph: {
		title: 'Kaleem Qasim - Full Stack PHP Developer Portfolio',
		description:
			'Full Stack PHP Developer with 7+ years of experience in Laravel, ReactJS, VueJS, and modern web technologies. Explore my projects and technical expertise.',
		url: 'https://kaleemqasim.com',
		siteName: 'Kaleem Qasim - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kaleem Qasim - Full Stack PHP Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kaleem Qasim - Full Stack PHP Developer',
		description:
			'Full Stack PHP Developer with 7+ years of experience in Laravel, ReactJS, VueJS, and modern web technologies. Explore my projects and technical expertise.',
		creator: '@kaleemqasim',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
