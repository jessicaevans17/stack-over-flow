import React, { Component } from "react"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    )
  }
}

export default App
