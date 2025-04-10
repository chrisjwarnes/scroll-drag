
/**
 * Set the cursor for an element based on its scrolling state.
 * @param {Element} elem the element to set the cursor for.
 * @param {boolean} scrolling true if the element is scrolling, false otherwise. 
 */
export function setCursor (elem, scrolling = false) {
  if (scrolling) {
    setScrollingCursor(elem)
  } else {
    setNotScrollingCursor(elem)
  }
}

/**
 * Set the cursor for a scrolling element.
 * @param {Element} elem the element to set the cursor for.
 */
function setScrollingCursor(elem) {
  elem.style.cursor = `grabbing`
  elem.style.userSelect = 'none'
}

/**
 * Set the cursor for a non scrolling element.
 * @param {Element} elem the element to set the cursor for.
 */
function setNotScrollingCursor(elem) {
  elem.style.cursor = `grab`
  elem.style.removeProperty('user-select')
}