"use strict";

exports.__esModule = true;
exports.setScrollPosition = setScrollPosition;
var _position = require("../main/position");
/**
 * Set the scroll position of an element based on the mouse movement.
 * @param {Element} elem the element to scroll.
 * @param {MouseEvent} e the mouse event.
 * @param {Position} pos the position object containing the initial position of the mouse and the element.
 */
function setScrollPosition(elem, e, pos) {
  // How far the mouse has been moved
  var dx = e.clientX - pos.x;
  var dy = e.clientY - pos.y;

  // Scroll the element
  elem.scrollTop = pos.top - dy;
  elem.scrollLeft = pos.left - dx;
}