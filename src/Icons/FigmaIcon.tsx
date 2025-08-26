"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface FigmaIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface FigmaIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const FigmaIcon = forwardRef<FigmaIconHandle, FigmaIconProps>(
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

		const handleEnter = useCallback(() => {
			if (!isControlled.current) controls.start("animate");
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const iconVariants: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.05, 0.95, 1],
				rotate: [0, -2, 2, 0],
				transition: { duration: 1.4, repeat: 0, ease: "easeInOut" },
			},
		};

		const shapeVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: (i: number) => ({
				pathLength: [0, 1],
				opacity: [0.6, 1],
				transition: {
					duration: 1.2,
					ease: "easeInOut",
					repeat: 0,
					delay: i * 0.25,
				},
			}),
		};

		const paths = [
			"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
			"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
			"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
			"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
			"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
		];

		return (
			<motion.div
				className={cn("inline-flex", className)}
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
					variants={iconVariants}
				>
					{paths.map((d, i) => (
						<motion.path key={i} d={d} variants={shapeVariants} custom={i} />
					))}
				</motion.svg>
			</motion.div>
		);
	},
);

FigmaIcon.displayName = "FigmaIcon";
export { FigmaIcon };
