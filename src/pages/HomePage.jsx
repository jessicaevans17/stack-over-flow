import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

const cog = <FontAwesomeIcon icon={faCog} />
const world = <FontAwesomeIcon icon={faGlobeAmericas} />

const HomePage = () => {
  return (
    <>
      <main>
        <nav className="side-nav">
          <a href="#">Home</a>
          <a href="#">Public</a>
          <div className="side-nav-tab">
            <a href="#">{world} Stack Overflow</a>
            <a href="#">Tags</a>
            <a href="#">Users</a>
            <a href="#">Jobs</a>
          </div>
          <a href="#">Teams</a>
        </nav>
        <div className="main-content">
          <header>
            <div className="top-part">
              <h1>All Questions</h1>
              <a href="#">Ask a Question</a>
            </div>
            <div className="bottom-part">
              <p>18,269,585 questions</p>
              <div className="filter-options">
                <a className="newest-filter" href="#">
                  Newest
                </a>
                <a href="#">Active</a>
                <a href="#">Bountied</a>
                <a href="#">Unanswered</a>
                <a className="more-filter" href="#">
                  More
                </a>
                <a className="filter-button" href="#">
                  {cog}Filter
                </a>
              </div>
            </div>
          </header>
          <section className="question-preview">
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
            <section className="question-and-answer">
              <a href="#">How do you build Stack Overflow in 5 days???</a>
              <p>
                Mark clearly hates us and told us to make stack overflow. How do
                you do this??? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Ipsum molestiae quidem necessitatibus ex
                dolorum voluptas perferendis nesciunt quia facilis. Blanditiis,
                dolores debitis. Ad, ratione doloribus veniam accusamus quidem
                obcaecati itaque!......
              </p>
            </section>
          </section>
        </div>
      </main>
    </>
  )
}

export default HomePage
