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
    this.moveToSingn()
  },

  modalTemplate() {
    let template = `
      <section class = "loginTemplate modalForm">
        <div class = "modalContent loginModal">
          <button type = "button" class = "closeBtn">X</button>
          <div class = "title">
            <h1>프렌즈</h1>
          </div>
          <form>
            <input name = "id" type = "text" class = "long-btn text-input" placeholder = "아이디를 입력해주세요.">
            <input name = "password" type = "text" class = "long-btn text-input" placeholder = "비밀번호를 입력해주세요.">          
          </form>
          <button class = "long-btn green-btn">로그인</button>
          <div class = "signin">
            <span class = "signing-text">프렌즈가 처음이세요?</span>
            <button class = "long-btn signin-btn">회원가입</button>
          </div>
        </div>
      </section>
    `
    sel.el('#footer').insertAdjacentHTML('afterend', template)
  },

  addClass() {
    sel.el('.loginTemplate').classList.add('open');
  },

  removeClass() {
    sel.el('.loginTemplate').classList.remove('open')
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if(sel.el('.loginTemplate').classList.contains('open') && e.key==='Escape') {
        this.removeClass()
      }
    })
  },

  moveToSingn() {
    this.btnEvent('.signin-btn', this.removeClass)
    // sel.el('.signinTemplate').classList.add('open')
    console.log(sel.el('.signinTemplate'));
  }
}