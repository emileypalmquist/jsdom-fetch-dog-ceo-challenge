console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allDogBreeds

document.addEventListener('DOMContentLoaded', function(e){
  fetchImage()
  fetchDogs()
  dropDown()
})

function fetchImage() {
  fetch(imgUrl)
    // .then (function(response) {
    //   return response.json();
    // })
    .then (response => response.json())
    // .then (function(json) {
    //   addImage(json)
    // })
    .then (json => addImage(json));
};

function addImage(json) {
  const imageContainer = document.getElementById('dog-image-container');
  json.message.map(e => {
    const imageTag = document.createElement('img')
    imageTag.src = e 
    imageContainer.appendChild(imageTag)
  });
};

function fetchDogs() {
  fetch(breedUrl)
    .then (response => response.json())
    .then (json => {
      allDogBreeds = Object.keys(json.message)
      addDogBreeds(allDogBreeds)
    })
    ;
};
  
function addDogBreeds(breeds) {
  const dogsContainer = document.getElementById('dog-breeds');
  dogsContainer.innerHTML = ''
  breeds.map (e => {
    const listTag = document.createElement('li')
    listTag.textContent = e 
    dogsContainer.appendChild(listTag)
    listTag.addEventListener('click', function(e) {
      e.target.style.color = "Red"
    })
  })
  
};

function dropDown()  {
  const breedDropdown = document.getElementById('breed-dropdown')
  breedDropdown.addEventListener('change', function(e){
   const selectedLetter = breedDropdown[e.target.selectedIndex].value
  let filteredBreeds = allDogBreeds.filter(breed => breed[0] == selectedLetter)
  
  addDogBreeds(filteredBreeds)
  })
}

