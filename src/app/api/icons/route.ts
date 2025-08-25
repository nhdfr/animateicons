import { Icon_List } from "@/Icons";
import { NextResponse } from "next/server";

type IconResponseItem = {
	name: string;
	keywords: string[];
};

type IconsApiResponse = {
	total: number;
	icons: IconResponseItem[];
};

export async function GET(): Promise<NextResponse<IconsApiResponse>> {
	try {
		const icons: IconResponseItem[] = Icon_List.map((item: IconListItem) => ({
			name: item.name,
			keywords: item.keywords,
		}));

		const response: IconsApiResponse = {
			total: icons.length,
			icons,
		};

		return NextResponse.json(response);
	} catch (err) {
		console.error(err);
		return NextResponse.json({ total: 0, icons: [] });
	}
}
