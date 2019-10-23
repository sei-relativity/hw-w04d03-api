
const rickImg = document.createElement('img'),
mortyImg = document.createElement('img'),
summerImg = document.createElement('img'),
bethImg = document.createElement('img'),
jerryImg = document.createElement('img'),
apiUrl="https://rickandmortyapi.com/api/character/",
button = document.querySelector("#random") ;

const getImg = () =>{
axios ({
    url : apiUrl,
    method: 'get'
})
.then (res => {

    console.log(res)
            img.src=res.
            document.body.appendChild(img)


})
.catch (err => {
    console.log(err)
})



}
button.addEventListener('click', getImg);