import Navbar from "@/components/share/navbar";


const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default layout;