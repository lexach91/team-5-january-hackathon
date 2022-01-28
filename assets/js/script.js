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
  // Functions to get random jokes/activities/quotes
  const getRandomJoke = () => {
      let icon = refreshJoke.querySelector("i");
        icon.classList.add("fa-spin");
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
      })
      .catch((err) => console.log(err))
      .finally(() => {
        icon.classList.remove("fa-spin");
      });
  };

  const getRandomActivity = () => {
    let icon = refreshActivity.querySelector("i");
    icon.classList.add("fa-spin");
    fetch("https://www.boredapi.com/api/activity/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        activityContainer.innerHTML = `<p>${data.activity}</p>`;
      })
        .catch((err) => console.log(err))
        .finally(() => {
            icon.classList.remove("fa-spin");
        });
      
  };

  const getRandomQuote = () => {
    let icon = refreshQuote.querySelector("i");
    icon.classList.add("fa-spin");
    fetch("https://api.quotable.io/random", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        quoteContainer.innerHTML = `<p>${data.content}</p><p><em>${data.author}<em></p>`;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        icon.classList.remove("fa-spin");
      });
  };

  // Load jokes/activities/quotes on page load
  // Execute function only on index.html
  if (document.querySelector("#index")) {
    getRandomJoke();
    getRandomActivity();
    getRandomQuote();

    // Refresh jokes/activities/quotes
    refreshJoke.addEventListener("click", getRandomJoke);
    refreshActivity.addEventListener("click", getRandomActivity);
    refreshQuote.addEventListener("click", getRandomQuote);
  }
});
