import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils.ts";

type TProps = {
    to: string;
    children: ReactNode;
    end: boolean;
    className?: string;
    onClick?: () => void;
};

export default function MenuLink({
                                     to,
                                     children,
                                     end,
                                     className,
                                     onClick,
                                 }: TProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    "relative p-3 transition-colors hover:text-secondary",
                    // linia pod spodem
                    "after:absolute after:left-0 after:top-full after:mt-1",
                    "after:h-[2px] after:w-0 after:bg-linear-(--gradient)",
                    "after:content-[''] after:transition-all after:duration-300",
                    // na hover rozszerzaj *pseudo-element*, nie link
                    "hover:after:w-full",
                    isActive && "text-secondary after:w-full",
                    className
                )
            }
            onClick={onClick}
            end={end}
        >
            {children}
        </NavLink>
    );
}