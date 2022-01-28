/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
    // Joke/Activity/Quote containers
    const jokeContainer = document.querySelector("#random-joke");
    const activityContainer = document.querySelector("#random-activity");
    const quoteContainer = document.querySelector("#random-quote");

    // Joke/Activity/Quote buttons
    const refreshJoke = document.querySelector("#refresh-joke");
    const refreshActivity = document.querySelector("#refresh-activity");
    const refreshQuote = document.querySelector("#refresh-quote");

    const getRandomJoke = () => {
      fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit",
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.type === "single") {
            jokeContainer.innerHTML = `<p>${data.joke}</p>`;
          } else {
            jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
          }
        
        });
    };
    
    const getRandomActivity = () => {
    
      fetch("https://www.boredapi.com/api/activity/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
            activityContainer.innerHTML = `<p>${data.activity}</p>`;
        });
    };
    
    const getRandomQuote = () => {
      fetch("https://api.quotable.io/random", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
            quoteContainer.innerHTML = `<p>${data.content}</p><p><em>${data.author}<em></p>`;
        });
    };

    // Load jokes/activities/quotes on page load
    getRandomJoke();
    getRandomActivity();
    getRandomQuote();

    // Refresh jokes/activities/quotes
    refreshJoke.addEventListener("click", getRandomJoke);
    refreshActivity.addEventListener("click", getRandomActivity);
    refreshQuote.addEventListener("click", getRandomQuote);
});
