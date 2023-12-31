import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { axiosInstance } from "../util/axios";
import auth from "../util/storage";
import { useNavigate } from "react-router-dom";


export const PopComponent = ({onClose}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can send the form data to the server or perform any other actions
        // Clear the form and close the modal
        onClose();
      };

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
    <div className="bg-blue w-[30%] h-[65vh] absolute  left-[35%] top-[20%]">
    <div className="absolute bg-white w-full h-[58vh] mx-auto my-auto ">
      <h2 className="text-center bg-blue text-white  h-10">Add New Product</h2>
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
      <button  className="text-white w-[30%] mx-[30%]" onClick={onClose}>Close</button>
    </div>
  </div>
  )
}

