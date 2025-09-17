import Navbar from "@/components/share/navbar";


const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen">
                 {children}
            </div>
           <footer className="bg-gray-500 text-white p-5 text-center">this is normal footer</footer> 
        </div>
    );
};

export default layout;