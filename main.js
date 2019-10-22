// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';
const container = document.querySelector('.container');
container.style.display='inline-block';
const button = document.querySelector('#random');



const getCharacters = () => {
    axios({
        url: apiUrl,
        method: 'get' 
    })

        .then(result => {
            result.data.forEach( char => {
                const img = document.createElement('img');
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
