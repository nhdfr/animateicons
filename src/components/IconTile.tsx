"use client";
import { getIconCode } from "@/actions/getIconCode";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CopyIcon } from "@/Icons/CopyIcon";
import { TerminalIcon } from "@/Icons/TerminalIcon";
import React, { useState } from "react";
import { CheckIcon } from "./icons/CheckIcon";

type Props = {
	item: IconListItem;
};

const IconTile: React.FC<Props> = ({ item }) => {
	const [copied, setCopied] = useState(false);
	const [copiedCli, setCopiedCli] = useState(false);
	const IconComponent = item.icon;

	const copyToClipboard = async () => {
		const code = await getIconCode(item.name);
		if (code) {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		}
	};

	const copyCliCommand = async () => {
		let cliTool = "npx";
		if (typeof window !== "undefined") {
			const savedTab = localStorage.getItem("tab");
			if (savedTab === "bun") {
				cliTool = "bunx";
			}
			if (savedTab === "pnpm") {
				cliTool = "pnpm dlx";
			}
		}

		const command = `${cliTool} shadcn@latest add "https://animateicons.vercel.app/icons/${item.name}.json"`;
		await navigator.clipboard.writeText(command);
		setCopiedCli(true);
		setTimeout(() => setCopiedCli(false), 1500);
	};

	return (
		<div className="bg-primary/10 border-primary/20 relative flex w-full flex-col items-center justify-center gap-2 rounded-md border p-4 text-sm text-white shadow-lg">
			<IconComponent
				className="hover:bg-primary/15 inline-block cursor-pointer rounded-xl p-3"
				size={24}
			/>
			<p className="line-clamp-1 text-gray-300">{item.name}</p>

			<div className="mt-2 flex items-center justify-center gap-6">
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className="hover:text-primary flex size-6 items-center justify-center"
							onClick={copyCliCommand}
							aria-label={copiedCli ? "CLI Copied" : "Copy CLI Command"}
						>
							{copiedCli ? <CheckIcon /> : <TerminalIcon size={18} />}
						</button>
					</TooltipTrigger>
					<TooltipContent
						side="bottom"
						className="px-3! py-1.5! font-medium! text-blue-600!"
					>
						copy shadcn/cli command
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className="hover:text-primary flex size-6 items-center justify-center"
							onClick={copyToClipboard}
							aria-label={copied ? "Code Copied" : "Copy JSX Code"}
						>
							{copied ? <CheckIcon /> : <CopyIcon size={17} />}
						</button>
					</TooltipTrigger>
					<TooltipContent
						side="bottom"
						className="px-3! py-1.5! font-medium! text-blue-600!"
					>
						copy code
					</TooltipContent>
				</Tooltip>
			</div>
		</div>
	);
};

export default IconTile;
