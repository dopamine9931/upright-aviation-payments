import React from "react";
import { Form, Input, Button, Collapse, message, Checkbox } from "antd";
import { API_USER_CONTROL } from "../constants/endpoints";
import "./component-css-files/messageTheme.css";

// message creates a little window that displays text based on what is provided
// figured it would be good for the user experience

const { Panel } = Collapse;

const UserCreateDelete = () => {
  const [createForm] = Form.useForm();
  const [deleteForm] = Form.useForm();

  const handleCreate = async (values) => {
    try {
      const response = await fetch(`${API_USER_CONTROL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success({
          content: "User created successfully",
          className: "custom-message",
        });
        createForm.resetFields();
      } else {
        const errorData = await response.json();
        message.error({
          content: `Error: ${errorData.message}`,
          className: "custom-message",
        });
      }
    } catch (error) {
      message.error({
        content: `Error: ${error.message}`,
        className: "custom-message",
      });
    }
  };

  const handleDelete = async (values) => {
    try {
      const response = await fetch(`${API_USER_CONTROL}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success({
          content: "User deleted successfully",
          className: "custom-message",
        });
        deleteForm.resetFields();
      } else {
        const errorData = await response.json();
        message.error({
          content: `Error: ${errorData.message}`,
          className: "custom-message",
        });
      }
    } catch (error) {
      message.error({
        content: `Error: ${error.message}`,
        className: "custom-message",
      });
    }
  };

  return (
    <Collapse defaultActiveKey={["1", "2"]}>
      <Panel header="Create User" key="1">
        <Form form={createForm} onFinish={handleCreate} layout="vertical">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input the user's first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input the user's email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input the user's password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="admin" label="Admin" valuePropName="checked">
            <Checkbox />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create User
            </Button>
          </Form.Item>
        </Form>
      </Panel>
      <Panel header="Delete User" key="2">
        <Form form={deleteForm} onFinish={handleDelete} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input the user's email to delete!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Delete User
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
};

export default UserCreateDelete;
