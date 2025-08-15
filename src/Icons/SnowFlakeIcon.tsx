"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SnowflakeIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SnowflakeIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const SnowflakeIcon = forwardRef<SnowflakeIconHandle, SnowflakeIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlledRef = useRef(false);

		useImperativeHandle(ref, () => {
			isControlledRef.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleMouseEnter = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlledRef.current) {
					controls.start("animate");
				} else {
					onMouseEnter?.(e);
				}
			},
			[controls, onMouseEnter],
		);

		const handleMouseLeave = useCallback(
			(e: React.MouseEvent<HTMLDivElement>) => {
				if (!isControlledRef.current) {
					controls.start("normal");
				} else {
					onMouseLeave?.(e);
				}
			},
			[controls, onMouseLeave],
		);

		const pathVariants = {
			normal: { pathLength: 1, opacity: 1, transition: { duration: 0.3 } },
			animate: {
				pathLength: [1, 0.3, 1],
				opacity: [1, 0.7, 1],
				transition: { duration: 0.8 },
			},
		};

		return (
			<motion.div
				className={cn(className)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
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
					variants={{
						normal: { rotate: 0, scale: 1, transition: { duration: 0.3 } },
						animate: {
							rotate: [0, 10, -10, 0],
							scale: [1, 1.05, 1],
							transition: { duration: 1 },
						},
					}}
					animate={controls}
					initial="normal"
				>
					<motion.path d="m10 20-1.25-2.5L6 18" variants={pathVariants} />
					<motion.path d="M10 4 8.75 6.5 6 6" variants={pathVariants} />
					<motion.path d="m14 20 1.25-2.5L18 18" variants={pathVariants} />
					<motion.path d="m14 4 1.25 2.5L18 6" variants={pathVariants} />
					<motion.path d="m17 21-3-6h-4" variants={pathVariants} />
					<motion.path d="m17 3-3 6 1.5 3" variants={pathVariants} />
					<motion.path d="M2 12h6.5L10 9" variants={pathVariants} />
					<motion.path d="m20 10-1.5 2 1.5 2" variants={pathVariants} />
					<motion.path d="M22 12h-6.5L14 15" variants={pathVariants} />
					<motion.path d="m4 10 1.5 2L4 14" variants={pathVariants} />
					<motion.path d="m7 21 3-6-1.5-3" variants={pathVariants} />
					<motion.path d="m7 3 3 6h4" variants={pathVariants} />
				</motion.svg>
			</motion.div>
		);
	},
);

SnowflakeIcon.displayName = "SnowflakeIcon";
export { SnowflakeIcon };
