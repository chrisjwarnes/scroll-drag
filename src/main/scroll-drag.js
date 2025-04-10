import { isTouchDevice, desktopMedia } from '../utilities/device-detection'
import { documentReady } from '../utilities/ready'
import { isOverflown } from '../utilities/is-overflown'
import { setCursor } from '../utilities/set-cursor'
import { isDragging } from '../utilities/is-dragging'
import { Position } from './position'
import { setScrollPosition } from '../utilities/set-scroll-position'

/**
 * Class to handle drag scrolling of an element.
 */
 export class DragScrolling {
  /**
   * Constructor for the DragScrolling class.
   * @param {Element} elem the element to be scrolled.
   */
  constructor (elem) {
    if (isTouchDevice() && !desktopMedia.matches) {
      elem.style.overflow = 'auto'
      return elem
    }

    this.isDrag = false
    this.elem = elem
    this.pos = new Position()
    this.evRestorer = null
    this.eventsAttached = false

    documentReady().then(() => {
      this.init()
    })

    document.addEventListener('loaded', () => {
      this.init()
    })
  }

  /**
   * Initialize the drag scrolling functionality.
   * This function checks if the element is overflown and attaches the necessary event listeners.
   */
  init () {
    if (isOverflown(this.elem) && !this.eventsAttached) {
      setCursor(this.elem)

      this.elem.addEventListener('mousedown', e => this.mouseDownHandler(e), { passive: true })
      this.elem.addEventListener('click', (e) => this.clickHandler(e), false)
      this.eventsAttached = true
    }
  }

  /**
   * Handle the click event.
   * This function prevents the default action if the element is being dragged.
   * @param {MouseEvent} e the mouse event.
   */
  clickHandler (e) {
    if (this.isDrag) {
      e.preventDefault()
    }
  }

  /**
   * Handle the mouse down event.
   * This function sets the cursor to grabbing and initializes the position of the mouse.
   * @param {MouseEvent} e the mouse event.
   */
  mouseDownHandler (e) {
    setCursor(this.elem, true)
    this.pos.setPosition(this.elem, e)

    this.mmH = this.mouseMoveHandler.bind(this)
    this.muH = this.mouseUpHandler.bind(this)

    document.addEventListener('mousemove', this.mmH, { passive: true })
    document.addEventListener('mouseup', this.muH, { passive: true })
  }

  /**
   * Handle the mouse move event.
   * This function sets the scroll position of the element based on the mouse movement.
   * @param {MouseEvent} e the mouse event.
   */
  mouseMoveHandler (e) {
    setScrollPosition(this.elem, e, this.pos)
  }

  /**
   * Handle the mouse up event.
   * This function resets the cursor and checks if the mouse was dragged.
   * @param {MouseEvent} e the mouse event.
   */
  mouseUpHandler (e) {
    setCursor(this.elem)
    this.isDrag = isDragging(e, this.pos)

    document.removeEventListener('mousemove', this.mmH)
    document.removeEventListener('mouseup', this.muH)
  }
}
