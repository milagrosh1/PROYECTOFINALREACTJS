import Brand from "../Brand";
import CartWidget from "../CartWidget/CartWidget"
import '../Navbar/NavBar.css'
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/Brand.svg"
const NavBar = () => {

  return (
    <>
      <header className='logo'>

        <nav className="nav-bar">

          <Link to={"/"}>
            <img href="" src={logo} className="logo-medidas" alt="" />
          </Link>

          <ul className="nav-item">
            <li>
              <NavLink className='navLinks' to={`/categoria/servicios`}>Servicios</NavLink>
            </li>

            <li>
              <NavLink className='navLinks' to={`/categoria/impresiones`}>Impresiones</NavLink>
            </li>

            <li>
              <NavLink className='navLinks' to={`/categoria/albumes`} >Albumes</NavLink>
            </li>
          </ul>

          <CartWidget />

        </nav>

      </header>




    </>
  )
}

export default NavBar