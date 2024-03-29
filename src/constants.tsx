import { Icon } from "@iconify/react";

import {SideNavItems} from "./types";

export const SIDENAV_ITEMS: SideNavItems[] =[
    {
        title:"Home",
        path:"/home",
        icon:<Icon className="text-c-white" icon="lucide:home" width="24" height="24"/>
    },
    {
        title:"Products",
        path:"/products",
        icon: <Icon className="text-c-white" icon="lucide:folder" width="24" height="24"/>,
        submenu: true,
        subMenuItems: [

            {title:"Recipe maker", path:"/products/recipe-maker"},
            {title:"Fake food detector", path:"/products/Image-scanner"},
            {title:"Meal planner", path:"/products/meal-chart"},
        ],
    },
    {
        title:"Messages",
        path:"/messages",
        icon:<Icon className="text-c-white" icon="lucide:mail" width="24" height="24"/>
    },
    {
        title:"Settings",
        path:"/settings",
        icon:<Icon className="text-c-white" icon="lucide:settings" width="24" height="24"/>,
        submenu: true,
        subMenuItems: [
            {title:"Account", path:"/settings/account"},
            {title:"Privacy", path:"/settings/privacy"},
        ]
    },
    {
        title:"Help",
        path:"/help",
        icon:<Icon className="text-c-white" icon="lucide:help" width="24" height="24"/>
    }
]