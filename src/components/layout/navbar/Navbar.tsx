import { NavbarItem } from '@/components/layout/navbar/navbarItem';
import { Menubar } from '@/components/ui/menubar';
import { navbarItems } from '@/components/layout/navbar/utils';

export const Navbar = () => {
  return (
    <Menubar>
      {navbarItems.map((item, index) => {
        return <NavbarItem key={`${item.title}_${index}`} {...item} />;
      })}
    </Menubar>
  );
};
