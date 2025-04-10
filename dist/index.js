"use strict";

exports.__esModule = true;
exports.setupScrolling = void 0;
var _scrollDrag = require("./main/scroll-drag");
/**
 * 
 * @param {Element} parent the parent element to search for scrollable elements.
 * @param {string} parentSelector the selector to search for scrollable elements. 
 * @returns {Array<DragScrolling>} an array of DragScrolling instances.
 * @description This function sets up the drag scrolling functionality for all elements that match the selector.
 */
var setupScrolling = exports.setupScrolling = function setupScrolling(parent, parentSelector) {
  if (parent === void 0) {
    parent = document;
  }
  if (parentSelector === void 0) {
    parentSelector = '[data-scroll]';
  }
  var scrollers = parent.querySelectorAll(parentSelector);
  return [...scrollers].map(x => new _scrollDrag.DragScrolling(x));
};