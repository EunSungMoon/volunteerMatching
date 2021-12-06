import { sel } from "../../common.js";

export default {
  init() {
    this.headerTemplate()
    this.event()
  },
  event() {
    this.loginEvent('.title', 'list')
  },

  headerTemplate() {
    let template = `      
    <div class = "headerInner container">
      <h1 class = "title flexNone"><a href = "#">프렌즈</a></h1>
      <nav>
        <ol class = "flexNone">
          <li><a href = "">게시판</a></li>
          <li><a href = "">채팅</a></li>
          <li><a href = "">프로필</a></li>
        </ol>
      </nav>
      <div class = "btnWrap">
        <button class = "login flexNone">로그인</button>
        <button class = "signIn flexNone">회원가입</button>
      </div>
    </div>
    
    `
    sel.el('#header').insertAdjacentHTML('afterbegin', template)
  },

  loginEvent(btnName, fileName) {
    sel.el(btnName).addEventListener('click', function (e) {
      console.log(e.currentTarget);
      location.href = `${fileName}.html`
    })
  }
}