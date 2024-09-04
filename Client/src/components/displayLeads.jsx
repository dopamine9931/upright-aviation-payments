import React, { useState, useEffect, useContext } from "react";
import { Table, Spin, Button, Typography } from "antd";
import { API_LEAD_Display } from "../constants/endpoints";
import { ApiKeyContext } from "../context/apiKeyContext";
const { Title } = Typography;

const DisplayLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiKey = useContext(ApiKeyContext);

  const fetchLeads = async () => {
    try {
      const response = await fetch(`${API_LEAD_Display}/viewLeads`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch leads");
      }

      const data = await response.json();
      setLeads(data.leads);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) {
    return <Spin tip="Loading leads..." />;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error retrieving leads: {error}</p>;
  }

  if (leads.length === 0) {
    return <p>No leads found.</p>;
  }

  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Company", dataIndex: "company", key: "company" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Extension", dataIndex: "extension", key: "extension" },
    { title: "Product", dataIndex: "product", key: "product" },
    {
      title: "Contacted",
      dataIndex: "contacted",
      key: "contacted",
      render: (contacted) => (contacted ? "Yes" : "No"),
    },
  ];

  return (
    <>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Lead Capture Form Data
      </Title>
      <Table
        columns={columns}
        dataSource={leads}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        bordered
      />
      <Button type="primary" onClick={fetchLeads} style={{ marginTop: "20px" }}>
        Refresh Leads
      </Button>
    </>
  );
};

export default DisplayLeads;
