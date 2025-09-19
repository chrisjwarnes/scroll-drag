"use strict";

exports.__esModule = true;
exports.setCursor = setCursor;
/**
 * Set the cursor for an element based on its scrolling state.
 * @param {Element} elem the element to set the cursor for.
 * @param {boolean} scrolling true if the element is scrolling, false otherwise. 
 */
function setCursor(elem, scrolling) {
  if (scrolling === void 0) {
    scrolling = false;
  }
  if (scrolling) {
    setScrollingCursor(elem);
  } else {
    setNotScrollingCursor(elem);
  }
}

/**
 * Set the cursor for a scrolling element.
 * @param {Element} elem the element to set the cursor for.
 */
function setScrollingCursor(elem) {
  elem.setAttribute('data-scroll', 'scrolling');
}

/**
 * Set the cursor for a non scrolling element.
 * @param {Element} elem the element to set the cursor for.
 */
function setNotScrollingCursor(elem) {
  elem.setAttribute('data-scroll', '');
}