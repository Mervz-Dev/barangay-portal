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
import { useUserStore } from "../stores/userStore";
import { useRequestsStore } from "../stores/requestsStore";
import { useBusinessesStore } from "../stores/businessesStore";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;

export default function PrivateRootLayout() {
  const { fullname, isValidResident } = useUserStore();
  const requestsStore = useRequestsStore();
  const businessStore = useBusinessesStore();
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { label: "Home", key: "/" },
    { label: "Requests", key: "/requests", hidden: !isValidResident },
    { label: "Businesses", key: "/businesses" },
  ];

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
            {fullname}
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
            <Menu onClick={handleMenuClick}>
              {navigation.map((item) =>
                item.hidden ? (
                  <></>
                ) : (
                  <Menu.Item key={item.key} disabled={item.disabled}>
                    {item.label}
                  </Menu.Item>
                )
              )}
            </Menu>
            {/* <Menu
              mode="inline"
              style={{ borderRight: 0 }}
              selectedKeys={[location.pathname]}
              defaultSelectedKeys={[location.pathname]}
              items={navigation}
              onClick={handleMenuClick}
            /> */}

            <Col
              style={{
                display: "flex",
                width: "100%",
                padding: "20px 25px",
              }}
            >
              <Button
                type="default"
                onClick={async () => {
                  await logOut();
                  requestsStore.clear();
                  businessStore.clear();
                  navigate("/");
                  window.location.reload();
                }}
                style={{
                  color: "white",
                  backgroundColor: "#b23b3b",
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
