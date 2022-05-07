/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
function toggleDyslexiaMode() {
  document.body.className = "dyslexia-mode";
}
document.querySelector('#dyslexia-toggle').addEventListener('click', toggleDyslexiaMode);

