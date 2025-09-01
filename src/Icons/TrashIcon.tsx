"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface DashboardIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface DashboardIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const TrashIcon = forwardRef<DashboardIconHandle, DashboardIconProps>(
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
			(e?: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlled.current) controls.start("normal");
				else onMouseLeave?.(e as any);
			},
			[controls, onMouseLeave],
		);

		const iconVariants: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.04, 0.99, 1],
				rotate: [0, -1, 1, 0],
				transition: { duration: 1, ease: "easeInOut" },
			},
		};

		const lidLiftVariants: Variants = {
			normal: { y: 0, rotate: 0, opacity: 1 },
			animate: {
				y: [-1, -3, 0],
				rotate: [0, -6, 0],
				opacity: [1],
				transition: { duration: 0.7, ease: "easeInOut", delay: 0.05 },
			},
		};

		const barVariants: Variants = {
			normal: { scaleX: 1, opacity: 1 },
			animate: {
				scaleX: [0.9, 1.05, 1],
				opacity: [0.7, 1, 1],
				transition: { duration: 0.6, ease: "easeInOut", delay: 0.15 },
			},
		};

		const binVariants: Variants = {
			normal: { scaleY: 1, y: 0 },
			animate: {
				scaleY: [1, 0.96, 1],
				y: [0, 1.5, 0],
				transition: { duration: 0.7, ease: "easeInOut", delay: 0.22 },
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
					variants={iconVariants}
				>
					<motion.path
						d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
						variants={binVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M3 6h18"
						variants={barVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
						variants={lidLiftVariants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

TrashIcon.displayName = "TrashIcon";
export { TrashIcon };
