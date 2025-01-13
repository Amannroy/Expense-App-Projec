import React, { useEffect, useState } from 'react';
import { Form, Input, message, Button } from "antd"; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Form Submit Handler
    const submitHandler = async (values) => {
        try {
            setLoading(true);
            await axios.post('/users/register', values);
            message.success("Registration Successful");
            setLoading(false);
            navigate("/login");
        } catch (error) {
            setLoading(false);
            message.error("Registration Failed. Please try again.");
        }
    };

    // Redirect if already logged in
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="register-page">
            {loading && <Spinner />}
            <Form
                layout="vertical"
                onFinish={submitHandler}
                initialValues={{ name: '', email: '', password: '' }}
            >
                <h1>Register Form</h1>

                {/* Name Field */}
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: 'Please enter your name!' },
                        { min: 3, message: 'Name must be at least 3 characters long!' }
                    ]}
                >
                    <Input placeholder="Enter your name" />
                </Form.Item>

                {/* Email Field */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                >
                    <Input type="email" placeholder="Enter your email" />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please enter your password!' },
                        { min: 6, message: 'Password must be at least 6 characters long!' }
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <div className="d-flex justify-content-between">
                    <Link to="/login">Already registered? Click here to Login</Link>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;
