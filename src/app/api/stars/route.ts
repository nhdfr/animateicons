import { NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await fetch(
			"https://api.github.com/repos/Avijit07x/animateicons",
			{
				headers: {},
				next: { revalidate: 3600 },
			},
		);

		if (!res.ok) {
			return NextResponse.json({ stars: null }, { status: res.status });
		}

		const data = await res.json();
		return NextResponse.json({ stars: data.stargazers_count as number });
	} catch (error) {
		console.error("Error fetching stars:", error);
		return NextResponse.json({ stars: null }, { status: 500 });
	}
}
