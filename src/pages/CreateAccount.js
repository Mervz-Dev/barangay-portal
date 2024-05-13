import React, { useState } from "react";
import {
  Flex,
  Typography,
  Button,
  Form,
  Input,
  Card,
  Divider,
  DatePicker,
} from "antd";
const { Title, Text } = Typography;

export default function CreateAccount() {
  const [form] = Form.useForm();
  const [confirmDirty, setConfirmDirty] = useState(false);

  const onFinish = (values) => {
    const d = new Date(values.birthdate);
    var timestamp = d.getTime();
    console.log(timestamp, "get");

    console.log("Success:", values);
  };

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (_, value) => {
    const { password } = form.getFieldsValue();
    if (value && value !== password) {
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    }
    return Promise.resolve();
  };

  const validateToNextPassword = (_, value) => {
    if (value && confirmDirty) {
      form.validateFields(["confirm"]);
    }
    return Promise.resolve();
  };

  return (
    <Flex
      vertical
      style={{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Title level={3} underline>
        Create Account Form
      </Title>
      <Text style={{ paddingBottom: 5 }}>
        Please fill out your account information accurately
      </Text>

      <Card style={{ borderRadius: 25, width: 500 }}>
        <Form
          form={form}
          name="register"
          style={{
            width: "100%",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Text style={{ paddingBottom: 20 }}>Personal Info:</Text>
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
            style={{ marginTop: 10 }}
          >
            <Input placeholder="Full Name" size="large" />
          </Form.Item>

          <Form.Item
            name="birthdate"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <DatePicker
              size="large"
              placeholder="Birth date"
              style={{ width: "50%" }}
            />
          </Form.Item>

          <Form.Item
            name="birthplace"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Input placeholder="Birth Place" size="large" />
          </Form.Item>

          <Form.Item
            name="startDateResidency"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <DatePicker
              size="large"
              placeholder="Start date of residency"
              style={{ width: "50%" }}
            />
          </Form.Item>

          <Divider />

          <Text>Login Info:</Text>

          <Form.Item
            name={"email"}
            rules={[
              { type: "email" },
              { required: true, message: "This field is required!" },
            ]}
          >
            <Input size="large" placeholder="Email" style={{ marginTop: 10 }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
              {
                validator: validateToNextPassword,
              },
            ]}
          >
            <Input.Password placeholder="Set Password" size="large" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
              {
                validator: compareToFirstPassword,
              },
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              size="large"
              onBlur={handleConfirmBlur}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ width: "100%", backgroundColor: "#003b7f" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}
