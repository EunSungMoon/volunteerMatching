import Header from "./list/js/header.js"
import LoginModal from "./list/js/login.js"
import Signin from "./list/js/signin.js"
import SigninModal from "./list/js/signinModal.js"

document.addEventListener('DOMContentLoaded', function() {
  Header.init()
  LoginModal.init()
  SigninModal.init()
  Signin.init()
})