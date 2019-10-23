// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const button = document.querySelector('button');

const apiUrl = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5]';

const random = () => {
    axios({
        url: apiUrl,
        method: 'get'
    })
    .then( res => {
        console.log(res)
        res.data.forEach(charecter => {
            const name = document.createElement('p')
            name.innerText = charecter.name;
            document.body.appendChild(name)
        const img = document.createElement('img');
        const imgUrl = charecter.image;
        img.src = imgUrl;
        document.body.appendChild(img);
            
        });
        
    }) 
    .catch((error)=>{
        // code for if the request fails
        console.log(error)
})}

button.addEventListener('click', random )