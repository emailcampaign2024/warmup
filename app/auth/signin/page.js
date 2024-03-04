"use client";
import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { handleInputChange } from "@/utils/helper";
import { login, setJwtToken, setRefreshToken } from "@/utils/auth";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [googleUser, setGoogleUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const router = useRouter();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
        setGoogleUser(codeResponse)
    },
    onError: (error) => toast.error(`Error During Logging In , ${error}`),
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const { jwtToken , refreshToken } = await login(formData)
        setJwtToken(jwtToken)
        setRefreshToken(refreshToken)
        router.push('app/email-accounts')
        toast.success(`'Logged In Successfully'`)
    } catch (error) {
        toast.error('Error During Logging In , Try Again !')
    }

  };

  useEffect(() => {
    const storedProfile = sessionStorage.getItem("profileDetails");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  useEffect(() => {
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const profileDetails = JSON.stringify(res.data);
          sessionStorage.setItem("profileDetails", profileDetails);
          setProfile(res.data);
          router.push("/app/email-accounts");
          toast.success(`Welcome Back , ${res.data.given_name}`)

        })
        .catch((err) => console.log(err));
    }
  }, [googleUser]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[10%] float-start">
        <p className="left text-3xl p-4 w-full font-bold pl-8 pt-6">
          <span className="text-green-500">i</span>
          <span className="text-blue-500">SYS</span>
        </p>
      </div>
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="card card-side w-[50%] h-[70%] bg-base-100 shadow-xl rounded-xl">
          <figure>
            <Image src="/login_img.jpg" width={420} height={700} alt="login" />
          </figure>
          <div className="flex flex-col justify-start items-center gap-4 w-full p-6  bg-gradient-to-r from-green-200  to-blue-200   rounded-r-xl">
            <p className="font-semibold text-2xl">Sign In</p>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-1"
            >
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-44"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, setFormData)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" name="userName" value={formData.userName} onChange={(e) => handleInputChange(e, setFormData)} />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" name="password" value={formData.password} onChange={(e) => handleInputChange(e, setFormData)} />
              </label>
              <button className="btn  btn-outline  w-full " type="submit" onClick={handleSubmit} >Login</button>
            </form>
            <p className="font-semibold">or</p>
            <button
              className="btn btn-wide btn-outline border-none flex justify-start gap-3"
              onClick={handleGoogleLogin}
            >
              <span>
                <Image
                  src={"/Google_g_logo.png"}
                  alt="google"
                  width={48}
                  height={48}
                />
              </span>
              Login with google
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
