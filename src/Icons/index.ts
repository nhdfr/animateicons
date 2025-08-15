import { AtomIcon } from "./AtomIcon";
import { BicepsFlexedIcon } from "./BicepsFlexedIcon";
import { GithubIcon } from "./GithubIcon";
import { HeartIcon } from "./HeartIcon";
import { SnowflakeIcon } from "./SnowFlakeIcon";
import { XIcon } from "./XIcon";

const Icon_List: IconListItem[] = [
	{
		name: "biceps-flexed",
		icon: BicepsFlexedIcon,
		keywords: [
			"arm",
			"muscle",
			"strong",
			"working out",
			"athletic",
			"toned",
			"muscular",
			"forelimb",
			"curled",
		],
	},
	{
		name: "atom",
		icon: AtomIcon,
		keywords: [
			"atomic",
			"nuclear",
			"physics",
			"particle",
			"element",
			"molecule",
			"electricity",
			"energy",
			"chemistry",
		],
	},
	{
		name: "X",
		icon: XIcon,
		keywords: [
			"cancel",
			"close",
			"cross",
			"delete",
			"ex",
			"remove",
			"times",
			"clear",
			"math",
			"multiply",
			"multiplication",
		],
	},
	{
		name: "snow-flake",
		icon: SnowflakeIcon,
		keywords: ["cold", "weather", "freeze", "snow", "winter"],
	},
	{
		name: "github",
		icon: GithubIcon,
		keywords: ["logo", " version control"],
	},
	{
		name: "heart",
		icon: HeartIcon,
		keywords: ["like", "love", "emotion", "suit", "playing", "cards"],
	},
];

export { Icon_List };
