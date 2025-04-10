
/**
 * Check if an element is overflown (i.e., its content is larger than its container).
 * @param {Element} element - The element to check for overflow.
 * @returns {boolean} - Returns true if the element is overflown, false otherwise.
 */
export function isOverflown(element) {

    // work out the width of the children including the gap and padding
    const computedStyle = getComputedStyle(element)
    const gap = parseFloat(computedStyle.gap) || 0
    const padding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
    let childWidth = 0

    Array.from(element.children).forEach(child => {
      childWidth += (child.offsetWidth + gap)
    })

    // and compare it to the width of the element itself
    return (element.clientWidth - padding) <= childWidth
}