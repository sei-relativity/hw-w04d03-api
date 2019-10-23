// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const img = document.createElement('img');
const button = document.querySelector('button');

const apiUrl = 'https://rickandmortyapi.com/api/location/1';

const random = () => {
    axios({
        url: apiUrl,
        method: 'get'
    })
    .then( res => {
        const imgUrl = res.data.message;
        img.src = imgUrl;
        document.body.appendChild(img);
    }) 
    .catch((error)=>{
        // code for if the request fails
        console.log(error)
}

button.addEventListener('click', random )