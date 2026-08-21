export default function Newsletter() {
  return (
    <div className="newsletter">
      <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Subscribe to Newsletter</button>
      </form>
    </div>
  )
}