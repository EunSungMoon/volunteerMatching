import { sel } from "../../common.js";

export default {
  init() {
    this.modalTemplate()
    this.event()
  },

  event() {
    this.btnEvent('.signIn ', this.addClass)
    this.btnEvent('.close-signin-btn', this.removeClass)
    this.escEvent()
    this.startEmail()
  },

  modalTemplate() {
    let template = `
      <section class = "signinTemplate modalForm">
        <div class = "modalContent signinModal" >
          <button type = "button" class = "closeBtn close-signin-btn">X</button>
          <div class = "title">
            <h1>회원가입</h1>
          </div>
          <form>
          <p class = "email-text">이메일</p>
          <input name = "id" type = "text" class = "long-btn text-input" placeholder = "이메일주소를 적어주세요.">
          </form>
          <button class = "long-btn green-btn start-email">이메일로 시작하기</button>
          <div>
            <p class= "agree-text">회원가입 시 개인정보처리방침과<br>이용약관을 확인하였으며, 동의합니다.</p>
          </div>
        </div>
      </section>
    `
    sel.el('.loginTemplate').insertAdjacentHTML('afterend', template)
  },
  
  addClass() {
    sel.el('.signinTemplate').classList.add('open');
  },

  removeClass() {
    sel.el('.signinTemplate').classList.remove('open')
    console.log('remove');
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if(sel.el('.signinTemplate').classList.contains('open') && e.key==='Escape') {
        this.removeClass()
      }
    })
  },

  startEmail() {
    sel.el('.start-email').addEventListener('click', function(e) {
      location.href=`signin.html`
    })
  }
}