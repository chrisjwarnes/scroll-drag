"use strict";

exports.__esModule = true;
exports.Position = void 0;
/**
 * @class Position
 * This class represents the position of an element and the mouse.
 */
class Position {
  /**
   * Constructor for the Position class.
   * @param {number} left - The left position of the element.
   * @param {number} top - The top position of the element.
   * @param {number} x - The current x position of the mouse.
   * @param {number} y - The current y position of the mouse.
   * @param {number} startX - The starting x position of the mouse.
   * @param {number} startY - The starting y position of the mouse.
   */
  constructor(left, top, x, y, startX, startY) {
    if (left === void 0) {
      left = 0;
    }
    if (top === void 0) {
      top = 0;
    }
    if (x === void 0) {
      x = 0;
    }
    if (y === void 0) {
      y = 0;
    }
    if (startX === void 0) {
      startX = 0;
    }
    if (startY === void 0) {
      startY = 0;
    }
    this.top = top, this.left = left, this.x = x, this.y = y, this.startX = startX, this.startY = startY;
  }

  /**
   * 
   * @param {Element} elem the current element.
   * @param {MouseEvent} e the mouse event.
   * @returns {void}
   */
  setPosition(elem, e) {
    this.left = elem.scrollLeft;
    this.top = elem.scrollTop;
    this.x = e.clientX;
    this.y = e.clientY;
    this.startX = e.pageX;
    this.startY = e.pageY;
  }
}
exports.Position = Position;