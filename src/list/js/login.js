import { sel } from "../../common.js";

export default {
  init() {
    this.modalTemplate()
    this.modalEvt()
  },

  modalTemplate() {
    let template = `
      <section class = "modalForm">
        <div class = "title">
          <h2>프렌즈</h2>
          <button type = "button" class = "closeBtn">X</button>
        </div>
        <form>
          <input name = "id" type = "text" class = "login-input" placeholder = "아이디를 입력해주세요.">
          <input name = "password" type = "text" class = "login-input" placeholder = "비밀번호를 입력해주세요.">          
        </form>
        <button>로그인</button>
        <div class = "signinBtn">
          <span>프렌즈가 처음이세요?</span>
          <button>회원가입</button>
        </div>
      </section>
    `
    sel.el('#main').insertAdjacentHTML('afterend', template)
  },



  
  modalEvt() {
    sel.el('.login').addEventListener('click', function () {
      console.log('modal');
      sel.el('.modal').focus()
    })
  }

}