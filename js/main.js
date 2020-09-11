function getPassword() {
  var chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
  var password = "";
  var passwordLength = documnet.getElementById('characters').value;

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
    document.getElementById("password").value = password
}
