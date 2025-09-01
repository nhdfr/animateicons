"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ArrowUpRightHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface ArrowUpRightProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ArrowUpRightIcon = forwardRef<ArrowUpRightHandle, ArrowUpRightProps>(
	({ className, size = 24, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) {
				controls.start("animate").then(() => controls.start("normal"));
			}
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const containerVariants: Variants = {
			normal: {
				scale: 1,
				rotate: 0,
				transition: { duration: 0.2, ease: "easeOut" },
			},
			animate: {
				scale: [1, 1.06, 1.01, 1],
				rotate: [0, -5, 0],
				transition: { duration: 0.7, ease: "easeInOut" },
			},
		};

		const pathVariants: Variants = {
			normal: { pathLength: 1, opacity: 1, transition: { duration: 0.2 } },
			animate: {
				pathLength: [0, 1],
				opacity: [0.95, 1],
				transition: { duration: 0.5, ease: "easeInOut" },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				{...props}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
					initial="normal"
					animate={controls}
					variants={containerVariants}
				>
					<motion.path
						d="M7 7h10v10"
						fill="none"
						initial="normal"
						animate={controls}
						variants={{
							...pathVariants,
							animate: {
								...pathVariants.animate,
								transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
							},
						}}
					/>
					<motion.path
						d="M7 17 17 7"
						fill="none"
						initial="normal"
						animate={controls}
						variants={{
							...pathVariants,
							animate: {
								...pathVariants.animate,
								transition: { duration: 0.45, ease: "easeInOut", delay: 0.2 },
							},
						}}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

ArrowUpRightIcon.displayName = "ArrowUpRightIcon";
export { ArrowUpRightIcon };
