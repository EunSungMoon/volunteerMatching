import { sel } from "../../common.js"
export default {
  init() {
    this.mainTemplate()
    this.listTemplate()
  },

  mainTemplate() {
    let template = `
      <div class = "container">
      <h2 class = "h2">게시판</h2>
        <section class = "container">
          <ol class = "contentWrap row"></ol>
        </section>
      </div>
    `
    sel.el('#main').insertAdjacentHTML('afterbegin', template)
  },

  listTemplate() {
    let template = `
      <li class="=col-6">
        <div class = "listContent">
          <a>
            <span>제목 : 강남요양병원 봉사자 모집</span>
            <p>분야 : 미용봉사 (커트)</p>
            <p>인원수 : 1명</p>
            <p>주소 : 서울시 강남구 개포동 123번지</p>
          </a>
        </div>
      </li>
      <li class="col-6">
      <div class = "listContent">
        <a>
          <span>제목 : 강남요양병원 봉사자 모집</span>
          <p>분야 : 미용봉사 (커트)</p>
          <p>인원수 : 1명</p>
          <p>주소 : 서울시 강남구 개포동 123번지</p>
        </a>
      </div>
    </li>
    <li class="col-6">
        <div class = "listContent">
          <a>
            <span>제목 : 강남요양병원 봉사자 모집</span>
            <p>분야 : 미용봉사 (커트)</p>
            <p>인원수 : 1명</p>
            <p>주소 : 서울시 강남구 개포동 123번지</p>
          </a>
        </div>
      </li>
      
    `
    sel.el('.contentWrap').insertAdjacentHTML('afterbegin', template)
  }
}