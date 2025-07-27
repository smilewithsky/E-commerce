import Image from "next/image";
import React from "react";

export const categories = [
  {
    title: "Áo Len Nữ",
    products: [
      { name: "Áo Tay Dài Nữ", price: 399000, image: "/images/sp1.png" },
      { name: "Áo Len Tay Lửng Nữ", price: 299000, image: "/images/sp2.png" },
      { name: "Áo Len Cổ Tim", price: 299000, image: "/images/sp3.png" },
      { name: "Áo Len Ngắn Nữ", price: 399000, image: "/images/sp4.png" },
    ],
  },
  {
    title: "Thời trang mặc nhà",
    products: [
      { name: "Bộ Mặc Nhà Nữ", price: 299000, image: "/images/sp5.png" },
      { name: "Đồ Mặc Nhà Gấu", price: 249000, image: "/images/sp6.png" },
      { name: "Pijama Nữ", price: 299000, image: "/images/sp7.png" },
      { name: "Đồ Mặc Nhà Trẻ", price: 199000, image: "/images/sp8.png" },
    ],
  },
  {
    title: "Đồ Trẻ Em",
    products: [
      { name: "Áo Nam Trẻ Em Xám", price: 199000, image: "/images/sp9.png" },
      { name: "Áo Nam Trẻ Em Cam", price: 189000, image: "/images/sp10.png" },
      {
        name: "Áo Nam Trẻ Em Tím than",
        price: 189000,
        image: "/images/sp11.png",
      },
      {
        name: "Áo Nam Trẻ Em Tím pastel",
        price: 199000,
        image: "/images/sp12.png",
      },
    ],
  },
];

const Product = () => {
  return (
    <div>
      <div className="banner">
        <Image
          src="/banner/banner.svg"
          alt="Banner"
          width={1200}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Danh Mục Sản Phẩm</h2>

      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.products.map((product, idx) => (
              <div key={idx} className="text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-md object-cover"
                />
                <p className="mt-2">{product.name}</p>
                <p className="text-red-600 font-semibold">
                  Giá: {product.price.toLocaleString()}₫
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="mt-6 px-6 py-2 border border-black hover:bg-black hover:text-white transition">
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export default Product;
