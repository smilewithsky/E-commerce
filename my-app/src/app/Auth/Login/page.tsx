"use client";

import { useLoginMutation } from "@/Components/lib/api_slices/auth";
import { getAccessToken, setAccessToken } from "@/Components/lib/cookie";
import { Button, Form, Input, Typography } from "antd";
import { redirect } from "next/navigation";

const { Title, Link } = Typography;

export default function LoginFormAntd() {
  const [login] = useLoginMutation();


  const onFinish = async (values: { email: string; password: string }) => {
    const res = await login(values).unwrap();
    if (res.access_token) {
      setAccessToken(res.access_token);
      console.log("first", getAccessToken());
      redirect("/products");
    }
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
          Đăng Nhập
        </Title>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email tài khoản!" },
          ]}
        >
          <Input placeholder="Tên Tài Khoản" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Mật Khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-700 hover:bg-red-800 w-full"
          >
            Đăng Nhập Ngay
          </Button>
        </Form.Item>

        <div className="text-center space-y-2">
          <Link href="/Auth/Forget" className="text-blue-600">
            Quên Mật Khẩu?
          </Link>
          <br />
          <Link
            href="/Auth/Register"
            className="text-blue-600 text-lg font-medium"
          >
            Tạo Tài Khoản Ngay
          </Link>
        </div>
      </Form>
    </div>
  );
}
