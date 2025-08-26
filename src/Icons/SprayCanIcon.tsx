"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SprayCanIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SprayCanIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const SprayCanIcon = forwardRef<SprayCanIconHandle, SprayCanIconProps>(
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
			normal: { rotate: 0, scale: 1 },
			animate: {
				rotate: [0, -4, 4, -2, 2, 0],
				transition: { duration: 2, ease: "easeInOut", repeat: 0 },
			},
		};

		const sprayVariants: Variants = {
			normal: { scale: 1, opacity: 1, y: 0 },
			animate: (i: number) => ({
				scale: [1, 1.3, 0.7, 1],
				opacity: [1, 0.4, 1],
				y: [0, -2, 2, 0],
				transition: {
					duration: 1,
					ease: "easeInOut",
					repeat: 0,
					delay: i * 0.2,
				},
			}),
		};

		const sprayDots = [
			"M3 3h.01",
			"M7 5h.01",
			"M11 7h.01",
			"M3 7h.01",
			"M7 9h.01",
			"M3 11h.01",
		];

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
					{sprayDots.map((d, i) => (
						<motion.path
							key={i}
							d={d}
							variants={sprayVariants}
							custom={i}
							animate={controls}
							initial="normal"
						/>
					))}
					<rect width="4" height="4" x="15" y="5" />
					<path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
					<path d="m13 14 8-2" />
					<path d="m13 19 8-2" />
				</motion.svg>
			</motion.div>
		);
	},
);

SprayCanIcon.displayName = "SprayCanIcon";
export { SprayCanIcon };
