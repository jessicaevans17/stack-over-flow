import React, { Component } from "react"
import Logo from "./images/so-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

const cog = <FontAwesomeIcon icon={faCog} />
const world = <FontAwesomeIcon icon={faGlobeAmericas} />

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="top-nav">
            <a href="#">
              <img src={Logo} alt="Stack Overflow Logo" />
            </a>
            <a href="#">Products</a>
            <a href="#">Customers</a>
            <a href="#">Use Cases</a>
            <input type="text" maxLength="240" placeholder="Search..." />
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
          </nav>
        </header>
        <main>
          <nav className="side-nav">
            <a href="#">Home</a>
            <a href="#">Public</a>
            <div>
              <a href="#">{world} Stack Overflow</a>
              <a href="#">Tags</a>
              <a href="#">Users</a>
              <a href="#">Jobs</a>
            </div>
            <a href="#">Teams</a>
          </nav>
          <header>
            <div>
              <h1>All Questions</h1>
              <a href="#">Ask a Question</a>
            </div>
            <div>
              <p>18,269,585 questions</p>
              <div>
                <a href="#">Newest</a>
                <a href="#">Active</a>
                <a href="#">Bountied</a>
                <a href="#">Unanswered</a>
                <a href="#">More</a>
              </div>
              <a href="#">{cog}Filter</a>
            </div>
          </header>
          <section>
            <section className="votes-answers">
              <div className="total-votes">
                <h2>0</h2>
                <p>votes</p>
              </div>
              <div className="total-answers">
                <h2>0</h2>
                <p>answers</p>
              </div>
              <div>
                <p>
                  <span>2</span> views
                </p>
              </div>
            </section>
            <a href="#">How do you build Stack Overflow in 5 days???</a>
            <p>
              Mark clearly hates us and told us to make stack overflow. How do
              you do this??? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ipsum molestiae quidem necessitatibus ex dolorum voluptas
              perferendis nesciunt quia facilis. Blanditiis, dolores debitis.
              Ad, ratione doloribus veniam accusamus quidem obcaecati
              itaque!......
            </p>
          </section>
        </main>
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
            <ul>
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
}

export default App
