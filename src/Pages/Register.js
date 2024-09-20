import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../Style/Style.css";
import { postRegister } from "../Helper/Api";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await postRegister(values)
      console.log("Full Response:", response);

      if (response.status === 201) {
        console.log("Registration Successful:", response.data);
        toast.success(response.data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 800);
        resetForm();
      } else {
        toast.error(
          response.data.msg || "An error occurred. Please try again."
        );
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
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="md:px-5">
                  <h2 className="text-center text-3xl font-bold uppercase">
                    Sign Up
                  </h2>
                  <p className="text-center text-base font-normal text-neutral-600 mt-1 mb-4">
                    How to get started? Lorem ipsum dolor sit amet.
                  </p>
                  <div className="inputs mx-auto w-full overflow-hidden flex flex-col gap-y-4">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Username"
                      autoComplete="off"
                      className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal capitalize"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs"
                    />

                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
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
                      className="bg-orange-100/75 rounded-2xl px-4 py-2.5 text-sm focus:outline-none placeholder:text-stone-900 placeholder:text-xs placeholder:font-normal"
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
                      Register
                    </button>
                  </div>
                  <div className="mt-7 text-center text-sm font-normal">
                    Already have an account?
                    <span className="font-bold ml-2">
                      <NavLink to="/login">Login</NavLink>
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

export default Register;
