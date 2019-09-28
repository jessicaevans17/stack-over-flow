import React, { Component } from "react"
import HomePage from "./pages/HomePage"
import AskQuestion from "./pages/AskQuestion"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/ask-question" component={AskQuestion}></Route>
            <Route></Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App
