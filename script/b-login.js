document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "homnayangi@gmail.com" && password === "homnayangi") {
    window.location.href = "home.html";
  } else {
    alert("Sai email hoặc mật khẩu!");
  }
});
