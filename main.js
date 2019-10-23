// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



// We loaded axios library in our html file
// Lets make an ajax call with axios

//create image tag 
//const img =document.createElement('img') ; 
//create the button
const button=document.querySelector('#random') ;
const container=document.querySelector('.container') ;  
const apiUrl='https://rickandmortyapi.com/api/character'; 
button.innerText='Click me ' ; 
const getImages=() => { //method to call the event for the button
    
    axios({
        url:apiUrl,
        method:'get',
      
        
    })
           .then(res  => {
               console.log(res) ; 
               for(let i=0;i<5;i++) {
               const img =document.createElement('img') ; 
               const names=document.createElement('p') ; 
               const imgUrl=res.data.results[i].image  ; // we get it from console after the run  
               const name=res.data.results[i].name ; // we get it from console after the run     
               img.src=imgUrl; 
               names.innerHTML=name ; 
               document.body.appendChild(img) ;
               document.body.appendChild(names) ;
             }

           })
           .catch(err => {
               console.log(err)
           })
    
}



button.addEventListener('click',getImages) ; 
document.body.append(button) ; 