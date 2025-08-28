"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ChartPieIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface ChartPieIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const ChartPieIcon = forwardRef<ChartPieIconHandle, ChartPieIconProps>(
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
				opacity: 0.7,
				transition: { duration: 0.2 },
			},
			animate: {
				pathLength: [0, 1],
				opacity: [0.7, 1, 0.7],
				transition: {
					duration: 0.6,
					ease: "easeInOut",
				},
			},
		};

		const chartVariants: Variants = {
			normal: {
				scale: 1,
				rotate: 0,
				transition: { duration: 0.2 },
			},
			animate: {
				scale: [1, 1.05, 1],
				rotate: [0, 5, -5, 0],
				transition: {
					duration: 0.8,
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
					<motion.path
						d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
						variants={pathVariants}
					/>
					<motion.path
						d="M21.21 15.89A10 10 0 1 1 8 2.83"
						variants={pathVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

ChartPieIcon.displayName = "ChartPieIcon";
export { ChartPieIcon };
