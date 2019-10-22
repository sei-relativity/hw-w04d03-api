// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const apiUrl = 'https://rickandmortyapi.com/api/character/';
const btn = document.createElement('button');
const img = document.createElement('img');
const h2 = document.createElement('h2');

btn.innerText = 'Click';
document.body.append(btn);

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getRickAndMortyFam = () => {
    axios({
        url: apiUrl,
        method: 'get'
    })
        .then(res => {
            const randomNum = getRandomArbitrary(0, 4);
            console.log(randomNum);
            const characterName = res.data.results[randomNum].name;
            const imgUrl = res.data.results[randomNum].image;
            h2.innerText = characterName;
            img.src = imgUrl;
            document.body.appendChild(h2);
            document.body.appendChild(img);

        })
}
btn.addEventListener('click', getRickAndMortyFam);
