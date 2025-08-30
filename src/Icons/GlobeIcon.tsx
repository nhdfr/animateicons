"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface GlobeIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface GlobeIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const GlobeIcon = forwardRef<GlobeIconHandle, GlobeIconProps>(
	({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
		const svgControls = useAnimation();
		const pathControls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => {
					svgControls.start("animate");
					pathControls.start("animate");
				},
				stopAnimation: () => {
					svgControls.start("normal");
					pathControls.start("normal");
				},
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) {
				svgControls.start("animate");
				pathControls.start("animate");
			}
		}, [svgControls, pathControls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) {
				svgControls.start("normal");
				pathControls.start("normal");
			}
		}, [svgControls, pathControls]);

		const svgVariants: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.05, 1],
				rotate: [0, -4, 4, 0],
				transition: { duration: 1.2, ease: "easeInOut" },
			},
		};

		const pathVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: [0.5, 1],
				transition: { duration: 0.8, ease: "easeInOut" },
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
					animate={svgControls}
					initial="normal"
					variants={svgVariants}
				>
					<motion.circle
						cx="12"
						cy="12"
						r="10"
						variants={pathVariants}
						initial="normal"
						animate={pathControls}
					/>
					<motion.path
						d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
						variants={pathVariants}
						initial="normal"
						animate={pathControls}
					/>
					<motion.path
						d="M2 12h20"
						variants={pathVariants}
						initial="normal"
						animate={pathControls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

GlobeIcon.displayName = "GlobeIcon";
export { GlobeIcon };
