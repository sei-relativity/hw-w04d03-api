const button = document.querySelector("button");
const apiUrl = 'https://rickandmortyapi.com/api/character/';

const getRickAndMorty = () => {

for (let i = 1; i <= 5; i++) {

const img = document.createElement("img");
const charName = document.createElement("h2");

axios({
url: `${apiUrl}${i}`,
method: "get"
})
.then(res => {
img.src = res.data.image;
charName.innerText = res.data.name;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(charName);
document.body.appendChild(img);
})
.catch(err => {
    console.log(err);
    });
    }
    };
      button.addEventListener("click",getRickAndMorty )