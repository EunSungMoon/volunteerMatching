export { sel, func }

let sel = {
  el: selector => document.querySelector(selector),
  elAll: selector => document.querySelectorAll(selector)
}

let func = {
  addClass: selector => sel.el(selector).classList.add('open'),
  removeClass: selector => sel.el(selector).classList.remove('open'),

  addClassEvt(domClass, selector) {
    sel.el(domClass).addEventListener('click', function() {
      sel.el(selector).classList.add('open')
    })
  },
  removeClassEvt(domClass, selector) {
    sel.el(domClass).addEventListener('click', function() {
      sel.el(selector).classList.remove('open')
    })
  }
}