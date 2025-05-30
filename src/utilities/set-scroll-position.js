import { Position } from "../main/position"

/**
 * Set the scroll position of an element based on the mouse movement.
 * @param {Element} elem the element to scroll.
 * @param {MouseEvent} e the mouse event.
 * @param {Position} pos the position object containing the initial position of the mouse and the element.
 */
export function setScrollPosition(elem, e, pos) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x
  const dy = e.clientY - pos.y
  
  // Scroll the element
  elem.scrollTop = pos.top - dy
  elem.scrollLeft = pos.left - dx
}