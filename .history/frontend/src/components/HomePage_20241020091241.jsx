import React from "react";
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
  return (
    <>
    <div className="h-screen flex justify-center items-center gap-">
        <div className="border-2 border-white p-5 hover:cursor-pointer ">
        <button
        onClick={() =>{
            navigate("/view-profile")
        }}
         className="text-white">View Your Profile</button>
        </div>
        <div className="border-2 border-white p-5 hover:cursor-pointer ">
        <button
        onClick={() =>{
            navigate("/update-profile")
        }}
         className="text-white">Update Your Profile</button>
        </div>
    </div>   
     </>
  );
}

export default HomePage;
