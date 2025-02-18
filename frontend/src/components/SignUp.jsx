import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    role:"",
    UserName: "",
    Password: "",
    AadhaarCard: null,
    PanCard: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signUp",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("SignUp Successful");
        navigate("/home-page");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("SignUp failed. Please try again."); 
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="form h-[665px] w-[700px] border-2 rounded-3xl text-white  bg-gradient-to-r from-gray-900 to-slate-600 ">
          <div className="form-heading text-center mt-8 mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Sign Up Form</h1>
          </div>
          <form>
            <div className="flex justify-center mt-10 ">
              <div>
                <div className="flex w-full gap-x-5 ">
                  <div className="w-1/2">
                    <label htmlFor="FirstName" className=" flex mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      value={data.FirstName}
                      onChange={handleInputChange}
                      className=" text-white bg-inherit  w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="LastName" className="flex mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      value={data.LastName}
                      onChange={handleInputChange}
                      className="text-white bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="Email" className=" flex mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    value={data.Email}
                    onChange={handleInputChange}
                    className="text-white bg-inherit w-full flex border rounded p-2"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="role" className="flex mb-1">
                    Role
                  </label>
                  <select
                    className="text-white bg-inherit w-full flex border rounded p-2"
                    name="role"
                    id="role"
                    style={{ backgroundColor: "inherit" }} 
                  >
                    <option className="text-black bg-inherit" value="">
                      Select Role
                    </option>
                    <option className="text-black bg-inherit" value="manager">
                      manager
                    </option>
                    <option className="text-black bg-inherit" value="user">
                      user
                    </option>
                  </select>
                </div>

                <div className="flex gap-x-5">
                  <div className="mt-3 w-1/2 ">
                    <label htmlFor="UserName" className=" flex mb-1">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="UserName"
                      value={data.UserName}
                      onChange={handleInputChange}
                      className="text-white bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div className="mt-3 w-1/2">
                    <label htmlFor="Password" className=" flex mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="Password"
                      value={data.Password}
                      onChange={handleInputChange}
                      className="text-white bg-inherit w-full flex border rounded p-2"
                      required
                    />
                  </div>
                </div>

                <div className="flex  gap-x-5 mt-3">
                  <div>
                    <label htmlFor="AadhaarCard" className="mb-1">
                      Aadhaar Card
                    </label>
                    <input
                      type="file"
                      id="AadhaarCard"
                      onChange={(e) =>
                        setData({ ...data, AadhaarCard: e.target.files[0] })
                      }
                      className=" text-white bg-inherit  w-full flex border rounded p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="PanCard" className="mb-1">
                      PanCard
                    </label>
                    <input
                      type="file"
                      id="PanCard"
                      onChange={(e) =>
                        setData({ ...data, PanCard: e.target.files[0] })
                      }
                      className=" text-white bg-inherit  w-full flex border rounded p-2"
                      required
                    />
                  </div>
                </div>

                <div className="sign-up-button flex justify-center m-10">
                  <button
                    onClick={handleSubmit}
                    className="border-2 rounded p-2 w-24 hover:border-green-700 "
                  >
                    Sign Up
                  </button>
                </div>
                <div className="AlreadyAccount flex justify-center gap-x-3">
                  <h2>Already Have a Account ?</h2>
                  <button onClick={() => navigate("/sign-in")}>Sign In</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
