import { sel } from "../../common.js";
export default {
  init() {
    this.passwordCheckTemplate()
    this.event()
  },
  event() {
    this.passwordCheckFunc()
  },

  passwordCheckTemplate() {
    let template = `
      <div class = "formWrap container">
        <form>
          <p>비밀번호</p>
          <input type = "password" class = "long-btn text-input passwordCheck-input" placeholder = "비밀번호를 입력해주세요."></input>
          <button type = "button" class = "borderBtn checkBtn">확인</button>
        </form>
      </div>
    `
    sel.el('#passwordCheck-main').insertAdjacentHTML('afterbegin', template)
  },

  passwordCheckFunc() {
    sel.el('.checkBtn').addEventListener('click', this.trueOrFalse)
  },

  trueOrFalse() { //비밀번호 체크 로직 필요
    if (sel.el('.passwordCheck-input').value=='') {
      alert('비밀번호를 입력해주세요.')
    }
    console.log(sel.el('.passwordCheck-input').value);
  }
}