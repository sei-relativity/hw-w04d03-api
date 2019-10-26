const container = document.querySelector('.container');
const getInfo = document.querySelector('#random');



const get = () => {
    axios({
        url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5',
        method: 'GET' 
    })
    .then(info => {
        for (let i = 0; i < info.data.length; i++){
            const img = document.createElement('img');
            const name = document.createElement('h2');             
            name.innerText= info.data[i].name;
            container.appendChild(name);
            img.src= info.data[i].image;
            container.appendChild(img);

        }
    })
    .catch(err => {
        console.log(err)
    })
}
getInfo.addEventListener('click', get);