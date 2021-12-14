import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><h3>AgenciFlow</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Why AgenciFlow?</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#price">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <Link className="mx-3" to='/'>Login</Link>
                    <button className="btn btn-info">Start Free Trial</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;