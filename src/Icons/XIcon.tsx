"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface XIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface XIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const XIcon = forwardRef<XIconHandle, XIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
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
							rotate: [0, 15, -15, 0],
							scale: [1, 1.1, 1],
							transition: { duration: 0.6 },
						},
					}}
					initial="normal"
					animate={controls}
				>
					<motion.path
						d="M18 6 6 18"
						variants={{
							normal: { pathLength: 1 },
							animate: {
								pathLength: [1, 0.2, 1],
								transition: { duration: 0.6 },
							},
						}}
					/>

					<motion.path
						d="m6 6 12 12"
						variants={{
							normal: { pathLength: 1 },
							animate: {
								pathLength: [1, 0.2, 1],
								transition: { duration: 0.6, delay: 0.05 },
							},
						}}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

XIcon.displayName = "XIcon";

export { XIcon };
