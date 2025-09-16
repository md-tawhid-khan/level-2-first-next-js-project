import Image from "next/image";
import HabibPhoto from "../../assets/WIN_20240205_10_54_55_Pro.jpg"

const GalleryPage = () => {
    return (
        <div>
          

          <h1>next js Image3</h1>
          <Image src="https://images.unsplash.com/photo-1757999524841-6f5efc86cbac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="No Image" height={500} width={500} />
          <h1> upload photo </h1>
          <Image src={HabibPhoto} alt="No image" width={500} height={500}/>
        </div>
    );
};

export default GalleryPage;