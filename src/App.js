import React from "react"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
// import logo from "./logo.svg"
// import "./App.css"

import Users from "./components/Users"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <h2>Home</h2>
            <div>Welcome to this</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
