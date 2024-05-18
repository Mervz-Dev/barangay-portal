import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Typography,
  Layout,
  Space,
  Menu,
  Row,
  Avatar,
  Divider,
  Col,
  Button,
} from "antd";
import { logOut } from ".././services/auth";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;

const navigation = [
  { label: "Home", key: "/" },
  { label: "Requests", key: "/requests" },
  { label: "Businesses", key: "/businesses" },
  { label: "FAQ", key: "/faq" },
];

export default function PrivateRootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

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
          height: "12vh",
          alignItems: "center",
          backgroundColor: "#00264d",
          padding: "0 0",
          borderBottom: "3px solid red",
        }}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            padding: "25px 25px",
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Space size={10}>
              <Avatar
                alt="none"
                size={65}
                src={require("../assets/logo.png")}
              />
              <Typography.Text style={{ fontSize: 20, color: "white" }}>
                A-Barangay Hub
              </Typography.Text>
            </Space>
          </Row>
          <Title style={{ color: "white" }} level={5}>
            Full Name
          </Title>
        </Row>
      </Header>
      <Layout style={{ minHeight: "88vh" }}>
        <Sider width={220} style={{ backgroundColor: "#00264d" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Menu
              mode="inline"
              style={{ borderRight: 0 }}
              selectedKeys={[location.pathname]}
              defaultSelectedKeys={[location.pathname]}
              items={navigation}
              onClick={handleMenuClick}
            />

            <Col
              style={{
                display: "flex",
                width: "100%",
                padding: "20px 25px",
              }}
            >
              <Button
                type="default"
                onClick={logOut}
                style={{
                  color: "white",
                  backgroundColor: "	#b23b3b",
                  width: "70%",
                  height: "40px",
                  borderColor: "white",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Log out
              </Button>
            </Col>
          </Col>
        </Sider>

        <Content style={{ backgroundColor: "#f5f5f5" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
