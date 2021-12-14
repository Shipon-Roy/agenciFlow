import React from 'react';

const Footer = () => {
    return (
        <div className="container p-5">
            <div className="row">
            <div className="col-md-3">
                <h1 className="text-info mb-3">Product</h1>
                <p><small>Homepage</small></p>
                <p><small>What's New</small></p>
                <p><small>Pricing</small></p>
                <p><small>Try For Free</small></p>
            </div>
            <div className="col-md-3">
                <h1 className="text-info mb-3">Solutions</h1>
                <p><small>Client Communication</small></p>
                <p><small>Team Communication</small></p>
                <p><small>Client Billing</small></p>
                <p><small>Task Management</small></p>
            </div>
            <div className="col-md-3">
                <h1 className="text-info mb-3 ">Company</h1>
                <p><small>Blog</small></p>
                <p><small>Terms & Privacy</small></p>
            </div>
            <div className="col-md-3">
                <h1 className="text-info mb-3">Community</h1>
                <p>Join Our Telegram Community With Over 100 Agency Owners</p>
                <button className="btn btn-info">Go To Telegram</button>
            </div>
            </div>
        </div>
    );
};

export default Footer;