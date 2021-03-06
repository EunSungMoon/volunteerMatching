import List from "./list/js/list.js"
import Header from "./list/js/header.js"
import LoginModal from "./list/js/login.js"
import SigninModal from "./list/js/signinModal.js"
import ListDetail from "./list/js/listDetail.js"

document.addEventListener('DOMContentLoaded', function() {
  Header.init()
  List.init()
  LoginModal.init()
  SigninModal.init()
  ListDetail.init()
})