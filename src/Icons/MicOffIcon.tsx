"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface MicOffIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface MicOffIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const MicOffIcon = forwardRef<MicOffIconHandle, MicOffIconProps>(
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

		const micVariants: Variants = {
			normal: { scale: 1, rotate: 0, y: 0 },
			animate: {
				scale: [1, 1.05, 0.95, 1],
				rotate: [0, -3, 3, -2, 2, 0],
				y: [0, -1, 0],
				transition: { duration: 1.5, repeat: 0, ease: "easeInOut" },
			},
		};

		const slashVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [1, 0, 1],
				opacity: 1,
				transition: { duration: 1.2, ease: "easeInOut" },
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
					variants={micVariants}
				>
					<path d="M12 19v3" />
					<path d="M19 10v2a7 7 0 0 1-14 0v-2" />
					<rect x="9" y="2" width="6" height="13" rx="3" />
					<motion.path d="M2 2L22 22" variants={slashVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

MicOffIcon.displayName = "MicOffIcon";
export { MicOffIcon };
