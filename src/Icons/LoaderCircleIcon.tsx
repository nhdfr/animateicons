"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "motion/react";
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
			if (!isControlled.current) controls.start("animate");
			onMouseEnter?.(e);
		},
		[controls, onMouseEnter],
	);

	const handleLeave = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!isControlled.current) controls.start("normal");
			onMouseLeave?.(e);
		},
		[controls, onMouseLeave],
	);

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
				animate={controls}
				initial="normal"
				variants={{
					normal: { rotate: 0 },
					animate: {
						rotate: 360,
						transition: {
							duration: 1,
							ease: "linear",
							repeat: Infinity,
						},
					},
				}}
			>
				<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			</motion.svg>
		</motion.div>
	);
});

LoaderCircleIcon.displayName = "LoaderCircleIcon";
export { LoaderCircleIcon };
