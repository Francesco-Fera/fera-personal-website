import { Cpu } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className='sticky top-0 w-screen flex justify-center items-center z-10 h-16'>
      <div className='w-full h-full flex items-center justify-between gap-4 text-sm py-2 px-16 bg-white/30 dark:bg-neutral-800/30 dark:text-white backdrop-blur-lg'>
        <Link href='#' className='flex items-center gap-2'>
          <Cpu />
          <div className='font-bold text-xl italic'>Fera</div>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
