import { sel } from "../../common.js";

export default {
  init() {
    this.listDetailTemplate()
    this.event()
  },
  event() {
    this.btnEvent('.article-close-btn', this.removeClass)
    this.listEvent()
    this.escEvent()
    this.editBtnEvent()
  },

  listDetailTemplate() {
    let template = `
    <section class = "articleTemplate modalForm">
      <div class = "modalContent articleModal">
        <button type = "button" class = "article-close-btn closeBtn">X</button>
        <div class = "article-header">
          <h2 class = "articleTitle">강남요양병원 봉사자 모집</h2>
          <p class = "createdDate">2021.12.10</p>
        </div>
        <div class = "article-content">
          <p>분야 : 미용봉사 (커트)</p>
          <p>인원수 : 1명</p>
          <p>주소 : 서울시 강남구 개포동 123번지</p>
          <div class = "article-detail">
            <p>이것은 부연 설명 자리입니다. 아주아주 길어질수있으니 공간을 넓게 잡으려고 합니다</p>
          </div>
        </div>
        <div class = "article-footer">
          <div class = "profile">
            <img class = "profile-img"><i class="bi bi-person-circle"></i></img>
            <p>별명자리</p>
          </div>
          <div class = "btnWrap">
            <button class = "borderBtn editBtn"><i class="bi bi-pencil"></i>수정하기</button>
            <button class = "borderBtn chatBtn"><i class="bi bi-chat-dots"></i>채팅하기</button>
          </div>
        </div>
      </div>
    </section>
    `
    sel.el('.signinTemplate').insertAdjacentHTML('afterend', template)
  },

  addClass() {
    sel.el('.articleTemplate').classList.add('open');
  },

  removeClass() {
    sel.el('.articleTemplate').classList.remove('open')
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if (sel.el('.articleTemplate').classList.contains('open') && e.key === 'Escape') {
        this.removeClass()
      }
    })
  },

  listEvent() {
    let lists = sel.elAll('.list')
    for (const list of lists) {
      list.addEventListener('click', this.addClass)
    }
  },

  editBtnEvent() {
    sel.el('.editBtn').addEventListener('click', function() {
      location.href = `passwordCheck.html`
    })
  }
}