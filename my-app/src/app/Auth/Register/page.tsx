"use client";

import { Button, Form, Input, Typography } from "antd";
import { redirect } from "next/navigation";

const { Title, Link } = Typography;

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Login success:", values);
    redirect("/Auth/Login");
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
          Đăng Ký
        </Title>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Nhập tên tài khoản!" }]}
        >
          <Input placeholder="Tên Tài Khoản" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email!" }]}
        >
          <Input placeholder="Tên Tài Khoản" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item
          name="checkPassord"
          rules={[{ required: true, message: "Nhập lại mật khẩu!" }]}
        >
          <Input.Password placeholder="Nhập lại mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-700 hover:bg-red-800 w-full"
          >
            Đăng Ký Ngay
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
