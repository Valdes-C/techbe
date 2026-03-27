import {Outlet} from "react-router";
import Copyright from "@/components/layout/copyright.tsx";
import Navigation from "@/components/layout/navigation.tsx";

export default function AppLeyout(){
    return (
        <div className="bg-white md:bg-transparent lg:pt-[74px]">
            <header>
                <Navigation />
            </header>
            <Outlet/>
            <Copyright/>
        </div>
    )
}