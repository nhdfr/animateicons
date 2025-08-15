"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface LoaderCircleIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface LoaderCircleIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const LoaderCircleIcon = forwardRef<
	LoaderCircleIconHandle,
	LoaderCircleIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
	const controls = useAnimation();
	const isControlled = useRef(false);

	useImperativeHandle(ref, () => {
		isControlled.current = true;
		return {
			startAnimation: () => controls.start("animate"),
			stopAnimation: () => controls.start("normal"),
		};
	});

	const handleEnter = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!isControlled.current) {
				controls.start("animate");
			} else {
				onMouseEnter?.(e);
			}
		},
		[controls, onMouseEnter],
	);

	const handleLeave = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!isControlled.current) {
				controls.start("normal");
			} else {
				onMouseLeave?.(e);
			}
		},
		[controls, onMouseLeave],
	);

	const wrapperVariants: Variants = {
		normal: { rotate: 0, scale: 1 },
		animate: {
			rotate: 360,
			scale: [1, 1.08, 1],
			transition: {
				rotate: { duration: 1.2, ease: "linear", repeat: Infinity },
				scale: { duration: 0.8, repeat: Infinity, repeatType: "mirror" },
			},
		},
	};

	const arcVariants: Variants = {
		normal: { pathLength: 0.85, pathOffset: 0, opacity: 0.9 },
		animate: {
			pathLength: [0.3, 0.85],
			pathOffset: [0, 0.15],
			opacity: [0.6, 1],
			transition: {
				duration: 1.2,
				ease: [0.42, 0, 0.58, 1],
				repeat: Infinity,
			},
		},
	};

	return (
		<motion.div
			className={cn(className)}
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
				variants={wrapperVariants}
				animate={controls}
				initial="normal"
			>
				<motion.path d="M21 12a9 9 0 1 1-6.219-8.56" variants={arcVariants} />
			</motion.svg>
		</motion.div>
	);
});

LoaderCircleIcon.displayName = "LoaderCircleIcon";
export { LoaderCircleIcon };
