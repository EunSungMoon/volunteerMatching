import { sel, func } from "../../common.js"
export default {
  init() {
    this.signinTemplate()
    this.belongingCheck()
    this.event()
  },

  event() {
    this.checkEvt('.need-helper', this.addClass)
    this.checkEvt('.volunteer', this.removeClass)
    this.confirmRepetition()
    // this.belongingCheckFunc()
  },

  //회원가입 페이지
  signinTemplate() {
    let template = `
      <div class = "mainInner container">
        <h2 class = "h2">회원가입</h2>
        <section class = "section">
          <form>
            <p class = "email-text">이메일</p>
            <input name = "email" type = "text" class = "text-input signin-input emailValue" placeholder = "이메일주소를 적어주세요.">
            <p class = "nickName-text">별명</p>
            <input name = "nickName" type = "text" class = "text-input nickName" placeholder = "별명을 적어주세요.">
            <button type = "button" class = "confirm confirm-repetition">중복확인</button>
            <button type = "button" class = "confirm confirm-complete ">확인 완료</button>
            <p class = "reason-for-joining">가입이유</p>
            <label class = "volunteer"><input type = "radio" name = "join" value = "volunteer" checked>봉사활동을 하고 싶어요</label>
            <label class = "need-helper"><input type = "radio" name = "join" value = "need-helper">봉사자의 도움이 필요해요</label>
          </form>
          <button class = "join-complete">가입 완료</button>
        </section>
      </div>
      `
    sel.el('#signin-main').insertAdjacentHTML('afterbegin', template)
  },

  belongingCheck() {
    let template = `
      <div class = "belongWrap">
        <p class = "belong">'소속' 또는 '기관'을 적어주세요.</p>
        <input name = "belong" type = "text" class = "text-input signin-input" placeholder = "소속 병원 또는 기관을 적어주세요.">
      </div>
      `
    sel.el('form').insertAdjacentHTML('beforeend', template)
  },

  checkEvt(className, funcName) {
    sel.el(className).addEventListener('click', funcName)
  },


  addClass() {
    sel.el('.belongWrap').classList.add('show');
  },

  removeClass() {
    sel.el('.belongWrap').classList.remove('show')
  },


  //별명을 안적었을 시 -> 별명을 입력하세요
  //별명이 사용가능하면 -> 사용가능한 아이디 & 확인완료 버튼 등장
  //중복되었을 시 -> 이미 존재하는 아이디 입니다. 
  confirmRepetition() { 
    sel.el('.confirm-repetition').addEventListener('click', function (e) {

      if (sel.el('.nickName').value === null) {
        alert('별명을 입력하세요.')
      } 
      else {
        alert('사용 가능한 아이디 입니다.')
      }
      // alert('이미 존재하는 아이디 입니다.')
    })
  }
}