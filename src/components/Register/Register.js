import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';
import './Register.css';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="form-cnt">
                    <div className="register-form w-50 m-auto">
                        <div className="form-header text-center mb-5">
                            <h2>Please register</h2>
                        </div>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Full name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter your name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control name="photo" type="text" placeholder="Photo URL" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Form.Text className='text-danger'>

                            </Form.Text>
                            <div className="login-btn text-center mb-3">
                                <Button variant="primary" type="submit" className='w-50 mt-3'>
                                    Register
                                </Button>
                            </div>
                            <p className='text-center'>Already have an account? Please <Link to='/login'>login</Link></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;