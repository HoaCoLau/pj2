🔧 1. Postman là gì?
Postman là một công cụ giúp bạn gửi request đến API và xem response trả về từ server.

Hữu ích khi bạn:

Kiểm thử các API REST (GET, POST, PUT, DELETE…)
Gửi dữ liệu trong body, params, header
Kiểm tra token (JWT, OAuth…)
Debug response JSON dễ dàng

👉 Postman thay thế cho việc dùng curl hoặc tạo form test thủ công.


✅ 2. Cài đặt Postman

Truy cập: https://www.postman.com/downloads/


🚀 3. Test CRUD API cơ bản bằng Postman
🟡 A. Giao diện chính của Postman

Thành phần	                Mô tả
Method	                Chọn phương thức: GET, POST, PUT, DELETE
URL	Nhập                đường dẫn API
Params	                Truyền query params (VD: ?name=abc)
Headers	                Truyền token, content-type, v.v.
Body	                Gửi dữ liệu khi dùng POST / PUT
Send	                Gửi request
Response Panel	        Hiện kết quả trả về (status, JSON, thời gian…)

🟢 B. Ví dụ test API POST /api/users
Bước 1: Chọn POST, nhập URL:

http://localhost:3000/api/users

Bước 2: Vào tab Body → chọn raw → chọn JSON
Nhập:

{
  "name": "Alice"
}

Bước 3: Click Send

Bạn sẽ thấy kết quả JSON trả về từ API.


🛠️ 4. Các loại request bạn có thể test

Loại request	            Method	                Mô tả
GET	                    GET /api/users	        Lấy danh sách dữ liệu
GET by id	            GET /api/users/:id	    Lấy chi tiết theo id
POST	                POST /api/users	        Gửi dữ liệu mới
PUT/PATCH	            PUT /api/users/:id	    Cập nhật dữ liệu
DELETE	                DELETE /api/users/:id	Xoá dữ liệu


🔐 5. Test API có xác thực (Authorization)

Chuyển sang tab Authorization
Chọn Bearer Token (hoặc Basic Auth…)
Nhập token vào nếu API yêu cầu xác thực

📁 6. Sử dụng Collection để lưu request

Dùng Collection để lưu lại các request đã test
Có thể chia theo module (User, Product, Order…)
Rất tiện để test lại hoặc chia sẻ cho nhóm

✅ 7. Ưu điểm của Postman

Ưu điểm	                        Giải thích
Giao diện thân thiện	    Dễ dùng cho người mới
Quản lý request tốt	        Lưu trữ, nhóm request theo Collection
Tích hợp test script	    Viết script tự động kiểm tra kết quả
Thống kê chi tiết	        Xem status, thời gian, headers, cookies
