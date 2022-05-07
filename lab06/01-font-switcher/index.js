const makeBigger = () => {
   
   let ids = ['.content', 'header'];
   ids.forEach(id => {
   let element = document.querySelector(id); 
   let fontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
   let fontSizeNum = parseInt(fontSize);
   element.style.fontSize = (fontSizeNum + 2) + 'px';
   }
   
   
   );
};


const makeSmaller = () => {
   let ids = ['.content', 'header'];
   ids.forEach(id => {
   let element = document.querySelector(id); 
   let fontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
   let fontSizeNum = parseInt(fontSize);
   element.style.fontSize = (fontSizeNum - 2) + 'px';
   }
   
   
   );
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
