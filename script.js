// Selecting elements from the DOM
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";

// Function to fetch jokes and display them
let getJoke = () => {
    jokeContainer.classList.remove("fade"); // Hide the joke before fetching a new one
    fetch(url)
        .then(response => response.json()) // Parse the JSON response
        .then(item => {
            jokeContainer.textContent = `${item.joke}`; // Set the joke
            jokeContainer.classList.add("fade"); // Make the joke fade in
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
        });
}

// Event listener for the button to fetch a joke
btn.addEventListener("click", getJoke);

// Fetch a joke when the page loads
getJoke();

// Function to toggle dark mode on or off
function myFunction() {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class on body
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener("click", myFunction);
