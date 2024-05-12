import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Flex,
  Input,
  Typography,
  Layout,
  Image,
  Menu,
  Space,
} from "antd";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#00264d",
        }}
      >
        <Image
          alt="none"
          width={50}
          height={50}
          src={require("./assets/logo.png")}
        />
        <Typography.Text
          style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
        >
          A-Barangay Hub
        </Typography.Text>
        <Flex style={{ marginLeft: 10 }}>
          <Space
            direction="horizontal"
            size="small"
            style={{
              display: "flex",
            }}
          >
            <Typography.Text style={{ color: "white" }}>
              Welcome to
            </Typography.Text>
            <Typography.Text style={{ color: "white" }}>
              Barangay
            </Typography.Text>
          </Space>
        </Flex>
      </Header>
      <Flex style={{ backgroundColor: "red", padding: 10 }}>
        <Button style={{ flex: 1 }} type="primary">
          Button
        </Button>
        <Button style={{ flex: 1 }} type="primary">
          Button
        </Button>
        <Flex vertical style={{ padding: 10 }}>
          <Input />
          <Button type="primary">Button</Button>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default App;
