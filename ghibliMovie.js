// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


const button = document.querySelector('#movie')

const gitMovie = () => {
  axios({
    url: 'https://ghibliapi.herokuapp.com/films',
    method: 'get'
  })
  .then (success=>{
    console.log(success)
    printMovie(success)
  })
  .catch(error=>
    console.log(error))
  }
  
  const printMovie = (result) =>{
    
    result.data.forEach(element => {
      const h2 = document.createElement('h2')
      h2.style.textAlign='center'
      const p = document.createElement('p')
      document.body.appendChild(h2)
      document.body.appendChild(p)
      h2.innerText = element.title
      p.innerText = element.description
    });
  }
  
  button.addEventListener('click',gitMovie)