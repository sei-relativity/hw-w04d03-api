// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const img =document.createElement('img');
const button = document.querySelector('button');
const apiUrl = `https://rickandmortyapi.com/api/character/[1,2,3,4,5]`;
// const numItemsToGenerate = 1;

const getRickAndMorty =() =>{
    axios({
        url:apiUrl ,
        method:'get',
    })
        .then( res=>{
            console.log(res);
            res.data.forEach(element => {
              const titleName = document.createElement('p');
              name.innerText=element.name; 
                document.body.appendChild(img); 
                const imgUrl=element.image;
                //  const imgUrl=res.data[0].url;
                img.src=imgUrl;
                document.body.appendChild(img);    
            });
           
        })
        .catch(err =>{
            console.log(err)
        })
    
    }

button.addEventListener('click',getRickAndMorty);
// for(let i=0;i<=5;i++){
//     getRickAndMorty();
//   }



//   const div =document.createElement('div');
//   const button = document.querySelector('button');
//   const apiUrl = `https://ghibliapi.herokuapp.com/films`;
//  
//   
  
//   const getTitleAndDesc =() =>{
//       axios({
//           url:apiUrl,
//           method:'get',
//       })
//           .then( res=>{
//               console.log(res);
                // res.data.forEach(film => {
                //  const divUrl=film.[title,description])};
//               const divUrl=res.data[0].[title ,description;
//               div.src=divUrl;
//               document.body.appendChild(div);
//           })
//           .catch(err =>{
//               console.log(err)
//           })
      
//       }
  
//   button.addEventListener('click',getTitleAndDesc);
  
  

  