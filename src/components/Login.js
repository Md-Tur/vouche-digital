import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import login from '../images/login.png';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const user_info = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        if (user_info.password && user_info.email) {
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user_info)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        toast.error('user not found');
                    } else {
                        toast.success(data.token);
                    }
                })
        } else {
            toast.error('Missing Password')
        }

    }

    return (
        <div>
            <section className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <h4 style={{ Color: '#023047' }}>ATools<span className='text-danger'>.</span></h4>
                    </div>
                    <div className='btn-top'>
                        <Button className='me-3 px-5' style={{ backgroundColor: '#023047' }}>Start Free Trial</Button>
                        <Button className='px-5 text-white' variant="warning">Login</Button>
                    </div>
                </div>
            </section>

            <div className='shadow-sm p-1 bg-white'></div>

            <section>
                <div className='row mx-0'>
                    <div className='col col-lg-5 col-sm-12 col-12 px-0 d-flex justify-content-center align-items-center form-section'>
                        <div>
                            <h3 className='fw-bold text-center' style={{ Color: '#023047' }}>Welcome Back</h3>
                            <small className='title'>Sub-title text goes here</small>
                            <Form onSubmit={handleSubmit} className='w-100'>
                                <div className='position-relative'>
                                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                        <Form.Control type="email" name='email' placeholder="Email Address*" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" name='password' placeholder="Password*" />
                                    </Form.Group>
                                </div>


                                <Button className='w-100 px-5' style={{ backgroundColor: '#023047', border: 'none' }} type="submit">
                                    Login
                                </Button>
                                <div>
                                    <div className='d-flex justify-content-between text'>
                                        <div className="form-check">
                                            <input style={{ backgroundColor: '#023047' }} className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="" style={{ Color: '#023047' }}>
                                                Remember Password
                                            </label>
                                        </div>

                                        <div>
                                            <p style={{ Color: '#023047' }}>Forgot Password?</p>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className='col col-lg-7 px-0 img-section'>
                        <img src={login} alt="" className='img-fluid' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;