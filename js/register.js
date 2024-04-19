/**
 * @file register.js
 * @author Sanjay Sunil
 * @license MIT
 */

function registration() {
  console.log('Đang đăng ký người dùng ...')
  var user_email = document.getElementById("user_email").value;
  var user_password = document.getElementById("user_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (user_password !== confirm_password) {
    errorNotification("Mật khẩu không trùng khớp!")
  } else {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(user_email, user_password);
    promise.catch((err) => errorNotification(err.message))
  }
}
