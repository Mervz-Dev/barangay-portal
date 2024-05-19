import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Table,
  Typography,
  Button,
  Modal,
  Card,
  message,
  Tag,
  Form,
  Input,
} from "antd";
import {
  CheckCircleTwoTone,
  EnvironmentTwoTone,
  ShopTwoTone,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { createRequest } from "../../services/form-request";
import { useUserStore } from "../../stores/userStore";
import { usePageLoaderStore } from "../../stores/pageLoaderStore";
import { useRequestsStore } from "../../stores/requestsStore";
import { useNavigate, Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const columns = [
  {
    title: "Request ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
    render: (id) => <Link to={`/request/${id}`}>{id}</Link>,
  },
  {
    title: "Form Type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: "Date Requested",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    render: (timestamp) => {
      const dateObject = new Date(timestamp); // if timestamp is a JavaScript timestamp
      return dateObject.toLocaleDateString();
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => {
      const order = ["pending", "approved", "rejected"]; // define your custom order
      return order.indexOf(a.status) - order.indexOf(b.status);
    },
    render: (status) => {
      let color;
      switch (status) {
        case "pending":
          color = "gray";
          break;
        case "approved":
          color = "green";
          break;
        case "rejected":
          color = "red";
          break;
        default:
          color = "gray";
      }
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
];

export default function Requests() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id, isValidResident } = useUserStore();
  const { setPageLoading } = usePageLoaderStore();
  const { requests, fetchAllRequests, addNewRequest } = useRequestsStore();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllRequests(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isValidResident) {
    return;
  }

  return (
    <Col style={{ padding: 20 }}>
      {contextHolder}
      <Row
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={2}>Requests</Title>
      </Row>

      <Table
        columns={columns}
        dataSource={requests}
        pagination={{ pageSize: 10 }}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/requests/${record.id}`);
            },
          };
        }}
        rowKey="id"
        locale={{
          emptyText: (
            <div>
              <h2>No User Requests Found</h2>
              <p>
                It appears that none of the users have submitted any requests
                yet. As an admin, you can monitor requests here once they are
                created by users.
              </p>
            </div>
          ),
        }}
      />
    </Col>
  );
}
