import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
    <div className="flex justify-center items-center mt-20">

      <div className="flex border-2 h-[500px] border-black  w-[1000px]">
        <div className="image  h-[500px] w-[500px] lg:h-[300px],w[">
          <img className="border-2 border-black" src={image} height={500} width={500} alt="" />
        </div>

        <div className="form">
           <form action="">
            <label htmlFor="FirstName">
                First Name
                <input
                 type="text" 
                 
                 /> 
            </label>
           </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
