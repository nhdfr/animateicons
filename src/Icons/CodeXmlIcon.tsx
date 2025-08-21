"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface CodeXmlIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface CodeXmlIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const CodeXmlIcon = forwardRef<CodeXmlIconHandle, CodeXmlIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) controls.start("animate");
				else onMouseEnter?.(e);
			},
			[controls, onMouseEnter],
		);

		const handleLeave = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) controls.start("normal");
				else onMouseLeave?.(e);
			},
			[controls, onMouseLeave],
		);

		const leftArrowVariants: Variants = {
			normal: { x: 0, opacity: 1 },
			animate: {
				x: [-2, 0, -2, 0],
				opacity: [1, 0.8, 1],
				transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
			},
		};

		const rightArrowVariants: Variants = {
			normal: { x: 0, opacity: 1 },
			animate: {
				x: [2, 0, 2, 0],
				opacity: [1, 0.8, 1],
				transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
			},
		};

		const slashVariants: Variants = {
			normal: {
				strokeDasharray: "20",
				strokeDashoffset: "20",
				opacity: 0.6,
			},
			animate: {
				strokeDasharray: "20",
				strokeDashoffset: [20, 0],
				opacity: [0.6, 1],
				transition: {
					duration: 0.5,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "reverse",
				},
			},
		};

		return (
			<motion.div
				className={cn("relative inline-flex", className)}
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
					animate={controls}
					initial="normal"
				>
					<motion.path
						d="m18 16 4-4-4-4"
						variants={rightArrowVariants}
					/>
					<motion.path
						d="m6 8-4 4 4 4"
						variants={leftArrowVariants}
					/>
					<motion.path
						d="m14.5 4-5 16"
						variants={slashVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

CodeXmlIcon.displayName = "CodeXmlIcon";
export { CodeXmlIcon };
