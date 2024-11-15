import React from "react";
import { Row, Col, Typography } from "antd";
import "../components/component-css-files/merchantservices.css";

const { Title } = Typography;

function MerchantServices() {
  return (

    <div className="merchantservices"> 

    <div>
      <Title level={1} className="merchantservicestitle">
        Merchant Services
      </Title>

      <div class="merchantservicescontainer">
        <Row align="middle" className="merchantservices-row">
          <Col xs={24} md={12} classNAme="merchantservices-col-left">
            <Title level={1} >
              Process Payments - Hassle Free.
            </Title>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis totam accusamus error vel labore libero deserunt
              ipsa. Molestias aliquid ratione voluptatum illo est porro delectus
              fuga quibusdam quo hic officiis magni totam, laudantium odio rem
              labore velit laborum atque iure pariatur minus magnam vitae quidem
              sint? Id maxime rerum sint.
            </p>
          </Col>
          <Col xs={24} md={12} className="merchantservices-col-right">
          <div className="merchantservices-img">
            <img
              src="/taptopay.jpg"
              alt="Description"
              
            />
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </div>
  );
}

export default MerchantServices;
