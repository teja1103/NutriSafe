export type SideNavItems = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItems[];
};

// export type MenuItemWithSubMenuProps = {
//     item: SideNavItems;
//     toggleOpen: () => void;
// };