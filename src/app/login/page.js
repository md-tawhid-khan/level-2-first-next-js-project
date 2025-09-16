"use client"

import { useRouter } from "next/navigation";

const page = () => {
    const navigate=useRouter()
    const handleNavigation=()=>{
        navigate.push('/register')
    }

    return (
        <div className="text-3xl text-center">
            <h1>this is log in page</h1>
            <button onClick={handleNavigation}> register </button>
        </div>
    );
};

export default page;