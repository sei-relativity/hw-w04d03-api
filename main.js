// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const img = document.createElement('img');
const cont= document.querySelector('.container');
const button = document.querySelector('#random');
const apiUrl = `https://rickandmortyapi.com/api/character/1,2,3,4,5`;
const characters = () => {
    axios({
        url: apiUrl ,
        method: 'get'
    }
    )
        .then(res => {
            res.data.forEach(chart =>{
            const img = document.createElement('img');
            const name = document.createElement('div');

        name.innerText = chart.name;
        cont.appendChild(name);

        let picUrl= chart.image;
        img.src=picUrl;
        cont.appendChild (img);

        })
     })
        .catch(err => {
            console.log(err)
        })
    }

button.addEventListener('click', characters);
const studioUrl = `https://ghibliapi.herokuapp.com/films`;
const Studio = () => {
    axios({
        url: studioUrl ,
        method: 'get'
    }
    )
        .then(res => {
            res.data.forEach(film =>{
            const filmsTitle = document.createElement('h2');
            const filmDes = document.createElement('p');

        filmsTitle.innerText = film.title;
        cont.appendChild(filmsTitle);

        filmDes.innerText = film.description;
        cont.appendChild(filmDes);

        })
     })
        .catch(err => {
            console.log(err)
        })
    }

button.addEventListener('click', Studio);

