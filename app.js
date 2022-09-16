/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('header');
const aestheticSelect = document.getElementById('aesthetic-select');
const vibeSelect = document.getElementById('vibe-select');
const nameDisplay = document.getElementById('name-display');
const aestheticImage = document.getElementById('aesthetic-image');
const vibeImage = document.getElementById('vibe-image');
const builderArticle = document.getElementById('builder-article');
const placeInput = document.getElementById('place-input');
const addButton = document.getElementById('add-button');
const attractionList = document.getElementById('attraction-list');

/* State */
const city = {
    name: 'Oblivion',
    aesthetic: 'ugly',
    vibe: 'boxes',
    attractions: [],
};
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});
/* Events */

/* Display Functions */
function displayPlaces() {
    // clear the list
    attractionList.innerHTML = '';

    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}
// (don't forget to call any display functions you want to run on page load!)
