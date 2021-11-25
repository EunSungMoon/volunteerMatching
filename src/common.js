export { sel }

let sel = {
  el: selector => document.querySelector(selector),
  elAll: selector => document.querySelectorAll(selector)
}