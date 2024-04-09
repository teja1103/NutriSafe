'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/util';
import Image from 'next/image';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-black`,
        {
          'border-b  bg-gradient-to-r from-slate-900 to-slate-700/75 backdrop-blur-lg': scrolled,
          'border-b  bg-gradient-to-r from-slate-900 to-slate-700': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 md:hidden"
          >
            {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
            <span className="font-bold text-xl ml-12   ">
        <Image src="/logo.png" alt="Logo" width={50} height={50} /></span>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Header;
