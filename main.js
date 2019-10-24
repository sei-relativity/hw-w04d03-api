// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

// const img = document.createElement('img');
const films = `https://ghibliapi.herokuapp.com/films`;
const button = document.createElement('button');

const apiUrl = `https://ghibliapi.herokuapp.com/films`;

button.innerText = "Get Info";
const getparagrph = () => {
    axios({
        url: apiUrl,
        method: 'get',

    }
    )
        .then(res => {
            
            for (let i = 0; i < films.length; i++) {
                console.log(res);
                
                const title = res.data[i].title;
                const description = res.data[i].description;
                const paraT = document.createElement('h1');
                const paraP = document.createElement('p');
                paraT.innerText = title;
                paraP.innerText = description;
                document.body.appendChild(paraT);
                paraT.style.textAlign = 'center';
                document.body.appendChild(paraP);
               
            }
        })
        .catch(err => {
            console.log(err);
        })
}

button.addEventListener('click', getparagrph);
document.body.append(button);
