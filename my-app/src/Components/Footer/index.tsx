import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Về chúng tôi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">VỀ CHÚNG TÔI</h3>
          <p className="text-sm leading-relaxed">
            Vuong-Group - Khoác lên niềm vui gia đình Việt. Năm 2022, Công ty Cổ
            phần Thương mại và Dịch vụ Vuong-Group được thành lập với mục đích
            chính ban đầu là hoạt động trong lĩnh vực sản xuất hàng thời trang
            xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi.
            <br />
            Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột
            mốc đáng nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến
            niềm vui cho hàng triệu gia đình Việt, VPS hướng đến mục tiêu mang
            lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt.
            <br />
            Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc
            sống năng động, tích cực hơn.
          </p>
        </div>

        {/* Đường dẫn */}
        <div>
          <h3 className="text-lg font-semibold mb-3">ĐƯỜNG DẪN</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Thông tin liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-lg font-semibold mb-3">THÔNG TIN LIÊN HỆ</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Địa chỉ: Hà Nội</li>
            <li>📞 +84 </li>
            <li>
              📘{" "}
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li>✉️ tienanh17082001@gmail.com</li>
          </ul>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-r-md"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
