"use client";

import { Github, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/50 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<Image
							src="/logo.svg"
							alt="logo"
							width={45}
							height={45}
							loading="eager"
							className="max-md:size-10"
						/>
						<span className="text-white text-lg md:text-xl font-semibold">
							AnimateIcons
						</span>
						{/* <span className="bg-gradient-to-r from-[#007BFF] via-[#322AFF] to-[#FF3B3F] bg-clip-text text-transparent text-xl font-semibold">
							AnimateIcons
						</span> */}
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#docs"
							className="text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
						>
							Docs
						</a>
						<a
							href="#examples"
							className="text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
						>
							Examples
						</a>
						<a
							href="#github"
							className="text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium flex items-center space-x-2"
						>
							<Github size={18} />
							<span>GitHub</span>
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-zinc-300 hover:text-indigo-400 transition-colors duration-200"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`md:hidden transition-all duration-300 overflow-hidden ${
						isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/90 backdrop-blur-md rounded-lg mt-2 border border-zinc-800/50">
						<a
							href="#docs"
							className="block px-3 py-2 text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
						>
							Docs
						</a>
						<a
							href="#examples"
							className="block px-3 py-2 text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
						>
							Examples
						</a>
						<a
							href="#github"
							className="block px-3 py-2 text-zinc-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
