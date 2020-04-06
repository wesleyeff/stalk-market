import React, { useState, useEffect } from "react"
import { useRouteMatch, Switch, Route, Link } from "react-router-dom"
import config from "../config"

import User from "./User"

export default function Users() {
  let match = useRouteMatch()
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      let url = `${config.url}/users`
      console.log("fetch url", url)
      // let url = `/users`
      let u = await fetch(url)
      u = await u.json()

      // if (users.length === 0) {
      // setUser(u[0].userId)
      // }
      setUsers(u)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  // function handleSelect(e) {
  //   console.log("handle select", e.target.value)
  //   setUser(e.target.value)
  // }

  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Switch>
          <Route path={`${match.path}/:userId`}>
            <User />
          </Route>
          <Route>
            {/* <select onChange={handleSelect} name="users" id="users"> */}
            <ul>
              {users.map((u) => {
                return (
                  <li key={u.userId} value={u.userId}>
                    <Link to={`${match.url}/${u.userId}`}>{u.username}</Link>
                  </li>
                )
              })}
            </ul>
            {/* </select> */}
          </Route>
        </Switch>
      )}
    </div>
  )
}
