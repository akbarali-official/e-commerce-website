export default function Rating({ value }) {
  const full = Math.round(value)
  const stars = '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full)
  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <span>{value}/5</span>
    </div>
  )
}