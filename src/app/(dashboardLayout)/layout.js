import Sidebar from "@/components/share/sidebar";

const layout = ({children}) => {
    return (
        <div className="flex">
            <Sidebar/>
            {children}
        </div>
    );
};

export default layout;