import { DropdownMenu, IconButton } from "@radix-ui/themes";
import clsx from "clsx";
import cls from "./Header.module.scss";
import MainIcon from "./icons/MainIcon";
import { Link } from "react-scroll";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const routes = [
    {
        name: "home",
        id: "home"
    },
    {
        name: "skills",
        id: "my-skills"
    },
    {
        name: 'projects',
        id: 'my-projects'
    },
    {
        name: 'about',
        id: 'about-me'
    },
    {
        name: 'contact',
        id: 'contact-me'
    }
]

export default function Header() {
    return (
        <div className={cls.Header}>
            <div className={cls.Inner}>
                <Link to="/">
                    <IconButton className={cls.HomeBtn} size="3" variant="ghost">
                        <MainIcon fontSize={25} />
                    </IconButton>
                </Link>
                <div className={cls.Nav}>
                    {routes.map((route, index) => (
                        <Link key={index} activeClass="rt-variant-surface" className={clsx("rt-reset rt-BaseButton rt-r-size-2 rt-variant-ghost rt-Button", cls.NavBtn)} to={route.id} spy={true} smooth={true} duration={500} >
                            {route.name}
                        </Link>
                    ))}
                </div>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <IconButton className={cls.MbMenu} variant="surface">
                            <HamburgerMenuIcon />
                        </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        {routes.map((route, index) => (
                            <Link key={index} to={route.id} spy={true} smooth={true} duration={500} >
                                <DropdownMenu.Item>{route.name}</DropdownMenu.Item>
                            </Link>
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </div>
    )
}