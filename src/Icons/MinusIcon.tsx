"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface MinusIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface MinusIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const MinusIcon = forwardRef<MinusIconHandle, MinusIconProps>(
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

		const lineVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: [0.5, 1],
				transition: { duration: 0.8, ease: "easeInOut", repeat: 0 },
			},
		};

		const iconVariants: Variants = {
			normal: { scale: 1 },
			animate: {
				scale: [1, 1.1, 0.9, 1],
				transition: { duration: 1, repeat: 0, ease: "easeInOut" },
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
					viewBox="0 0 24 24"
					width={size}
					height={size}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={controls}
					initial="normal"
					variants={iconVariants}
				>
					<motion.path d="M5 12h14" variants={lineVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

MinusIcon.displayName = "MinusIcon";
export { MinusIcon };
