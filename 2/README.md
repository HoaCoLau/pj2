⚙️ 1. CRUD API là gì?
✅ CRUD là viết tắt của:
C - Create: Tạo mới dữ liệu → POST

R - Read: Đọc dữ liệu → GET

U - Update: Cập nhật dữ liệu → PUT / PATCH

D - Delete: Xoá dữ liệu → DELETE

👉 Mỗi hành động tương ứng với một HTTP method.
Ví dụ với tài nguyên "users":

Hành động	        Phương thức	Đường dẫn	    Ý nghĩa
Create	POST	        /api/users	            Thêm người dùng mới
Read (all)	GET	        /api/users	            Lấy danh sách người dùng
Read (one)	GET	        /api/users/:id	        Lấy thông tin 1 người
Update	PUT/PATCH	    /api/users/:id	        Cập nhật người dùng theo id
Delete	DELETE	        /api/users/:id	        Xoá người dùng theo id


🛣️ 2. Routing (Tuyến đường)
🔹 Khái niệm:
Routing là cách Express.js định tuyến yêu cầu từ client tới server, và xử lý nó bằng các hàm callback.

🔹 Cú pháp cơ bản:

app.METHOD(PATH, HANDLER)
METHOD: GET, POST, PUT, DELETE, v.v.

PATH: Đường dẫn URL

HANDLER: Hàm xử lý khi client gửi yêu cầu

🔹 Ví dụ:

app.get('/users', (req, res) => {
    res.send('Lấy danh sách người dùng');
});


Hoặc tách riêng thành router:

// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


🔁 3. Middleware trong Express.js
🔹 Khái niệm:
Middleware là các hàm trung gian, chạy trước khi request đến route hoặc trước khi response trả về.

🔹 Tác dụng:
Ghi log
Phân quyền (auth)
Xử lý lỗi
Chuyển đổi dữ liệu (body-parser, JSON,...)


🔹 Cú pháp:

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Quan trọng! Chuyển sang bước tiếp theo
});

🔹 Một số middleware thường dùng:

Middleware	            Chức năng
express.json()	        Đọc JSON từ body request
express.static()	    Phục vụ file tĩnh (HTML, CSS, JS)
custom middleware	    Log, phân quyền, xử lý lỗi,...


🧩 Kết hợp: CRUD + Routing + Middleware
Client gửi yêu cầu →
Middleware xử lý request (log, parse, xác thực...) →
Routing nhận request →
Controller xử lý logic →
Model (nếu có) lấy dữ liệu →
Trả response JSON cho client.