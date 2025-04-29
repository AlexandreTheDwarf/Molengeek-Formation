import React from 'react';

export default function Header() {
    return (
        <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
            <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <img src="images/main-logo.png" className="logo"/>
            </a>
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <svg className="navbar-icon">
                <use href="#navbar-icon"></use>
                </svg>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">
                    <img src="images/main-logo.png" className="logo" />
                </a>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                </div>
                <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                    <li className="nav-item">
                    <a className="nav-link me-4 active" href="#billboard">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-4" href="#company-services">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-4" href="#mobile-products">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-4" href="#smart-watches">Watches</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-4" href="#yearly-sale">Sale</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link me-4" href="#latest-blog">Blog</a>
                    </li>
                    <li className="nav-item">
                    <div className="user-items ps-5">
                        <ul className="d-flex justify-content-end list-unstyled">
                        <li className="pe-3">
                            <a href="#">
                            <svg className="user">
                                <use href="#navbar-icon"></use>
                            </svg>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </nav>
    </header>
    );
}