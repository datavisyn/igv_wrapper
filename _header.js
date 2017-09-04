//see https://github.com/umdjs/umd/blob/master/templates/returnExports.js

// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.ivg = factory(root.jQuery);
  }
}(this, function (jQuery) {
   var windowBak = window.jQuery;
   window.jQuery = jQuery;
   var $ = jQuery;

