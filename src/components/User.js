import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  LineChart,
  AreaChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  Legend,
} from "recharts"

import config from "../config"

export default function User() {
  let [turnips, setTurnips] = useState()
  let { userId } = useParams()

  useEffect(() => {
    let url = `${config.url}/users/${userId}`
    // let url = `/users/${userId}`
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res)
        const d = res.map((r) => {
          return {
            // date: r.date,
            priceam: r.timeOfDay === "AM" ? r.price : null,
            pricepm: r.timeOfDay === "PM" ? r.price : null,
            ...r,
          }
        })
        console.log("d", d)
        setTurnips(d)
      })
  }, [userId])

  return (
    <div>
      <BarChart width={400} height={400} data={turnips}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="priceam" name="Morning" fill="#82ca9d" />
        <Bar dataKey="pricepm" name="Afternoon" fill="#8884d8" />
      </BarChart>
      <LineChart
        width={400}
        height={400}
        data={turnips}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Line type="monotone" dataKey="date" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="price" stroke="#387908" yAxisId={1} />
      </LineChart>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>User</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {turnips ? (
            turnips.map((t) => {
              return (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.price}</td>
                  <td>{t.username}</td>
                  <td>{t.dayOfWeek}</td>
                  <td>{t.timeOfDay}</td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td>no turnips</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
