import { Icon } from "@iconify/react";

import {SideNavItems} from "./types";

export const SIDENAV_ITEMS: SideNavItems[] =[
    {
        title:"Home",
        path:"/home",
        icon:<Icon icon="lucide:home" width="24" height="24"/>
    },
    {
        title:"Products",
        path:"/products",
        icon: <Icon icon="lucide:folder" width="24" height="24"/>,
        submenu: true,
        subMenuItems: [

            {title:"Recipe maker", path:"/products/recipe-maker"},
            {title:"Fake food detector", path:"/products/Image-scanner"},
        ],
    },
    {
        title:"Messages",
        path:"/messages",
        icon:<Icon icon="lucide:mail" width="24" height="24"/>
    },
    {
        title:"Settings",
        path:"/settings",
        icon:<Icon icon="lucide:settings" width="24" height="24"/>,
        submenu: true,
        subMenuItems: [
            {title:"Account", path:"/settings/account"},
            {title:"Privacy", path:"/settings/privacy"},
        ]
    },
    {
        title:"Help",
        path:"/help",
        icon:<Icon icon="lucide:help" width="24" height="24"/>
    }
]