import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById, products } from '../data/products'
import ProductArt from '../components/ProductArt'
import ProductCard from '../components/ProductCard'
import Rating from '../components/Rating'
import Newsletter from '../components/Newsletter'

const colorOptions = ['#4f46e5', '#111111', '#4a5a48']
const sizeOptions = ['Small', 'Medium', 'Large', 'X-Large']

   const reviews = [
  { name: 'Samantha D.', rating: 5, date: 'August 14, 2023', text: 'Great quality fabric, fits exactly as described. Would definitely order again.' },
  { name: 'Alex M.', rating: 4, date: 'August 15, 2023', text: 'Good product overall, delivery was a bit slow but the item itself is worth it.' },
  { name: 'Ethan R.', rating: 3.5, date: 'August 16, 2023', text: 'Color is slightly different from the photos, but material quality is solid.' },
  { name: 'Olivia P.', rating: 4, date: 'August 17, 2023', text: 'Comfortable and stylish, perfect for everyday wear.' },
  { name: 'Liam K.', rating: 4, date: 'August 18, 2023', text: 'Great fit and comfortable material. Would recommend to friends.' },
  { name: 'Ava H.', rating: 4.5, date: 'August 19, 2023', text: 'Exceeded my expectations, the quality is amazing for the price.' },
]


export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [activeColor, setActiveColor] = useState(0)
  const [activeSize, setActiveSize] = useState(1)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('reviews')

  if (!product) return <div className="container section">Product not found.</div>

  const related = products.filter((p) => [10, 11, 12, 13, 14].includes(p.id) && p.id !== product.id)

  return (
    <div className="container">
      <div className="breadcrumb">Home &gt; Shop &gt; Men &gt; T-shirts</div>
      <div className="pdp-layout">
        <div className="pdp-thumbs">
        {product.images.map((img, i) => (
  <div
    key={i}
    className={`pdp-thumb ${activeColor === i ? "active" : ""}`}
    onClick={() => setActiveColor(i)}
    style={{ cursor: "pointer" }}
  >
    <img src={img} alt={product.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
  </div>
))}
        </div>
       <div className="pdp-main-image">
  <img src={product.images[activeColor]} alt={product.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
</div>
        <div className="pdp-info">
          <h1>{product.name}</h1>
          <Rating value={product.rating} />
          <div className="pdp-price">
            <span>${product.price}</span>
            {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
          </div>
          <p className="pdp-desc">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="pdp-section">
            <h5>Select Colors</h5>
            <div className="color-dots">
              {colorOptions.map((c, i) => (
                <span
                  key={c}
                  className={`color-dot${activeColor === i ? ' active' : ''}`}
                  style={{ background: c }}
                  onClick={() => setActiveColor(i)}
                />
              ))}
            </div>
          </div>

          <div className="pdp-section">
            <h5>Choose Size</h5>
            <div className="size-options">
              {sizeOptions.map((s, i) => (
                <span
                  key={s}
                  className={activeSize === i ? 'active' : ''}
                  onClick={() => setActiveSize(i)}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pdp-cart-row">
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="tabs">
        <span className={tab === 'details' ? 'active' : ''} onClick={() => setTab('details')}>Product Details</span>
        <span className={tab === 'reviews' ? 'active' : ''} onClick={() => setTab('reviews')}>Rating & Reviews</span>
        <span className={tab === 'faqs' ? 'active' : ''} onClick={() => setTab('faqs')}>FAQs</span>
      </div>

      {tab === 'reviews' && (
        <>
          <div className="review-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <span className="stars">{'★★★★★'.slice(0, Math.round(r.rating))}</span>
                <div className="reviewer">{r.name}</div>
                <p>{r.text}</p>
                <div className="review-date">Posted on {r.date}</div>
              </div>
            ))}
          </div>
          <div className="load-more-wrap" style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
            <button className="btn-outline">Load More Reviews</button>
          </div>
        </>
      )}
      {tab === 'details' && (
        <p style={{ color: 'var(--text-muted)', marginBottom: 30 }}>
          Material: 100% cotton. Machine washable, tumble dry low. Available in multiple colors and sizes.
        </p>
      )}
      {tab === 'faqs' && (
        <p style={{ color: 'var(--text-muted)', marginBottom: 30 }}>
          Shipping takes 3-5 business days. Returns accepted within 30 days of delivery.
        </p>
      )}

      <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
      <div className="product-grid" style={{ marginBottom: 40 }}>
        {related.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <Newsletter />
    </div>
  )
}