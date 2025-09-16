"use client"
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const navigate=useRouter()
    const handleNavigation=()=>{
        navigate.push('/login')
    }
    return (
        <div className="text-3xl text-center">
            <h1>this is register page</h1>
            <button onClick={handleNavigation}>Log in</button>
        </div>
    );
};

export default RegisterPage;