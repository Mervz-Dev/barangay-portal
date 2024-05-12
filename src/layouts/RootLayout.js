import { Outlet, useNavigate } from "react-router-dom";
import { Typography, Layout, Space, Menu, Row, Avatar, Divider } from "antd";

const { Header, Content } = Layout;

const navigation = [
  { label: "Home", key: "/" },
  { label: "Services", key: "/services" },
  { label: "Announcements", key: "/announcements" },
  { label: "Contact Us", key: "/about" },
];

export default function RootLayout() {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          height: 90,
          alignItems: "center",
          backgroundColor: "#00264d",
          padding: "0 0",
        }}
      >
        <Row style={{ alignItems: "center", padding: "0 25px" }}>
          <Space size={10}>
            <Avatar alt="none" size={65} src={require("../assets/logo.png")} />
            <Typography.Text style={{ fontSize: 20, color: "white" }}>
              A-Barangay Hub
            </Typography.Text>
          </Space>
        </Row>

        <Divider type="vertical" />

        <Menu
          className="menu"
          style={{ flex: 1, minWidth: 0, borderBottom: "none" }}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          items={navigation}
          onClick={handleMenuClick}
        />
      </Header>
      <Content style={{ backgroundColor: "#f5f5f5" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
