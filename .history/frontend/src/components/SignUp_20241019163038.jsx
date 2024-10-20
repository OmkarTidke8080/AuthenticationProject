import React from "react";
import image from "../assets/image.jpg";

function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex border-2 h-[500px] border-black  w-[1000px]">
          <div className="image h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[500px]">
            <img
              className="border-2 border-black h-full w-full object-cover"
              src={image}
              alt=""
            />
          </div>

          <div className="form">
            <form action="">
              <label htmlFor="FirstName">
                First Name
                <input type="text" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
