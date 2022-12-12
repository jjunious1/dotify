import { Link, useNavigate } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogout }) => {
  const navigate = useNavigate()
  let authenticatedOptions
if (user) {
  authenticatedOptions = (
    <nav className="links">
      <Link to="/">Home</Link>
      <Link onClick={handleLogout} to="/">Sign Out</Link>
      <div className="dropdown">
        <a class="box-shadow-menu dropbtn">
          <div>
            <h3 className="drop">Welcome</h3>
            <p className="drop" onClick={() => navigate(-1)}>Back</p>
          </div>
        </a>
      </div>
    </nav>
  )
}

const publicOptions = (
  <nav className="links">
    <Link to="/">Home</Link>
    <Link to="/Register">Register</Link>
    <Link to="/Login">Login</Link>
    <div className="dropdown">
    <a class="box-shadow-menu dropbtn">
      <div className="dropdown-content">
        <h3 className="drop">Welcome</h3>
        <p className="drop" onClick={() => navigate(-1)}>Back</p>
      </div>
    </a>
    </div>
    
  </nav>
)

return (
  <header className='sticky-header'>
    <Link to="/">
      <div className="navbar">
      </div>
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
  </header>
)
}

export default Nav