import Header from "./list/js/header.js"
import LoginModal from "./list/js/login.js"
import SigninModal from "./list/js/signinModal.js"
import Profile from "./list/js/profile.js"

document.addEventListener('DOMContentLoaded', function() {
  Header.init()
  Profile.init()
  LoginModal.init()
  SigninModal.init()
})