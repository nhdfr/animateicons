import { ActivityIcon } from "./ActivityIcon";
import { AtomIcon } from "./AtomIcon";
import { AudioLinesIcon } from "./AudioLinesIcon";
import { BellIcon } from "./BellIcon";
import { BellMinusIcon } from "./BellMinusIcon";
import { BellPlusIcon } from "./BellPlusIcon";
import { BellRingIcon } from "./BellRingIcon";
import { BicepsFlexedIcon } from "./BicepsFlexedIcon";
import { BoltIcon } from "./BoltIcon";
import { BookmarkCheckIcon } from "./BookmarkCheckIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { BookmarkMinusIcon } from "./BookmarkMinusIcon";
import { BookmarkPlusIcon } from "./BookmarkPlusIcon";
import { BookmarkXIcon } from "./BookmarkXIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronsLeftIcon } from "./ChevronsLeftIcon";
import { ChevronsLeftRightEllipsisIcon } from "./ChevronsLeftRightEllipsisIcon";
import { ChevronsLeftRightIcon } from "./ChevronsLeftRightIcon";
import { ChevronsRightIcon } from "./ChevronsRightIcon";
import { ChevronsRightLeftIcon } from "./ChevronsRightLeftIcon";
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
import { LinkedInIcon } from "./LinkedInIcon";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { LoaderIcon } from "./LoaderIcon";
import { LockIcon } from "./LockIcon";
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
import { TwitterIcon } from "./TwitterIcon";
import { UserLockIcon } from "./UserLockIcon";
import { XIcon } from "./XIcon";

const Icon_List: IconListItem[] = [
	// UI & Navigation
	{
		name: "menu",
		icon: MenuIcon,
		keywords: ["bars", "navigation", "hamburger", "options"],
	},
	{
		name: "ellipsis-vertical",
		icon: EllipsisVerticalIcon,
		keywords: ["menu", "options", "more", "overflow", "dots", "..."],
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
		],
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
		keywords: ["turn", "corner", "back"],
	},
	{
		name: "chevrons-right",
		icon: ChevronsRightIcon,
		keywords: ["turn", "corner", "forward"],
	},
	{
		name: "chevrons-left-right",
		icon: ChevronsLeftRightIcon,
		keywords: ["expand", "horizontal", "unfold", "resize", "swap"],
	},
	{
		name: "chevrons-right-left",
		icon: ChevronsRightLeftIcon,
		keywords: ["collapse", "fold", "horizontal", "resize", "swap"],
	},
	{
		name: "chevrons-left-right-ellipsis",
		icon: ChevronsLeftRightEllipsisIcon,
		keywords: ["internet", "network", "connection", "cable", "router", "data"],
	},

	// Actions
	{
		name: "plus",
		icon: PlusIcon,
		keywords: ["add", "new", "increase", "positive", "toolbar", "upgrade", "+"],
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
		],
	},
	{
		name: "X",
		icon: XIcon,
		keywords: ["cancel", "close", "delete", "remove", "clear", "multiply"],
	},
	{
		name: "copy",
		icon: CopyIcon,
		keywords: ["clone", "duplicate", "multiple", "clipboard"],
	},
	{
		name: "send",
		icon: SendIcon,
		keywords: ["message", "chat", "mail", "submit", "forward"],
	},
	{
		name: "message-circle",
		icon: MessageCircleIcon,
		keywords: ["comment", "chat", "conversation", "feedback", "speech bubble"],
	},

	// Notifications
	{
		name: "bell",
		icon: BellIcon,
		keywords: ["alarm", "notification", "sound", "reminder"],
	},
	{
		name: "bell-ring",
		icon: BellRingIcon,
		keywords: ["alarm", "notification", "sound", "reminder", "alert"],
	},
	{
		name: "bell-plus",
		icon: BellPlusIcon,
		keywords: ["notification", "reminder", "add", "create", "new"],
	},
	{
		name: "bell-minus",
		icon: BellMinusIcon,
		keywords: ["alarm", "notification", "silent", "delete", "remove", "mute"],
	},

	// Security
	{
		name: "lock",
		icon: LockIcon,
		keywords: ["security", "password", "secure", "admin", "lock"],
	},
	{
		name: "user-lock",
		icon: UserLockIcon,
		keywords: ["person", "lock", "locked", "account", "secure", "privacy"],
	},

	// Media
	{
		name: "mic",
		icon: MicIcon,
		keywords: ["record", "sound", "listen", "radio", "podcast", "microphone"],
	},
	{
		name: "mic-off",
		icon: MicOffIcon,
		keywords: ["mute", "record", "sound", "disable", "microphone"],
	},
	{
		name: "headphones",
		icon: HeadphonesIcon,
		keywords: ["music", "audio", "sound", "listen"],
	},
	{
		name: "headphones-off",
		icon: HeadphonesOffIcon,
		keywords: ["music", "audio", "mute", "off", "disabled"],
	},
	{
		name: "audio-lines",
		icon: AudioLinesIcon,
		keywords: ["equaliser", "sound", "music", "frequency", "track", "voice"],
	},

	// Social & Brands
	{
		name: "github",
		icon: GithubIcon,
		keywords: ["logo", "version control", "git", "repository"],
	},
	{
		name: "twitter",
		icon: TwitterIcon,
		keywords: ["logo", "social", "x", "twitter", "tweet"],
	},
	{
		name: "facebook",
		icon: FacebookIcon,
		keywords: ["logo", "social", "facebook", "social media"],
	},
	{
		name: "linkedin",
		icon: LinkedInIcon,
		keywords: ["logo", "social", "linkedin", "social media", "jobs"],
	},
	{
		name: "instagram",
		icon: InstagramIcon,
		keywords: ["logo", "social", "insta", "social media", "photos"],
	},
	{
		name: "figma",
		icon: FigmaIcon,
		keywords: ["logo", "design", "tool", "ui/ux"],
	},
	{
		name: "framer",
		icon: FramerIcon,
		keywords: ["logo", "design", "tool", "motion", "animation"],
	},

	// Commerce
	{
		name: "shopping-cart",
		icon: ShoppingCartIcon,
		keywords: ["trolley", "cart", "basket", "store", "purchase", "e-commerce"],
	},
	{
		name: "shopping-bag",
		icon: ShoppingBagIcon,
		keywords: ["ecommerce", "cart", "purchase", "store", "bag"],
	},
	{
		name: "bookmark",
		icon: BookmarkIcon,
		keywords: ["read", "clip", "marker", "tag", "save"],
	},
	{
		name: "bookmark-check",
		icon: BookmarkCheckIcon,
		keywords: ["finished", "complete", "clip", "tag", "done"],
	},
	{
		name: "bookmark-plus",
		icon: BookmarkPlusIcon,
		keywords: ["clip", "tag", "add", "plus", "save"],
	},
	{
		name: "bookmark-minus",
		icon: BookmarkMinusIcon,
		keywords: ["clip", "tag", "delete", "remove"],
	},
	{
		name: "bookmark-x",
		icon: BookmarkXIcon,
		keywords: ["cancel", "close", "delete", "remove", "clear"],
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
		keywords: ["loading", "progress", "spinner", "circle", "busy"],
	},
	{
		name: "info",
		icon: InfoIcon,
		keywords: ["help", "i", "information", "about"],
	},
	{
		name: "dashboard",
		icon: DashboardIcon,
		keywords: ["masonry", "brick", "panel", "grid"],
	},

	// Miscellaneous
	{
		name: "heart",
		icon: HeartIcon,
		keywords: ["like", "love", "emotion", "favourite"],
	},
	{
		name: "activity",
		icon: ActivityIcon,
		keywords: ["pulse", "motion", "health", "fitness", "waveform", "monitor"],
	},
	{
		name: "snow-flake",
		icon: SnowflakeIcon,
		keywords: ["cold", "weather", "snow", "winter", "ice"],
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
	{
		name: "bolt",
		icon: BoltIcon,
		keywords: ["nut", "screw", "settings", "configuration", "parts"],
	},
	{
		name: "spray-can",
		icon: SprayCanIcon,
		keywords: ["paint", "color", "graffiti", "decoration", "aerosol"],
	},
	{
		name: "swords",
		icon: SwordsIcon,
		keywords: ["battle", "challenge", "game", "war", "weapon", "fight"],
	},
];

export { Icon_List };
