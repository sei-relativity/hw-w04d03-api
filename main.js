// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


  for (let i=0 ; i <5;i++){

    const img = document.createElement('img');
    const apiUrl = `https://rickandmortyapi.com/api/character/${i}`;

    axios(
        {
            method: 'GET',
            url: apiUrl
           
        }
    )
        .then(
            ressponds => {
                const imgUrl = ressponds.data.image;
                img.src = imgUrl;
                document.body.append(img)
               
            }

        )
        .catch(err => {
            console.log(err)
        })
    }

        

