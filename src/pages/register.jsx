 import React from 'react'


import {useFormik } from 'formik'
import * as Yup from 'yup'
import { axiosInstance } from '../util/axios'
import {useNavigate } from 'react-router-dom'

export const Register = () => {

     const navigate = useNavigate();

    //  useEffect(() => {
    //   // Fetch laptops data from the backend
    //   axiosInstance.get('/laptops')
    //     .then(response => {
    //       setLaptops(response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, []);







     const formik = useFormik({
               initialValues:{
                   firstName:"",
                   telephone:"",
                   email:"",
                   password:"",
               },
               validationSchema: Yup.object({
                firstName: Yup.string().required("Required"),
                telephone: Yup.number().required("Required"),
                email: Yup.string().required("Required").email("Invalid email address"),
                password: Yup.string()
                  .required("Required")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    "Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number"
                  )
                  .min(8, "Password must be at least 8 characters long"),
              }),
              
        onSubmit: (values, {setSubmitting}) => {
          console.log(values)
                     axiosInstance.post("/users/register/as-a-customer", {
                       firstName:values.firstName,
                       mobile:values.telephone,
                       email:values.email,
                       password:values.password,
                       
              
      }).then(response =>{
          console.log(response)
          navigate('/dashboard')
      }).catch(error =>{
          setError(error.response.data)
      }).finally(() =>{
          setSubmitting(false)
      })
      }
    })

  return (
    <div className="w-full bg-[url('images/Login.jpg')] bg-cover bg-no-repeat h-[100vh] ">
  <div className='md:w-[50%] mx-auto flex items-center justify-center flex-col h-[97%] sm:w-[75%]'>
       <div className=' text-white font-bold text-[1.4rem]'>
        <h2 className='text-center text-[15px] p-4 capitalize'>Hello Sign Up with Binary Super.</h2>
        </div>
      <div className='bg-white w-[80%] h-[80vh] mx-auto  rounded-md'>
         <form className='w-[80%] mx-auto p-10' onSubmit={formik.handleSubmit} >
         
        <div className='flex flex-col my-3'>
            <label className='text-blue font-semibold text-[13px] mb-3'>First-Name</label>
          <input
           id='firstName'
           name='firstName'
           type='text'
           
           placeholder='EX: Doe'
           value={formik.values.firstName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.firstName && formik.errors.firstName ?<div className="text-[13px] text-red">{formik.errors.firstName}</div>:null}
        </div>
        <div className='flex flex-col my-3'>
            <label className='text-blue font-semibold text-[13px] mb-3'>Telephone</label>
          <input
           id='telephone'
           name='telephone'
           type='text'
           
           placeholder='EX: Doe'
           value={formik.values.telephone}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.telephone && formik.errors.telephone ?<div className="text-[13px] text-red">{formik.errors.telephone}</div>:null}
        </div>
        <div className='flex flex-col my-3'>
            <label className='text-blue font-semibold text-[13px] mb-3'>Email</label>
          <input
           id='email'
           name='email'
           type='email'
           
           placeholder='EX: John@gmail.com'
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.email && formik.errors.email ? <div className="text-[13px] text-red">{formik.errors.email}</div>:null}
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
              {formik.touched.password && formik.errors.password ? <div className="text-[13px] text-red">{formik.errors.password}</div>: null}
            </div>
  

     <div className='flex flex-col my-3'>
         
          <button  type='submit' className='bg-orange text-white h-[45px] rounded-md font-semibold text-[13px] mt-4'>Sign In</button>
          
          

      </div>
         </form>
      </div>
      </div>
    </div>
  )
}

