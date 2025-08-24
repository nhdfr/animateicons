"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface UsersRoundHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface UsersRoundProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const UsersRoundIcon = forwardRef<UsersRoundHandle, UsersRoundProps>(
	({ className, size = 28, ...props }, ref) => {
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

		const arcVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1 },
			animate: {
				strokeDashoffset: [60, 0],
				opacity: [0.3, 1],
				transition: { duration: 0.8, ease: "easeInOut" as const },
			},
		};

		const headVariants: Variants = {
			normal: { scale: 1, opacity: 1 },
			animate: {
				scale: [0.5, 1.2, 1],
				opacity: [0, 1],
				transition: { duration: 0.6, ease: "easeOut" as const },
			},
		};

		const sideVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 0.7 },
			animate: {
				strokeDashoffset: [50, 0],
				opacity: [0.2, 1],
				transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" as const },
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
					className="lucide lucide-users-round-icon lucide-users-round"
				>
					<motion.path
						d="M18 21a8 8 0 0 0-16 0"
						strokeDasharray="60"
						strokeDashoffset="60"
						variants={arcVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.circle
						cx="10"
						cy="8"
						r="5"
						variants={headVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
						strokeDasharray="50"
						strokeDashoffset="50"
						variants={sideVariants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

UsersRoundIcon.displayName = "UsersRoundIcon";
export { UsersRoundIcon };
