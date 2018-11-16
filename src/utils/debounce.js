
export const simpleDebounce = (cb, wait) => {
  let timeout
  const debounced = function () {
    const context = this
    const args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb.apply(context, args)
    }, wait)
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
