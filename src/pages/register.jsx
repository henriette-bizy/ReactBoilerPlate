import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { axiosInstance } from '../util/axios'
import {useNavigate } from 'react-router-dom'

export const Register = () => {

     const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            role:"",
            password:""
        },
        validationSchema: Yup.object({
            firstName:Yup.string()
            .required("Required"),
            lastName:Yup.string()
            .required("Required"),
            email:Yup.string()
            .required("Required")
            .email("Invalid email address"),
            role:Yup.string()
            .required("Required")
            .default("admin"),
            password:Yup.string()
            .min(8,"must be atleset 8 characters long")
            .required("Required"),
            
        }),
        onSubmit: (values, {setSubmitting}) => {
          console.log(values)
          axiosInstance.post("/user", {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              role:'admin',
              password: values.password,
              
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
  <div className='w-[50%] mx-auto flex items-center justify-center flex-col h-[97%]'>
       <div className=' text-white font-bold text-[1.4rem]'>
        <h2 className='text-center text-[15px] p-4 capitalize'>Hello there, Sign up with</h2>
        </div>
      <div className='bg-white w-[80%] h-[85vh] mx-auto  rounded-md'>
         <form className='w-[80%] mx-auto p-10' onSubmit={formik.handleSubmit} >
          <div className='flex flex-col my-3'>
            <label className='text-blue font-semibold text-[13px] mb-3'>FirstName</label>
          <input
           id='firstName'
           name='firstName'
           type='text'
           
           placeholder='EX: John'
           value={formik.values.firstName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
        </div>
        <div className='flex flex-col my-3'>
            <label className='text-blue font-semibold text-[13px] mb-3'>LastName</label>
          <input
           id='lastName'
           name='lastName'
           type='text'
           
           placeholder='EX: Doe'
           value={formik.values.lastName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
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
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
        </div>
          <div className='flex flex-col my-3'>
              <label className='text-blue font-semibold text-[13px] my-3' >Role</label>
            <select 
            id='role'
            name='role'
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'>
              <option value='admin' >Admin</option>
              <option value='client'>Client</option>
            </select>
            {formik.touched.role && formik.errors.role ? <div>{formik.errors.role}</div>:null}
          </div>
          
        <div className='flex flex-col mb-7'>
        <label className='text-blue font-semibold text-[13px] my-3'>Password</label>
          <input
          id='password'
          type='password'
          name='password'
          placeholder='Input your password here'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className='rounded-md border-2 border-blue h-[45px] text-[13px] p-3'
          
          />
          {formik.touched.password && formik.errors.password? <div>{formik.errors.password}</div>:null}
     </div>

     <div className='flex flex-col my-3'>
         
          <button  type='submit' className='bg-orange text-white h-[45px] rounded-md font-semibold text-[13px]'>Sign In</button>
          
          <h2 className='text-[14px] my-3 text-center text-blue font-semibold mo'>Don't have an account? Sign up</h2>

      </div>
         </form>
      </div>
      </div>
    </div>
  )
}
