// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



const img = document.createElement('img');
const button = document.querySelector('#random');
const apiUrl = `https://rickandmortyapi.com/api/character/`;
// random.innerText = "Random";
const RickAndMortyAPI = () => {
    for (i = 1; i <= 5; i++) {
        axios({

            url: apiUrl + [i],

            method: 'get',
        }

        )
            .then(res => {
                console.log(res)
                // const arr = res.data.results;
                const imgUrl = res.data.image
                const name = res.data.name
                // for (let i=1 ; i <= imgUrl;i++){
                img.src = imgUrl;
                name.innerText = '';
                // });
                // }
                document.body.appendChild(img);
            })
            .catch(err => {
                console.log(err)
            })
    }
}




button.addEventListener('click', RickAndMortyAPI);
document.body.append(button);