/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import mainLogo from "../img/logo1.jpg"
import data from "./data";


function App() {
  return (
    <div className="App">

        <nav id="header">
          <div className="logo">
            <a href="#">
              <img src={mainLogo} alt="logo-img"></img><span> ANMVL </span>
            </a>
          </div>
        </nav>

        <main>
        <section id="product0"  className="margin1">
        <h2>FEATURED ITEMS</h2>
        <div className="i-container">
          {data.products.map(product => (
              <div className="pro">
                      <img src={product.image.img} alt={product.name} />
                      <div className="des">
                          <span>{product.brand}</span>
                          <h5>{product.name}</h5>
                          <div className="star">
                            {/* {Rating.render({
                              value: product.stars,
                              text: `${product.numReviews  } Reviews`,
                            })} */}
                          </div>
                          <h4>${product.price}</h4>
                      </div>
                      <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
              </div>
            ))}
          </div>
        </section>

        </main>

    </div>
  );
}

export default App;
