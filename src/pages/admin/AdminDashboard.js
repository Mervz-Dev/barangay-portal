import React from "react";
import { Typography, Button, Space, Col, Row, Card } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function AdminDashBoard() {
  return (
    <div style={{ height: "88vh", overflow: "auto" }}>
      <Space
        direction="vertical"
        size="large"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Title level={2}>Welcome back Admin!</Title>

        <Paragraph style={{ fontSize: 16 }}>
          here are the summary of the barangay's activities and services.
        </Paragraph>
      </Space>
    </div>
  );
}
