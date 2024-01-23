import React, { ReactNode } from 'react';
import {
  MenubarItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

export type TNavbarSubItemProps = {
  title: string;
  icon?: ReactNode;
  href?: string;
  subItems?: TNavbarSubItemProps[];
};

export const NavbarSubItem = ({ title, icon, href, subItems }: TNavbarSubItemProps) => {
  if (!href && !subItems) return null;
  const Title = (
    <div className={'flex gap-1'}>
      {icon}
      {title}
    </div>
  );
  return href ? (
    <MenubarItem>
      <Link href={href}>{Title}</Link>
    </MenubarItem>
  ) : (
    <MenubarSub>
      <MenubarSubTrigger>{Title}</MenubarSubTrigger>
      <MenubarSubContent>
        {subItems?.map((item, index) => <NavbarSubItem key={`${item.title}_${index}`} {...item} />)}
      </MenubarSubContent>
    </MenubarSub>
  );
};
