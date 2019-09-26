import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <section className="col-1">
          <h3>Stack Overflow</h3>
          <ul>
            <li>Questions</li>
            <li>Jobs</li>
            <li>Developer Jobs Directory</li>
            <li>Salary Calculator</li>
            <li>Help</li>
            <li>Mobile</li>
            <li>Disable Responsiveness</li>
          </ul>
        </section>
        <section className="col-2">
          <h3>Products</h3>
          <ul>
            <li>Teams</li>
            <li>Talent</li>
            <li>Advertising</li>
            <li>Enterprise</li>
          </ul>
        </section>
        <section className="col-3">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section className="col-4">
          <h3>Stack Exchange Network</h3>
          <ul>
            <li>Technology</li>
            <li>Life/Arts</li>
            <li>Culture / Recreation</li>
            <li>Science</li>
            <li>Other</li>
          </ul>
        </section>
        <section className="col-5">
          <ul className="social-media">
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          <p>
            site design / logo © 2019 Stack Exchange Inc; user contributions
            licensed under cc by-sa 4.0 with attribution required. rev
            2019.9.25.35007
          </p>
        </section>
      </footer>
    </>
  )
}

export default Footer
