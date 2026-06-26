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
	title: 'Kaleem Qasim | Technical Lead & PHP/AI Engineer',
	description:
		'Technical Lead & PHP/AI Engineer with 7+ years of experience building scalable web applications and production-grade AI systems, including autonomous agents and RAG pipelines powered by the Anthropic API.',
	keywords: [
		'Technical Lead',
		'PHP Engineer',
		'AI Engineer',
		'Laravel Developer',
		'ReactJS Developer',
		'Next.js Developer',
		'Software Engineer',
		'Full Stack Developer',
		'Anthropic API',
		'AI Agents',
		'RAG Pipeline',
		'FastAPI',
		'Python',
		'Laravel',
		'React',
		'WebSockets',
		'API Development',
		'MySQL',
		'Redis',
		'Docker',
		'Supabase',
		'Web Development',
		'Kaleem Qasim',
	],
	authors: [{ name: 'Kaleem Qasim' }],
	creator: 'Kaleem Qasim',
	openGraph: {
		title: 'Kaleem Qasim | Technical Lead & PHP/AI Engineer Portfolio',
		description:
			'Technical Lead & PHP/AI Engineer with 7+ years of experience building scalable web applications and production-grade AI systems. Explore my projects and technical expertise.',
		url: 'https://kaleemqasim.com',
		siteName: 'Kaleem Qasim - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kaleem Qasim | Technical Lead & PHP/AI Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kaleem Qasim | Technical Lead & PHP/AI Engineer',
		description:
			'Technical Lead & PHP/AI Engineer with 7+ years of experience building scalable web applications and production-grade AI systems.',
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
