// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

//stolen from lesson
//creating element img and selecting button

const button = document.querySelector('#random');



const apiUrl = 'https://rickandmortyapi.com/api/character/';

const random = () => {
    axios({
        url: apiUrl,
        method: 'get'
    })
    .then( res => {
        console.log(res);
        let cha= res.data["results"];

        for (let i =0; i<5; i++){
        let imgUrl =cha[i].image;
        const img = document.createElement('img');
        img.src = imgUrl;
        document.body.appendChild(img);
        }
    })
}
button.addEventListener('click', random)