"use client";

import { Button, Form, Input, Typography } from "antd";

const { Title, Link } = Typography;

interface Props {
  setParse: React.Dispatch<React.SetStateAction<number>>;
}

export default function ForgetPassword({ setParse }: Props) {
  const onFinish = (values: any) => {
    console.log("Login success:", values);
    setParse(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        className="w-full max-w-xs"
      >
        <Title level={3} className="text-center mb-6">
          Lấy lại mật khẩu
        </Title>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Tên truy cập!" }]}
        >
          <Input placeholder="Tên Tài Khoản" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Nhập email hoặc số điện thoại!" },
          ]}
        >
          <Input placeholder="Tên Tài Khoản" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Mật Khẩu" />
        </Form.Item>

        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: "Nhập mật khẩu Mới!" }]}
        >
          <Input.Password placeholder="Mật Khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-700 hover:bg-red-800 w-full"
          >
            Hoàn thành
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
