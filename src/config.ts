import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Travellings Blog",
	subtitle: "友链接力",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 183, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "关于",
			url: "https://www.travellings.cn/docs/",
			external: true,
		},
		{
			name: "Travellinks！",
			url: "https://www.travellings.cn/go.html",
			external: true,
		},
		{
			name: "GitHub",
			url: "https://github.com/travellings-link",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/icon/travellings.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Travellings Team",
	bio: "The power of friendship links",
	links: [
		//{
		//	name: "Twitter",
		//	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		//	// You will need to install the corresponding icon set if it's not already included
		//	// `pnpm add @iconify-json/<icon-set-name>`
		//	url: "https://twitter.com",
		//},
		//{
		//	name: "Steam",
		//	icon: "fa6-brands:steam",
		//	url: "https://store.steampowered.com",
		//},
		{
			name: "Website",
			icon: "mdi:web",
			url: "https://www.travellings.cn",
		},
		{
			name: "GitHub",
			icon: "mdi:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
