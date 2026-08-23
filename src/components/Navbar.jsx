import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">SHOP.CO</Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/category">Shop</Link></li>
          <li><Link to="/category">On Sale</Link></li>
          <li><Link to="/category">New Arrivals</Link></li>
          <li><Link to="/category">Brands</Link></li>
        </ul>

        <div className="nav-search">Search for products...</div>
        <div className="nav-icons">
          <Link to="/cart">🛒</Link>
          <span>👤</span>
        </div>
      </div>
    </header>
  )
}