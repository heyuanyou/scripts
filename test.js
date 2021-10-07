// ==UserScript==
// @name         Test1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *
// @icon         https://www.google.com/s2/favicons?domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setTimeout(function() {
        alert("hello world!");
    }, 60);
})();
