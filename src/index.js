import { DragScrolling } from "./main/scroll-drag"

/**
 * 
 * @param {Element} parent the parent element to search for scrollable elements.
 * @param {string} parentSelector the selector to search for scrollable elements. 
 * @returns {Array<DragScrolling>} an array of DragScrolling instances.
 * @description This function sets up the drag scrolling functionality for all elements that match the selector.
 */
const setupScrolling = function (parent = document, parentSelector = '[data-scroll]') {
  const scrollers = parent.querySelectorAll(parentSelector)
  return [...scrollers].map(x => new DragScrolling(x))
}

export {
  DragScrolling,
  setupScrolling
}