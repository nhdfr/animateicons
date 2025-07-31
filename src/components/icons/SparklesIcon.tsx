"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

export function SparklesIcon({ size = 24, className = "", ...props }) {
	const controls = useAnimation();
	const mounted = useRef(false);

	useEffect(() => {
		controls.start({
			rotate: [0, 12, -12, 0],
			scale: [1, 1.18, 0.95, 1],
			transition: {
				repeat: Infinity,
				duration: 1.5,
				ease: "easeInOut",
			},
		});
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, [controls]);

	return (
		<div className={className} {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{ display: "block" }}
			>
				<motion.path
					d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
					animate={controls}
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, type: "spring" }}
				/>
				<motion.path
					d="M20 2v4"
					initial={{ opacity: 0, y: -6 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
				/>
				<motion.path
					d="M22 4h-4"
					initial={{ opacity: 0, x: 6 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
				/>
				<motion.circle
					cx="4"
					cy="20"
					r="2"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
				/>
			</svg>
		</div>
	);
}
