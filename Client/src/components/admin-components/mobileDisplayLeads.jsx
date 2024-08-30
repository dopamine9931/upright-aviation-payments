import React, { useState, useEffect, useContext } from "react";
import {
  Collapse,
  Spin,
  Button,
  Typography,
  Pagination,
  Switch,
  message,
} from "antd";
import { API_LEAD_Display } from "../../constants/endpoints";
import { ApiKeyContext } from "../../context/apiKeyContext";
import "../component-css-files/messageTheme.css";

const { Title } = Typography;
const { Panel } = Collapse;

const MobileDisplayLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
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
      message.error(err.message);
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

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Lead Capture Form Data
      </Title>
      <Collapse accordion>
        {currentLeads.map((lead) => (
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
              <strong>Contacted:</strong>{" "}
              <Switch
                checked={lead.contacted}
                onChange={(checked) =>
                  updateContactedStatus(lead.email, checked)
                }
                style={{
                  backgroundColor: "#5e5e5e", // Slightly lighter than your page background
                  borderColor: "#5e5e5e",
                }}
              />
            </p>
          </Panel>
        ))}
      </Collapse>
      <Pagination
        current={currentPage}
        pageSize={leadsPerPage}
        total={leads.length}
        onChange={handlePageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
      <Button
        type="primary"
        onClick={fetchLeads}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        Refresh Leads
      </Button>
    </>
  );
};

export default MobileDisplayLeads;
