import React, { useState, useEffect, useContext } from "react";
import { Collapse, Spin, Button, Typography } from "antd";
import { API_LEAD_Display } from "../../constants/endpoints";
import { ApiKeyContext } from "../../context/apiKeyContext";

const { Title } = Typography;
const { Panel } = Collapse;

const MobileDisplayLeads = () => {
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

  return (
    <>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Lead Capture Form Data
      </Title>
      <Collapse accordion>
        {leads.map((lead) => (
          <Panel header={`${lead.firstName} ${lead.lastName}`} key={lead._id}>
            <p>
              <strong>Company:</strong> {lead.company}
            </p>
            <p>
              <strong>Title:</strong> {lead.title}
            </p>
            <p>
              <strong>Email:</strong> {lead.email}
            </p>
            <p>
              <strong>Phone:</strong> {lead.phone}
            </p>
            <p>
              <strong>Extension:</strong> {lead.extension}
            </p>
            <p>
              <strong>Product:</strong> {lead.product}
            </p>
            <p>
              <strong>Contacted:</strong> {lead.contacted ? "Yes" : "No"}
            </p>
          </Panel>
        ))}
      </Collapse>
      <Button type="primary" onClick={fetchLeads} style={{ marginTop: "20px", marginBottom: "20px"}}>
        Refresh Leads
      </Button>
    </>
  );
};

export default MobileDisplayLeads;
