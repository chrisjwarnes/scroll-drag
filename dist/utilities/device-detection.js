"use strict";

exports.__esModule = true;
exports.desktopMedia = desktopMedia;
exports.isTouchDevice = isTouchDevice;
/**
 * Checks if the device is a mobile device.
 * @returns {boolean} - True if the device is mobile, false otherwise.
 */
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

/**
 * Discover whether the device is a desktop or mobile device.
 * @returns {MediaQueryList} - Media query list for devices less than 1200px wide.
 */
function desktopMedia() {
  return window.matchMedia('(min-width: 1200px)');
}