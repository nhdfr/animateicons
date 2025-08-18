"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SendIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SendIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const SendIcon = forwardRef<SendIconHandle, SendIconProps>(
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

		const svgVariants: Variants = {
			normal: { rotate: 0, x: 0, scale: 1 },
			animate: {
				rotate: [0, -5, 5, 0],
				x: [0, 2, -2, 0],
				scale: [1, 1.05, 0.95, 1],
				transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity },
			},
		};

		const pathVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: [0.5, 1],
				transition: { duration: 1.4, ease: "easeInOut", repeat: Infinity },
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
						d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
						variants={pathVariants}
					/>
					<motion.path d="m21.854 2.147-10.94 10.939" variants={pathVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

SendIcon.displayName = "SendIcon";
export { SendIcon };
