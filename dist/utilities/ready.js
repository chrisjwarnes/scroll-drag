"use strict";

exports.__esModule = true;
exports.documentReady = documentReady;
/**
 * Waits for the document to be fully loaded and parsed.
 * @returns {Promise} - A promise that resolves when the document is ready.
 */
function documentReady() {
  return new Promise(resolve => {
    if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        resolve();
      });
    }
  });
}