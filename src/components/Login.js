import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import login from '../images/login.png';

const Login = () => {
    return (
        <div>
            <section className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <h4>ATools<span className='text-danger'>.</span></h4>
                    </div>
                    <div className='d-flex'>
                        <Button className='me-3 px-5' variant="success">Start Free Trial</Button>
                        <Button className='px-5 text-white' variant="warning">Login</Button>
                    </div>
                </div>
            </section>
            <div className='shadow-sm p-3 bg-white'></div>
            <section>
                <div className='row mx-0'>

                    <div className='col col-lg-5 px-0 d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className='font-weight-bold text-center'>Welcome Back</h3>
                            <small className='mb-2'>Sub-title text goes here</small>
                            <Form className='w-100'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email Address*" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Password" />
                                </Form.Group>
                                <Button className='w-100' variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className='col col-lg-7 px-0'>
                        <img src={login} alt="" className='img-fluid' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;