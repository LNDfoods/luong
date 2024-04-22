<script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js"></script>

function loginUser(username, password) {
  db.collection("Users").doc(username).get().then((doc) => {
    if (doc.exists) {
      var hashedPassword = doc.data().password;
      if (bcrypt.compareSync(password, hashedPassword)) { // So sánh mật khẩu
        console.log("Login successful");
        // Tiếp tục với phiên đăng nhập
      } else {
        console.log("Password is incorrect");
      }
    } else {
      console.log("User not found");
    }
  }).catch((error) => {
    console.error("Error reading document: ", error);
  });
}
