import { Position } from "../main/position"

const delta = 6 // the delta to check against

/**
 * Check if the mouse is dragging based on the initial position and the delta
 * @param {MouseEvent} e the mouse event
 * @param {Position} pos the position object
 * @returns {boolean} true if the mouse is dragging, false otherwise
 */
export function isDragging (e, pos) {
  const diffX = Math.abs(e.pageX - pos.startX)
  const diffY = Math.abs(e.pageY - pos.startY)

  if (diffX < delta && diffY < delta) {
    // this is a click not a drag
    return false
  } else {
    return true
  }
}