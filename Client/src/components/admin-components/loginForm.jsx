import React, { useState, useContext } from "react";
import { API_USER_CONTROL } from "../../constants/endpoints";
import { Form, Input, Button } from "antd";
import { ApiKeyContext } from "../../context/apiKeyContext";

const LoginForm = ({ onTokenUpdate, onAdminStatusUpdate }) => {
  const [error, setError] = useState("");
  const apiKey = useContext(ApiKeyContext);

  // Handles the token and admin status
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`${API_USER_CONTROL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      onTokenUpdate(data.token);
      onAdminStatusUpdate(data.isAdmin); // Update admin status in the frontend
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </>
  );
};

export default LoginForm;
