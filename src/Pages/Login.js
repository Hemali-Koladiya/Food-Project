import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import "../Style/Style.css";
import { postLogin } from "../Helper/Api";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await postLogin(values);
      
      if (response.data.token) {
        console.log("Login Successfully",response.data);
        toast.success("Login Successfully" || response.data.msg);
        localStorage.setItem("authToken", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 800);
        resetForm();
      } else {
        console.log("Login Failed:" || response.data.msg);
        toast.error("Login Failed:" ||response.data.msg);
        resetForm();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      toast.error(
        error.response?.data?.msg ||
          "An unexpected error occurred. Please try again later."
      );
      resetForm();
    }
  };

  return (
    <div className="login_page min-w-full min-h-screen flex items-center">
      <div className="container mx-auto rounded-2xl">
        <div className="row flex md:w-11/12 mx-auto h-100 shadow-md rounded-2xl">
          <div className="w-full md:w-1/2 login-box bg-white md:rounded-l-2xl md:rounded-r-none rounded-2xl 2xl:p-24 xl:p-20 md:p-8 p-4">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="md:px-5">
                  <h2 className="text-center text-3xl font-bold uppercase">
                    Login
                  </h2>
                  <p className="text-center text-base font-normal text-neutral-600 mt-1 mb-4">
                    How to get started? Lorem ipsum dolor sit amet.
                  </p>
                  <div className="inputs mx-auto w-full overflow-hidden flex flex-col gap-y-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      className="bg-purple-100/50 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />

                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      className="bg-orange-50 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="text-center mt-9">
                    <button
                      type="submit"
                      className="login_button focus:outline-none rounded-xl py-3.5 px-6 text-xs font-bold text-white"
                    >
                      Login Now
                    </button>
                  </div>
                  <div className="text-center mt-6 ">
                    <p className="text-base font-normal login_other_font">
                      <strong>Login</strong> with Others
                    </p>
                  </div>
                  <div className="flex justify-center flex-col gap-y-4 mt-6">
                    <NavLink className="flex items-center justify-center border-2 border-slate-200 rounded-2xl py-2">
                      <img src={google} alt="google logo" />
                      <span className="ml-3 text-xs font-normal">
                        Login with <span className="font-bold">Google</span>
                      </span>
                    </NavLink>
                    <NavLink className="flex items-center justify-center border-2 border-slate-200 rounded-2xl py-2">
                      <img src={facebook} alt="facebook logo" />
                      <span className="ml-3 text-xs font-normal">
                        Login with <span className="font-bold">Facebook</span>
                      </span>
                    </NavLink>
                  </div>
                  <div className="mt-7 text-center text-sm font-normal">
                    Don't have an account ?
                    <span className="font-bold ml-2">
                      <NavLink to="/register">Sign Up</NavLink>
                    </span>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="w-1/2 image_box overflow-hidden rounded-r-2xl hidden md:block border">
            <div className="image_box">
              {/* <img src={login} alt="login" className="" /> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
