"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ChartBarIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface ChartBarIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ChartBarIcon = forwardRef<ChartBarIconHandle, ChartBarIconProps>(
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

		const pathVariants: Variants = {
			normal: {
				pathLength: 1,
				opacity: 1,
				transition: { duration: 0.2 },
			},
			animate: {
				pathLength: [0, 1],
				opacity: [0.7, 1],
				transition: {
					duration: 0.6,
					ease: "easeInOut",
				},
			},
		};

		const chartVariants: Variants = {
			normal: {
				scale: 1,
				transition: { duration: 0.2 },
			},
			animate: {
				scale: [1, 1.05, 1],
				transition: {
					duration: 0.6,
					ease: "easeInOut",
				},
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
					variants={chartVariants}
					animate={controls}
					initial="normal"
				>
					<motion.path d="M3 3v16a2 2 0 0 0 2 2h16" variants={pathVariants} />
					<motion.path d="M7 16h8" variants={pathVariants} />
					<motion.path d="M7 11h12" variants={pathVariants} />
					<motion.path d="M7 6h3" variants={pathVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

ChartBarIcon.displayName = "ChartBarIcon";
export { ChartBarIcon };
