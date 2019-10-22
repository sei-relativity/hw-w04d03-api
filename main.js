// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
 
`use strict`

const button = document.querySelector('#random');
const apiUrl="https://rickandmortyapi.com/api/character/";

const getRandom = () => {
    axios({
        url: apiUrl + [1,2,3,4,5],
        method: 'get',
    })
        .then(res => {
            console.log(res);
            console.log(res.data);

            res.data.forEach(item => {
                console.log(item);

                const img = document.createElement('img');
                let imgUrl = item.image;
                console.log(imgUrl);
                img.src = imgUrl;
                document.body.appendChild(img)
            });
            
          
        })
        .catch(err => {
            console.log(err)
        })
}
button.addEventListener('click', getRandom);