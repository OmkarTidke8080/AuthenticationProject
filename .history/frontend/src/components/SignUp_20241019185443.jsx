import React from "react";

function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="flex border  rounded-md h-[620px] w-[700px]">
          <div className="form border-2 rounded-3xl text-white w-full bg-gradient-to-r from-gray-900 to-slate-600 ">
            <div className="form-heading text-center mt-8 mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">
                Sign Up Form
              </h1>
            
            </div>
            <form>
              <div className="flex justify-center mt-10 ">
                <div>
                  <div className="flex w-full gap-x-5 ">
                    <div className="w-1/2">
                      <label htmlFor="username" className=" flex mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="FistName"
                        className=" text-white bg-inherit  w-full flex border rounded p-2"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="password" className="flex mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="LastName"
                        className="text-black bg-inherit w-full flex border rounded p-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className=" flex mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="text-black bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div className="flex gap-x-5">
                    <div className="mt-3 w-1/2 ">
                      <label htmlFor="username" className=" flex mb-1">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="FistName"
                        className="text-black bg-inherit w-full flex border rounded p-2"
                        required
                      />
                    </div>
                    <div className="mt-3 w-1/2">
                      <label htmlFor="username" className=" flex mb-1">
                        Password
                      </label>
                      <input
                        type="text"
                        id="FistName"
                        className="text-black bg-inherit w-full flex border rounded p-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex  gap-x-5 mt-3">
                    <div>
                      <label htmlFor="username" className=" flex mb-1">
                        Aadhar Card
                      </label>
                      <input
                        type="file"
                        id="FistName"
                        className=" text-white bg-inherit flex border rounded p-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="flex mb-1">
                        Pan Card
                      </label>
                      <input
                        type="file"
                        id="LastName"
                        className="text-white bg-inherit flex border rounded p-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="sign-up-button m-10">
                    <button className="border-2 rounded p-2 w-24 hover:bg-b ">
                      Sign Up
                    </button>
                  </div>
                  <div className="AlreadyAccount flex justify-center gap-x-3">
                    <h2>Already Have a Account ?</h2>
                    <button>Sign In</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
