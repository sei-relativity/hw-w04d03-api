// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const button = document.querySelector("button");
const getRickAndMorty = () => {

for (let i = 1; i <= 5; i++) {
const img = document.createElement("img");
const charName = document.createElement("h2");

axios({
url: `https://rickandmortyapi.com/api/character/${i}`,
method: "get"
})
.then((response) => {
img.src = response.data.image;
charName.innerText = res.data.name;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(charName);
document.body.appendChild(img);
})
.catch((err) => {
    console.log(err);
    });
    }
    };
button.addEventListener("click",getRickAndMorty ) 