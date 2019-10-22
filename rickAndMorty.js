// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


const rickbutton = document.querySelector('#rick-and-morty')
rickbutton.style.display='block'
rickbutton.style.margin='5px'
const apiurl = 'https://rickandmortyapi.com/api/character/'
const gitCharecter = () => {
  for(let i =1;i<=5;i++){
  axios({
    url: apiurl+i,
    method: 'get'
  })
  .then (success=>{
    console.log(success)
    printCharecter(success)
  })
  .catch(error=>
    console.log(error))
  }}
  
  const printCharecter = (result) =>{
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
      name.innerText = result.data.name
      img.setAttribute( 'src',result.data.image)

  }
  rickbutton.addEventListener('click',gitCharecter)