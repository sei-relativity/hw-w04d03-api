"use strict";

//  Create a button to start the action
const button = document.querySelector("button");

//  Call the Rick and Morty's character API
const apiUrl = "https://rickandmortyapi.com/api/character/";

//  Getting the Characters Function
const getRickAndMorty = () => {
  //  A loop to get the first 5 characters by ID
  for (let i = 1; i <= 5; i++) {
    //  Create an image element to show character pictures
    const img = document.createElement("img");
    //  Create a header2 element to show character name
    const charName = document.createElement("h2");

    //  axios to get objects from the api
    axios({
      //  URL string with the ID attached as i string
      url: `${apiUrl}${i}`,
      method: "get"
    })
      //  promise to get the character's image and name
      .then(res => {
        //  get and assign the source image
        img.src = res.data.image;
        //  get and assign the name
        charName.innerText = res.data.name;
        //  add a new line to the DOM
        document.body.appendChild(document.createElement("br"));
        //  add the character's name to the DOM
        document.body.appendChild(charName);
        //  add the character's image to the DOM
        document.body.appendChild(img);
      })
      //    Error handling
      .catch(err => {
        console.log(err);
      });
  }
};
//  Add and event listner for the function
button.addEventListener("click", getRickAndMorty);
