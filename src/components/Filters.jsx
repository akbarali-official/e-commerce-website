const colors = ['#22c55e', '#ef4444', '#eab308', '#f97316', '#3b82f6', '#1d4ed8', '#a855f7', '#ec4899', '#000000']
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']
const styles = ['Casual', 'Formal', 'Party', 'Gym']

export default function Filters() {
  return (
    <aside className="filters-panel">
      <div className="filter-group">
        <h5>Filters 🔽</h5>
      </div>
      <div className="filter-group">
        <label>T-shirts</label>
        <label>Shorts</label>
        <label>Shirts</label>
        <label>Hoodie</label>
        <label>Jeans</label>
      </div>
      <div className="filter-group">
        <h5>Price</h5>
        <input type="range" min="0" max="500" style={{ width: '100%' }} />
      </div>
      <div className="filter-group">
        <h5>Colors</h5>
        <div className="color-swatches">
          {colors.map((c, i) => (
            <span key={i} className={`swatch${i === 5 ? ' active' : ''}`} style={{ background: c }} />
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h5>Size</h5>
        <div className="size-pills">
          {sizes.map((s) => (
            <span key={s} className={s === 'Medium' ? 'active' : ''}>{s}</span>
          ))}
        </div>
      </div>
      <div className="filter-group" style={{ borderBottom: 'none' }}>
        <h5>Dress Style</h5>
        {styles.map((s) => <label key={s}>{s}</label>)}
      </div>
      <button className="btn" style={{ width: '100%' }}>Apply Filter</button>
    </aside>
  )
}