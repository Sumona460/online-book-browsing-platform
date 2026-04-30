"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ href, children }) => {
const pathname = usePathname();

const isActive = href === pathname

    return <Link href={href} className={`${isActive ? ' text-pink-700' : "" }`}>{children}</Link>;
};

export default NavLinks;