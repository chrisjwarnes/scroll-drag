/**
 * Class to handle drag scrolling of an element.
 */
export class DragScrolling {
    /**
     * Constructor for the DragScrolling class.
     * @param {Element} elem the element to be scrolled.
     */
    constructor(elem: Element);
    isDrag: boolean | undefined;
    elem: Element | undefined;
    pos: Position | undefined;
    evRestorer: any;
    eventsAttached: boolean | undefined;
    /**
     * Initialize the drag scrolling functionality.
     * This function checks if the element is overflown and attaches the necessary event listeners.
     */
    init(): void;
    /**
     * Handle the click event.
     * This function prevents the default action if the element is being dragged.
     * @param {MouseEvent} e the mouse event.
     */
    clickHandler(e: MouseEvent): void;
    /**
     * Handle the mouse down event.
     * This function sets the cursor to grabbing and initializes the position of the mouse.
     * @param {MouseEvent} e the mouse event.
     */
    mouseDownHandler(e: MouseEvent): void;
    mmH: ((e: MouseEvent) => void) | undefined;
    muH: ((e: MouseEvent) => void) | undefined;
    /**
     * Handle the mouse move event.
     * This function sets the scroll position of the element based on the mouse movement.
     * @param {MouseEvent} e the mouse event.
     */
    mouseMoveHandler(e: MouseEvent): void;
    /**
     * Handle the mouse up event.
     * This function resets the cursor and checks if the mouse was dragged.
     * @param {MouseEvent} e the mouse event.
     */
    mouseUpHandler(e: MouseEvent): void;
}
import { Position } from './position';
//# sourceMappingURL=scroll-drag.d.ts.map