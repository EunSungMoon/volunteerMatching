import { sel, func, com } from "../../common.js";

export default {
  init() {
    this.listDetailTemplate()
  },
  event() {
    func.removeClassEvt('.article-close-btn', '.articleTemplate')
    this.escEvent()
    this.editBtnEvent()
  },

  async listDetailTemplate() {
    let articles;

    try {
      articles = await com.getList()
      for (const article of articles) {
        let template = `
          <section class = "articleTemplate modalForm">
            <div class = "modalContent articleModal" data-type = "${article.pwd}">
              <button type = "button" class = "article-close-btn closeBtn">X</button>
              <div class = "article-header">
                <h2 class = "articleTitle">${article.title}</h2>
                <p class = "createdDate">${article.upload_date}</p>
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
                      <td>${article.need_date}</td>
                    </tr>
                    <tr>
                      <th class = "subject">인원수</th>
                      <td>${article.people_number}명</td>
                    </tr>
                    <tr>
                      <th class = "subject">분야</th>
                      <td>${article.part}</td>
                    </tr>
                    <tr>
                      <th class = "subject">장소</th>
                      <td>${article.address}</td>
                    </tr>
                  </tbody>
                </table>
                <div class = "article-detail">
                  <p>${article.detail}</p>
                </div>
              </div>
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
      }
      this.event()
    }
    catch (error) {
      console.log(error);
    }
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if (sel.el('.articleTemplate').classList.contains('open') && e.key === 'Escape') {
        func.removeClass('.articleTemplate')
      }
    })
  },

  editBtnEvent() {
    sel.el('.editBtn').addEventListener('click', function () {
      location.href = `passwordCheck.html`
    })
  }
}