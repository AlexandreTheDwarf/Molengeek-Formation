import React from 'react';

export default function Services() {
    return (
        <section id="company-services" className="padding-large">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box d-flex">
                    <div className="icon-box-icon pe-3 pb-3">
                        <svg className="cart-outline">
                        <use href="#cart-outline" />
                        </svg>
                    </div>
                    <div className="icon-box-content">
                        <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box d-flex">
                    <div className="icon-box-icon pe-3 pb-3">
                        <svg className="quality">
                        <use href="#quality" />
                        </svg>
                    </div>
                    <div className="icon-box-content">
                        <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                        <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box d-flex">
                    <div className="icon-box-icon pe-3 pb-3">
                        <svg className="price-tag">
                        <use href="#price-tag" />
                        </svg>
                    </div>
                    <div className="icon-box-content">
                        <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                        <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 pb-3">
                    <div className="icon-box d-flex">
                    <div className="icon-box-icon pe-3 pb-3">
                        <svg className="shield-plus">
                        <use href="#shield-plus" />
                        </svg>
                    </div>
                    <div className="icon-box-content">
                        <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                        <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}