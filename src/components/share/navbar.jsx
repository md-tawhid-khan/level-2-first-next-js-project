import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-blue-400 text-white flex justify-between text-3xl px-6 py-2 ">
             <Link href="/">home site</Link>
             <div className="flex gap-3">
                <Link href="/about">About</Link>
                <Link href="/counter">Counter</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">Dashboard</Link>
             </div>
        </div>
    );
};

export default Navbar;