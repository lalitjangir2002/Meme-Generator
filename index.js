const btn = document.querySelector(".btn");
const image = document.getElementById("meme");
const title = document.getElementById("title");
const author = document.querySelector(".author");

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(function (data) {
        image.setAttribute("src", data.url);
        title.textContent = data.title;
        author.textContent = `Author: ${data.author}`;
    })
    .catch(function (error) {
        console.log("Error fetching meme data:", error);
    });
};

btn.addEventListener("click", generateMeme);
generateMeme();