"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BatteryIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface BatteryIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BatteryIcon = forwardRef<BatteryIconHandle, BatteryIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const reduced = useReducedMotion();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () =>
					reduced ? controls.start("normal") : controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(
			(e?: React.MouseEvent<HTMLDivElement>) => {
				if (reduced) return;
				if (!isControlled.current) controls.start("animate");
				else onMouseEnter?.(e as any);
			},
			[controls, reduced, onMouseEnter],
		);

		const handleLeave = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) {
					controls.start("normal");
				} else {
					onMouseLeave?.(e as any);
				}
			},
			[controls, onMouseLeave],
		);

		const svgVariants: Variants = {
			normal: { rotate: 0 },
			warning: {
				rotate: [0, -3, 3, -2, 0],
				transition: {
					duration: 0.5,
					ease: [0.42, 0, 0.58, 1],
					repeat: 0,
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
					repeat: 0,
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
					repeat: 0,
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
