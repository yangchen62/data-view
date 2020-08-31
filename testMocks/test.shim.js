//test.shim.js
global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
}