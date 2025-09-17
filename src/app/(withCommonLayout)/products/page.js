

const ProductsPage = async() => {
    const res=await fetch("http://localhost:5000/posts") ;
    const posts=await res.json()
    console.log(posts)
    return (
        <div>
            <h1 className="text-4xl text-center">this is products page</h1>
            <div >
                {
                    posts.map(({id,title,views})=><div key={id}
                    className="bg-pink-200 m-7 p-7">
                        <h1>post id : {id} </h1>
                        <h1>post title : {title} </h1>
                        <h1>post views : {views} </h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;