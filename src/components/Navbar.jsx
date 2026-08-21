import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">SHOP.CO</Link>
        <ul className="nav-links">
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