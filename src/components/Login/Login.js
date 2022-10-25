import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="form-cnt">
                    <div className="login-form w-50 m-auto">
                        <div className="form-header text-center mb-5">
                            <h1>Please Login</h1>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Text className='text-danger'>

                            </Form.Text>
                            <div className="login-btn text-center mb-3">
                                <Button variant="primary" type="submit" className='w-50 mt-3'>
                                    Login
                                </Button>
                            </div>
                            <div className="other-opt text-center w-50 m-auto">
                                <button>Google</button>
                                <button>Github</button>
                            </div>
                            <p className='text-center'>Don't have an account? please <Link to='/register'>Register</Link></p>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;