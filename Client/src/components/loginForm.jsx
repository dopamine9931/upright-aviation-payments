import React, { useState } from "react";
import { API_USER_CONTROL } from "../constants/endpoints";
import { Form, Input, Button } from "antd";


const Login = ({ onTokenUpdate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

//wasnt sure if I still need the handleChange, left it in case it is needed and i just need more info on the ui
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handles the token
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_USER_CONTROL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      onTokenUpdate(data.token);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="email"
        label="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
