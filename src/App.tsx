
import './App.css'

function App() {
  return (
    <main className="container">
      <h1>Our Products</h1>

      <div className="product-card">
        <img
          src="/software.png"
          alt="Software Development"
          className="product-image"
        />

        <h2>Software Development</h2>
        <p className="price">US$30.00</p>

        <a
          className="buy-button"
          href="https://buy.stripe.com/test_eVq28q41vfnb0BZ1QIbII00"
        >
          Buy Now
        </a>
      </div>
    </main>
  )
}

export default App



