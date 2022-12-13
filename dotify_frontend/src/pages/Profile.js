import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UpdateUserPassword } from '../services/Auth'

const Profile = ({ authenticated, user }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  //used to reset the users password

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await UpdateUserPassword(formValues)
    setFormValues({ dotifyId: '', password: '' })
  }
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div>
        <h1>Hello</h1>
        <p>
          Change the Password for your Dotify account or{' '}
          <Link to="/Register">create an account</Link>
        </p>
        <div className="sign">
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                className="email"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                className="password"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="New Password"
                value={formValues.password}
                required
              />
            </div>
            <div className="button1">
              <button
                className="regButton"
                disabled={!formValues.email || !formValues.password}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  const publicOptions = (
    <div>
      <h1>Please login or register to continue</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>
    </div>
  )

  return (
    <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
  )
}

export default Profile
