import React from 'react';
import img1 from '../../images/img2.PNG';
import img2 from '../../images/img1.PNG';
import img3 from '../../images/agenciflow-app.png';

const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <div className="container my-5">
                <div className="text-center">
                <h1 className="text-success">The All-In-One Platform <br />
                For Agency Owners</h1>
                <p className="my-3">Get Paid, Communicate with Clients, and <br />
                 Manage Projects & Tasks - All on the same platform.</p>
                <button className="btn btn-info">Try for Free</button>
                </div>
            </div>
            {/* banner section  */}
            {/* about section  */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Have all your agency <br />
                            operations in <span className="text-success">one place</span>.</h1>
                        <p>Tired of the hassle of having to set up clients on multiple platforms for communication, billing, and project management (and the cost that comes with it)?</p>
                        <p>Ditch Slack, Asana, Simple Invoices - AgenciFlow does all that for you.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100" src={img2} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1><span className="text-success">Communicate</span> with  <br />
                            clients.</h1>
                        <p>Enjoy dedicated private & group chats with clients. Send unlimited messages, share files, and leave voice messages.</p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Manage <span className="text-success">projects & <br /> tasks.</span></h1>
                        <p>Manage marketing, sales, operations, development tasks & projects in one easy-to-use platform. Share projects and tasks with clients so they can collaborate.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100" src={img2} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>Send Invoices & <span className="text-success">Get <br /> Paid</span>.</h1>
                        <p>Bill your clients directly from inside the platform. Automated recurring billing for retainers. Integrates with Stripe, PayPal and bank accounts.</p>
                    </div>
                </div>
            </div>
            {/* about section  */}
            {/* Agency Owners */}
            <div className="bg-secondary p-5">
                <div className="container">
                    <div className="text-center">
                        <p>WE GET YOU</p>
                        <h1 className="text-white">Built By Agency Owners <br />
                        For Agency Owners</h1>
                        <p className="text-white">We understand the true challenges faced by onboarding clients, sending <br /> invoices, communication, project management and more.</p>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Increase Client Retention And Reduce Churn</h5>
                                <p class="card-text">Did you know that the most common reason clients leave agencies is not a lack of results?!</p>
                                <p>Most clients report they leave because of inefficient communication and a lack of alignment.</p>
                                <p>AgenciFlow solves this problem by eliminiating inefficiency and confusion and ensuring seamless communication with your team and client.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Keep Your Clients Always Up-To-Date</h5>
                                <p class="card-text">Eliminate another client concern ‘what are you working on?’ with the Client Dashboard: an instant and intuitive way for your client to check on work progress, tasks, projects, results and more.</p>
                                <p>Reduce communication and increase your client’s satisfaction. No manual updates or pestering emails.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">All-In-One Place. Easy To Use.</h5>
                                <p class="card-text">One login. One platform. One software. No more splitting your comunication efforts throughout 2-3 different apps.</p>
                                <p>Sign-up in 5 minutes, onboard a client in 7 minutes, and become an expert in 2 hours: simple. Your clients will love it.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Agency Owners */}
            {/* PRICING */}
            <div id="price" className="container my-5">
                <div className="text-center">
                    <p>PRICING</p>
                    <h3>Save Money From Day One</h3>
                    <p>AgenciFlow is cheaper than paying for multiple softwares separately. <br /> Take a look at the potential savings:</p>
                </div>
                <div className="container my-5">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card w-75 rounded">
                        <div class="card-body text-center text-secondary">
                            <h3 class="card-title">Slack</h3>
                            <h3>$24</h3>
                            <h3 class="card-title">asana</h3>
                            <h3>$64</h3>
                            <h3 class="card-title">Simple invoice</h3>
                            <h3>$10</h3>
                        </div>
                        <div className="bg-dark p-5 text-danger rounded">
                            <h3>Monthly Total</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>$101</h1>
                                </div>
                                <div className="col-md-6">
                                    <p>per month <br /> for 3 users</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> 
                    <div class="col">
                        <div class="card w-75 rounded">
                        <div class="card-body text-center text-secondary">
                            <h3 class="card-title">Chat</h3>
                            <h3>Unlimited Messages</h3>
                            <h3 class="card-title">asana</h3>
                            <h3>Projects</h3>
                            <h3 class="card-title">Invoice</h3>
                            <h3>Unlimited Invoices</h3>
                        </div>
                        <div className="bg-dark p-5 text-success rounded">
                            <h3>Monthly Total</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>$49</h1>
                                </div>
                                <div className="col-md-6">
                                    <p>per month <br /> for 3 users</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> 
                </div>
                </div>
            </div>
            {/* PRICING */}
            <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5 text-white">
                        <p>TRY IT NOW</p>
                        <h1>Try <br /> AgenciFlow <br /> For Free</h1>
                        <p>All your operations in one place. Easy to use. Client friendly. Save money from day one.</p>
                        <button className="btn btn-info">Try For Free</button>
                        <button className="btn btn-outline-info mx-3">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src={img3} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;