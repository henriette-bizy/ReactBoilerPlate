import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { axiosInstance } from "../util/axios";
import auth from "../util/storage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //navigation
  const navigate = useNavigate();

  //error handling
  const [error, setError] = useState();

  //formik to handle changes , validation and submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log("on submitting");
      axiosInstance
        .post("/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.token);
          auth.storeToken(response.data.token);

          navigate("/users");
          console.log("finished");
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className=" w-full bg-[url('/images/Login.jpg')] bg-cover bg-no-repeat h-[100vh] flex items-center">
      <div className="w-[50%] mx-auto">
        <div className=" text-white font-bold text-[1.4rem]">
          <h2 className="text-center p-4 capitalize">Welcome, Sign in</h2>
        </div>
        <div className="bg-white w-[80%] h-[55vh] mx-auto my-auto rounded-md">
          <form className="w-[80%] mx-auto p-10" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-3">
              <label className="text-blue font-semibold text-[13px] mb-3">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-md border-2 border-blue h-[45px] text-[13px] p-3"
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex flex-col mb-7">
              <label className="text-blue font-semibold text-[13px] my-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Input your password here"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-md border-2 border-blue h-[45px] text-[13px] p-3"
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="flex flex-col my-3">
              <button
                type="submit"
                className="bg-orange text-white h-[45px] rounded-md font-semibold text-[13px]"
              >
                Sign In
              </button>
              <h2 className="text-[14px] my-3 text-center text-blue font-semibold mo">
                Don't have an account? Sign up
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
