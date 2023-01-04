import React, { useState, useRef, useEffect } from "react";

// importing from react-router-dom
import { useNavigate } from "react-router-dom";

//importing components
import Input from "./Input.jsx";

//importing Global function
import { loginHandler } from "../../API/authAPI.js";

import profile from "../../assets/profile_icon.png";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import googleIcon from "../../assets/goggle_icon.png";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  //initializing states
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //functions submits login information and trigger login
  const submitFormHandler = async (event) => {
    //preventing default occurance
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setIsPending(true);
      const result = await loginHandler(
        "https://starthubconnect.adaptable.app/auth/login",
        { email, password }
      );
      console.log(result);
      setData(result);
      setIsPending(false);
      setError(null);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error);
      setIsPending(false);
      setData(null);
    }
  };

  //useEffect checks and removes unsuccesful login state
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error && !data) {
        setError(false);
      }
    }, 2000);
    clearTimeout(() => {
      timer;
    }, []);
  }, [error]);
  return (
    <div className="w-[100%]">
      <form
        onSubmit={submitFormHandler}
        style={{ background: "red" }}
        className="flex flex-col items-center gap-[1em] w-[100%] xl2:w-[60%] mx-auto mb-[7em] pt-[2em]"
      >
        <div className="h-[5rem] w-[5rem] mx-auto text-center mb-16">
          <img
            src={profile}
            className='h-[100%] w-[100%] object-fit" alt="Logo '
          />
        </div>
        <div className="xl2:w-[50%] w-full">
          <input
            ref={emailRef}
            className=" w-full h-[50px] rounded-md  border-gray-300  px-2 inline-none   bg-[#F6F8FE]  text-[12px] p-[.5em]  "
            type="email"
            placeholder="Enter e-mail "
          />

          <AiOutlineMail
            className="absolute left-[1rem] top-[1.2rem]"
            size={25}
          />
        </div>

        <div className=" xl2:w-[50%] w-full">
          <div>
            <input
              ref={passwordRef}
              className=" w-full h-[50px] rounded-md  border-gray-300  px-2 inline-none   bg-[#F6F8FE]  text-[12px] p-[.5em]  "
              type="email"
              placeholder="Enter password"
            />

            <AiOutlineMail
              className="absolute left-[1rem] top-[1.2rem]"
              size={25}
            />
          </div>
          <p className="text-[12px] font-bold">Forgot password</p>
        </div>

        <button
          type="submit"
          className="xl2:w-[50%] w-full h-[60px] pb-[0.2rem] font-[bold] bg-[#10328C] text-[20px] text-white py-[0.6rem] px-[3rem] justify-center items-center text-center rounded-md hover:bg-[#5d8aa8] transition-colors mb-10"
        >
          Log in
        </button>

        {isPending && !data && !error && <h1>Logging In</h1>}
        {error && !data && !isPending && <h1>Login Unsuccessful</h1>}
        {data && !isPending && <h1>Login Successful...</h1>}

        <div className="flex justify-evenly content-center  text-center mx-auto w-[10rem]">
          <div className="text-[20px]">log in with</div>
          <div className="h-5  w-5  mt-2">
            <img
              src={googleIcon}
              alt="google-icon"
              className='h-[100%] w-[100%] object-fit" alt="images  rounded-full'
            />
          </div>
        </div>
        <div className="flex justify-center  gap-3 content-center text-center mt-8">
          <div>
            <h3 className="text-[20px]">dont have an Account?</h3>
          </div>

          <div>
            <h3 className="font-bold text-[21px]">sign up</h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
