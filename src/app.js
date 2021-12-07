import List from "./list/js/list.js"
import Header from "./list/js/header.js"
import Login from "./list/js/login.js"
import SigninModal from "./list/js/signinModal.js"

document.addEventListener('DOMContentLoaded', function() {
  Header.init()
  List.init()
  Login.init()
  SigninModal.init()
})