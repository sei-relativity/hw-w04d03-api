
const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';
const container = document.querySelector('.container');
container.style.display='inline-block';
const button = document.querySelector('#random');

const getCharacters = () => {
    axios({
        url: rickAndMortyUrl,
        method: 'get' 
    })

        .then(result => {
            result.data.forEach( char => {
                const img = document.createElement('img');
                img.style.display='block';
                img.style.margin='auto';


                const name = document.createElement('p');
                name.style.textAlign='center';

                
                name.innerText= char.name;
                container.appendChild(name);

                let imgUrl= char.image;
                img.src= imgUrl;
                container.appendChild(img);

            })
        })
        .catch(err => {
            console.log(err)
        })
    }
button.addEventListener('click', getCharacters);

/////////////////////////////////////////////////



const studioGhibliUrl = 'https://ghibliapi.herokuapp.com/films';


const films = () => {
    axios({
        url: studioGhibliUrl,
        method: 'get' 
    })

        .then(result => {
            result.data.forEach( film => {
                const filmTitle = document.createElement('h2');
                filmTitle.style.textAlign='center';
                
                const filmDescription = document.createElement('p');
                filmDescription.style.textAlign='center';

                
                filmTitle.innerText= film.title;
                container.appendChild(filmTitle);

                filmDescription.innerText= film.description;
                container.appendChild(filmDescription);

            })
        })
        .catch(err => {
            console.log(err)
        })
    }
button.addEventListener('click', films);

