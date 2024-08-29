import React, { useContext, useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Collapse,
  message,
  Checkbox,
  Typography,
} from "antd";
import { API_USER_CONTROL, API_BLOG } from "../../constants/endpoints";
import { ApiKeyContext } from "../../context/apiKeyContext";
import "../component-css-files/messageTheme.css";

const { Panel } = Collapse;
const { Text } = Typography;

const AdminPanel = () => {
  const [createForm] = Form.useForm();
  const [deleteForm] = Form.useForm();
  const [blogForm] = Form.useForm();
  const [deleteBlogForm] = Form.useForm();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1198);
  const apiKey = useContext(ApiKeyContext); // Retrieve the API key from context

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1198);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCreate = async (values) => {
    try {
      const response = await fetch(`${API_USER_CONTROL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey, // Include the API key in the request headers
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
          "x-api-key": apiKey,
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

  const handleCreateBlog = async (values) => {
    try {
      const response = await fetch(`${API_BLOG}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success({
          content: "Blog created successfully",
          className: "custom-message",
        });
        blogForm.resetFields();
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

  const handleDeleteBlog = async (values) => {
    try {
      const response = await fetch(`${API_BLOG}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success({
          content: "Blog post deleted successfully",
          className: "custom-message",
        });
        deleteBlogForm.resetFields();
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
    <>
      <Text strong style={{ display: "block", margin: "5px 0" }}>
        Admin Panel
      </Text>
      <div
        style={{
          width: isMobile ? "75%" : "50%",
          margin: "0 auto",
          padding: isMobile ? "0 10px" : "0",
        }}
      >
        <Collapse defaultActiveKey={[]}>
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
                  {
                    required: true,
                    message: "Please input the user's password!",
                  },
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
          <Panel header="Create Post" key="3">
            <Form form={blogForm} onFinish={handleCreateBlog} layout="vertical">
              <Form.Item
                name="title"
                label="Blog Title"
                rules={[
                  {
                    required: true,
                    message: "Please input the blog title!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="content"
                label="Blog Content"
                rules={[
                  {
                    required: true,
                    message: "Please input the blog content!",
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Post
                </Button>
              </Form.Item>
            </Form>
          </Panel>
          <Panel header="Delete Blog Post" key="4">
            <Form
              form={deleteBlogForm}
              onFinish={handleDeleteBlog}
              layout="vertical"
            >
              <Form.Item
                name="title"
                label="Blog Title"
                rules={[
                  {
                    required: true,
                    message: "Please input the blog post title to delete!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Delete Blog Post
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default AdminPanel;
