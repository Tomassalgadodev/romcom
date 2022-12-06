// Create variables targetting the relevant DOM elements here 👇


var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');
var showNewCoverButton = document.querySelector('.random-cover-button');

console.log(coverTitle);

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

showNewCoverButton.addEventListener('click', displayRandomCover);

// Create your event handlers and other functions here 👇

displayRandomCover();

function createRandomCover() {
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];
  var randomImage = covers[getRandomIndex(covers)];
  var newCover = new Cover(randomImage, randomTitle, randomTag1, randomTag2);
  return newCover;
}

function displayRandomCover() {
  var newCover = createRandomCover();
  image.setAttribute('src', newCover.cover);
  coverTitle.innerText = newCover.title;
  tagline1.innerText = newCover.tagline1;
  tagline2.innerText = newCover.tagline2;
}

// function createNewCover() {
//   var randomTitle = titles[getRandomIndex(titles)];
//   var randomTag1 = descriptors[getRandomIndex(descriptors)];
//   var randomTag2 = descriptors[getRandomIndex(descriptors)];
//   var randomImage = covers[getRandomIndex(covers)];
//   image.setAttribute('src', randomImage);
//   coverTitle.innerText = randomTitle;
//   tagline1.innerText = randomTag1;
//   tagline2.innerText = randomTag2;
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
