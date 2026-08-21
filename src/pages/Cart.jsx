import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductArt from '../components/ProductArt'
import Newsletter from '../components/Newsletter'

export default function Cart() {
  const [items, setItems] = useState([
    { ...products.find(p => p.id === 11), qty: 1 },
    { ...products.find(p => p.id === 3), qty: 1 },
    { ...products.find(p => p.id === 2), qty: 1 },
  ])

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
    )
  }

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id))

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const discount = Math.round(subtotal * 0.2)
  const deliveryFee = items.length ? 15 : 0
  const total = subtotal - discount + deliveryFee

  return (
    <div className="container">
      <div className="breadcrumb">Home &gt; Cart</div>
      <h2 style={{ fontSize: 32, marginBottom: 24 }}>YOUR CART</h2>

      <div className="cart-layout">
        <div>
          {items.length === 0 && <p>Your cart is empty.</p>}
          {items.map((it) => (
            <div className="cart-item" key={it.id}>
              <div className="cart-item-thumb">
                <img src={it.image} alt ={it.name} className="cart-item-img" />
              </div>
              <div className="cart-item-info">
                <h4>{it.name}</h4>
                <div className="meta">Size: Medium</div>
                <div className="meta">Color: Default</div>
                <div className="price">${it.price}</div>
              </div>
              <button className="cart-remove" onClick={() => removeItem(it.id)}>🗑</button>
              <div className="cart-qty">
                <button onClick={() => updateQty(it.id, -1)}>-</button>
                <span>{it.qty}</span>
                <button onClick={() => updateQty(it.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>${subtotal}</span></div>
          <div className="summary-row"><span>Discount (-20%)</span><span className="discount">-${discount}</span></div>
          <div className="summary-row"><span>Delivery Fee</span><span>${deliveryFee}</span></div>
          <div className="summary-row total"><span>Total</span><span>${total}</span></div>
          <div className="promo-row">
            <input placeholder="Add promo code" />
            <button className="btn">Apply</button>
          </div>
          <button className="btn">Go to Checkout →</button>
        </div>
      </div>

      <Link to="/" style={{ color: 'var(--text-muted)', fontSize: 14 }}>← Continue Shopping</Link>
      <Newsletter />
    </div>
  )
}