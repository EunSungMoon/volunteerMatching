import { sel } from "../../common.js";

export default {
  init() {
    this.modalTemplate();
    this.event();
  },

  event() {
    this.btnEvent('.login', this.addClass)
    this.btnEvent('.closeBtn', this.removeClass)
    this.escEvent()
  },

  modalTemplate() {
    let template = `
      <section class = "modalForm">
        <div class = "modalContent">
          <button type = "button" class = "closeBtn">X</button>
          <div class = "title">
            <h1>프렌즈</h1>
        </div>
          <form>
            <input name = "id" type = "text" class = "button login-input" placeholder = "아이디를 입력해주세요.">
            <input name = "password" type = "text" class = "button login-input" placeholder = "비밀번호를 입력해주세요.">          
          </form>
          <button class = "button login-btn">로그인</button>
          <div class = "signin">
            <span class = "signing-text">프렌즈가 처음이세요?</span>
            <button class = "button signin-btn">회원가입</button>
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
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if(sel.el('.modalForm').classList.contains('open') && e.key==='Escape') {
        this.removeClass()
      }
    })
  }
}