import './Register.css'

// import portrait from '../../assets/images/portrait.webp'

// import ROUTES from '../../routes/routes'
// import { UseContext } from '../../App'

import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
// import { useNavigate } from "react-router-dom"
// import instance from '../../api/axios'

function Register() {
//   const navigate = useNavigate()
//   const { forLoginBtn, enterWithGoogle } = useContext(UseContext)
  const [ showMessage, setShowMessage ] = useState(false)
  const [ existingEmail, setExistingEmail ] = useState(null)
  useEffect(() => window.scrollTo(0, 0), [])

  const validationSchema = yup.object().shape({
    name: yup.string().typeError('must be a string').required("can't be empty"),
    companyName: yup.string().typeError('must be a string').required("can't be empty"),
    email: yup.string().email('please enter a valid email').required("can't be empty"),
    password: yup.string().typeError('must be a string').min(1, 'password must be at least 8 characters').max(20, 'password must be at most 20 characters').required("can't be empty"),
    // password: yup.string().typeError('must be a string').min(8, 'password must be at least 8 characters').max(20, 'password must be at most 20 characters').required("can't be empty"),
  })

  return (
    <Formik
      initialValues = {{
        name: '',
        companyName: '',
        email: '',
        password: '',
        phoneNumber: ''
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
          <div className='register-block'>
              <div className='register'>
            <h1 className='register_first_text'>Start a free trial</h1>
            <p className='register_description'>Try Leexi for 7 days and transform your productivity. Stop wasting time writing summaries and follow-up emails after each meeting. The hours spent trying to remember what was said in a meeting are over! Switch to automatic summaries and follow-up emails with Leexi. <a href='!#'>Discuss with one of our experts.</a></p>
            <form className='register-form' onSubmit={handleSubmit}>
              <div className='register-input_div'>
                <label className='register-label'>Full name <p className='asterisk'>*</p></label>
                <input
                  className="register-input"
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder='Enter your full name'
                  autoFocus
                />
                {touched.name && errors.name && <p className="register_error">{errors.name}</p>}
              </div>
              <div className='register-input_div'>
                <label className='register-label'>Company name <p className='asterisk'>*</p></label>
                <input
                  className="register-input"
                  type='text'
                  name='companyName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  placeholder='Enter your company name'
                />
                {touched.companyName && errors.companyName && <p className="register_error">{errors.companyName}</p>}
              </div>
              <div className='register-input_div'>
                <label className='register-label'>Email <p className='asterisk'>*</p></label>
                <input
                  className="register-input"
                  type='text'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Enter your e-mail address'
                />
                {touched.email && errors.email && <p className="register_error">{errors.email}</p>}
              </div>
              <div className='register-input_div'>
                <label className='register-label'>Password <p className='asterisk'>*</p></label>
                <input
                  className="register-input"
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Enter your password'
                />
                {touched.password && errors.password && <p className="register_error">{errors.password}</p>}
              </div>
              <button className='register-button'>Register</button>
            </form>
          </div>
          </div>
        )
      }
    </Formik>
  )
}

export default Register
