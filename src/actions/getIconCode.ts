"use server";

import fs from "node:fs";
import path from "node:path";

export async function getIconCode(iconName: string) {
	try {
		const ROOT = process.cwd();
		const ICONS_DIR = path.join(ROOT, "src", "Icons");

		const pascalName =
			iconName
				.split("-")
				.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
				.join("") + "Icon";

		const filePath = path.join(ICONS_DIR, `${pascalName}.tsx`);

		if (!fs.existsSync(filePath)) {
			throw new Error(`Icon file not found: ${filePath}`);
		}

		const content = fs.readFileSync(filePath, "utf8");
		return content;
	} catch (err) {
		console.error(err);
		return "";
	}
}
