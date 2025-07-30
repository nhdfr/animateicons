"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GithubIcon } from "./icons/Github";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="relative z-50 transition-all duration-300">
			<div className="border-primary/20 border-b py-2 text-center text-xs text-zinc-400">
				<p>
					This is is under development, so some features may not work as
					expected.
				</p>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center space-x-2">
						<Image
							src="/logo.svg"
							alt="logo"
							width={40}
							height={40}
							loading="eager"
							className="max-md:size-10"
						/>
						<span className="text-lg font-semibold text-white">
							AnimateIcons
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden items-center space-x-8 text-sm md:flex">
						<Link
							href="#docs"
							target="_blank"
							className="font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							Docs
						</Link>
						<Link
							href="#examples"
							target="_blank"
							className="font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							Examples
						</Link>
						<Link
							href="https://github.com/Avijit07x/animateicons"
							target="_blank"
							className="flex items-center space-x-2 font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							<GithubIcon size={18} />
							<span>GitHub</span>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`overflow-hidden transition-all duration-300 md:hidden ${
						isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="bg-primary/10 border-primary/20 mt-2 w-full gap-0 space-y-1 rounded-lg border px-2 pt-2 pb-3 shadow-lg backdrop-blur-md">
						<a
							href="#docs"
							className="block px-3 py-2 font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							Docs
						</a>
						<a
							href="#examples"
							className="block px-3 py-2 font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
						>
							Examples
						</a>
						<a
							href="#github"
							className="block px-3 py-2 font-medium text-zinc-300 transition-colors duration-200 hover:text-indigo-400"
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
