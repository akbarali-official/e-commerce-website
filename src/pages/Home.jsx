import { products, brands, dressStyles } from '../data/products'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

const styleColors = { Casual: '#c9c9c9', Formal: '#dcdcdc', Party: '#bcbcbc', Gym: '#d4d4d4' }

export default function Home() {
  const newArrivals = products.slice(0, 4)
  const topSelling = products.slice(4, 8)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>
            <button className="btn">Shop Now</button>
            <div className="hero-stats">
              <div className="stat"><b>200+</b><span>International Brands</span></div>
              <div className="stat"><b>2,000+</b><span>High-Quality Products</span></div>
              <div className="stat"><b>30,000+</b><span>Happy Customers</span></div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/image(1).png.png" alt="Hero" />
          </div>
        </div>
      </section>

      <section className="brand-strip">
        <div className="container">
          {brands.map((b) => <span key={b}>{b}</span>)}
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="product-grid">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="view-all-wrap"><button className="btn btn-outline">View All</button></div>
      </section>

      <section className="section container">
        <h2 className="section-title">TOP SELLING</h2>
        <div className="product-grid">
          {topSelling.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="view-all-wrap"><button className="btn btn-outline">View All</button></div>
      </section>
      <section className="section container">
  <div className="dress-style-box">
    <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
    
    <div className="dress-style-grid">
      {/* Row 1 */}
      <div className="dress-card small">
        <span className="dress-card-title">Casual</span>
        <img src="/casual.png.png" alt="Casual" className="dress-card-img" />
      </div>

      <div className="dress-card large">
        <span className="dress-card-title">Formal</span>
        <img src="/formal.png.png" alt="Formal" className="dress-card-img" />
      </div>

      {/* Row 2 */}
      <div className="dress-card large">
        <span className="dress-card-title">Party</span>
        <img src="/party.png.png" alt="Party" className="dress-card-img" />
      </div>

      <div className="dress-card small">
        <span className="dress-card-title">Gym</span>
        <img src="/gym.png.png" alt="Gym" className="dress-card-img" />
      </div>
    </div>
  </div>
</section>

{/* OUR HAPPY CUSTOMERS SECTION */}
<section className="customers-section container">
  <div className="customers-header">
    <h2 className="customers-title">OUR HAPPY CUSTOMERS</h2>
    <div className="customers-arrows">
      <button className="arrow-btn" aria-label="Previous">←</button>
      <button className="arrow-btn" aria-label="Next">→</button>
    </div>
  </div>

  <div className="customers-grid">
    {/* Card 1 */}
    <div className="customer-card">
      <div className="stars">★★★★★</div>
      <div className="customer-name">
        <span>Sarah M.</span>
        <span className="verified-badge">✓</span>
      </div>
      <p className="customer-review">
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
      </p>
    </div>

    {/* Card 2 */}
    <div className="customer-card">
      <div className="stars">★★★★★</div>
      <div className="customer-name">
        <span>Alex K.</span>
        <span className="verified-badge">✓</span>
      </div>
      <p className="customer-review">
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
      </p>
    </div>

    {/* Card 3 */}
    <div className="customer-card">
      <div className="stars">★★★★★</div>
      <div className="customer-name">
        <span>James L.</span>
        <span className="verified-badge">✓</span>
      </div>
      <p className="customer-review">
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
      </p>
    </div>
  </div>
</section>
      
      <Newsletter />
    </>
  )
}