import { Link, useNavigate } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogout }) => {
  const navigate = useNavigate()
  let authenticatedOptions
if (user) {
  authenticatedOptions = (
    <nav>
      <Link className="links" onClick={() => navigate(-1)}>Home</Link>
      <Link className="links" onClick={handleLogout} to="/">Sign Out</Link>
      <div className="dropdown">
        <a class="box-shadow-menu dropbtn">
          <div className="dropdown-content links">
          </div>
        </a>
      </div>
    </nav>
  )
}

const publicOptions = (
  <nav>
    <Link className="links" to="/">Home</Link>
    <Link className="links" to="/browse">Browse</Link>
    <Link className="links" to="/Register">Register</Link>
    <Link className="links" to="/Login">Login</Link>
    <div className="dropdown">
    <a class="box-shadow-menu dropbtn">
      <div className="dropdown-content links">
        <h3 className="drop">Welcome</h3>
        <p className="drop" onClick={() => navigate(-1)}>Back</p>
      </div>
    </a>
    </div>
    
  </nav>
)

return (
  <header className='sticky-header'>
    <div className="navbar">
      {authenticated && user ? authenticatedOptions : publicOptions}
    </div>
  </header>
)
}

export default Nav