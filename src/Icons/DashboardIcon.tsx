"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface DashboardIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface DashboardIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const DashboardIcon = forwardRef<DashboardIconHandle, DashboardIconProps>(
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
				transition: { duration: 1.3, ease: "easeInOut", repeat: 0 },
			},
		};

		const tileVariants: Variants = {
			normal: { opacity: 1, scale: 1, y: 0 },
			animate: (i: number) => ({
				opacity: [0.5, 1, 0.8, 1],
				scale: [0.9, 1.1, 1],
				y: [2, -2, 0],
				transition: {
					duration: 1.2,
					ease: "easeInOut",
					repeat: 0,
					delay: i * 0.2,
				},
			}),
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
					variants={iconVariants}
				>
					<motion.rect
						width="7"
						height="9"
						x="3"
						y="3"
						rx="1"
						variants={tileVariants}
						custom={0}
					/>
					<motion.rect
						width="7"
						height="5"
						x="14"
						y="3"
						rx="1"
						variants={tileVariants}
						custom={1}
					/>
					<motion.rect
						width="7"
						height="9"
						x="14"
						y="12"
						rx="1"
						variants={tileVariants}
						custom={2}
					/>
					<motion.rect
						width="7"
						height="5"
						x="3"
						y="16"
						rx="1"
						variants={tileVariants}
						custom={3}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

DashboardIcon.displayName = "DashboardIcon";
export { DashboardIcon };
