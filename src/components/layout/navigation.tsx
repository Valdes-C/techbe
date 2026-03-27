import Logo from "@/components/layout/logo.tsx";
import {menu} from "@/data/menu-data.ts";
import MenuLink from "@/components/ui/menu-link.tsx";

export default function Navigation() {
    return (
        <div className="fixed top-0 left-0 z-30 w-full lg:py-3 lg:bg-white lg:shadow-md">
            <div className="relative center">
                <div className="hidden gap-3 lg:flex">
                    <Logo className="mr-10" />
                    {
                        menu.map(item => (
                            <MenuLink key={item.id} to={item.to} end>
                                {item.name}
                            </MenuLink>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}