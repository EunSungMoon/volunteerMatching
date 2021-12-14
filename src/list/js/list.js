import { func, sel } from "../../common.js"
export default {
  init() {
    this.mainTemplate()
    // this.listTemplate()
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
        <button class = "writing-btn borderBtn"><i class="bi bi-pencil"></i>글쓰기</button>
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
        <h3 class = "h3">${list.title}</h3>
        <p class = "apply-state apply-ing">모집중</p>
      </div>
      <div class = "listContent">
        <p class = "field">${list.part}</p>
        <p class = "date"><i class="bi bi-calendar-date"></i>${list.need_date}</p>
        <p class = "headcount"><i class="bi bi-people"></i>${list.people_number}명</p>
        <p class = "address"><i class="bi bi-shop"></i>${list.address}</p>
      </div>
    </li>
  `
    sel.el('.contentWrap').insertAdjacentHTML('afterbegin', template)
  },

  writeBtnEvent() {
    sel.el('.writing-btn').addEventListener('click', function () {
      location.href = `articleForm.html`
    })
  },

  importJson() {
    fetch('http://15.164.62.156:8888/list/?format=json')
      .then(function (response) {
        return response.json()
      })
      .then(function (lists) {
        console.log(JSON.stringify(lists));
        console.log(lists.length);
        for (const list of lists) {
          let template = `
          <li class="=col-6 list">
            <div class = "listTitle">
              <h3 class = "h3">${list.title}</h3>
              <p class = "apply-state apply-ing">모집중</p>
            </div>
            <div class = "listContent">
              <p class = "field">${list.part}</p>
              <p class = "date"><i class="bi bi-calendar-date"></i>${list.need_date}</p>
              <p class = "headcount"><i class="bi bi-people"></i>${list.people_number}명</p>
              <p class = "address"><i class="bi bi-shop"></i>${list.address}</p>
            </div>
          </li>
        `
          sel.el('.contentWrap').insertAdjacentHTML('afterbegin', template)
          sel.el('.list').addEventListener('click', function () {
            func.addClass('.articleTemplate')
          })
        }
      })
  },
}