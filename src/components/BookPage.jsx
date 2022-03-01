import React from 'react';
import '../styles/BookPage.css'

function BookPage()  {
    return(
        <main className="main">
          <h1 className="title">Welcome to our Book Store!</h1> 
          <p className="description">Get started by browsing our collection</p>
          <div className="grid">
            <a className="card">
              <h2>Fiction</h2>
              <p>Find in-depth information all the fiction you can read!</p>
              <img src="https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,w_150/v1592001844/41QG0l2KA4L._SX329_BO1_204_203_200__tuyia3.jpg" />
            </a>
            <a className="card">
              <h2>Science</h2>
              <p>Explore our books and learn all you can about science </p>
              <img src="https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,h_226,w_150/v1592001680/220px-TheGreatGatsby_1925jacket_iujiwh.jpg" />
            </a>
            <a className="card">
              <h2>Engineering</h2>
              <p>Get in and learn our engineering best practices</p>
              <img src="https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,w_150/v1591993407/220px-Where_The_Crawdads_Sing_Book_Cover_mzfiuc.jpg" />
            </a>
            <a className="card">
              <h2>Product</h2>
              <p>Create amazing products with knowledge gotten from our books</p>
              <img src="https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,h_226,w_150/v1592002306/51K84pomCRL._SX305_BO1_204_203_200__mjbffh.jpg" />
            </a>
          </div>
        </main> 
    ) 
}
export default BookPage;