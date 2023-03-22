/** @format */

import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { backendUrl } from '../constants'
import New from './New'

function Orders() {
  const [orders, setOrders] = useState([])
  const [newOrder, setNewOrder] = useState(false)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const ord = await fetch(`${backendUrl}/orders`, {})
    const ords = await ord.json()
    setOrders(ords)
  }

  return (
    <div>
      <p style={{ fontSize: 20, margin: '12px 0' }}>
        Orders <button onClick={() => setNewOrder(true)}>New Order</button>
      </p>
      <form className="search">
        <img src={require('../icons/search.png')} alt="" srcset="" />
        <input type="search" placeholder="Find Order" />
      </form>
      <div className="orders-list">
        {orders.map(o => (
          <Link to={`${o.id}`}>
            <div className="order-item">
              <div className="name">
                {o.id} - {o.orderfor}
              </div>
              <div className="date">
                {moment(o.createdat).format('ddd D MMM YY hh:mm:ss a')}
              </div>
              <div className="cost">{o.totalCostF}</div>
            </div>
          </Link>
        ))}
      </div>

      {newOrder && <New />}
    </div>
  )
}

export default Orders
