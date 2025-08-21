import { ActivityIcon } from "./ActivityIcon";
import { AtomIcon } from "./AtomIcon";
import { AudioLinesIcon } from "./AudioLinesIcon";
import { BatteryFullIcon } from "./BatteryFullIcon";
import { BatteryIcon } from "./BatteryIcon";
import { BellIcon } from "./BellIcon";
import { BellMinusIcon } from "./BellMinusIcon";
import { BellPlusIcon } from "./BellPlusIcon";
import { BellRingIcon } from "./BellRingIcon";
import { BicepsFlexedIcon } from "./BicepsFlexedIcon";
import { BlocksIcon } from "./BlocksIcon";
import { BoltIcon } from "./BoltIcon";
import { BookmarkCheckIcon } from "./BookmarkCheckIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { BookmarkMinusIcon } from "./BookmarkMinusIcon";
import { BookmarkPlusIcon } from "./BookmarkPlusIcon";
import { BookmarkXIcon } from "./BookmarkXIcon";
import { BringToFrontIcon } from "./BringToFrontIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronsLeftIcon } from "./ChevronsLeftIcon";
import { ChevronsLeftRightEllipsisIcon } from "./ChevronsLeftRightEllipsisIcon";
import { ChevronsLeftRightIcon } from "./ChevronsLeftRightIcon";
import { ChevronsRightIcon } from "./ChevronsRightIcon";
import { ChevronsRightLeftIcon } from "./ChevronsRightLeftIcon";
import { ChevronUpIcon } from "./ChevronUpIcon";
import { ChromeIcon } from "./ChromeIcon";
import { CircleCheckBigIcon } from "./CircleCheckBigIcon";
import { CircleCheckIcon } from "./CircleCheckIcon";
import { CircleChevronDownIcon } from "./CircleChevronDownIcon";
import { CircleChevronLeftIcon } from "./CircleChevronLeftIcon";
import { CircleChevronRightIcon } from "./CircleChevronRightIcon";
import { CircleChevronUpIcon } from "./CircleChevronUpIcon";
import { CirclePlusIcon } from "./CirclePlusIcon";
import { CopyIcon } from "./CopyIcon";
import { DashboardIcon } from "./DashboardIcon";
import { EllipsisIcon } from "./EllipsisIcon";
import { EllipsisVerticalIcon } from "./EllipsisVerticalIcon";
import { FacebookIcon } from "./FacebookIcon";
import { FigmaIcon } from "./FigmaIcon";
import { FramerIcon } from "./FramerIcon";
import { GithubIcon } from "./GithubIcon";
import { HeadphonesIcon } from "./HeadphonesIcon";
import { HeadphonesOffIcon } from "./HeadphonesOffIcon";
import { HeartIcon } from "./HeartIcon";
import { InfoIcon } from "./InfoIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedinIcon";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { LoaderIcon } from "./LoaderIcon";
import { LockIcon } from "./LockIcon";
import { MailsIcon } from "./MailsIcon";
import { MenuIcon } from "./MenuIcon";
import { MessageCircleIcon } from "./MessageCircleIcon";
import { MicIcon } from "./MicIcon";
import { MicOffIcon } from "./MicOffIcon";
import { MinusIcon } from "./MinusIcon";
import { MoveLeftIcon } from "./MoveLeftIcon";
import { MoveRightIcon } from "./MoveRightIcon";
import { PlusIcon } from "./PlusIcon";
import { SendIcon } from "./SendIcon";
import { ShoppingBagIcon } from "./ShoppingBagIcon";
import { ShoppingCartIcon } from "./ShoppingCartIcon";
import { SnowflakeIcon } from "./SnowFlakeIcon";
import { SprayCanIcon } from "./SprayCanIcon";
import { SwordsIcon } from "./SwordsIcon";
import { TrashIcon } from "./TrashIcon";
import { TwitterIcon } from "./TwitterIcon";
import { UserLockIcon } from "./UserLockIcon";
import { XIcon } from "./XIcon";

const Icon_List: IconListItem[] = [
	// UI & Navigation
	{
		name: "menu",
		icon: MenuIcon,
		keywords: [
			"bars",
			"navigation",
			"hamburger",
			"options",
			"drawer",
			"sidebar",
		],
	},
	{
		name: "ellipsis-vertical",
		icon: EllipsisVerticalIcon,
		keywords: [
			"menu",
			"options",
			"more",
			"overflow",
			"dots",
			"...",
			"vertical",
		],
	},
	{
		name: "ellipsis",
		icon: EllipsisIcon,
		keywords: [
			"etc",
			"loader",
			"progress",
			"pending",
			"menu",
			"options",
			"more",
			"…",
		],
	},
	{
		name: "dashboard",
		icon: DashboardIcon,
		keywords: ["masonry", "brick", "panel", "grid", "widgets", "layout"],
	},
	{
		name: "blocks",
		icon: BlocksIcon,
		keywords: [
			"addon",
			"plugin",
			"integration",
			"extension",
			"package",
			"build",
			"stack",
			"toys",
			"kids",
			"children",
			"learning",
			"squares",
			"corne",
		],
	},
	{
		name: "bring-to-front",
		icon: BringToFrontIcon,
		keywords: [
			"bring",
			"send",
			"move",
			"over",
			"forward",
			"front",
			"overlap",
			"layer",
			"order",
		],
	},
	{
		name: "info",
		icon: InfoIcon,
		keywords: ["help", "i", "information", "about", "details", "tooltip"],
	},

	{
		name: "circle-check",
		icon: CircleCheckIcon,
		keywords: ["done", "todo", "tick", "complete", "task"],
	},
	{
		name: "circle-check-big",
		icon: CircleCheckBigIcon,
		keywords: ["done", "todo", "tick", "complete", "task"],
	},
	{
		name: "circle-chevron-down",
		icon: CircleChevronDownIcon,
		keywords: ["dropdown", "expand", "menu", "arrow", "direction", "chevron"],
	},
	{
		name: "circle-chevron-left",
		icon: CircleChevronLeftIcon,
		keywords: ["back", "previous", "menu", "<", "caret", "collapse"],
	},
	{
		name: "circle-chevron-right",
		icon: CircleChevronRightIcon,
		keywords: ["forward", "next", "menu", ">", "code", "caret", "expand"],
	},
	{
		name: "circle-chevron-up",
		icon: CircleChevronUpIcon,
		keywords: [
			"arrow",
			"direction",
			"collapse",
			"dropdown",
			"menu",
			"less",
			"caret",
		],
	},

	// Arrows & Direction
	{
		name: "chevron-left",
		icon: ChevronLeftIcon,
		keywords: ["back", "previous", "menu", "<", "caret", "collapse"],
	},
	{
		name: "chevron-right",
		icon: ChevronRightIcon,
		keywords: ["forward", "next", "menu", ">", "code", "caret", "expand"],
	},
	{
		name: "chevron-up",
		icon: ChevronUpIcon,
		keywords: [
			"arrow",
			"direction",
			"collapse",
			"dropdown",
			"menu",
			"less",
			"caret",
		],
	},
	{
		name: "chevron-down",
		icon: ChevronDownIcon,
		keywords: [
			"arrow",
			"direction",
			"expand",
			"dropdown",
			"menu",
			"more",
			"caret",
		],
	},
	{
		name: "move-left",
		icon: MoveLeftIcon,
		keywords: ["arrow", "direction", "back", "west", "pan", "reorder"],
	},
	{
		name: "move-right",
		icon: MoveRightIcon,
		keywords: ["arrow", "direction", "next", "east", "pan", "reorder"],
	},
	{
		name: "chevrons-left",
		icon: ChevronsLeftIcon,
		keywords: ["turn", "corner", "back", "double", "rewind", "jump"],
	},
	{
		name: "chevrons-right",
		icon: ChevronsRightIcon,
		keywords: ["turn", "corner", "forward", "double", "fast-forward", "jump"],
	},
	{
		name: "chevrons-left-right",
		icon: ChevronsLeftRightIcon,
		keywords: ["expand", "horizontal", "unfold", "resize", "swap", "stretch"],
	},
	{
		name: "chevrons-right-left",
		icon: ChevronsRightLeftIcon,
		keywords: ["collapse", "fold", "horizontal", "resize", "swap", "compress"],
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
			"data",
			"sync",
		],
	},

	// Actions
	{
		name: "plus",
		icon: PlusIcon,
		keywords: [
			"add",
			"new",
			"increase",
			"positive",
			"toolbar",
			"upgrade",
			"+",
			"create",
		],
	},
	{
		name: "circle-plus",
		icon: CirclePlusIcon,
		keywords: [
			"add",
			"new",
			"increase",
			"increment",
			"target",
			"aim",
			"scope",
			"join",
			"operator",
		],
	},
	{
		name: "minus",
		icon: MinusIcon,
		keywords: [
			"subtract",
			"remove",
			"decrease",
			"reduce",
			"line",
			"divider",
			"-",
			"deduct",
		],
	},
	{
		name: "X",
		icon: XIcon,
		keywords: [
			"cancel",
			"close",
			"delete",
			"remove",
			"clear",
			"multiply",
			"dismiss",
			"exit",
		],
	},
	{
		name: "copy",
		icon: CopyIcon,
		keywords: ["clone", "duplicate", "multiple", "clipboard", "copy"],
	},
	{
		name: "send",
		icon: SendIcon,
		keywords: [
			"message",
			"chat",
			"mail",
			"submit",
			"forward",
			"share",
			"paper-plane",
		],
	},
	{
		name: "trash",
		icon: TrashIcon,
		keywords: [
			"empty",
			"deletion",
			"cleanup",
			"junk",
			"clear",
			"garbage",
			"delete",
			"remove",
			"bin",
			"waste",
			"discard",
		],
	},
	{
		name: "bookmark",
		icon: BookmarkIcon,
		keywords: ["read", "clip", "marker", "tag", "save", "favorite"],
	},
	{
		name: "bookmark-check",
		icon: BookmarkCheckIcon,
		keywords: [
			"finished",
			"complete",
			"clip",
			"tag",
			"done",
			"saved",
			"verified",
		],
	},
	{
		name: "bookmark-plus",
		icon: BookmarkPlusIcon,
		keywords: ["clip", "tag", "add", "plus", "save", "favorite"],
	},
	{
		name: "bookmark-minus",
		icon: BookmarkMinusIcon,
		keywords: ["clip", "tag", "delete", "remove", "unsave", "minus"],
	},
	{
		name: "bookmark-x",
		icon: BookmarkXIcon,
		keywords: [
			"cancel",
			"close",
			"delete",
			"remove",
			"clear",
			"unsave",
			"unbookmark",
		],
	},

	// Communication & Media
	{
		name: "message-circle",
		icon: MessageCircleIcon,
		keywords: [
			"comment",
			"chat",
			"conversation",
			"feedback",
			"speech bubble",
			"reply",
			"discussion",
		],
	},
	{
		name: "mails",
		icon: MailsIcon,
		keywords: [
			"email",
			"envelope",
			"communication",
			"message",
			"mailbox",
			"inbox",
			"newsletter",
		],
	},
	{
		name: "mic",
		icon: MicIcon,
		keywords: [
			"record",
			"sound",
			"listen",
			"radio",
			"podcast",
			"microphone",
			"voice",
			"input",
		],
	},
	{
		name: "mic-off",
		icon: MicOffIcon,
		keywords: [
			"mute",
			"record",
			"sound",
			"disable",
			"microphone",
			"no audio",
			"silence",
		],
	},
	{
		name: "headphones",
		icon: HeadphonesIcon,
		keywords: ["music", "audio", "sound", "listen", "headset", "monitor"],
	},
	{
		name: "headphones-off",
		icon: HeadphonesOffIcon,
		keywords: ["music", "audio", "mute", "off", "disabled", "no sound"],
	},
	{
		name: "audio-lines",
		icon: AudioLinesIcon,
		keywords: [
			"equaliser",
			"sound",
			"music",
			"frequency",
			"track",
			"voice",
			"levels",
			"spectrum",
		],
	},
	{
		name: "send",
		icon: SendIcon,
		keywords: [
			"message",
			"chat",
			"mail",
			"submit",
			"forward",
			"share",
			"paper-plane",
		],
	}, // duplicate kept near messaging for discovery

	// Notifications
	{
		name: "bell",
		icon: BellIcon,
		keywords: ["alarm", "notification", "sound", "reminder", "alert", "ping"],
	},
	{
		name: "bell-ring",
		icon: BellRingIcon,
		keywords: [
			"alarm",
			"notification",
			"sound",
			"reminder",
			"alert",
			"active",
			"ringing",
		],
	},
	{
		name: "bell-plus",
		icon: BellPlusIcon,
		keywords: [
			"notification",
			"reminder",
			"add",
			"create",
			"new",
			"subscribe",
			"enable",
		],
	},
	{
		name: "bell-minus",
		icon: BellMinusIcon,
		keywords: [
			"alarm",
			"notification",
			"silent",
			"delete",
			"remove",
			"mute",
			"disable",
			"unsubscribe",
		],
	},

	// Security & Privacy
	{
		name: "lock",
		icon: LockIcon,
		keywords: [
			"security",
			"password",
			"secure",
			"admin",
			"lock",
			"protected",
			"private",
		],
	},
	{
		name: "user-lock",
		icon: UserLockIcon,
		keywords: [
			"person",
			"lock",
			"locked",
			"account",
			"secure",
			"privacy",
			"access control",
		],
	},

	// Commerce
	{
		name: "shopping-cart",
		icon: ShoppingCartIcon,
		keywords: [
			"trolley",
			"cart",
			"basket",
			"store",
			"purchase",
			"e-commerce",
			"checkout",
		],
	},
	{
		name: "shopping-bag",
		icon: ShoppingBagIcon,
		keywords: [
			"ecommerce",
			"cart",
			"purchase",
			"store",
			"bag",
			"retail",
			"order",
		],
	},

	// Social & Brands
	{
		name: "github",
		icon: GithubIcon,
		keywords: [
			"logo",
			"version control",
			"git",
			"repository",
			"code",
			"octocat",
		],
	},
	{
		name: "twitter",
		icon: TwitterIcon,
		keywords: ["logo", "social", "x", "twitter", "tweet", "post"],
	},
	{
		name: "facebook",
		icon: FacebookIcon,
		keywords: ["logo", "social", "facebook", "social media", "friends", "meta"],
	},
	{
		name: "linkedin",
		icon: LinkedInIcon,
		keywords: ["logo", "social", "linkedin", "social media", "jobs", "network"],
	},
	{
		name: "instagram",
		icon: InstagramIcon,
		keywords: ["logo", "social", "insta", "social media", "photos", "reels"],
	},
	{
		name: "chrome",
		icon: ChromeIcon,
		keywords: ["browser", "web", "internet", "google", "search"],
	},
	{
		name: "figma",
		icon: FigmaIcon,
		keywords: ["logo", "design", "tool", "ui/ux", "prototype"],
	},
	{
		name: "framer",
		icon: FramerIcon,
		keywords: ["logo", "design", "tool", "motion", "animation", "prototyping"],
	},

	// Status & System
	{
		name: "loader",
		icon: LoaderIcon,
		keywords: ["loading", "wait", "busy", "progress", "spinner"],
	},
	{
		name: "loader-circle",
		icon: LoaderCircleIcon,
		keywords: ["loading", "progress", "spinner", "circle", "busy", "indicator"],
	},
	{
		name: "battery-full",
		icon: BatteryFullIcon,
		keywords: ["power", "charge", "energy", "full", "status", "100%"],
	},
	{
		name: "battery",
		icon: BatteryIcon,
		keywords: ["power", "charge", "energy", "status", "level"],
	},

	// Miscellaneous
	{
		name: "heart",
		icon: HeartIcon,
		keywords: ["like", "love", "emotion", "favourite", "favorite", "react"],
	},
	{
		name: "activity",
		icon: ActivityIcon,
		keywords: [
			"pulse",
			"motion",
			"health",
			"fitness",
			"waveform",
			"monitor",
			"analytics",
		],
	},
	{
		name: "snow-flake",
		icon: SnowflakeIcon,
		keywords: ["cold", "weather", "snow", "winter", "ice", "freeze"],
	},
	{
		name: "atom",
		icon: AtomIcon,
		keywords: [
			"atomic",
			"nuclear",
			"physics",
			"energy",
			"chemistry",
			"science",
		],
	},
	{
		name: "biceps-flexed",
		icon: BicepsFlexedIcon,
		keywords: ["arm", "muscle", "strong", "workout", "fitness", "strength"],
	},
	{
		name: "bolt",
		icon: BoltIcon,
		keywords: [
			"nut",
			"screw",
			"settings",
			"configuration",
			"parts",
			"hardware",
			"wrench",
		],
	},
	{
		name: "spray-can",
		icon: SprayCanIcon,
		keywords: ["paint", "color", "graffiti", "decoration", "aerosol", "art"],
	},
	{
		name: "swords",
		icon: SwordsIcon,
		keywords: ["battle", "challenge", "game", "war", "weapon", "fight", "duel"],
	},
];

export { Icon_List };
