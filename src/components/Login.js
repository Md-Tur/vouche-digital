import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <div className='shadow-sm p-3 mb-5 bg-white'></div>
            <section>
                <div>
                    <h3 className='font-weight-bold'>Welcome Back</h3>
                    <small>Sub-title text goes here</small>

                </div>
            </section>
        </div>
    );
};

export default Login;