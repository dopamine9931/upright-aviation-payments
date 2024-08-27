import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../component-css-files/aboutus.css"; 

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    description:
      "With over 10 years of experience in the aviation industry, John leads our team with expertise.",
    image: "/person1.jpeg", 
    linkedin: "#",
    email: "#",
  },
  {
    name: "Jane Smith",
    title: "CTO",
    description:
      "Jane oversees the technical aspects of our business, ensuring smooth operations and innovation.",
    image: "/person3.jpeg", 
    linkedin: "#",
    email: "#",
  },
  {
    name: "Michael Johnson",
    title: "CFO",
    description:
      "Michael manages the financial aspects of our company, driving growth and profitability.",
    image: "/person2.jpeg", 
    linkedin: "#",
    email: "#",
  },
  {
    name: "Sarah Williams",
    title: "Marketing Director",
    description:
      "Sarah leads our marketing efforts, creating strategies to promote our services and reach new clients.",
    image: "/person4.jpeg", 
    linkedin: "#",
    email: "#",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="meet-our-team-container">
      <Title level={3} className="section-subtitle">
        Experienced
      </Title>
      <Title level={1} className="section-title">
        Meet Our Team
      </Title>
      <Paragraph className="section-description">
        Get to know the talented individuals behind our company.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <Card
              cover={<img alt={member.name} src={member.image} />}
              actions={[
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined />
                </a>,
                <a href={`mailto:${member.email}`}>
                  <MailOutlined syle={{ color: "white" }} />
                </a>,
              ]}
            >
              <Meta
                title={`${member.name} - ${member.title}`}
                description={member.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeetOurTeam;
