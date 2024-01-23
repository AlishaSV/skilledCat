'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { ChevronsDown, ChevronsUp } from 'lucide-react';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

type TCollapsibleProps = PropsWithChildren & {
  title: string;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  className?: string;
};
export const CollapsibleWithTitle = ({
  title,
  children,
  openIcon,
  closeIcon,
  className,
}: TCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chevronSize = 20;

  const OpenIcon = openIcon ? (
    openIcon
  ) : (
    <ChevronsUp size={chevronSize} className={'text-zinc-600'} />
  );
  const CloseIcon = closeIcon ? (
    closeIcon
  ) : (
    <ChevronsDown size={chevronSize} className={'text-zinc-600'} />
  );

  return (
    <Collapsible className={className} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className={'flex items-center gap-1'}>
        {title} {isOpen ? OpenIcon : CloseIcon}
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};
