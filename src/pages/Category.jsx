import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import Newsletter from '../components/Newsletter'

export default function Category() {
  return (
    <div className="container">
      <div className="breadcrumb">Home &gt; Casual</div>
      <div className="category-layout">
        <Filters />
        <div>
          <div className="category-header">
            <h2 style={{ fontSize: 28 }}>Casual</h2>
            <select>
              <option>Sort by: Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="product-grid">
            {products.slice(0, 9).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}