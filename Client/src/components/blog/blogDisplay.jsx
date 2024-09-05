import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Popover, Card, message, Pagination } from "antd";
import { API_BLOG } from "../../constants/endpoints";
import { ApiKeyContext } from "../../context/apiKeyContext";
import "../component-css-files/blog.css";
import "../component-css-files/messageTheme.css";

const DisplayBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Number of cards per page
  const apiKey = useContext(ApiKeyContext);

useEffect(() => {
  let isMounted = true;

  const fetchBlogs = async () => {
    if (!apiKey) return; // Ensure apiKey exists before fetching
    try {
      const response = await fetch(`${API_BLOG}/viewAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      });

      if (response.ok && isMounted) {
        // Only update if still mounted
        const data = await response.json();
        setBlogs(data.blogPosts);
        message.success({
          content: "Blogs loaded successfully",
          className: "custom-message",
        });
      } else {
        message.error({
          content: "Failed to retrieve blogs",
          className: "custom-message",
        });
      }
    } catch (error) {
      if (isMounted) {
        message.error({
          content: "Error fetching blogs",
          className: "custom-message",
        });
      }
    }
  };

  fetchBlogs();

  return () => {
    isMounted = false; 
  };
}, [apiKey]);
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the blogs array to show only the current page's blogs
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <div>
      <Row gutter={[16, 16]} style={{ padding: "20px" }}>
        {currentBlogs.map((blog) => (
          <Col key={blog._id} xs={24} sm={12} md={8} lg={6}>
            <Popover
              content={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    maxWidth: "300px",
                    textAlign: "center",
                  }}
                >
                  <p>{blog.content}</p>
                </div>
              }
              title={blog.title}
              trigger="click"
              overlayClassName="custom-popover"
            >
              <Card
                bordered={false}
                style={{
                  background: "#141414",
                  color: "#f3f3f3",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  height: "300px",
                }}
                cover={
                  <img
                    alt={blog.title}
                    src="/stefanstefancik_airplane_window.jpg" // Image in the public directory
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                }
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#f3f3f3",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    {blog.title}
                  </p>
                </div>
              </Card>
            </Popover>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={blogs.length}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", marginTop: "20px" }}
      />
    </div>
  );
};

export default DisplayBlogs;
