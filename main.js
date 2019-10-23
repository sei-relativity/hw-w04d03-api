// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

'use strict';

// Assign variables for elements
const
  rickImg    = document.createElement('img'),
  mortyImg   = document.createElement('img'),
  summerImg  = document.createElement('img'),
  jerryImg   = document.createElement('img'),
  bethImg    = document.createElement('img'),
  infoButton = document.querySelector('#random'),
  imgsDiv    = document.querySelector('.container'),
  apiUrl     = 'https://rickandmortyapi.com/api/character/';

// Click event call back function
const getRickAndMorty = () => {

  // Axios properties
  axios({
    url   : apiUrl,
    method: 'get',
  })

  // Then promise steps
  .then(response => {
    console.log(response);

    const array = response.data['results'].slice(0, 5);

    array.find(character => {

      const
        figure     = document.createElement('figure'),
        figCaption = document.createElement('ficaption');

      // Check each character based on their id
      switch (character.id) {
        case 1:
          figCaption.textContent = character.name;
          rickImg.src            = character.image;
          figure.appendChild(figCaption);
          figure.appendChild(rickImg);
          imgsDiv.appendChild(figure);
          console.log(character.id, character.name, rickImg);
        break;
        case 2:
          figCaption.textContent = character.name;
          mortyImg.src           = character.image;
          figure.appendChild(figCaption);
          figure.appendChild(mortyImg);
          imgsDiv.appendChild(figure);
          console.log(character.id, character.name, mortyImg);
        break;
        case 3:
          figCaption.textContent = character.name;
          summerImg.src          = character.image;
          figure.appendChild(figCaption);
          figure.appendChild(summerImg);
          imgsDiv.appendChild(figure);
          console.log(character.id, character.name, summerImg);
        break;
        case 4:
          figCaption.textContent = character.name;
          jerryImg.src           = character.image;
          figure.appendChild(figCaption);
          figure.appendChild(jerryImg);
          imgsDiv.appendChild(figure);
          console.log(character.id, character.name, jerryImg);
        break;
        case 5:
          figCaption.textContent = character.name;
          bethImg.src            = character.image;
          figure.appendChild(figCaption);
          figure.appendChild(bethImg);
          imgsDiv.appendChild(figure);
          console.log(character.id, character.name, bethImg);
        break;
      }
    });

    // Remove the button event listener
    infoButton.removeEventListener('click', getRickAndMorty);
  })

  // Catch if htere is an error with the process
  .catch(console.error());
}

// Add event listener to the button
infoButton.addEventListener('click', getRickAndMorty);