const img = document.createElement('img');
const character = document.createElement('p');
const button = document.querySelector('#random');
const apiUrl = `https://rickandmortyapi.com/api/character/`;
const rickAndMorty = () => {
    for (i = 1; i < 6; i++) {
        axios({
            url: apiUrl + [i],
            method: 'get',
        })
        .then(res => {
            const imgUrl = res.data.image
            const name = res.data.name
            img.src = imgUrl;
            character.innerText = character.name;
            document.body.appendChild(img);
        })
        .catch(err => {
            console.log(err)
        })
    }
}
button.addEventListener('click', rickAndMorty);