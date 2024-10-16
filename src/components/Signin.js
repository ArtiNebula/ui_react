// src/SignIn.js
import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
    return (
        <>
        <Navbar />
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img 
                            src="https://example.com/undraw_remotely_2j6y.svg" 
                            alt="Image" 
                            className="img-fluid" 
                        />
                    </div>
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3>Sign In</h3>
                                </div>
                                <form action="#" method="post">
                                    <div className="form-group first">
                                        <label htmlFor="username">Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="username" 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group last mb-4">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            required 
                                        />
                                    </div>
                                    <input 
                                        type="submit" 
                                        value="Log In" 
                                        className="btn btn-block btn-primary" 
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signin;
