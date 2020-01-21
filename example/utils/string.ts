export function copyText(text: string) {
  const input = document.createElement('input')
  input.value = text
  input.style.cssText = 'position:fixed;top:0;left:0;opacity:0;z-index:-99;'
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
