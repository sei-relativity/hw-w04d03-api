// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


const rickbutton = document.querySelector('#rick-and-morty')
rickbutton.style.display='block'
rickbutton.style.margin='5px'
const apiurl = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5]'
const gitCharecter = () => {
  axios({
    url: apiurl,
    method: 'get'
  })
  .then (success=>{
    console.log(success)
    printCharecter(success)
  })
  .catch(error=>
    console.log(error))
  }
  
  const printCharecter = (result) =>{

    result.data.forEach(character =>{
    const div = document.createElement('div')
      const name = document.createElement('p')
      const img = document.createElement('img')
      img.style.height='200px'
      img.style.width='200px'
      div.style.display='inline-block'
      div.style.margin='20px'
      name.style.textAlign='center'
      document.body.appendChild(div)
      div.appendChild(name)
      div.appendChild(img)
      name.innerText =character.name
      img.setAttribute( 'src',character.image)})

  }
  rickbutton.addEventListener('click',gitCharecter)