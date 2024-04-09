// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

// console.log("GOODDDDDDDDDDDDDDDDDDDDDDDD SCROPT");
const firstElement = document.querySelector(".click-first");
firstElement.addEventListener("click", (e) => {
  console.log(e);
  window.scrollTo(0, 1000);
});
const secondElement = document.querySelector(".click-second");
secondElement.addEventListener("click", (e) => {
  window.scrollTo(0, 2500);
});
const thirdElement = document.querySelector(".click-third");
thirdElement.addEventListener("click", (e) => {
  window.scrollTo(0, 3000);
});
const forthElement = document.querySelector(".click-forth");
forthElement.addEventListener("click", (e) => {
  window.scrollTo(0, 4000);
});
