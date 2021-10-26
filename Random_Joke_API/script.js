const image = document.querySelector("#chuck-image");
const joke = document.querySelector("#display-joke");
const button = document.querySelector("button");

button.addEventListener('click', async function(){
    let link = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(link);
    const data = await response.json();
    console.log(response);
    joke.innerHTML = data.value;

}); 