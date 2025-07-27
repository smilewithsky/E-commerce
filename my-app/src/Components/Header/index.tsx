"use client";

import { Input } from "antd";
import { Button } from "@/Components/ui/Button";
import { Search, User, Store, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <nav className="hidden md:flex gap-5 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/do-nam">Đồ Nam</Link>
            <Link href="/do-nu">Đồ Nữ</Link>
            <Link href="/be-trai">Đồ Bé Trai</Link>
            <Link href="/be-gai">Đồ Bé Gái</Link>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 mx-8 hidden lg:flex items-center">
          <div className="flex border rounded-full overflow-hidden w-full max-w-md">
            <div className="px-3 flex items-center text-gray-500">
              <Search size={18} />
            </div>
            <Input
              type="text"
              placeholder="Bạn Muốn Tìm gì..."
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="rounded-none rounded-r-full bg-gray-600 hover:bg-gray-700 text-white">
              Tìm Kiếm
            </Button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <User className="cursor-pointer" />
          <Store className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
