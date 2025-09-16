import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 flex flex-col items-center gap-3 bg-blue-300 text-2xl text-white">
            <h1> My Sidebar </h1>
            <Link href="/">Home</Link>
            <Link href="/profile">profile</Link>
            <Link href="/setting">setting</Link>
        </div>
    );
};

export default Sidebar;