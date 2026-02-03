"use strict";
var $ = function(id) {
  return document.getElementById(id);
}
var printPage = function() {
  window.print();
}
window.onload = function() {
  $("printBtn").onclick = printPage;
};
