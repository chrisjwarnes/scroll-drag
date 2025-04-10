"use strict";

exports.__esModule = true;
exports.isOverflown = isOverflown;
/**
 * Check if an element is overflown (i.e., its content is larger than its container).
 * @param {Element} element - The element to check for overflow.
 * @returns {boolean} - Returns true if the element is overflown, false otherwise.
 */
function isOverflown(element) {
  // work out the width of the children including the gap and padding
  var computedStyle = getComputedStyle(element);
  var gap = parseFloat(computedStyle.gap) || 0;
  var padding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
  var childWidth = 0;
  element.children.forEach(child => {
    childWidth += child.offsetWidth + gap;
  });

  // and compare it to the width of the element itself
  return element.clientWidth - padding <= childWidth;
}