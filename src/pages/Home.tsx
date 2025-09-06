import { ParallaxBanner } from "react-scroll-parallax"
import cls from "./Home.module.scss"
import Hoshino from "./../assets/images/hoshino.webp"
import Bocchi from "./../assets/images/bocchi.webp"
import { Element } from "react-scroll"
import {
	AspectRatio,
	Badge,
	Button,
	Card,
	Grid,
	Heading,
	IconButton,
	Link,
	Text,
	Tooltip,
} from "@radix-ui/themes"
import {
	PiCodeDuotone,
	PiDiscordLogoDuotone,
	PiEnvelopeDuotone,
	PiGithubLogoDuotone,
	PiHeartDuotone,
	PiInfoDuotone,
	PiMagicWandDuotone,
	PiPhoneCallDuotone,
	PiTelegramLogoDuotone,
	PiTwitterLogoDuotone,
} from "react-icons/pi"
import type { BaseButtonProps } from "@radix-ui/themes/src/components/base-button.js"

import tsIcon from "./../assets/icons/ts.svg"
import jsIcon from "./../assets/icons/js.svg"
import nodeJSIcon from "./../assets/icons/node-js.svg"
import phpIcon from "./../assets/icons/php.svg"
import reactIcon from "./../assets/icons/react.svg"
import csIcon from "./../assets/icons/cs.svg"
import goIcon from "./../assets/icons/go.svg"
import cppIcon from "./../assets/icons/cpp.svg"
import psIcon from "./../assets/icons/ps.svg"

import BMP_0 from "./../assets/projects/bmp_0.webp"
import SOUNDDARK from "./../assets/projects/sounddark.webp"
import GSVN from "./../assets/projects/gamestorevn.com_.webp"
import TinyDRPC from "./../assets/projects/tinydrpc.webp"
import tcvn2uni from "./../assets/projects/tcvn2uni.webp"
import nyanspace from "./../assets/projects/nyanspace.webp"
import banner from "./../assets/images/bocchibanner.jfif"
import luckit from "./../assets/projects/luckit.webp"

const ListSocial = [
	{
		name: "Discord",
		icon: <PiDiscordLogoDuotone size={25} />,
		url: "https://discord.com/users/536175851247501347",
	},
	{
		name: "GitHub",
		icon: <PiGithubLogoDuotone size={25} />,
		url: "https://github.com/codeonbeans",
	},
	{
		name: "Twitter",
		icon: <PiTwitterLogoDuotone size={25} />,
		url: "https://twitter.com/codeonbeans",
	},
	{
		name: "Email",
		icon: <PiEnvelopeDuotone size={25} />,
		url: "mailto:codeonbeans@gmail.com",
	},
	{
		name: "Telegram",
		icon: <PiTelegramLogoDuotone size={25} />,
		url: "https://t.me/codeonbeans",
	},
]

const List = [
	{
		image: luckit,
		name: "shopnexus",
		type: "SaaS",
		description:
			"Open source ecommerce B2B platform for wholesale, built with Go and sqlc. Microservices-based e-commerce platform built on an event-driven architecture (Choreography SAGA)",
		tech: ["go", "shadcn/ui"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/shopnexus/shopnexus-remastered",
			},
			{
				name: "Demo",
				url: "https://github.com/wagecloud/wagecloud-server/",
			},
		],
	},
	{
		image: TinyDRPC,
		name: "wagecloud",
		type: "SaaS",
		description: "Creating and renting virtual machines",
		tech: ["go", "libvirt", "shadcn/ui"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/wagecloud/wagecloud-server/",
			},
			{
				name: "Demo",
				url: "https://github.com/wagecloud/wagecloud-server/",
			},
		],
	},
	{
		image: TinyDRPC,
		name: "botfetchr",
		type: "Bot",
		description:
			"Telegram bot for downloading videos and photos from multiple social platforms with concurrent processing.",
		tech: ["go", "telegram"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/codeonbeans/botfetchr",
			},
			{
				name: "Demo",
				url: "https://github.com/codeonbeans/botfetchr",
			},
		],
	},
	{
		image: nyanspace,
		name: "beanspace",
		type: "Docker",
		description:
			"Custom development environment for my projects (Jenkins, Sonarqube, etc.)",
		tech: ["devops"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/codeonbeans/beanspace",
			},
		],
	},
	{
		image: tcvn2uni,
		name: "gunsurvival",
		type: "Multiplayer game",
		description:
			"2D top-down multiplayer survival game, made with pixi.js and colyseus",
		tech: ["pixijs", "colyseus", "typeScript"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/gunsurvival/gunsurvival3",
			},
			{
				name: "Demo",
				url: "https://github.com/gunsurvival/gunsurvival3",
			},
		],
	},
	{
		image: SOUNDDARK,
		name: "socketio-mq",
		type: "Lib",
		description:
			"Type-safe message broker via Socket.IO, handling real-time communication and event-driven architecture",
		tech: ["typescript", "socket.io"],
		buttons: [
			{
				name: "GitHub",
				url: "https://github.com/codeonbeans/socketio-mq",
			},
		],
	},
	{
		image: GSVN,
		name: "fingerprint-recognition",
		type: "Website",
		description:
			"Demonstrate fingerprint recognition with Gaussian filtering — register, compare, and manage fingerprint data using deep learning models.",
		tech: ["opencv2", "scikit-learn", "shadcn/ui"],
		buttons: [
			{
				name: "Github",
				url: "https://github.com/codeonbeans/fingerprint-recognition",
			},
			{
				name: "Demo",
				url: "https://github.com/codeonbeans/fingerprint-recognition",
			},
		],
	},
	{
		image: GSVN,
		name: "smartcine",
		type: "Website",
		description:
			"Momo Cinema replica — built from scratch (no AI), using shadcn/ui and Radix UI.",
		tech: ["shadcn/ui", "radix-ui", "tailwindcss", "nestjs", "prisma"],
		buttons: [
			{
				name: "Github",
				url: "https://github.com/smart-cine",
			},
			{
				name: "Demo",
				url: "https://smartcine-website.vercel.app/",
			},
		],
	},
	{
		image: BMP_0,
		name: "kb2abot",
		type: "Bot",
		description:
			"Open-source Facebook bot made in JavaScript, built using the internal kb2abot library.",
		tech: ["facebook", "javascript"],
		buttons: [
			{
				name: "Github",
				url: "https://github.com/kb2a/kb2abot-client",
			},
		],
	},
	{
		image: BMP_0,
		name: "flapping-online",
		type: "Multiplayer game",
		description: "A multiplayer Flappy Bird game built with p5 and socket.io",
		tech: ["p5", "socket.io"],
		buttons: [
			{
				name: "Github",
				url: "https://github.com/codeonbeans/flapping-online",
			},
			{
				name: "Demo",
				url: "https://github.com/codeonbeans/flapping-online",
			},
		],
	},
	{
		image: BMP_0,
		name: "pascal",
		type: "old stuff",
		description:
			"My old pascal projects, made when i was in secondary school :(",
		tech: [],
		buttons: [
			{
				name: "Github",
				url: "https://github.com/codeonbeans/ki-niem-pascal",
			},
		],
	},
]

const skills: {
	name: string
	icon: string
	description: string
	color: BaseButtonProps["color"]
	textColor: string
}[] = [
	{
		name: "Go",
		icon: goIcon,
		description: "My waifu 😎",
		color: "cyan",
		textColor: "#00add8",
	},
	{
		name: "TypeScript",
		icon: tsIcon,
		description: "Epic type system",
		color: "blue",
		textColor: "#007acc",
	},
	{
		name: "JavaScript",
		icon: jsIcon,
		description: "My first language btw...",
		color: "yellow",
		textColor: "#f7df1e",
	},
	{
		name: "Node.js",
		icon: nodeJSIcon,
		description: "Been using it since v12 lol",
		color: "green",
		textColor: "#3c873a",
	},
	// {
	//     name: "PHP",
	//     icon: phpIcon,
	//     description: "shh... i switched to node.js",
	//     color: "purple",
	//     textColor: "#777bb4"
	// },
	// {
	//     name: "C#",
	//     icon: csIcon,
	//     description: "can i make desktop app with this?",
	//     color: "purple",
	//     textColor: "#a179dc"
	// },
	{
		name: "C++",
		icon: cppIcon,
		description: "Try not to segment fault (impossible)",
		color: "blue",
		textColor: "#649ad2",
	},
	{
		name: "React",
		icon: reactIcon,
		description: "Why not, heh?",
		color: "indigo",
		textColor: "#61dafb",
	},
	// {
	//     name: "Photoshop",
	//     icon: psIcon,
	//     description: "i love to design my waifu :3",
	//     color: "sky",
	//     textColor: "#31a8ff"
	// }
]

export default function PageHome() {
	return (
		<div className={cls.HomePage}>
			<Element name="home" className={cls.Main}>
				<ParallaxBanner
					layers={[{ image: Bocchi, speed: -40, className: cls.BannerInner }]}
					className={cls.Banner}
				/>
				<div className={cls.Info}>
					<Heading className={cls.Hello} size="6">
						hi there, i'm khoa bean
					</Heading>
					<Text size="2" color="gray">
						{/* i'm do everying thing i love and love u too <PiHeartDuotone /> */}
						do you know that you are breathing normally rn? <PiHeartDuotone />
					</Text>
				</div>
			</Element>
			<Element name="my-skills" className={cls.Section}>
				<div className={cls.Heading}>
					<IconButton className={cls.Icons} size="4" variant="surface">
						<PiMagicWandDuotone size={25} />
					</IconButton>
					<div className={cls.Inf}>
						<Heading
							style={{ "--text-color": "#e2d1d4" } as React.CSSProperties}
							className={"PrettyTitle"}
							size="4"
						>
							my skills
						</Heading>
						<Text size="1" color="gray">
							epic skills, i guess...
						</Text>
					</div>
				</div>
				<Grid
					columns={{
						initial: "1",
						md: "3",
						sm: "2",
						xs: "1",
					}}
					gap={{
						initial: "1",
						md: "3",
						sm: "2",
						xs: "1",
					}}
					width="auto"
				>
					{skills.map((skill, index) => (
						<Card variant="surface" key={index} className={cls.TechCard}>
							<IconButton size="4" color={skill.color} variant="soft">
								<img
									src={skill.icon}
									alt={skill.name}
									className={cls.TechLogo}
								/>
							</IconButton>
							<div>
								<Heading
									style={
										{ "--text-color": skill.textColor } as React.CSSProperties
									}
									className={"PrettyTitle"}
									size="4"
								>
									{skill.name}
								</Heading>
								<Text
									style={{ marginTop: "0.2rem" }}
									as="div"
									color="gray"
									size="1"
								>
									{skill.description}
								</Text>
							</div>
						</Card>
					))}
				</Grid>
			</Element>
			<Element name="my-projects" className={cls.Section}>
				<div className={cls.Heading}>
					<IconButton className={cls.Icons} size="4" variant="surface">
						<PiCodeDuotone size={25} />
					</IconButton>
					<div className={cls.Inf}>
						<Heading
							style={{ "--text-color": "#e2d1d4" } as React.CSSProperties}
							className={"PrettyTitle"}
							size="4"
						>
							my projects
						</Heading>
						<Text size="1" color="gray">
							only peak projects, hehe
						</Text>
					</div>
				</div>
				<Grid
					columns={{
						initial: "1",
						md: "3",
						sm: "2",
						xs: "1",
					}}
					gap={{
						initial: "1",
						md: "3",
						sm: "2",
						xs: "1",
					}}
					width="auto"
					gapX="3"
					gapY="3"
				>
					{List.map((project, index) => (
						<Card variant="surface" key={index} className={cls.Projects}>
							<AspectRatio ratio={16 / 9}>
								<img
									src={project.image}
									alt={project.name}
									className={cls.ProjectImage}
								/>
								<div className={cls.ProjectTech}>
									{project.tech.map((tech, index) => (
										<Badge
											variant="outline"
											key={index}
											size="1"
											className={cls.ProjectTechItem}
										>
											{tech}
										</Badge>
									))}
								</div>
							</AspectRatio>

							<div className={cls.ProjectInfo}>
								<Heading size="3" className={"PrettyTitle"}>
									{project.name} <Badge size="1">{project.type}</Badge>
								</Heading>
								<Text size="1" color="gray" className={cls.ProjectDescription}>
									{project.description}
								</Text>
							</div>
							<div className={cls.space}></div>
							<div className={cls.Action}>
								{project.buttons.map((button, index) => (
									<a href={button.url} target="_blank" rel="noreferrer">
										<Button
											size="1"
											key={index}
											variant="surface"
											className={cls.ProjectButton}
											style={{
												cursor: "pointer",
											}}
										>
											{button.name}
										</Button>
									</a>
								))}
							</div>
						</Card>
					))}
				</Grid>
			</Element>
			<Element name="about-me" className={cls.Section}>
				<div className={cls.Heading}>
					<IconButton className={cls.Icons} size="4" variant="surface">
						<PiInfoDuotone size={25} />
					</IconButton>
					<div className={cls.Inf}>
						<Heading
							style={{ "--text-color": "#e2d1d4" } as React.CSSProperties}
							className={"PrettyTitle"}
							size="4"
						>
							about me
						</Heading>
						<Text size="1" color="gray">
							本当に、江藤、恥ずかしい。
						</Text>
					</div>
				</div>
				<div className={cls.BodyAbout}>
					<img src={banner} alt="banner" className={cls.BannerAbout} />

					<div className={cls.Content}>
						<Text size="2" color="gray">
							hi, i'm khoa bean (you can call me bean). i'm a fullstack
							developer, but i prefer backend. i tend to be quiet around new
							people and find peace in nature and open spaces. when i'm not
							coding, i play classical piano pieces. i care about writing code
							that's clean and readable – the kind that makes sense to anyone
							who looks at it. i'm autistic, which shapes how i see and approach
							the world, and it also makes studying slower :( but i still enjoy
							building things that might be useful – or maybe useless – to
							others, who knows? :3
						</Text>
					</div>
				</div>
			</Element>
			<Element name="contact-me" className={cls.Section}>
				<div className={cls.Heading}>
					<IconButton className={cls.Icons} size="4" variant="surface">
						<PiPhoneCallDuotone size={25} />
					</IconButton>
					<div className={cls.Inf}>
						<Heading
							style={{ "--text-color": "#e2d1d4" } as React.CSSProperties}
							className={"PrettyTitle"}
							size="4"
						>
							contact
						</Heading>
						<Text size="1" color="gray">
							pls don't call me at 3am...
						</Text>
					</div>
				</div>
				<div className={cls.BodyContact}>
					<Text align="center" size="3" color="gray">
						For work, please contact me via email:{" "}
						<Link color="gray" href="mailto:codeonbeans@gmail.com">
							codeonbeans@gmail.com
						</Link>
					</Text>

					<div className={cls.List}>
						{ListSocial.map((social, index) => (
							<Tooltip content={social.name} key={index}>
								<a
									href={social.url}
									target="_blank"
									title={social.name}
									rel="noreferrer"
								>
									<IconButton size="4" variant="surface" className={cls.Social}>
										{social.icon}
									</IconButton>
								</a>
							</Tooltip>
						))}
					</div>
				</div>
			</Element>
		</div>
	)
}
