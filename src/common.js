export { sel, func, com }

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

let com = {
  getList() {
    const response = fetch('http://15.164.62.156:8888/list/?format=json')
    return response.then(res => res.json())
  },
}