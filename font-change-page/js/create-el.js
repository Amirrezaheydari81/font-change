let body_org = document.getElementsByTagName("BODY")[0];
let body2 = document.getElementById("body2");
let head = document.getElementsByTagName('head')[0];

// let div1 = document.createElement("div");
// div1.classList.add("container", "text-center", "bg-danger", "w-25", "rounded-3", "position-absolute", "end-0", "bottom-0", "me-3", "mb-3");
// body.appendChild(div1);
// function selectElement(nameDiv, childNumber) {
//     return document.getElementsByTagName(nameDiv)[childNumber]
// }
// function createelement(el, classList, el_appendchild, el_value) {
//     let element = document.createElement(String(el));
//     // div.classList.add(classList);
//     element.className += classList;
//     element.innerText = el_value;
//     el_appendchild.appendChild(element);
//     // console.log("ok")
// }
// function createelementByid(el, classList, id_el, el_appendchild) {
//     let element = document.createElement(String(el));
//     // div.classList.add(classList);
//     element.className += classList;
//     element.id = id_el;
//     el_appendchild.appendChild(element);
//     // console.log("ok")
// }
// Functions
// createelement('div', 'container text-center bg-danger', body, '')
//          All Class add--------------appendChild
// createelement('div', 'container text-center', selectElement('div', '0'), '')
//                               function------tagname-index

function createelement(el, classList, el_value, el_appendchild) {
    let element = document.createElement(String(el));
    // div.classList.add(classList);
    element.className += classList;
    element.innerText = el_value;
    el_appendchild.appendChild(element);
    // console.log("ok")
}

function createelementA(el, classList, el_text, el_href, el_appendchild) {
    let element = document.createElement(String(el));
    // div.classList.add(classList);
    element.className += classList;
    element.innerText = el_text;
    element.href = el_href;
    el_appendchild.appendChild(element);
    // console.log("ok")
}

function createOption(appendChild, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.innerText = text;
    appendChild.appendChild(option);
}

function createHeadLinkCss(link_href) {
    let link = document.createElement('link');
    // div.classList.add(classList);
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = link_href;
    head.appendChild(link);
    // console.log("ok")
}

// Head add File
createHeadLinkCss("https://modules.clarotm.ir/font-change/css/bootstrap.css");
createHeadLinkCss("https://modules.clarotm.ir/font-change/css/style.css");
createHeadLinkCss("https://modules.clarotm.ir/font-change/css/fonts.css");
// Head add File
// All Div
let div_body2 = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div5_1 = document.createElement("div");
//All classname
div1.className = "justify-content-center";
div2.className = "row justify-content-center";
div3.className = "col-12 col-sm-12 my-2";
div4.className = "select";
div5.className = "row justify-content-center mt-3";
div_body2.className = "container text-center bg-danger w-25 rounded-3 position-absolute end-0 bottom-0 me-3 mb-3 shadow-lg";
// All id
div5_1.id = "link-div5-1";
div_body2.id = "body2";
// other Element create
createelement('h2', 'h4 text-white', 'سیستم فونت گذاری دلخواه', div3)
createelement('h2', 'h4 text-white', 'Custom font system', div3)
// ----All create select----- //
let el_select = document.createElement("select");
el_select.id = "fontSelect";
el_select.className = "rounded-3 shadow-lg newselect";
// ---------All Option in Select----------- //

createOption(el_select, "Defualt", "Defualt");
createOption(el_select, "estedad", "estedad");
createOption(el_select, "iransans", "iransans");

// ---------All Option in Select----------- //

// --------Element div5_1------------ //
createelementA('a', 'linkhref', 'User interface designer', 'https://codepen.io/raubaca', div5_1);
createelementA('a', 'linkhref', 'Coding and development', 'http://github.com/amirrezaheydari81', div5_1);
// --------Element div5_1------------ //
// All appendChild
body_org.appendChild(div_body2);
div_body2.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div2.appendChild(div4);
div2.appendChild(div5);
div5.appendChild(div5_1);
div4.appendChild(el_select)


// import Function
import { fontChange } from './fontChange.js';
// function fontchange
fontChange('iransans');
fontChange('estedad');


// Sample html code

// <!-- div1 -->
// <div class="container text-center bg-danger w-25 rounded-3 position-absolute end-0 bottom-0 me-3 mb-3">
//   <!-- div2 -->
//   <div class="row justify-content-center">
//     <!-- div3 -->
//     <div class="col-12 col-sm-12 my-2">
//       <h2 class="h4">سیستم فونت گذاری دلخواه</h2>
//       <h2 class="h4">Custom font system</h2>
//       <!-- div4 -->
//       <div class="select">
//         <select id="fontSelect">
//           <option value="danapro">danaPro</option>
//           <option value="iransans">iran Sans</option>
//         </select>
//       </div>
//       <!-- div5 -->
//       <div class="row justify-content-center mt-3">
//         <!-- div5/1 -->
//         <div class="col-12 col-sm-12">
//           <p><a href="https://codepen.io/raubaca" target="_blank">User interface designer</a> &nbsp; <a
//               href="https://codepen.io/raubaca" target="_blank">Coding and development</a></p>
//         </div>
//         <!-- End Div 5/1 -->
//         <!-- End div 5 -->
//       </div>
//       <!-- End div 4 -->
//     </div>
//     <!-- End div 3 -->
//   </div>
//   <!-- End div 2 -->
// </div>
// <!-- End div 1 -->
