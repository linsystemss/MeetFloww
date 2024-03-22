import google from '../../images/google.png'

// import ROUTES from '../../routes/routes'
// import { UseContext } from '../../App'
import './Login.css'

import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
// import { useNavigate } from "react-router-dom"
// import instance from '../../api/axios'

function Login() {
//   const navigate = useNavigate()
//   const { forLoginBtn, enterWithGoogle } = useContext(UseContext)
  const [ showMessage, setShowMessage ] = useState(false)
  const [ existingEmail, setExistingEmail ] = useState(null)

  const validationSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required("can't be empty"),
    password: yup.string().typeError('must be a string').min(1, 'password must be at least 8 characters').max(20, 'password must be at most 20 characters').required("can't be empty")
    // password: yup.string().typeError('must be a string').min(8, 'password must be at least 8 characters').max(20, 'password must be at most 20 characters').required("can't be empty")
  })

  return (
    <Formik
      initialValues = {{
        email: '',
        password: ''
      }}

      onSubmit = {( values, { resetForm } ) => {
        // instance
        // .post(ROUTES.SIGNUP, values)
        // .then(res => {
        //   if (res.data.message) {
        //     setExistingEmail(res.data.message)
        //     setShowMessage(true)
        //     setTimeout(() => {
        //       setShowMessage(false)
        //     }, 2500)
        //   } else {
        //     console.log('res:',res)
        //     resetForm()
        //   }
        // })
        // .catch(err => console.log('Error:',err))
      }}

      validateOnBlur
      validationSchema = { validationSchema }
    >

      {
        ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className='login'>
            <h1 className='login_first_text'>Welcome back! ✨</h1>
            <button className='google_button'>
              <img className='google_img' src={google} alt='' />
              <p>Sign in with Google</p>
            </button>
            <div className='hr'></div>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className='login-input_div'>
                <label className='login-label'>Email</label>
                <input
                  className="login-input"
                  type='text'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your e-mail address'
                />
                {touched.email && errors.email && <p className="login_error">{errors.email}</p>}
              </div>
              <div className='login-input_div'>
                <label className='login-label'>Password</label>
                <input
                  className="login-input"
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Enter your password'
                />
                {touched.password && errors.password && <p className="login_error">{errors.password}</p>}
              </div>
              <button className='login-button'>Login</button>
            </form>
          </div>
        )
      }
    </Formik>
  )
}

export default Login
