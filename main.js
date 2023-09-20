const MemeGenerator = document.querySelector(".generator-meme-btn");
const MemeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-generator img");
const MemeAuthoe = document.querySelector(".meme-author");
const Wrapper = document.querySelector(".wrapper");

const UpdateDetaiils =  (url,title,author)=>{
    Wrapper.style.opacity = 1;
    memeImg.setAttribute("src",url);
    MemeTitle.innerHTML = title;
    MemeAuthoe.innerHTML = `MemeBy : ${author}`;
}

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((resolve) => resolve.json())
    .then((data) => {
        UpdateDetaiils(data.url,data.title,data.author)
    });
};

MemeGenerator.addEventListener("click",generateMeme);
