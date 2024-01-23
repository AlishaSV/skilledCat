import React, { ReactNode } from 'react';
import {
  NavbarSubItem,
  TNavbarSubItemProps,
} from '@/components/layout/navbar/navbarItem/NavbarSubItem';
import { MenubarContent, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

export type TNavbarItemProps = {
  title: string;
  icon?: ReactNode;
  subItems?: TNavbarSubItemProps[];
};

export const NavbarItem = ({ title, icon, subItems }: TNavbarItemProps) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className={'gap-1'}>
        {icon}
        {title}
      </MenubarTrigger>
      {subItems ? (
        <MenubarContent side={'right'}>
          {subItems.map((item, index) => (
            <NavbarSubItem key={`${item.title}_${index}`} {...item} />
          ))}
        </MenubarContent>
      ) : null}
    </MenubarMenu>
  );
};
