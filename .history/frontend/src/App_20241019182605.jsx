import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/HomePage.jsx";
import SignUp from "./components/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#fff",
          }}
        ></div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/sign-up"} element={<SignUp />} />
            <Route path={"/sign-in"} element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
