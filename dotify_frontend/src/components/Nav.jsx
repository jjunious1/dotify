import { Link, useNavigate } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogout }) => {
  const navigate = useNavigate()
  let authenticatedOptions
if (user) {
  authenticatedOptions = (
    <nav className="links">
      <div className="dropdown">
        <a href="menu" class="box-shadow-menu"> Menu</a>
        <p className="update" onClick={() => navigate(-1)}>Back</p>
      </div>
      <Link to="/">Home</Link>
      <Link onClick={handleLogout} to="/">Sign Out</Link>
    </nav>
  )
}

const publicOptions = (
  <nav className="links">
    <div className="dropdown">
    <a href="menu" class="box-shadow-menu"></a>
        <p className="drop" onClick={() => navigate(-1)}>Back</p>
    </div>
    <Link to="/">Home</Link>
    <Link to="/Register">Register</Link>
    <Link to="/Signin">Sign In</Link>
    
  </nav>
)

return (
  <header className=''>
    <Link to="/">
      <div className="navbar">
      </div>
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
  </header>
)
}

export default Nav