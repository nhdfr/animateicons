"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface IndianRupeeHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface IndianRupeeProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const IndianRupeeIcon = forwardRef<IndianRupeeHandle, IndianRupeeProps>(
	({ className, size = 36, ...props }, ref) => {
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

		const ease = [0.12, 1, 0.25, 1] as const;

		const groupSettle: Variants = {
			normal: { scale: 1 },
			animate: {
				scale: [1, 1.015, 1],
				transition: { duration: 0.6, ease },
			},
		};

		const drawTop: Variants = {
			normal: { strokeDasharray: "0 1", strokeDashoffset: 0 },
			animate: {
				strokeDasharray: 20,
				strokeDashoffset: [20, 0],
				transition: { duration: 0.6, ease, delay: 0.06 },
			},
		};

		const drawMid: Variants = {
			normal: { strokeDasharray: "0 1", strokeDashoffset: 0 },
			animate: {
				strokeDasharray: 20,
				strokeDashoffset: [20, 0],
				transition: { duration: 0.6, ease, delay: 0.18 },
			},
		};

		const drawCurve: Variants = {
			normal: { strokeDasharray: "0 1", strokeDashoffset: 0 },
			animate: {
				strokeDasharray: 40,
				strokeDashoffset: [40, 0],
				transition: { duration: 0.9, ease, delay: 0.28 },
			},
		};

		const drawNotch: Variants = {
			normal: { strokeDasharray: "0 1", strokeDashoffset: 0 },
			animate: {
				strokeDasharray: 10,
				strokeDashoffset: [10, 0],
				transition: { duration: 0.5, ease, delay: 0.46 },
			},
		};

		const diagonalResolve: Variants = {
			normal: {
				strokeDasharray: "0 1",
				strokeDashoffset: 0,
				x: 0,
				y: 0,
				opacity: 1,
			},
			animate: {
				strokeDasharray: 26,
				strokeDashoffset: [26, 0],
				x: [-0.3, 0],
				y: [-0.2, 0],
				opacity: [1, 1],
				transition: { duration: 0.65, ease, delay: 0.52 },
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
					className="lucide lucide-indian-rupee-icon lucide-indian-rupee"
				>
					<motion.g variants={groupSettle} initial="normal" animate={controls}>
						<motion.path
							d="M6 3h12"
							variants={drawTop}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="M6 8h12"
							variants={drawMid}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="M9 13c6.667 0 6.667-10 0-10"
							variants={drawCurve}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="M6 13h3"
							variants={drawNotch}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="m6 13 8.5 8"
							variants={diagonalResolve}
							initial="normal"
							animate={controls}
						/>
					</motion.g>
				</motion.svg>
			</motion.div>
		);
	},
);

IndianRupeeIcon.displayName = "IndianRupeeIcon";
export { IndianRupeeIcon };
