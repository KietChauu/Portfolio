// Biến lưu vị trí cuộn trước đó
let lastScrollTop = 0;

// Lấy phần tử <header> từ HTML để ẩn/hiện khi người dùng cuộn
const header = document.querySelector("header");

// Lấy phần tử hiển thị thời gian từ HTML (có class là "time")
const timeText = document.querySelector(".time");

// Lắng nghe sự kiện cuộn (scroll) của cửa sổ trình duyệt
window.addEventListener("scroll", () => {
  // Lấy vị trí cuộn hiện tại (số pixel cuộn dọc từ đầu trang)
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Kiểm tra hướng cuộn:
  if (scrollTop > lastScrollTop) {
    // Nếu cuộn xuống, thêm class "hidden" để ẩn <header>
    header.classList.add("hidden");
  } else {
    // Nếu cuộn lên, xóa class "hidden" để hiện <header>
    header.classList.remove("hidden");
  }

  // Cập nhật vị trí cuộn trước đó để so sánh trong lần cuộn kế tiếp
  lastScrollTop = scrollTop;
});

// Tạo đối tượng Date để lấy thời gian hiện tại
const now = new Date();

// Chuyển đổi thời gian hiện tại sang múi giờ Việt Nam (GMT+7)
const vietnamTime = now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });

// Chia chuỗi thời gian thành hai phần: ngày và giờ
const [date, time] = vietnamTime.split(", ");

// Hiển thị giờ Việt Nam trong phần tử HTML có class "time"
timeText.textContent = `${time} GMT+7`;

// Lấy phần tử HTML có ID là "year" để hiển thị năm hiện tại
const yearText = document.getElementById("year");

// Lấy năm hiện tại từ đối tượng Date
const year = new Date().getFullYear();

// Cập nhật nội dung của phần tử "year" bằng năm hiện tại
yearText.textContent = year;