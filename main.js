const picUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';
const container = document.querySelector('.container');
const btn = document.querySelector('#random');


const showCharacters = () => {
    axios.get(picUrl)
    .then(res => {
        res.data.forEach(item => {
            const img = document.createElement('img');
            
            let image = item.image;
            img.src = image;
            container.appendChild(img);
        });
    })
    .catch(err => {
        console.log(err)
    })
}






btn.addEventListener('click', showCharacters)