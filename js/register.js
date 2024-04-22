function registerUser(username, password) {
  var hashedPassword = bcrypt.hashSync(password, 10); // Mã hóa mật khẩu

  db.collection("Users").doc(username).set({
    password: hashedPassword,
    username: 
    // thêm các thông tin khác như email, tên, v.v.
  }).then(() => {
    console.log("User registered successfully");
  }).catch((error) => {
    console.error("Error writing document: ", error);
  });
}
