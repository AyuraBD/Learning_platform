import React from 'react';
import Footer from '../shared/Footer/Footer';
import './Blog.css';


const Blog = () => {
    return (
        <div>
            <div className='blog'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-header">
                        <h3>Some questions are here.</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-1: what is cors?</h3>
                            <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-2: Why we are using firebase? What other options do we have to implement authentication? </h3>
                            <p>Firebase helps us to develop high-quality apps, grow our user base, and earn more money. Each feature works independently, and they work even better together.</p>
                            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-3: How does the private route work? </h3>
                            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-4: What is Node? How does Node work? </h3>
                            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;