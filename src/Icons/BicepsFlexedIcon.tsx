"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BicepsFlexedIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface BicepsFlexedIconProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const BicepsFlexedIcon = forwardRef<
	BicepsFlexedIconHandle,
	BicepsFlexedIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
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
						rotate: [0, -10, 10, 0],
						scale: [1, 1.2, 1.2, 1],
						transition: { duration: 0.6 },
					},
				}}
				animate={controls}
				initial="normal"
			>
				<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
				<path d="M15 14a5 5 0 0 0-7.584 2" />
				<path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
			</motion.svg>
		</motion.div>
	);
});

BicepsFlexedIcon.displayName = "BicepsFlexedIcon";
export { BicepsFlexedIcon };
