import { sel } from "../../common.js"
export default {
  init() {
    this.mainTemplate()
  },

  mainTemplate() {
    let template = `
      <div class = "container">
        <section>
          <ol></ol>
        </section>
      </div>
    `
    sel.el('#main').insertAdjacentHTML('afterbegin', template)
  },

  listTemplate() {
    let template = `
      <li>
        
      </li>
    `
  }
}