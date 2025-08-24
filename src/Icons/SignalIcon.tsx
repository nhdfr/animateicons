"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SignalHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SignalProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const SignalIcon = forwardRef<SignalHandle, SignalProps>(
	({ className, size = 28, ...props }, ref) => {
		const groupControls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => {
					groupControls.start("animate");
				},
				stopAnimation: () => {
					groupControls.start("normal");
				},
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) {
				groupControls.start("animate");
			}
		}, [groupControls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) {
				groupControls.start("normal");
			}
		}, [groupControls]);

		const sway: Variants = {
			normal: { rotate: 0, x: 0, y: 0, scale: 1 },
			animate: {
				rotate: [0, -2, 1, 0],
				x: [0, -0.4, 0.2, 0],
				y: [0, -0.3, 0.1, 0],
				scale: [1, 1.018, 1],
				transition: { duration: 0.7, ease: "easeInOut" },
			},
		};

		const dotKick: Variants = {
			normal: { scale: 1, opacity: 1 },
			animate: {
				scale: [1, 1.18, 1],
				opacity: [1, 1, 1],
				transition: { duration: 0.3, ease: "easeOut", delay: 0.06 },
			},
		};

		const barBounce = (delay: number): Variants => ({
			normal: { y: 0, scaleY: 1, opacity: 1, transformOrigin: "center bottom" },
			animate: {
				y: [0, -0.8, 0],
				scaleY: [1, 1.1, 1],
				opacity: [1, 1, 1],
				transition: { duration: 0.42, ease: "easeOut", delay },
			},
		});

		const barBreathe = (delay: number): Variants => ({
			normal: { scaleY: 1, transformOrigin: "center bottom" },
			animate: {
				scaleY: [1, 1.04, 1],
				transition: { duration: 0.5, ease: "easeInOut", delay },
			},
		});

		const svgVariants: Variants = {
			normal: { scale: 1, rotate: 0, y: 0 },
			animate: {
				scale: [1, 1.06, 1],
				rotate: [0, -2, 2, 0],
				y: [0, -1, 0],
				transition: { duration: 0.9, ease: "easeInOut" },
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
					className="lucide lucide-signal-icon lucide-signal"
					initial="normal"
					animate={groupControls}
					variants={svgVariants}
				>
					<motion.g variants={sway} initial="normal" animate={groupControls}>
						<motion.path
							d="M2 20h.01"
							variants={dotKick}
							initial="normal"
							animate={groupControls}
						/>
						<motion.g initial="normal" animate={groupControls}>
							<motion.path d="M7 20v-4" variants={barBounce(0.06)} />
							<motion.path d="M12 20v-8" variants={barBounce(0.12)} />
							<motion.path d="M17 20V8" variants={barBounce(0.18)} />
							<motion.path d="M22 4v16" variants={barBounce(0.24)} />
						</motion.g>
						<motion.g initial="normal" animate={groupControls}>
							<motion.path d="M7 20v-4" variants={barBreathe(0.32)} />
							<motion.path d="M12 20v-8" variants={barBreathe(0.36)} />
							<motion.path d="M17 20V8" variants={barBreathe(0.4)} />
							<motion.path d="M22 4v16" variants={barBreathe(0.44)} />
						</motion.g>
					</motion.g>
				</motion.svg>
			</motion.div>
		);
	},
);

SignalIcon.displayName = "SignalIcon";
export { SignalIcon };
