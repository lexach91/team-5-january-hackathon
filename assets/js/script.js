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
