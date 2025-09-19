/**
 * @class Position
 * This class represents the position of an element and the mouse.
 */
export class Position {
    /**
     * Constructor for the Position class.
     * @param {number} left - The left position of the element.
     * @param {number} top - The top position of the element.
     * @param {number} x - The current x position of the mouse.
     * @param {number} y - The current y position of the mouse.
     * @param {number} startX - The starting x position of the mouse.
     * @param {number} startY - The starting y position of the mouse.
     */
    constructor(left?: number, top?: number, x?: number, y?: number, startX?: number, startY?: number);
    top: number;
    left: number;
    x: number;
    y: number;
    startX: number;
    startY: number;
    /**
     *
     * @param {Element} elem the current element.
     * @param {MouseEvent} e the mouse event.
     * @returns {void}
     */
    setPosition(elem: Element, e: MouseEvent): void;
}
//# sourceMappingURL=position.d.ts.map