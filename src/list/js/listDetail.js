import { sel, func } from "../../common.js";

export default {
  init() {
    this.listDetailTemplate()
    this.articleContent()
    this.event()
  },
  event() {
    this.listEvent()
    func.removeClassEvt('.article-close-btn', '.articleTemplate')
    this.escEvent()
    this.editBtnEvent()
  },

  listDetailTemplate() {
    let template = `
    <section class = "articleTemplate modalForm">
      <div class = "modalContent articleModal">
        <button type = "button" class = "article-close-btn closeBtn">X</button>

        <div class = "article-footer">
          <div class = "profile">
            <img class = "profile-img"><i class="bi bi-person-fill"></i></img>
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

  articleContent() {
    let template = `
      <div class = "article-header">
        <h2 class = "articleTitle">강남요양병원 봉사자 모집</h2>
        <p class = "createdDate">2021.12.10</p>
      </div>
      <div class = "article-content">
        <table>
          <colgroup>
            <col style = "width : 150px">
            <col style = "width : 500px">
          </colgroup>
          <tbody>
            <tr>
              <th class = "subject">봉사 일</th>
              <td>2021.12.10</td>
            </tr>
            <tr>
              <th class = "subject">인원수</th>
              <td>1명</td>
            </tr>
            <tr>
              <th class = "subject">분야</th>
              <td>미용봉사(커트)</td>
            </tr>
            <tr>
              <th class = "subject">장소</th>
              <td>서울시 강남구 개포동 123번지</td>
            </tr>
          </tbody>
        </table>
        <div class = "article-detail">
          <p>이것은 부연 설명 자리입니다. 아주아주 길어질수있으니 공간을 넓게 잡으려고 합니다</p>
        </div>
      </div>
    `

    sel.el('.article-close-btn').insertAdjacentHTML('afterend', template)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if (sel.el('.articleTemplate').classList.contains('open') && e.key === 'Escape') {
        func.removeClass('.articleTemplate')
      }
    })
  },

  listEvent() {
    // let lists = sel.el('.list')
    // for (const list of lists) {
    //   // list.addEventListener('click', this.addClass)
    //   // list.addEventListener('click', function(e) {

    //   // })
    //   console.log(lists);
    // }
    // console.log(sel.el('.list'));
  },

  editBtnEvent() {
    sel.el('.editBtn').addEventListener('click', function () {
      location.href = `passwordCheck.html`
    })
  }
}