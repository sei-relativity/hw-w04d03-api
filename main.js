// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const button = document.querySelector("button");
// const img = document.createElement("img");

const get = () => {
  axios({
    method: "get",
    url: "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7"
  }).then(res => {
    console.log(res);
    for (let i = 0; i < res.data.length; i++) {
      const img = document.createElement("img");

      img.src = res.data[i].image;
      img.style.margin = "5px";
      document.body.querySelector(".container").appendChild(img);
    }
  });
};

button.addEventListener("click", get);
