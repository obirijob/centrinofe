/** @format */

import React, { useState, useEffect } from 'react'
import { backendUrl } from '../constants'

function New() {
  const [pizzas, setPizzas] = useState([])
  const [toppings, setToppings] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const p = await fetch(`${backendUrl}/pizzas`)
    const pz = await p.json()
    setPizzas(pz)
    const t = await fetch(`${backendUrl}/toppings`)
    const ts = await t.json()
    setToppings(ts)
  }

  return (
    <div className="neworder">
      <h2>New Order</h2>
      <p className="pizzas">
        {pizzas.map(p => (
          <div className="pizza-select">{p.size}</div>
        ))}
      </p>
    </div>
  )
}

export default New
