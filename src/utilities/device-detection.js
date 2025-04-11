
/**
 * Checks if the device is a mobile device.
 * @returns {boolean} - True if the device is mobile, false otherwise.
 */
export function isTouchDevice() {
  return isTouchDeviceLikelyMobile()
}

function isTouchDeviceLikelyMobile() {
  const touchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const uaMobile = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);

  return touchCapable && (isCoarse || uaMobile);
}

/**
 * Discover whether the device is a desktop or mobile device.
 * @returns {MediaQueryList} - Media query list for devices less than 1200px wide.
 */
export function desktopMedia() {
  return window.matchMedia('(min-width: 1200px)')
}

