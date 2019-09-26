import React from "react"
import Logo from "../images/so-logo.png"

const NavBar = () => {
  return (
    <>
      <header className="top-header">
        <nav className="top-nav">
          <a href="#">
            <img src={Logo} alt="Stack Overflow Logo" />
          </a>
          <a href="#">Products</a>
          <a href="#">Customers</a>
          <a href="#">Use Cases</a>
          <input type="text" maxLength="240" placeholder="Search..." />
          <a className="login" href="#">
            Log In
          </a>
          <a className="sign-up" href="#">
            Sign Up
          </a>
        </nav>
      </header>
    </>
  )
}

export default NavBar
