let setup = document.getElementById('jokeSetup');
let punchline =  document.getElementById('jokePunchline');

async function getJoke(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

async function loadJoke() {
    let randomJoke = await getJoke('https://official-joke-api.appspot.com/jokes/programming/random');
    setup.innerHTML = randomJoke[0].setup;
    punchline.innerHTML = randomJoke[0].punchline;
}

document.getElementById("newJokeButton").addEventListener("click", e => {
    loadJoke();
})

loadJoke();
