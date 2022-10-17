/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('name-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const nameDisplay = document.getElementById('name-display');
const climateImage = document.getElementById('climate-display');
const architectureImage = document.getElementById('architecture-display');
const builderArticle = document.getElementById('builder-article');
const attractionInput = document.getElementById('attraction-input');
const addButton = document.getElementById('add-button');
const attractionList = document.getElementById('attraction-list');

/* State */
const city = {
    name: 'Oblivion',
    climate: 'ugly',
    architecture: 'boxes',
    attractions: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayAttractions();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

/* Display Functions */

function displayControls() {
    nameInput.value = city.name;
    climateSelect.value = city.climate;
    architectureSelect.value = city.architecture;
}

function displayCity() {
    builderArticle.classList.value = '';
    builderArticle.classList.add(city.climate, city.architecture);
    nameDisplay.textContent = city.name;
    climateImage.src = 'assets/' + city.climate + '.png';
    climateImage.alt = city.climate;
    architectureImage.src = 'assets/' + city.architecture + '.png';
    architectureImage.alt = city.architecture;
}

// (don't forget to call any display functions you want to run on page load!)
// clear the list

function displayAttractions() {
    attractionList.innerHTML = '';

    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

addButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    city.attractions.push(attraction);
    displayAttractions();
    attractionInput.value = '';
});
displayControls();
displayCity();
