import React, { useState } from "react";

function ResetPassword() {
  const [requestOtpIsChecked , setRequestOtpIsChecked] = useState(false);
  const [verifyOtpIsChecked , setVerifyOtpIsChecked] = useState(false);
  const [resetPasswordIsChecked , setResetPasswordIsChecked] = useState(false);

  const handleRequestOtpCheck = (event) =>{
   
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form h-[450px] w-[800px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
          <div className="flex ">
            <div className=" buttons-part w-1/2 border-white border-2 rounded-3xl h-[450px]">
              <div className="flex justify-center items-center h-[450px]">
                <div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button
                      onClick={() => {
                      }}
                      className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded"
                    >
                      Request Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button
                      onClick={() => {
                        verifyOtpIsChecked(true);
                      }}
                      className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded"
                    >
                      Verify Otp
                    </button>
                  </div>
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500 rounded "
                    />
                    <button
                      onClick={() => {
                        resetPasswordIsChecked(true);
                      }}
                      className="text-white font-semibold ml-2 px-4 py-2 border border-green-500 rounded"
                    >
                      Reset Password
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="forms-part w-1/2 flex justify-center items-center">


              <form className="w-full max-w-md flex justify-center">
                <div className="flex flex-col w-2/3">
                  <label htmlFor="email" className="mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="text-white bg-inherit border rounded p-2 mb-4"
                    required
                  />
                  <div className="flex justify-center">
                    <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded">
                      Request Otp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
