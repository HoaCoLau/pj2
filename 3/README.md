❗ 1. Xử lý lỗi trong Express.js
🔹 Vì sao cần xử lý lỗi?
Đảm bảo ứng dụng không bị crash khi có lỗi

Gửi thông báo lỗi rõ ràng cho client

Giúp debug nhanh hơn

Giữ cho code sạch và dễ quản lý


✅ Cách xử lý lỗi:
A. Try - catch trong controller:

try {
    // logic xử lý
} catch (error) {
    next(error); // chuyển lỗi tới middleware xử lý lỗi
}


B. Tạo middleware xử lý lỗi toàn cục:

// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
}

module.exports = errorHandler;


Đừng quên thêm vào app.js hoặc server.js:

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler); // luôn để cuối cùng


✅ Tạo class lỗi tùy chỉnh:

// utils/ApiError.js
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ApiError;


Dùng trong controller:

const ApiError = require('../utils/ApiError');
throw new ApiError(404, 'User not found');


📦 2. Chuẩn hóa response
🔹 Tại sao cần chuẩn hóa?
Giúp client dễ xử lý (mobile, frontend)
Tất cả response (thành công hay thất bại) đều theo 1 format
Đỡ phải viết lại logic xử lý lỗi nhiều lần ở client

✅ Cấu trúc chuẩn gợi ý cho response:
🔸 Khi thành công:

{
  "success": true,
  "message": "Lấy danh sách thành công",
  "data": [
    { "id": 1, "name": "Alice" }
  ]
}

🔸 Khi thất bại:

{
  "success": false,
  "message": "Không tìm thấy người dùng"
}

✅ Viết hàm gửi response chuẩn:

// utils/response.js
exports.sendResponse = (res, { statusCode = 200, success = true, message = '', data = null }) => {
    res.status(statusCode).json({
        success,
        message,
        data
    });
};

Dùng trong controller:


const { sendResponse } = require('../utils/response');

sendResponse(res, {
    message: "Tạo user thành công",
    data: newUser,
    statusCode: 201
});