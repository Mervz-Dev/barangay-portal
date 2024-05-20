import React from "react";
import { Typography, Divider, Card, Row, Col, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const developers = [
  {
    name: "Christian Narvaez",
    role: "Student",
    imageUrl: require("../assets/developers/dev-1.jpg"),
  },
  {
    name: "Mark Daniel Ponce",
    role: "Student",
    imageUrl: require("../assets/developers/dev-2.jpg"),
  },
  {
    name: "Brylle",
    role: "Student",
    imageUrl: require("../assets/developers/dev-3.jpg"),
  },
  {
    name: "Francis",
    role: "Student",
    imageUrl: require("../assets/developers/dev-4.jpg"),
  },
  // Add more developers as needed
];

export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography>
        <Title style={{ margin: 0, marginBottom: 10 }}>About</Title>
        <Paragraph>
          The Amoingon Barangay Hub was created to serve as a digital platform
          for our vibrant and thriving community. Our goal is to provide
          residents with easy access to important services, information, and
          amenities. This platform is a testament to our commitment to fostering
          a welcoming and inclusive environment for all.
        </Paragraph>
        <Paragraph>
          For any inquiries or further information, feel free to contact us at:
          <br />
          <Text strong>Email:</Text> info@amoingonbarangayhub.com
          <br />
          <Text strong>Phone:</Text> +1234567890
        </Paragraph>
        <Paragraph>
          <Text strong>Location:</Text> Amoingon, City Name, Country
        </Paragraph>

        <Divider />

        <Title level={2} style={{ margin: 0, marginBottom: 10 }}>
          About the Developers
        </Title>
        <Paragraph style={{ margin: "30px 0px" }}>
          This website was developed by a dedicated and passionate team of
          software engineers with a love for community service. With a strong
          background in web development and a keen eye for design, they have
          created a user-friendly platform that serves the needs of the Amoingon
          Barangay community.
        </Paragraph>

        <Row gutter={[16, 16]} style={{ justifyContent: "space-around" }}>
          {developers.map((developer, index) => (
            <Col
              key={index}
              // xs={18}
              // sm={12}
              // md={6}
              // style={{ backgroundColor: "red" }}
            >
              <Card
                hoverable
                className="cardWithRoundedImage"
                style={{ width: 300, marginBottom: 16, borderRadius: "15px" }}
                cover={<img alt="Developer" src={developer.imageUrl} />}
              >
                <Meta
                  avatar={<UserOutlined />}
                  title={developer.name}
                  description={developer.role}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Typography>
    </div>
  );
}
