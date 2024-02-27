function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Đưa ra các điều kiện kiểm tra tài khoản ở đây (ví dụ: so sánh với một cơ sở dữ liệu, etc.)
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
      // Redirect hoặc thực hiện các hành động sau khi đăng nhập thành công
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }