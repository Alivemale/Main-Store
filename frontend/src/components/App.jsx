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

        {data.products.map(product => (
            <div className="pro">
                    <img src={product.image.img} alt={product.name} />
                    <div class="des">
                        <span>{product.brand}</span>
                        <h5>{product.name}</h5>
                        <div class="star">
                          {/* {Rating.render({
                            value: product.stars,
                            text: `${product.numReviews  } Reviews`,
                          })} */}
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
          ))}
        

        </main>

    </div>
  );
}

export default App;
