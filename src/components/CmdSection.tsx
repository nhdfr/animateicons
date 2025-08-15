"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "./icons/CheckIcon";
import { CopyIcon } from "./icons/Copy";
import { WordRotate } from "./magicui/word-rotate";
import { Button } from "./ui/button";

const CmdSection: React.FC = () => {
	const [activeTab, setActiveTab] = useState<"npm" | "bun">("npm");
	const [currentCmd, setCurrentCmd] = useState("");
	const [copied, setCopied] = useState(false);
	const [isReady, setIsReady] = useState(false);

	const commands = ["loader.json", "heart.json", "food.json", "copy.json"];

	const copyToClipboard = () => {
		if (!currentCmd) return;
		navigator.clipboard
			.writeText(currentCmd)
			.then(() => setCopied(true))
			.catch((err) => console.error("Failed to copy text:", err));
	};

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => setCopied(false), 1500);
			return () => clearTimeout(timeout);
		}
	}, [copied]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const tab = localStorage.getItem("tab") as "npm" | "bun" | null;
			if (tab) {
				setActiveTab(tab);
			}
			setIsReady(true);
		}
	}, []);

	if (!isReady) return null;

	return (
		<Tabs
			value={activeTab}
			onValueChange={(value) => {
				setActiveTab(value as "npm" | "bun");
				localStorage.setItem("tab", value);
			}}
			className="bg-primary/10 border-primary/20 relative mt-5 w-full gap-0 rounded-md border shadow-lg lg:w-200"
		>
			<TabsList className="h-12 space-x-1.5 bg-transparent px-2 py-2.5">
				<TabsTrigger
					value="npm"
					className="data-[state=active]:bg-primary/30 rounded-sm text-white data-[state=active]:shadow-sm"
				>
					npm
				</TabsTrigger>
				<TabsTrigger
					value="pnpm"
					className="data-[state=active]:bg-primary/30 rounded-sm text-white data-[state=active]:shadow-sm"
				>
					pnpm
				</TabsTrigger>
				<TabsTrigger
					value="bun"
					className="data-[state=active]:bg-primary/30 rounded-sm text-white data-[state=active]:shadow-sm"
				>
					bun
				</TabsTrigger>
			</TabsList>

			<TabsContent
				value="npm"
				className="bg-primary/5 flex items-center justify-between px-4 py-2 text-sm text-zinc-300 max-md:line-clamp-1 max-sm:overflow-x-scroll"
			>
				<div className="flex w-full items-center justify-between gap-2 whitespace-nowrap">
					<code className="line-clamp-1 flex flex-nowrap items-center">
						npx shadcn@latest add "https://animateicons.vercel.app/icons/
						<WordRotate
							words={commands}
							onWordChange={(word) =>
								setCurrentCmd(
									`npx shadcn@latest add "https://animateicons.vercel.app/icons/${word}"`,
								)
							}
						/>
					</code>
					<Button
						variant="ghost"
						size="icon"
						className="hover:bg-primary/10 p-0.5 hover:text-white"
						onClick={copyToClipboard}
						aria-label={copied ? "Copied" : "Copy"}
					>
						{copied ? <CheckIcon /> : <CopyIcon />}
					</Button>
				</div>
			</TabsContent>
			<TabsContent
				value="pnpm"
				className="bg-primary/5 flex items-center justify-between px-4 py-2 text-sm text-zinc-300 max-md:line-clamp-1 max-sm:overflow-x-scroll"
			>
				<div className="flex w-full items-center justify-between gap-2 whitespace-nowrap">
					<code className="line-clamp-1 flex flex-nowrap items-center">
						pnpm dlx shadcn@latest add "https://animateicons.vercel.app/icons/
						<WordRotate
							words={commands}
							onWordChange={(word) =>
								setCurrentCmd(
									`pnpm dlx shadcn@latest add "https://animateicons.vercel.app/icons/${word}"`,
								)
							}
						/>
					</code>
					<Button
						variant="ghost"
						size="icon"
						className="hover:bg-primary/10 p-0.5 hover:text-white"
						onClick={copyToClipboard}
						aria-label={copied ? "Copied" : "Copy"}
					>
						{copied ? <CheckIcon /> : <CopyIcon />}
					</Button>
				</div>
			</TabsContent>

			<TabsContent
				value="bun"
				className="bg-primary/5 flex items-center justify-between px-4 py-2 text-sm text-zinc-300 max-md:line-clamp-1 max-sm:overflow-x-scroll"
			>
				<div className="flex w-full items-center justify-between gap-2 whitespace-nowrap">
					<code className="line-clamp-1 flex items-center">
						bunx shadcn@latest add "https://animateicons.vercel.app/icons/
						<WordRotate
							words={commands}
							onWordChange={(word) =>
								setCurrentCmd(
									`bunx shadcn@latest add "https://animateicons.vercel.app/icons/${word}"`,
								)
							}
							className="inline-block"
						/>
					</code>
					<Button
						variant="ghost"
						size="icon"
						className="hover:bg-primary/10 p-0.5 hover:text-white"
						onClick={copyToClipboard}
						aria-label={copied ? "Copied" : "Copy"}
					>
						{copied ? <CheckIcon /> : <CopyIcon />}
					</Button>
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default CmdSection;
