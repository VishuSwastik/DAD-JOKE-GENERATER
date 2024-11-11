const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const requestOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const jokeAPI = "https://api.api-ninjas.com/v1/jokes";

async function fetchJoke() {
  try {
    jokeText.innerText = "Fetching a joke...";
    jokeButton.disabled = true;
    jokeButton.innerText = "Please wait...";
    
    const response = await fetch(jokeAPI, requestOptions);
    const jokeData = await response.json();

    jokeButton.disabled = false;
    jokeButton.innerText = "Get a Joke";

    jokeText.innerText = jokeData[0].joke;
  } catch (error) {
    jokeText.innerText = "Oops! Something went wrong. Please try again.";
    jokeButton.disabled = false;
    jokeButton.innerText = "Get a Joke";
    console.error(error);
  }
}

jokeButton.addEventListener("click", fetchJoke);