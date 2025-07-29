"use client";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="min-h-screen bg-gradient-to-br from-bgDark via-zinc-900 to-bgDark pt-16 overflow-hidden relative">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
			<div
				className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigoDeep/5 rounded-full blur-3xl animate-pulse"
				style={{ animationDelay: "1s" }}
			></div>
			<div
				className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"
				style={{ animationDelay: "2s" }}
			></div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
					{/* Left Content */}
					<div
						className={`lg:w-1/2 space-y-8 transform transition-all duration-1000 ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
					>
						<div className="space-y-6">
							{/* Badge */}
							<div
								className={`inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 transform transition-all duration-1000 delay-100 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
							>
								<Sparkles size={16} className="text-primary" />
								<span className="text-primary text-sm font-medium">
									Now with 50+ animated icons
								</span>
							</div>

							<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
								<span className="bg-gradient-to-r from-primary via-indigoDeep to-accent bg-clip-text text-transparent">
									Bring Icons to Life
								</span>
								<br />
								<span className="text-white">
									with AnimateIcons
								</span>
							</h1>

							<p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
								A sleek React library for animated SVG icons
								that move with purpose. Transform static designs
								into engaging user experiences with smooth,
								performant animations.
							</p>
						</div>

						{/* CTA Buttons */}
						<div
							className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-200 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
						>
							<Button>
								<span>Get Started</span>
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform duration-200"
								/>
							</Button>

							<Button variant="outline">
								<Github size={20} />
								<span>GitHub</span>
							</Button>
						</div>

						{/* Stats */}
						<div
							className={`flex flex-col sm:flex-row gap-8 pt-8 transform transition-all duration-1000 delay-400 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
						>
							<div className="text-center sm:text-left">
								<div className="text-3xl font-bold text-primary">
									50+
								</div>
								<div className="text-zinc-400">
									Animated Icons
								</div>
							</div>
							<div className="text-center sm:text-left">
								<div className="text-3xl font-bold text-indigoDeep">
									2.5KB
								</div>
								<div className="text-zinc-400">Bundle Size</div>
							</div>
							<div className="text-center sm:text-left">
								<div className="text-3xl font-bold text-accent">
									10K+
								</div>
								<div className="text-zinc-400">Downloads</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
