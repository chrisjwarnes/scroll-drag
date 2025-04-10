"use strict";

exports.__esModule = true;
exports.DragScrolling = void 0;
var _deviceDetection = require("../utilities/device-detection");
var _ready = require("../utilities/ready");
var _isOverflown = require("../utilities/is-overflown");
var _setCursor = require("../utilities/set-cursor");
var _isDragging = require("../utilities/is-dragging");
var _position = require("./position");
var _setScrollPosition = require("../utilities/set-scroll-position");
/**
 * Class to handle drag scrolling of an element.
 */
class DragScrolling {
  /**
   * Constructor for the DragScrolling class.
   * @param {Element} elem the element to be scrolled.
   */
  constructor(elem) {
    if ((0, _deviceDetection.isTouchDevice)() && !_deviceDetection.desktopMedia.matches) {
      elem.style.overflow = 'auto';
      return elem;
    }
    this.isDrag = false;
    this.elem = elem;
    this.pos = new _position.Position();
    this.evRestorer = null;
    this.eventsAttached = false;
    (0, _ready.documentReady)().then(() => {
      this.init();
    });
    document.addEventListener('loaded', () => {
      this.init();
    });
  }

  /**
   * Initialize the drag scrolling functionality.
   * This function checks if the element is overflown and attaches the necessary event listeners.
   */
  init() {
    if ((0, _isOverflown.isOverflown)(this.elem) && !this.eventsAttached) {
      (0, _setCursor.setCursor)(this.elem);
      this.elem.addEventListener('mousedown', e => this.mouseDownHandler(e), {
        passive: true
      });
      this.elem.addEventListener('click', e => this.clickHandler(e), false);
      this.eventsAttached = true;
    }
  }

  /**
   * Handle the click event.
   * This function prevents the default action if the element is being dragged.
   * @param {MouseEvent} e the mouse event.
   */
  clickHandler(e) {
    if (this.isDrag) {
      e.preventDefault();
    }
  }

  /**
   * Handle the mouse down event.
   * This function sets the cursor to grabbing and initializes the position of the mouse.
   * @param {MouseEvent} e the mouse event.
   */
  mouseDownHandler(e) {
    (0, _setCursor.setCursor)(this.elem, true);
    this.pos.setPosition(this.elem, e);
    this.mmH = this.mouseMoveHandler.bind(this);
    this.muH = this.mouseUpHandler.bind(this);
    document.addEventListener('mousemove', this.mmH, {
      passive: true
    });
    document.addEventListener('mouseup', this.muH, {
      passive: true
    });
  }

  /**
   * Handle the mouse move event.
   * This function sets the scroll position of the element based on the mouse movement.
   * @param {MouseEvent} e the mouse event.
   */
  mouseMoveHandler(e) {
    (0, _setScrollPosition.setScrollPosition)(this.elem, e, this.pos);
  }

  /**
   * Handle the mouse up event.
   * This function resets the cursor and checks if the mouse was dragged.
   * @param {MouseEvent} e the mouse event.
   */
  mouseUpHandler(e) {
    (0, _setCursor.setCursor)(this.elem);
    this.isDrag = (0, _isDragging.isDragging)(e, this.pos);
    document.removeEventListener('mousemove', this.mmH);
    document.removeEventListener('mouseup', this.muH);
  }
}
exports.DragScrolling = DragScrolling;