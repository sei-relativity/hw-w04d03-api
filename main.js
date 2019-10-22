// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


// rick and morty!!
const container = document.querySelector('.container')
const button = document.querySelector('#random');
const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

const getRickAndMortyCharacters = () => {
    
    axios({
        url: rickAndMortyUrl + [1,2,3,4,5],
        method: 'get',
    })
    .then (res => {
        res.data.forEach(char => {
            const img = document.createElement('img');
            let characterImg =char.image;
            img.src =characterImg;
            container.appendChild(img)
        });        
    })

    .catch(err => {
        console.log(err)
    })
}


button.addEventListener('click', getRickAndMortyCharacters)


// studio ghibli api
const studioGhibliUrl = 'https://ghibliapi.herokuapp.com/films';

const getStudioGhibliMovies = () => {
    axios({
        url: studioGhibliUrl,
        method: 'get',
    })

    .then(res => {
        res.data.forEach(movie => {            
            const header = document.createElement('h3');
            const paragraph = document.createElement('p')
            let movieTitle = movie.title;
            let movieDescription = movie.description;
            header.innerText=movieTitle;
            paragraph.innerText = movieDescription;
            container.appendChild(header);
            container.appendChild(paragraph);
        })        
    })

    .catch(err => {
        console.log(err)
    })
}


button.addEventListener('click', getStudioGhibliMovies)