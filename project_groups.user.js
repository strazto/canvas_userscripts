// ==UserScript==
// @name         Canvas Group Helper
// @namespace    http://straz.to/
// @version      0.1
// @description  Floats the "Unassigned Students" box to the left, so it persists as you scroll through the groups.
// @author       Matthew Strasiotto
// @include      /https?://.*\.(beta|test)\.instructure\.com/courses/\d+/groups/
// @include      *://canvas.sydney.edu.au/courses/*/groups*
// @icon         https://www.google.com/s2/favicons?domain=instructure.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const homepage  = "https://github.com/matthewstrasiotto/canvas_userscripts";
    const badge_src = "https://img.shields.io/github/stars/matthewstrasiotto/canvas_userscripts?style=social"
    const script_info_html = `
        <h4>${GM.info.script.name} v${GM.info.script.version} <a href="${homepage}"><img src="${badge_src}"></a></h4>
        `;

    const injected_stylesheet = `
        .unassigned-students {
           position: fixed;
           top: 20%;
           right: 0;
        }

        .row-fluid .groups {
           margin-left: 0;
        }
    `;

    GM_addStyle(injected_stylesheet);

    const script_info = document.createElement("div");
    script_info.innerHTML = script_info_html;

    const elem = document.querySelector(".unassigned-students");

    elem.insertBefore(script_info, elem.firstElementChild);


})();