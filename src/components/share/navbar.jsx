"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName=usePathname()
    return (
        <div className="bg-blue-400 text-white flex justify-between text-3xl px-6 py-2 ">
             <Link href="/">home site</Link>
             <div className="flex gap-3">
                <Link href="/about" className={pathName=='/about'?"font-bold text-amber-200 underline":"hover:underline text-white cursor-pointer"}>About</Link>
                <Link href="/counter" className={pathName=='/counter'?"font-bold text-amber-200 underline":"hover:underline text-white cursor-pointer"}>Counter</Link>
                <Link href="/contact" className={pathName=='/contact'?"font-bold text-amber-200 underline":"hover:underline text-white cursor-pointer"}>Contact</Link>
                <Link href="/dashboard" className={pathName=='/dashboard'?"font-bold text-amber-200 underline":"hover:underline text-white cursor-pointer"}>Dashboard</Link>
             </div>
        </div>
    );
};

export default Navbar;