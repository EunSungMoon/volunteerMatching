import { sel } from "../../common.js";

export default {
  init() {
    console.log('header');
    this.headerTemplate()
  },

  headerTemplate() {
    let template = `
      <div class = "headerInner">
        <h1>프렌즈</h1>
        <button class = "login">로그인</button>
      </div>
      <nav>
        <ol>
          <li><a href = "#">봉사리스트</a></li>
          <li><a href = "#">봉사리스트</a></li>
          <li><a href = "#">봉사리스트</a></li>
        </ol>
      </nav>
    `
    sel.el('#header').insertAdjacentHTML('afterbegin', template)
  }
}