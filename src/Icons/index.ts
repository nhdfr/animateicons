import { AtomIcon } from "./AtomIcon";
import { AudioLinesIcon } from "./AudioLinesIcon";
import { BicepsFlexedIcon } from "./BicepsFlexedIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronsLeftIcon } from "./ChevronsLeftIcon";
import { ChevronsLeftRightEllipsisIcon } from "./ChevronsLeftRightEllipsisIcon";
import { ChevronsLeftRightIcon } from "./ChevronsLeftRightIcon";
import { ChevronsRightIcon } from "./ChevronsRightIcon";
import { ChevronsRightLeftIcon } from "./ChevronsRightLeftIcon";
import { CopyIcon } from "./CopyIcon";
import { EllipsisIcon } from "./EllipsisIcon";
import { EllipsisVerticalIcon } from "./EllipsisVerticalIcon";
import { GithubIcon } from "./GithubIcon";
import { HeartIcon } from "./HeartIcon";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { LoaderIcon } from "./LoaderIcon";
import { LockIcon } from "./LockIcon";
import { MenuIcon } from "./MenuIcon";
import { MoveLeftIcon } from "./MoveLeftIcon";
import { MoveRightIcon } from "./MoveRightIcon";
import { SnowflakeIcon } from "./SnowFlakeIcon";
import { UserLockIcon } from "./UserLockIcon";
import { XIcon } from "./XIcon";

const Icon_List: IconListItem[] = [
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
		name: "menu",
		icon: MenuIcon,
		keywords: ["bars", "navigation", "hamburger", "options"],
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
		keywords: ["loading", "wait", "busy", "progress", "spinner", "circle"],
	},
	{
		name: "copy",
		icon: CopyIcon,
		keywords: ["clone", "duplicate", "multiple"],
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
	{
		name: "heart",
		icon: HeartIcon,
		keywords: ["like", "love", "emotion", "suit", "playing", "cards"],
	},
	{
		name: "github",
		icon: GithubIcon,
		keywords: ["logo", "version control"],
	},

	{
		name: "ellipsis",
		icon: EllipsisIcon,
		keywords: [
			"etc",
			"loader",
			"loading",
			"progress",
			"pending",
			"menu",
			"options",
			"more",
			"dots",
			"...",
		],
	},
	{
		name: "ellipsis-vertical",
		icon: EllipsisVerticalIcon,
		keywords: ["menu", "options", "more", "overflow", "dots", "..."],
	},

	{
		name: "chevron-left",
		icon: ChevronLeftIcon,
		keywords: ["back", "previous", "menu", "<"],
	},
	{
		name: "chevron-right",
		icon: ChevronRightIcon,
		keywords: ["forward", "next", "menu", ">", "code"],
	},
	{
		name: "move-left",
		icon: MoveLeftIcon,
		keywords: ["arrow", "direction", "back", "west"],
	},
	{
		name: "move-right",
		icon: MoveRightIcon,
		keywords: ["arrow", "direction", "next", "east"],
	},
	{
		name: "chevrons-left",
		icon: ChevronsLeftIcon,
		keywords: ["turn", "corner"],
	},
	{
		name: "chevrons-right",
		icon: ChevronsRightIcon,
		keywords: ["turn", "corner"],
	},
	{
		name: "chevrons-left-right",
		icon: ChevronsLeftRightIcon,
		keywords: ["expand", "horizontal", "unfold"],
	},
	{
		name: "chevrons-right-left",
		icon: ChevronsRightLeftIcon,
		keywords: ["collapse", "fold", "horizontal"],
	},
	{
		name: "chevrons-left-right-ellipsis",
		icon: ChevronsLeftRightEllipsisIcon,
		keywords: [
			"internet",
			"network",
			"connection",
			"cable",
			"router",
			"socket",
			"data",
			"input",
			"output",
		],
	},

	{
		name: "audio-lines",
		icon: AudioLinesIcon,
		keywords: [
			"equaliser",
			"sound",
			"noise",
			"music",
			"frequency",
			"track",
			"playback",
			"radio",
			"voice",
			"vocals",
			"singer",
		],
	},

	{
		name: "snow-flake",
		icon: SnowflakeIcon,
		keywords: ["cold", "weather", "snow", "winter"],
	},
	{
		name: "atom",
		icon: AtomIcon,
		keywords: ["atomic", "nuclear", "physics", "energy", "chemistry"],
	},
	{
		name: "biceps-flexed",
		icon: BicepsFlexedIcon,
		keywords: ["arm", "muscle", "strong", "workout", "fitness"],
	},
];

export { Icon_List };
