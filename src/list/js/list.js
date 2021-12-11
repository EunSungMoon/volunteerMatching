import { sel } from "../../common.js"
export default {
  init() {
    this.mainTemplate()
    this.listTemplate()
    this.event()
  },
  event() {
    this.writeBtnEvent()
    this.importJson()
  },

  mainTemplate() {
    let template = `
      <div class = "container">
      <div class = "titleWrap">
        <h2 class = "h2">게시판</h2>
        <button class = "writing-btn borderBtn">글쓰기</button>
      </div>
        <section class = "container">
          <ol class = "contentWrap row"></ol>
        </section>
      </div>
    `
    sel.el('#main').insertAdjacentHTML('afterbegin', template)
  },

  listTemplate() { //p테그들 data-type으로 수정하기(백엔드 완료되면)
    let template = `
      <li class="=col-6 list">
        <div class = "listTitle">
          <h3 class = "h3">강남요양병원 봉사자 모집</h3>
          <p class = "apply-state apply-ing">모집중</p>
        </div>
        <div class = "listContent">
          <p class = "field">미용봉사 (커트)</p>
          <p class = "date"><i class="bi bi-calendar-date"></i>2021.12.10</p>
          <p class = "headcount"><i class="bi bi-people"></i>1명</p>
          <p class = "address"><i class="bi bi-shop"></i>서울시 강남구 개포동 123번지</p>
        </div>
      </li>
      <li class="=col-6 list">
        <div class = "listTitle">
          <h3 class = "h3">강남요양병원 봉사자 모집</h3>
          <p class = "apply-state apply-complete">모집완료</p>
        </div>
        <div class = "listContent">
          <p class = "field">미용봉사 (커트)</p>
          <p class = "date"><i class="bi bi-calendar-date"></i>2021.12.10</p>
          <p class = "headcount"><i class="bi bi-people"></i>1명</p>
          <p class = "address"><i class="bi bi-shop"></i>서울시 강남구 개포동 123번지</p>
        </div>
      </li>
      <li class="=col-6 list">
        <div class = "listTitle">
          <h3 class = "h3">강남요양병원 봉사자 모집</h3>
          <p class = "apply-state apply-ing">모집중</p>
        </div>
        <div class = "listContent">
          <p class = "field">미용봉사 (커트)</p>
          <p class = "date"><i class="bi bi-calendar-date"></i>2021.12.10</p>
          <p class = "headcount"><i class="bi bi-people"></i>1명</p>
          <p class = "address"><i class="bi bi-shop"></i>서울시 강남구 개포동 123번지</p>
        </div>
      </li>
    `
    sel.el('.contentWrap').insertAdjacentHTML('afterbegin', template)
  },

  writeBtnEvent() {
    sel.el('.writing-btn').addEventListener('click', function () {
      location.href=`articleForm.html`
    })
  },

  importJson() {
    fetch('http://15.164.62.156:8888/list/?format=json')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      })
  }
}