// Create variables targetting the relevant DOM elements here 👇

// Cover Variables
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');

// Buttons
var homeButton = document.querySelector('.home-button');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var showNewCoverButton = document.querySelector('.random-cover-button');
var makeCustomCoverButton = document.querySelector('.make-new-button');
var makeUserBookButton = document.querySelector('.create-new-book-button');

// Page Sections
var homeSection = document.querySelector('.home-view');
var savedSection = document.querySelector('.saved-view');
var customSection = document.querySelector('.form-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

// Input Fields

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTagline1 = document.querySelector('.user-desc1');
var userTagline2 = document.querySelector('.user-desc2');


// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇

showNewCoverButton.addEventListener('click', displayRandomCover);

makeCustomCoverButton.addEventListener('click', showCustomPage);

viewSavedButton.addEventListener('click', showSavedPage);

homeButton.addEventListener('click', showHomePage);

makeUserBookButton.addEventListener('click', makeUserBook);

saveButton.addEventListener('click', saveCover);

savedCoversSection.addEventListener('dblclick', removeCoverFromSaved);

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
  currentCover = createRandomCover();
  image.setAttribute('src', currentCover.cover);
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function showCustomPage() {
  homeButton.classList.remove('hidden');
  saveButton.classList.add('hidden');
  showNewCoverButton.classList.add('hidden');
  homeSection.classList.add('hidden');
  savedSection.classList.add('hidden')
  customSection.classList.remove('hidden');
  makeUserBookButton.setAttribute('type', 'button');
}

function showSavedPage() {
  homeButton.classList.remove('hidden');
  saveButton.classList.add('hidden');
  showNewCoverButton.classList.add('hidden');
  homeSection.classList.add('hidden');
  customSection.classList.add('hidden');
  savedSection.classList.remove('hidden');
  displaySavedCovers();
}

function showHomePage() {
  homeButton.classList.add('hidden');
  saveButton.classList.remove('hidden');
  showNewCoverButton.classList.remove('hidden');
  customSection.classList.add('hidden');
  savedSection.classList.add('hidden');
  homeSection.classList.remove('hidden');
}

function makeUserBook() {
  currentCover = new Cover(userCover.value, userTitle.value, userTagline1.value, userTagline2.value);
  image.setAttribute('src', currentCover.cover);
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1, currentCover.tagline2);
  showHomePage();
}

function displaySavedCovers() {
  var concattedCovers = '';
  for (var i = 0; i < savedCovers.length; i++) {
    concattedCovers = concattedCovers + `    
    <section class="mini-cover" id="${savedCovers[i].id}">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>
    `;
  }
  savedCoversSection.innerHTML = concattedCovers;  
}

function saveCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      return;
    }
  }
  savedCovers.push(currentCover);
}

function removeCoverFromSaved(event) {
 
  var elementToRemove;

  if (event.target.classList.contains('saved-covers-section')) {
    return;
  }
  
  if (event.target.classList.contains('tagline-1') || event.target.classList.contains('tagline-2')) {
    elementToRemove = event.target.parentElement.parentElement;
  } else {
    elementToRemove = event.target.parentElement;
  }

  elementToRemove.remove();
  
  for (var i = 0; i < savedCovers.length; i++) {
    if (elementToRemove.id === savedCovers[i].id.toString()) {
      savedCovers.splice(i, 1);
      console.log(`It's working!`);
    }
  }
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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


// function makeUserBook() {
//   image.setAttribute('src', userCover.value);
//   coverTitle.innerText = userTitle.value;
//   tagline1.innerText = userTagline1.value;
//   tagline2.innerText = userTagline2.value;
//   userBook = new Cover(userCover.value, userTitle.value, userTagline1.value, userTagline2.value);
//   console.log(userBook);
//   showHomePage();
// }