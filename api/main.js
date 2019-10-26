`use strict`
const apiUrl = 'https://rickandmortyapi.com/api/character/';
const button = document.querySelector('#random');



const gitCharecter  = () => {
    axios({
        url: apiUrl,
        method: 'get' 
    })

        .then( {

            })
        })
        .catch(err => {
            console.log(err)
        })
    }
button.;