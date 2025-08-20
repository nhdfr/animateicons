"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BatteryIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface BatteryIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BatteryIcon = forwardRef<BatteryIconHandle, BatteryIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 32, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("warning"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) controls.start("warning");
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const svgVariants: Variants = {
			normal: { rotate: 0 },
			warning: {
				rotate: [0, -3, 3, -2, 0],
				transition: {
					duration: 0.5,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
				},
			},
		};

		const rectVariants: Variants = {
			normal: { stroke: "currentColor", opacity: 1 },
			warning: {
				stroke: ["#ef4444", "#dc2626", "#ef4444"],
				opacity: [0.6, 1, 0.6],
				transition: {
					duration: 0.9,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
				},
			},
		};

		const tipVariants: Variants = {
			normal: { stroke: "currentColor", opacity: 1 },
			warning: {
				stroke: ["#ef4444", "#dc2626", "#ef4444"],
				opacity: [0.4, 1, 0.4],
				transition: {
					duration: 0.7,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
				},
			},
		};

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
					variants={svgVariants}
				>
					<motion.path
						d="M22 14L22 10"
						variants={tipVariants}
						initial="normal"
					/>
					<motion.rect
						x="2"
						y="6"
						width="16"
						height="12"
						rx="2"
						variants={rectVariants}
						initial="normal"
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

BatteryIcon.displayName = "BatteryIcon";
export { BatteryIcon };
