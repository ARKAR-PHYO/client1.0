import Image from "next/image";
import { useState } from "react";
import YoonHanTharLogoOnly from "../public/assets/images/logo/YoonHanTharLogoOnly.png";
import { getCsrfToken, getSession, signIn } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession({ context });
  console.log("getserver ->", session);
  if (session) {
    return {
      redirect: {
        destination: "/",
        perminate: false,
      },
    };
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

const Signin = ({ csrfToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const signinHandler = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      callbackUrl: "/",
      // redirect: false,
      ...formData,
    });
  };
  return (
    <div className="grid w-full h-screen grid-cols-2">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-40 h-40 ">
          <Image src={YoonHanTharLogoOnly} alt={`Yoon han Thar`} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-200">
        <div className="w-1/2 space-y-5">
          <h1 className="text-lg tracking-wide uppercase ">
            Sign in to your account
          </h1>
          <div className="space-y-5 ">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="">
              <input
                className="w-full border rounded-lg shadow-lg border-slate-600"
                type="email"
                name="email"
                id="email"
                required
                placeholder=" Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="">
              <input
                className="w-full border rounded-lg shadow-lg border-slate-600"
                type="password"
                name="password"
                id="password"
                required
                placeholder=" Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end ">
            {/* <button> Keep Me Logged In</button> */}
            <button className="text-blue-800 "> Forgot passwprd?</button>
          </div>

          <div className="">
            <button
              onClick={signinHandler}
              className="w-full py-3 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white text-slate-50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
