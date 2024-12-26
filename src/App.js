import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="logo1.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <img width="100%" src="Background1.png" alt="Background" />
        <div className="Products">
          <h2 align="center">Previous Products</h2>
        </div>
        <div className="container">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price} Rs</div>
                <div className="product-description">{product.description}</div>
                <a href="#" className="buy-now">Buy Now</a>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3>E-COMMERCE STORE</h3>
              <p>At Our Ecommerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience.</p>
            </div>
            <div className="footer-column">
              <h3>LINKS</h3>
              <p><a href="#home">Home</a></p>
              <p><a href="#products">Products</a></p>
              <p><a href="#cart">Cart</a></p>
              <p><a href="#contact">Contact Us</a></p>
            </div>
            <div className="footer-column">
              <h3>SOCIAL</h3>
              <p><a href="#facebook">Facebook</a></p>
              <p><a href="#instagram">Instagram</a></p>
              <p><a href="#twitter">Twitter</a></p>
              <p><a href="#linkedin">LinkedIn</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            © 2023 Copyright: ecommerce-store.com
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;