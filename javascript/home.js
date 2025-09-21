let currentInput = "0";
let previousValue = null;
let operator = null; // toán tử các phép tính  (+, -, *, /)
let manyString = "777";
let text = "Bạn Đã Trúng Thưởng" + manyString;
const display = document.getElementById('display');

// Cập nhật hiển thị màn hình máy tính
function showUpdateDisplay() {
    display.textContent = currentInput;
}

// Xử lý khi bấm số
function inputDigit(digit) {
  if (currentInput === "0") {
    currentInput = digit; // thay thế 0 ban đầu
  } else {
    currentInput += digit; // nối thêm số
  }
  showUpdateDisplay();
}
// Xử lý khi bấm chuỗi 777 hiển thị dòng tin nhắn ẩn
function inputManyString() {
  previousValue = parseFloat(currentInput); // lưu giá trị số hiện tại 
  currentInput = "0"; // Đặt lại giá trị sau khi đã bấm
  operator = "777" + manyString;
  showUpdateDisplay();
}

// Phép Cộng
function addition() {
    previousValue = parseFloat(currentInput); // lưu giá trị số hiện tại 
    currentInput = "0"; // Đặt lại giá trị sau khi đã bấm
    operator = '+'; // Gán toán tử là phép cộng
    showUpdateDisplay();
}

// Phép Trừ
function subtraction() {
  previousValue = parseFloat(currentInput); // lưu giá trị số hiện tại
  currentInput = "0"; // Đặt lại giá trị sau khi đã bấm
  operator = '-'; // Gán toán tử là phép trừ
  showUpdateDisplay();
}

// Phép Nhân
function multiplication() {
  previousValue = parseFloat(currentInput); // lưu giá trị số hiện tại
  currentInput = "0"; // Đặt lại giá trị sau khi đã bấm
  operator = '*'; // Gán toán là là phép nhân
  showUpdateDisplay();
}

// Phép Chia
function division() {
  previousValue = parseFloat(currentInput); 
  currentInput = "0";
  operator = '/';
  showUpdateDisplay();
}

/* --- Khi bấm = --- */
function handleEqual() {
  // Nếu người dùng nhập đúng mật khẩu ẩn
  if (currentInput === manyString) {
    currentInput = text;
    previousValue = null;
    operator = null;
    showUpdateDisplay();
    return;
  }

  if (!operator || previousValue === null) {
    console.log("Chưa có phép tính để thực hiện");
    return
  } ; // chưa có phép để tính

  const a = previousValue;
  const b = parseFloat(currentInput);
  let result = b;

  if (operator === '+') {
    result = a + b;
  } else if (operator === '-') {
    result = a - b;
  } else if (operator === '*') {
    result = a * b;
  } else if (operator === '/') {
    result = a / b;
  } else if(operator === '777') {
    result = text;
  }

  // chuyển kết quả về chuỗi (xóa số đuôi 0 thừa)
  currentInput = String(result);
  previousValue = null;
  operator = null;
  showUpdateDisplay();
}

/* --- Clear tất cả --- */
function clearAll() {
  currentInput = "0";
  previousValue = null;
  operator = null;
  showUpdateDisplay();
}

/* --- Gắn sự kiện cho nút số --- */
document.querySelectorAll('[data-digit]').forEach(btn => {
  btn.addEventListener('click', () => inputDigit(btn.dataset.digit));
});

/* --- Gắn sự kiện cho +, -, *, /, =, C --- */
document.getElementById('plus').addEventListener('click', addition);
document.getElementById('subtraction').addEventListener('click', subtraction);
document.getElementById('division').addEventListener('click', division);
document.getElementById('multiplication').addEventListener('click', multiplication);
document.getElementById('equal').addEventListener('click', handleEqual);
document.getElementById('clear').addEventListener('click', clearAll);

/* --- Hiển thị ban đầu --- */
showUpdateDisplay();