import { sel } from "../../common.js";

export default {
  init() {
    this.modalTemplate()
    this.event()
    this.signinTemplate()
  },

  event() {
    this.btnEvent('.signIn ', this.addClass)
    this.btnEvent('.close-signin-btn', this.removeClass)
    this.escEvent()
    this.startEmail()
  },

  //회원가입 모달(이메일 인증)
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
            <input name = "email" type = "text" class = "long-btn text-input" placeholder = "이메일주소를 적어주세요.">
          </form>
          <button class = "long-btn green-btn start-email">이메일로 시작하기</button>
          <div>
            <p class= "agree-text">회원가입 시 <a href="">개인정보처리방침</a>과<br><a href="">이용약관</a>을 확인하였으며, 동의합니다.</p>
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
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if (sel.el('.signinTemplate').classList.contains('open') && e.key === 'Escape') {
        this.removeClass()
      }
    })
  },

  startEmail() {
    sel.el('.start-email').addEventListener('click', function (e) {
      let emailVal = sel.el('input[name="email"]').value;
      let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

      if (emailVal.match(reg) !== null) {
        location.href = `signin.html`
      }
      else {
        console.log('error');
        alert('이메일 주소가 잘못되었습니다. 다시 한 번 확인해주세요.')
      }
    })
  },

  //회원가입 페이지
  signinTemplate() {
    let template = `
    <div class = "mainInner container">
      <h2 class = "h2">회원가입</h2>
      <section>
        <form>
          <p class = "email-text">이메일</p>
          <input name = "email" type = "text" class = "" placeholder = "이메일주소를 적어주세요.">
          <p class = "reason-for-joining">가입이유</p>
          <label><input type = "radio" name = "volunteer">봉사활동을 하고 싶어요</label>
          <label><input type = "radio" name = "need-helper">봉사자의 도움이 필요해요</label>
          <p class = "belong">'소속' 또는 '기관'을 적어주세요.</p>
          <input name = "belong" type = "text" class = "" placeholder = "소속 병원 또는 기관을 적어주세요.">
        </form>
        <button>가입 완료</button>
      </section>
    </div>
    `

    sel.el('#signIn-main').insertAdjacentHTML('afterbegin', template)
  }

}