import { AtomIcon } from "./AtomIcon";
import { BicepsFlexedIcon } from "./BicepsFlexedIcon";
import { CopyIcon } from "./CopyIcon";
import { EllipsisIcon } from "./EllipsisIcon";
import { GithubIcon } from "./GithubIcon";
import { HeartIcon } from "./HeartIcon";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { LoaderIcon } from "./LoaderIcon";
import { LockIcon } from "./LockIcon";
import { SnowflakeIcon } from "./SnowFlakeIcon";
import { UserLockIcon } from "./UserLockIcon";
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
		name: "close",
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
	{
		name: "copy",
		icon: CopyIcon,
		keywords: ["clone", "duplicate", "multiple"],
	},
	{
		name: "loader",
		icon: LoaderIcon,
		keywords: [
			"loading",
			"wait",
			"busy",
			"progress",
			"spinner",
			"spinning",
			"throbber",
		],
	},
	{
		name: "loader-circle",
		icon: LoaderCircleIcon,
		keywords: [
			"loading",
			"wait",
			"busy",
			"progress",
			"spinner",
			"spinning",
			"throbber",
			"circle",
		],
	},
	{
		name: "ellipsis",
		icon: EllipsisIcon,
		keywords: [
			"et cetera",
			"etc",
			"loader",
			"loading",
			"progress",
			"pending",
			"throbber",
			"menu",
			"options",
			"operator",
			"code",
			"coding",
			"spread",
			"rest",
			"more",
			"further",
			"extra",
			"overflow",
			"dots",
			"…",
			"...",
		],
	},
	{
		name: "lock",
		icon: LockIcon,
		keywords: ["security", "password", "secure", "admin"],
	},
	{
		name: "user-lock",
		icon: UserLockIcon,
		keywords: ["person", "lock", "locked", "account", "secure"],
	},
];

export { Icon_List };
