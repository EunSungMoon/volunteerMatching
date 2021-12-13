import { sel } from "../../common.js";

export default {
  init() {
    console.log('article');
    this.articleFormTemplate()
    this.peopleNumberSelect()
    this.event()
  },

  event() {

  },

  articleFormTemplate() {
    let template = `
      <div class = "container">
        <div class = "titleWrap">
          <h2 class = "h2">봉사 모집 등록</h2>
          <button class = "borderBtn">등록하기</button>
        </div>
        <section class = "section">
          <table>
            <colgroup>
              <col style = "width : 120px"></col>
              <col style = "width : 420px"></col>
            </colgroup>
            <tbody>
              <tr>
                <td>글 제목</td>
                <td><input type = "text" class = "article-form title-input" placeholder = "제목을 입력해주세요."></td>
              </tr>
              <tr>
                <td>봉사 일</td>
                <td>2021.12.11(데이트피커 자리)</td>
              </tr>
              <tr>
                <td>봉사 인원</td>
                <td><select class = "people-number"></select></td>
              </tr>
              <tr>
                <td>봉사 분야</td>
                <td>
                  <select id = "part" class = "article-form">
                    <option value = "hair">헤어</option>
                    <option value = "skin">피부</option>
                    <option value = "nail">네일</option>
                    <option value = "make-up">메이크업</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>봉사장소</td>
                <td>우편번호 찾기 api따와서 창만들기</td>
              </tr>
              <tr>
                <td>주소 등장</td>
              </tr>
              <tr>
                <td>상세내용</td>
                <td><textarea id = "article-detail" placeholder = "상세내용"></textarea></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `
    sel.el('#article-main').insertAdjacentHTML('afterbegin', template)
  },

  peopleNumberSelect() {
    let numbers = 11
    for (let i = 1; i < numbers; i++) {
      let template = `
        <option value = ${i}>${i}명</option>
      `
      sel.el('.people-number').insertAdjacentHTML('beforeend', template)
    }
  }
}