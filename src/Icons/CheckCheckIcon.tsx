"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface DoubleCheckHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface CheckCheckIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const CheckCheckIcon = forwardRef<DoubleCheckHandle, CheckCheckIconProps>(
	({ className, size = 28, ...props }, ref) => {
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

		const tick1Variants: Variants = {
			normal: { strokeDashoffset: 0, scale: 1, opacity: 1 },
			animate: {
				strokeDashoffset: [20, 0],
				scale: [1, 1.2, 1],
				opacity: [0.5, 1],
				transition: { duration: 0.7, ease: "easeInOut" },
			},
		};

		const tick2Variants: Variants = {
			normal: { opacity: 1, x: 0 },
			animate: {
				opacity: [0, 1],
				x: [-6, 0],
				transition: { duration: 0.5, ease: "easeOut", delay: 0.35 },
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
				>
					<motion.path
						d="M18 6 7 17l-5-5"
						strokeDasharray="20"
						strokeDashoffset="0"
						variants={tick1Variants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="m22 10-7.5 7.5L13 16"
						strokeDasharray="20"
						strokeDashoffset="0"
						variants={tick2Variants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

CheckCheckIcon.displayName = "CheckCheckIcon";
export { CheckCheckIcon };
