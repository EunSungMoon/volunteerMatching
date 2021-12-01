import { sel } from "../../common.js";

export default {
  init() {
    this.modalTemplate();
    this.event();
  },

  event() {
    this.btnEvent('.login', this.addClass)
    this.btnEvent('.closeBtn', this.removeClass)
  },

  modalTemplate() {
    let template = `
      <section class = "modalForm">
        <div class = "modalContent">
          <div class = "title">
            <h1>프렌즈</h1>
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
        </div>
      </section>
    `
    sel.el('#main').insertAdjacentHTML('afterend', template)
  },

  addClass() {
    sel.el('.modalForm').classList.add('open');
  },

  removeClass() {
    sel.el('.modalForm').classList.remove('open')
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  }

}