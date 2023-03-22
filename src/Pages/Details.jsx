/** @format */

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { backendUrl } from '../constants'

function Details() {
  const { id } = useParams()
  useEffect(() => {
    loadOrderDetails(id)
  }, [id])

  const [order, setOrder] = useState()

  async function loadOrderDetails(id) {
    const rawOrderItems = await fetch(`${backendUrl}/ordersfull/${id}`)
    const orderDetails = await rawOrderItems.json()
    setOrder(orderDetails)
  }
  return order ? (
    <div>
      <p>Order Details</p>
      <div style={{ marginTop: 10 }}>Order Number: #{order.id}</div>
      <div style={{ marginBottom: 10 }}>Order For: {order.orderfor}</div>
      <div className="order-detail">
        <table>
          <tr>
            <th>Pizza</th>
            <th>Toppings</th>
            <th>Total Price</th>
          </tr>
          {order.pizzas.map(p => (
            <tr>
              <td>
                <div className="label">{p.size}</div>
                <div className="price">{p.priceF}</div>
              </td>
              <td>
                {p.toppings.map(t => (
                  <div className="topping">
                    {t.label} ({t.priceF})
                  </div>
                ))}
              </td>
              <td>{p.totalPriceF}</td>
            </tr>
          ))}
          <tr className="total">
            <td colSpan={2}>
              <div>Subtotal: </div>
              <div>VAT: </div>
              <div>Total: </div>
            </td>
            <td>
              <div>{order.subtotalCostF}</div>
              <div>{order.vatF}</div>
              <div>{order.totalCostF}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  ) : (
    <span>No Order</span>
  )
}

export default Details
