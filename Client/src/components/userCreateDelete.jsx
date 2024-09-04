import React from "react";
import { Form, Input, Button, Collapse, message } from "antd";

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
        message.success("User created successfully");
        createForm.resetFields();
      } else {
        const errorData = await response.json();
        message.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      message.error(`Error: ${error.message}`);
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
        message.success("User deleted successfully");
        deleteForm.resetFields();
      } else {
        const errorData = await response.json();
        message.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      message.error(`Error: ${error.message}`);
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
            <Input.Checkbox />
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
