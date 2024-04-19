/**
 * @file sendVerification.js
 * @author Sanjay Sunil
 * @license MIT
 */

function send_verification() {
  successNotification("Thư xác nhận đã được gửi vào email của bạn, vui lòng vào email kích hoạt để đăng nhập!")
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => { }).catch((err) => errorNotification(err.message));
}
