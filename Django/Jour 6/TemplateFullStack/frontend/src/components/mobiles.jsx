import React from 'react';

export default function mobiles() {
    return (
    <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <div className="swiper product-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="images/product-item1.jpg" alt="product-item" className="img-fluid" />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 10</a>
                    </h3>
                    <span className="item-price text-primary">$980</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="images/product-item2.jpg" alt="product-item" className="img-fluid" />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 11</a>
                    </h3>
                    <span className="item-price text-primary">$1100</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="images/product-item3.jpg" alt="product-item" className="img-fluid" /> 
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 8</a>
                    </h3>
                    <span className="item-price text-primary">$780</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="images/product-item4.jpg" alt="product-item" className="img-fluid" />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 13</a>
                    </h3>
                    <span className="item-price text-primary">$1500</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="images/product-item5.jpg" alt="product-item" className="img-fluid" />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 12</a>
                    </h3>
                    <span className="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    );
}