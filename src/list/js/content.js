import { sel } from "../../common.js";

export default {
  init() {
    console.log('content');
    this.contentTemplate()
    this.event()
  },
  event() {
    this.btnEvent('.writing-btn', this.addClass)
    this.btnEvent('.content-close-btn', this.removeClass)
    this.escEvent()
  },

  contentTemplate() {
    let template = `
    <section class = "contentTemplate modalForm">
      <div class = "modalContent contentModal">
      <button type = "button" class = "content-close-btn closeBtn">X</button>
      게시글
      </div>
    </section>
    `
    sel.el('.signinTemplate').insertAdjacentHTML('afterend',template)
  },

  addClass() {
    sel.el('.contentTemplate').classList.add('open');
  },

  removeClass() {
    sel.el('.contentTemplate').classList.remove('open')
  },

  btnEvent(buttonClass, funcName) {
    sel.el(buttonClass).addEventListener('click', funcName)
  },

  escEvent() {
    window.addEventListener('keyup', e => {
      if (sel.el('.contentTemplate').classList.contains('open') && e.key === 'Escape') {
        this.removeClass()
      }
    })
  },
}