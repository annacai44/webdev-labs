/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
function desert_theme () {
      document.body.className = "desert";
}
function default_theme () {
      document.body.className = "default";
}
function ocean_theme () {
      document.body.className = "ocean";
}
function high_contrast_theme () {
      document.body.className = "high-contrast";
}
document.querySelector("#default").addEventListener('click', default_theme);
document.querySelector("#ocean").addEventListener('click', ocean_theme);
document.querySelector("#desert").addEventListener('click', desert_theme);
document.querySelector("#high-contrast").addEventListener('click', high_contrast_theme);