import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ dotifyId: '', password: '' })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ dotifyId: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/browse`)
  }

  return (
    <div className="signIn-form">
      <h1 className="sign">Sign In</h1>
      <div className="sign-input-wrapper">
        <label htmlFor="dotifyId">DotifyId</label>
        <form className="col" onSubmit={handleSubmit}>
          <input
            className="dotifyId"
            onChange={handleChange}
            name="dotifyId"
            type="dotifyId"
            value={formValues.dotifyId}
            required
          />
          <div className="sign-input-wrapper">
            <label htmlFor="Password">Password</label>
            <input
              className="password"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="button1">
            <button
              className="regButton"
              disabled={!formValues.dotifyId || !formValues.password}
            >
              Sign In
            </button>
          </div>
        </form>
        <p>
          Not a member?{'  '}
          <Link to="/Register">Sign up now</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
