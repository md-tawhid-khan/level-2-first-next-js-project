"use client"
const error = ({error,reset}) => {
    
    return (
        <div className="text-center text-3xl text-red-400  gap-3">
            <h1>something went wrong</h1>
            <h1 className="my-3">{error.message}</h1>
            <button className="bg-black hover:bg-green-300 hover:text-white rounded-2xl p-2" onClick={()=>reset()}>try again</button>
        </div>
    );
};

export default error;