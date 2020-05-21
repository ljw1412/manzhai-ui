export function noop() {}

export function typeOf(obj: any) {
  const toString = Object.prototype.toString
  const map: any = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Error]': 'error'
  }
  return map[toString.call(obj)]
}

// deepCopy
export function deepCopy(data: any) {
  const t = typeOf(data)
  let o: any

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export function throttle(fn: Function, delay: number = 0) {
  let last = 0
  return function() {
    let curr = +new Date()
    if (curr - last > delay) {
      // @ts-ignore
      fn.apply(this, arguments)
      last = curr
    }
  }
}

export function debounce(fn: Function, wait: number = 0) {
  let timeout: number
  return function() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.call(this, arguments)
    }, wait)
  }
}

export function isFullScreen() {
  return (
    /* prettier-ignore */
    // @ts-ignore
    document.fullScreen || document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen || false
  )
}

export function fullScreen(isFullScreen: boolean = true) {
  if (isFullScreen) {
    const el = document.documentElement
    /* prettier-ignore */
    // @ts-ignore
    const requestFullscreen = el.requestFullscreen || el.mozRequestFullScreen || el.webkitRequestFullscreen || el.msRequestFullscreen || noop
    requestFullscreen.call(el)
  } else {
    /* prettier-ignore */
    // @ts-ignore
    const exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen
    exitFullscreen.call(document)
  }
}
