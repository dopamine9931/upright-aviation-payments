import React from "react";
import DisplayBlogs from "../components/blog/blogDisplay";
import { Typography } from "antd";
const { Title } = Typography;

const BlogPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title
        level={1}
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          fontSize: "25px",
        }}
      >
        Aviation Payments Blog
      </Title>
      <DisplayBlogs />
    </div>
  );
};

export default BlogPage;
