import { sel } from "../../common.js";

export default {
  init() {
    this.event()
    this.profileTemplate()
  },
  event(){

  },

  profileTemplate() {
    let template = `
      <div class = "mainInner container">
        <h2 class = "h2">프로필</h2>
        <section class = "section">
          <div class = "profile">
            <i class="bi bi-person-circle"></i>
            <table>
              <colgroup>
                <col style = "width : 120px">
                <col style = "width : 300px">
              </colgroup>
              <tbody>
                <tr>
                  <th>별명</th>
                  <td>moon</td>
                </tr>
                <tr>
                  <th>소속</th>
                  <td>강남제일요양병원</td>
                </tr>
              </tbody>
            </table>
          </div>  
        </section>
      </div>
    `
    sel.el('#profile-main').insertAdjacentHTML('afterbegin', template)
  }
}