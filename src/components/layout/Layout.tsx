import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/layout/navbar';

type TLayoutProps = PropsWithChildren;
export const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className={'flex m-2'}>
      <div className={'flex-none'}>
        <Navbar />
      </div>
      <div className={'grow'}>{children}</div>
    </div>
  );
};
