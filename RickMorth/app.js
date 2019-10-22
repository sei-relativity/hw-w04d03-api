'strict mode'

for (i = 1; i <= 5; i++) {
    console.log(i)
    const apiUrl = `https://rickandmortyapi.com/api/character/${i}`;
    const img = document.createElement('img');
    axios(
        {
            url: apiUrl,
            method: 'get'
        }
    )
        .then(
            res => {
                const imgUrl = res.data.image;
                img.src = imgUrl;
                document.body.append(img)
                console.log(res)
            }

        )
        .catch(err => {
            console.log(err)
        })
}