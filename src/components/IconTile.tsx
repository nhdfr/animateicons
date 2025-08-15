"use client";
import { getIconCode } from "@/actions/getIconCode";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { CheckIcon } from "./icons/CheckIcon";
import { CopyIcon } from "./icons/Copy";
import { TerminalIcon } from "./icons/Terminal";

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
				className="hover:bg-primary/15 inline-block cursor-pointer rounded-md p-3"
				size={24}
			/>
			<p className="line-clamp-1 text-gray-300">{item.name}</p>

			<div className="mt-2 flex items-center justify-center gap-6">
				<button
					className="hover:text-primary flex size-6 items-center justify-center"
					onClick={copyCliCommand}
					aria-label={copiedCli ? "CLI Copied" : "Copy CLI Command"}
					data-tooltip-id="my-tooltip"
					data-tooltip-content="copy shadcn/cli command"
				>
					{copiedCli ? <CheckIcon /> : <TerminalIcon size={18} />}
				</button>

				<button
					className="hover:text-primary flex size-6 items-center justify-center"
					onClick={copyToClipboard}
					aria-label={copied ? "Code Copied" : "Copy JSX Code"}
					data-tooltip-id="my-tooltip"
					data-tooltip-content="copy code"
				>
					{copied ? <CheckIcon /> : <CopyIcon size={17} />}
				</button>
			</div>
			<Tooltip
				id="my-tooltip"
				className="bg-gray-100! p-1! px-2! font-medium! text-blue-600!"
				place="bottom"
			/>
		</div>
	);
};

export default IconTile;
