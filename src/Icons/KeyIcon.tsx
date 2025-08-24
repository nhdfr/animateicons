"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface KeyHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface KeyProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const KeyIcon = forwardRef<KeyHandle, KeyProps>(
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

		const settlePulse: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.015, 1],
				rotate: [0, -1.2, 0.8, 0],
				transition: { duration: 0.55, ease: "easeInOut" as const, delay: 0.45 },
			},
		};

		const ringVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1, scale: 1 },
			animate: {
				strokeDashoffset: [36, 0],
				opacity: [0.45, 1],
				scale: [0.88, 1.12, 1],
				transition: { duration: 0.5, ease: "easeInOut" as const },
			},
		};

		const shaftVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1 },
			animate: {
				strokeDashoffset: [32, 0],
				opacity: [0.4, 1],
				transition: { duration: 0.45, delay: 0.08, ease: "easeInOut" as const },
			},
		};

		const headTurn: Variants = {
			normal: { x: 0, rotate: 0, originX: 19, originY: 6 },
			animate: {
				x: [0, -1.4, -0.4, 0],
				rotate: [0, -14, 9, 0],
				transition: { duration: 0.5, delay: 0.16, ease: "easeInOut" as const },
			},
		};

		const headJab: Variants = {
			normal: { x: 0, y: 0 },
			animate: {
				x: [0, 0.8, 0],
				y: [0, -0.5, 0],
				transition: { duration: 0.28, delay: 0.38, ease: "easeOut" as const },
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
					className="lucide lucide-key-icon lucide-key"
				>
					<motion.g variants={settlePulse} initial="normal" animate={controls}>
						<motion.circle
							cx="7.5"
							cy="15.5"
							r="5.5"
							strokeDasharray="36"
							strokeDashoffset="36"
							variants={ringVariants}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="m21 2-9.6 9.6"
							strokeDasharray="32"
							strokeDashoffset="32"
							variants={shaftVariants}
							initial="normal"
							animate={controls}
						/>
						<motion.g variants={headJab} initial="normal" animate={controls}>
							<motion.path
								d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
								variants={headTurn}
								initial="normal"
								animate={controls}
							/>
						</motion.g>
					</motion.g>
				</motion.svg>
			</motion.div>
		);
	},
);

KeyIcon.displayName = "KeyIcon";
export { KeyIcon };
