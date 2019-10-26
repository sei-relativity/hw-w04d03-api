'use strict';

// Assign variables 

const button = document.querySelector('button');
const apiUrl = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5]';

// Click event call back function
const getImg = () => {
   axios({
       url: apiUrl,
       method: 'GET'
   })
   .then( res => {
       console.log(res)
       // etration throught img and characters 
       res.data.forEach(charecter => {
           const name = document.createElement('p')
           // type the character name 
           name.innerText = charecter.name;
           document.body.appendChild(name)
       const img = document.createElement('img');
       const imgUrl = charecter.image;
       img.src = imgUrl;
       document.body.appendChild(img);
       });
   })
   .catch((error)=>{
       // fails massege
       console.log(error)
})}

// Add event listener to the button
button.addEventListener('click', getImg);