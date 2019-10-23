// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const characters = document.querySelectorAll(".character img")
const button = document.querySelector('#random')
button.addEventListener('click', () =>{
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/1'
    })
    .then(res => {
        characters[0].setAttribute('src', res.data.image) ;
    })
    .catch(err => {
        console.log(err)
    })
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/2'
    })
    .then(res => {
        characters[1].setAttribute('src', res.data.image) ;
    })
    .catch(err => {
        console.log(err)
    })
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/3'
    })
    .then(res => {
        characters[2].setAttribute('src', res.data.image) ;
    })
    .catch(err => {
        console.log(err)
    })
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/5'
    })
    .then(res => {
        characters[3].setAttribute('src', res.data.image) ;
    })
    .catch(err => {
        console.log(err)
    })
    axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/4'
    })
    .then(res => {
        characters[4].setAttribute('src', res.data.image) ;
    })
    .catch(err => {
        console.log(err)
    })
})