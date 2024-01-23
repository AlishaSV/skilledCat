import { TNavbarItemProps } from '@/components/layout/navbar/navbarItem';
import { ArrowUpDown, GraduationCap, Trophy, User } from 'lucide-react';
import React from 'react';
import { TNavbarSubItemProps } from '@/components/layout/navbar/navbarItem/NavbarSubItem';
import { ROUTES } from '@/routes';

function generateSubItems(title: string): TNavbarSubItemProps[] {
  const route = ROUTES[title];
  if (!route) return [];

  return [
    {
      title: `${title}s grid`,
      href: route.grid,
    },
    {
      title: `add ${title}`,
      href: route.addForm,
    },
  ];
}

export const navbarItems: TNavbarItemProps[] = [
  {
    title: 'Skills',
    icon: <GraduationCap />,
    subItems: generateSubItems('skill'),
  },
  {
    title: 'Divisions',
    icon: <ArrowUpDown />,
    subItems: generateSubItems('division'),
  },
  {
    title: 'Competition',
    icon: <Trophy />,
    subItems: generateSubItems('competition'),
  },
  {
    title: 'User',
    icon: <User />,
    subItems: generateSubItems('user'),
  },
];
