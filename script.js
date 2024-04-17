const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result= document.querySelector(".result");
const sound= document.querySelector("#sound");
const button= document.querySelector(".searchBtn");

button.addEventListener("click",()=>{
    let inputword=document.querySelector(".inputWord").value;

    fetch(`${url}${inputword}`)
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML=
        `<div class="word">
        <h3>${inputword}</h3>
        <button onclick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p>
         <p>${data[0].phonetic}</p>
    </div>
    <p class="wordMeaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="wordExample">${data[0].meanings[0].definitions[0].example || ""}</p>`;

    sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
    })
    .catch(()=>{
        result.innerHTML=`<h3 class="error">Couldn't find the word</h3>`
    })
});
function playSound(){
    sound.play();
}