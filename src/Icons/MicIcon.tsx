"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface MicIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface MicIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const MicIcon = forwardRef<MicIconHandle, MicIconProps>(
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
				scale: [1, 1.08, 0.95, 1],
				rotate: [0, -3, 3, -2, 2, 0],
				y: [0, -1, 0],
				transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
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
					variants={micVariants}
					animate={controls}
					initial="normal"
				>
					<path d="M12 19v3" />
					<path d="M19 10v2a7 7 0 0 1-14 0v-2" />
					<rect x="9" y="2" width="6" height="13" rx="3" />
				</motion.svg>
			</motion.div>
		);
	},
);

MicIcon.displayName = "MicIcon";
export { MicIcon };
