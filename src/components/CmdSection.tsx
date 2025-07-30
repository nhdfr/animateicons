"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "./icons/CheckIcon";
import { CopyIcon } from "./icons/Copy";
import { WordRotate } from "./magicui/word-rotate";
import { Button } from "./ui/button";

const CmdSection: React.FC = () => {
	const [activeTab, setActiveTab] = useState("npm");
	const [currentCmd, setCurrentCmd] = useState("");
	const [copied, setCopied] = useState(false);

	const npmCommands = ["Loader.json", "Heart.json", "Food.json", "Copy.json"];
	const bunCommands = ["Loader.json", "Heart.json", "Food.json", "Copy.json"];

	const copyToClipboard = () => {
		if (!currentCmd) return;
		navigator.clipboard
			.writeText(currentCmd)
			.then(() => {
				setCopied(true);
			})
			.catch((err) => {
				console.error("Failed to copy text:", err);
			});
	};

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => setCopied(false), 1500);
			return () => clearTimeout(timeout);
		}
	}, [copied]);

	return (
		<Tabs
			defaultValue={activeTab}
			className="bg-primary/10 border-primary/20 relative mt-5 w-full gap-0 rounded-md border shadow-lg"
			onValueChange={(value) => {
				setActiveTab(value);
			}}
		>
			<TabsList className="h-12 space-x-1.5 bg-transparent px-2 py-2.5">
				<TabsTrigger
					value="npm"
					className="data-[state=active]:bg-primary rounded-sm text-white data-[state=active]:text-white data-[state=active]:shadow-sm"
				>
					npm
				</TabsTrigger>
				<TabsTrigger
					value="bun"
					className="data-[state=active]:bg-primary rounded-sm text-white data-[state=active]:text-white data-[state=active]:shadow-sm"
				>
					bun
				</TabsTrigger>
			</TabsList>

			<TabsContent
				value="npm"
				className="bg-primary/5 flex items-center justify-between px-4 py-2 text-sm leading-relaxed text-zinc-300 max-md:line-clamp-1 max-sm:overflow-x-scroll"
			>
				<div className="flex w-full items-center justify-between gap-2">
					<code className="flex items-center gap-1">
						<span className="text-zinc-300">npx animate-icons</span>{" "}
						<WordRotate
							words={npmCommands}
							onWordChange={(word) =>
								setCurrentCmd(`npx animate-icons ${word}`)
							}
						/>
					</code>

					<Button
						variant="ghost"
						size={"icon"}
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
				className="bg-primary/5 flex flex-row items-center justify-between px-4 py-2 text-sm leading-relaxed text-zinc-300 max-md:line-clamp-1 max-sm:overflow-x-scroll"
			>
				<div className="flex w-full items-center justify-between gap-2">
					<code className="flex items-center gap-1">
						<span className="text-zinc-300">bunx animate-icons</span>{" "}
						<WordRotate
							words={bunCommands}
							onWordChange={(word) =>
								setCurrentCmd(`bunx animate-icons ${word}`)
							}
						/>
					</code>
					<Button
						variant="ghost"
						size={"icon"}
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
