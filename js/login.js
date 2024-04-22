<script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js"></script>

function loginUser() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        db.collection("nhan-vien").doc(username).get().then((doc) => {
          if (doc.exists) {
            var userData = doc.data();
            if (userData.password === password) {  // Kiểm tra mật khẩu
              document.getElementById("userInfo").innerHTML = `Name: ${username}<br>DOB: ${userData.dob}<br>Gender: ${userData.gender}<br>Address: ${userData.address}<br>Phone: ${userData.phone}<br>Department: ${userData.department}<br>Position: ${userData.position}`;
              console.log("Login successful");
            } else {
              console.log("Password is incorrect");
              document.getElementById("userInfo").innerHTML = "Password is incorrect";
            }
          } else {
            console.log("User not found");
            document.getElementById("userInfo").innerHTML = "User not found";
          }
        }).catch((error) => {
          console.error("Error reading document: ", error);
        });
      }
