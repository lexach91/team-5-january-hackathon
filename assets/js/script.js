/* jshint esversion: 6 */
<<<<<<< HEAD
=======
const jokeText = document.querySelector(".joke-text");
const activityText = document.querySelector(".activity-text");
const quoteText = document.querySelector(".quote-text");
const jokeButton = document.querySelector(".joke-button");
const activityButton = document.querySelector(".activity-button");
const quoteButton = document.querySelector(".quote-button");


>>>>>>> ec89339 (Add function to get random quote)
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
        // jokeText.innerHTML = data.joke;
      } else {
        // jokeText.innerHTML = data.setup + "<br>" + data.delivery;
      }
    });
};

const getRandomActivity = () => {
<<<<<<< HEAD
  fetch("https://www.boredapi.com/api/activity/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
    //   activityText.innerHTML = data.activity;
    });
};

const getRandomQuote = () => {
  fetch("https://api.quotable.io/random", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
    //   quoteText.innerHTML = data.content + "<br>" + data.author;
    });
};
=======
    fetch("http://www.boredapi.com/api/activity/", {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            activityText.innerHTML = data.activity;
        });
};

const getRandomQuote = () => {
    fetch("https://api.quotable.io/random", {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            quoteText.innerHTML = data.content + "<br>" + data.author;
        });
};

jokeButton.addEventListener("click", getRandomJoke);
activityButton.addEventListener("click", getRandomActivity);
quoteButton.addEventListener("click", getRandomQuote);
>>>>>>> ec89339 (Add function to get random quote)
