import React, { useState, useEffect, useContext } from "react";
import { Table, Spin, Button, Typography, Switch, message } from "antd";
import { API_LEAD_Display } from "../../constants/endpoints";
import { ApiKeyContext } from "../../context/apiKeyContext";
import "../component-css-files/messageTheme.css";

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

  const updateContactedStatus = async (email, newStatus) => {
    try {
      const response = await fetch(`${API_LEAD_Display}/updateLead`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email, contacted: newStatus }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update status");
      }

      const updatedLead = await response.json();
      message.success({
        content: `Lead ${updatedLead.Lead.firstName} ${updatedLead.Lead.lastName} updated successfully`,
        className: "custom-message",
      });
      fetchLeads(); // Refresh leads after updating
    } catch (err) {
      message.error({
        content: err.message,
        className: "custom-message",
      });
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) {
    return <Spin tip="Loading leads..." />;
  }

  if (error) {
    message.error({
      content: `Error retrieving leads: ${error}`,
      className: "custom-message",
    });
    return null;
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
      render: (contacted, record) => (
        <Switch
          checked={contacted}
          onChange={(checked) => updateContactedStatus(record.email, checked)}
          style={{
            backgroundColor: "#787878", // Or any color slightly lighter than #141414
            borderColor: "#787878", // To match the primary color
          }}
        />
      ),
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
