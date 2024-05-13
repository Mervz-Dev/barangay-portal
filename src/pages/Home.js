import {
  Flex,
  Typography,
  Col,
  Button,
  Form,
  Input,
  Card,
  Row,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();
  return (
    <Flex style={{ padding: 20, justifyContent: "space-around" }}>
      <Flex style={{ flex: 1.5, paddingLeft: 20, paddingRight: 20 }}>
        <Col style={{ padding: 10, justifyContent: "flex-start" }}>
          <Title level={3}>
            Welcome to Amoingon's Barangay Hub - Your One-Stop Destination for
            Community Services!
          </Title>
          <Paragraph style={{ fontSize: 16 }}>
            Where crystal-clear waters meet warm hospitality, inviting you to
            discover the essence of island living.
          </Paragraph>
          <img
            alt="location"
            src={require("../assets/marinduque-beach.jpg")}
            style={{ borderRadius: 25 }}
            width={"100%"}
            height={500}
          />
        </Col>
      </Flex>

      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 20,
          padding: 40,
          flex: 1,
        }}
      >
        <Card style={{ borderRadius: 25 }}>
          <Col>
            <Title level={3} style={{ paddingBottom: 10 }}>
              Member Login:
            </Title>
            <Form
              name="login"
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Username" size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ width: "100%", backgroundColor: "#003b7f" }}
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>

            <Divider />

            <Row>
              <Text>
                Are you an Amoingon resident? Join our hub now for convenient
                online barangay services!
              </Text>
            </Row>
            <Flex
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                onClick={() => navigate("create-account")}
                style={{
                  backgroundColor: "orange",
                  marginTop: 10,
                }}
              >
                Create Account
              </Button>
            </Flex>
          </Col>
        </Card>
      </Flex>
    </Flex>
  );
}

export default Home;
