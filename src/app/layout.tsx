import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AnimateIcons – Modern Animated React Icon Library",
	description:
		"Seamless, animated icons for React—make your interface stand out with beautifully smooth motion and easy customization. Built to help you create engaging experiences without the hassle.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-site-verification"
					content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""}
				/>
			</head>
			<body
				className={`${geistMono.variable} ${geistSans.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
