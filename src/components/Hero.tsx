"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CmdSection from "./CmdSection";

const HeroSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div>
			{/* Background Elements */}
			<div className="from-primary/10 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
			<div className="bg-primary/5 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"></div>
			<div
				className="bg-indigoDeep/5 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"
				style={{ animationDelay: "1s" }}
			></div>
			<div
				className="bg-accent/5 absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full blur-3xl"
				style={{ animationDelay: "2s" }}
			></div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mt-10 flex flex-col items-center justify-between md:mt-20 lg:flex-row">
					{/* Left Content */}
					<div
						className={`transform space-y-8 transition-all duration-1000 lg:w-1/2 ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
					>
						<div className="space-y-6">
							<div
								className={`bg-primary/10 border-primary/20 inline-flex transform items-center space-x-2 rounded-full border px-4 py-2 transition-all delay-100 duration-1000 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
							>
								<Sparkles size={14} className="text-primary" />
								<span className="text-primary text-xs font-medium">
									Now with 50+ animated icons
								</span>
							</div>

							<h1 className="text-4xl leading-tight font-bold">
								<span className="from-primary via-indigoDeep to-accent bg-gradient-to-r bg-clip-text text-transparent">
									Make Every <br className="hidden max-sm:block" /> Icon Move
								</span>
								<br />
								<span className="text-white">with AnimateIcons</span>
							</h1>

							<div className="max-w-2xl space-y-2 text-sm leading-relaxed text-zinc-300">
								<p>
									A sleek React library for animated SVG icons that move with
									purpose. Transform static designs into engaging user
									experiences with smooth, performant animations.
								</p>
								<p>
									built with{" "}
									<Link
										href={"https://motion.dev/"}
										target="_blank"
										className="underline"
									>
										motion
									</Link>{" "}
									and{" "}
									<Link
										href={"https://lucide.dev/"}
										target="_blank"
										className="underline"
									>
										lucide
									</Link>
								</p>
							</div>
							<CmdSection />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
