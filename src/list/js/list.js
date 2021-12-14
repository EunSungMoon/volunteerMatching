import { func, sel, com } from "../../common.js"
export default {
  init() {
    this.mainTemplate()
    this.showList()
    this.event()
  },
  event() {
    this.writeBtnEvent()
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

  writeBtnEvent() {
    sel.el('.writing-btn').addEventListener('click', function () {
      location.href = `articleForm.html`
    })
  },

  async showList() {
    let lists;
    try {
      lists = await com.getList()
      for (const list of lists) {
        let template = `
            <li class="=col-6 list" data-type= "${list.pwd}">
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
      }

      this.showDetail() //이벤트 순서... 나중에 더 알아봅시다
    }
    catch (error) {
      console.log(error);
    }
  },

  showDetail() {
    let lists = sel.elAll('.list')
    for (const list of lists) {
      list.addEventListener('click', function (e) {
        func.addClass('.articleTemplate')
        console.log(e.currentTarget.dataset.type);
      })
    }
  },
}