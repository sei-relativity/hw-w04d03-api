// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


// rick and morty!!

const button = document.querySelector('#random');
const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

const getRickAndMortyCharacters = () => {
    
    axios({
        url: rickAndMortyUrl + [1,2,3,4,5],
        method: 'get',
    })
    .then (res => {
        console.log(res);
        
        console.log(res.data);
        res.data.forEach(char => {
            console.log(char)
            const img = document.createElement('img');
            let characterImg =char.image;
            console.log(characterImg)
            img.src =characterImg;
            document.body.appendChild(img)
        });
        // const charImg = res.data.results[0].url;


        
    })
}


button.addEventListener('click', getRickAndMortyCharacters)