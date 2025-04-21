🚀 1. Giới thiệu Express.js
🔹 Express.js là gì?
-Express.js là một framework web nhẹ và linh hoạt cho Node.js.
-Nó giúp bạn dễ dàng xây dựng API, web server, và ứng dụng web.
-Được sử dụng rộng rãi nhờ sự đơn giản, hiệu năng cao và cộng đồng lớn.

🔹 Lý do dùng Express:
-Cấu trúc rõ ràng, dễ viết
-Hỗ trợ middleware giúp chia nhỏ logic
-Dễ mở rộng và tích hợp với các cơ sở dữ liệu như MongoDB, MySQL, PostgreSQL
-Tốt cho cả REST API và ứng dụng web

🏗️ 2. Cấu trúc dự án Express theo mô hình MVC
🔹 MVC là gì?
MVC = Model - View - Controller, là mô hình tổ chức mã giúp phân tách rõ ràng:

Thành phần	        Vai trò
Model	        Tương tác với dữ liệu (CSDL)
View	        Giao diện (HTML, ejs, pug...)
Controller	    Xử lý logic, điều hướng dữ liệu giữa Model và View

Với API, thường không dùng View, chỉ xử lý Model + Controller + Routes

🔹 Cấu trúc thư mục ví dụ:

project-name/
├── controllers/       → Xử lý logic cho từng route
│   └── userController.js
├── models/            → Định nghĩa dữ liệu, tương tác DB
│   └── userModel.js
├── routes/            → Khai báo các route API
│   └── userRoutes.js
├── middleware/        → Các middleware dùng chung (auth, logger,...)
│   └── auth.js
├── utils/             → Hàm tiện ích, xử lý response, lỗi
├── config/            → Cấu hình (database, biến môi trường)
├── server.js          → File chính để chạy server
├── .env               → Biến môi trường (port, db, secret...)


🔹 Luồng xử lý trong Express + MVC:

Client (Postman, trình duyệt)
  ↓
Route (ví dụ: /api/users)
  ↓
Controller (xử lý yêu cầu)
  ↓
Model (lấy dữ liệu từ CSDL)
  ↓
Controller trả kết quả về
  ↓
Response JSON gửi về client


✅ Ưu điểm của cấu trúc MVC trong Express
-Tách biệt logic → dễ bảo trì, mở rộng

-Có thể tái sử dụng code

-Dễ test từng phần riêng lẻ

-Chuẩn hoá cho dự án lớn, làm việc nhóm
