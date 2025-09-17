import Link from "next/link";


const  HomePage=async()=>{
  const res=await fetch("http://localhost:5000/posts",{next:{
    revalidate:30
  }})
  const posts=await res.json() ;
  return (
    <div className="text-4xl text-center">
     {
      posts.slice(0,3).map(({id,title,views})=><div key={id}
      className="bg-pink-200 m-7 p-7">
               <h1>id : {id}</h1>
               <h1>title : {title}</h1>
               <h1>views : {views}</h1>
      </div>)
     }   
     <div>
      <Link href='/products'>
      <button className="bg-green-300"> see more </button>
      </Link>
      </div> 
    </div>
  );
}

export default HomePage
