/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.querySelector("#menu-bar");
  const hamburger = document.querySelector("#hamburger");
  const toggleMenu = () => {
    navBar.classList.toggle("open");
    hamburger.classList.toggle("is-active");
    // disable page scrolling
    document.body.style.overflow = navBar.classList.contains("open") ? "hidden" : "auto";
  };
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
  // hamburger.addEventListener("click", toggleMenu);
  // Joke/Activity/Quote/Fact containers
  const jokeContainer = document.querySelector("#random-joke");
  const activityContainer = document.querySelector("#random-activity");
  const quoteContainer = document.querySelector("#random-quote");
    const factContainer = document.querySelector("#random-fact");

  // Joke/Activity/Quote/Fact buttons
  const refreshJoke = document.querySelector("#refresh-joke");
  const refreshActivity = document.querySelector("#refresh-activity");
  const refreshQuote = document.querySelector("#refresh-quote");
    const refreshFact = document.querySelector("#refresh-fact");
  // Functions to get random jokes/activities/quotes/facts
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

  const getRandomFact = () => {
      let icon = refreshFact.querySelector("i");
        icon.classList.add("fa-spin");
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
          .then(res => res.json())
          .then((data) => {
            factContainer.innerHTML = `<p>${data.text}</p>`;
          })
          .catch((err) => console.log(err))
          .finally(() => {
            icon.classList.remove("fa-spin");
          });
  };

  // Function to send an email to the user
  const submitBtn = document.querySelector("#subscribe");
  const email = document.querySelector("#email");
  const sendEmail = (e) => {
    e.preventDefault();
    let address = email.value;
    Email.send({
      SecureToken: "200c1ed5-0689-48c0-8be7-a8fea273cc27",
      To: address,
      From: "clover.mental.help@gmail.com",
      Subject: "Clover Mental Health",
      Body: "Thank you for subscribing to our newsletter",
    }).then((message) => {
      if (message === "OK") {
        alert("Subscribed successfully");
      } else {
        alert("Some error occurred");
      }
    });
  };
  if (submitBtn) {
    submitBtn.addEventListener("click", sendEmail);
  }

  // Load jokes/activities/quotes on page load
  // Execute function only on index.html
  if (document.querySelector("#index")) {
    getRandomJoke();
    getRandomActivity();
    getRandomQuote();
    getRandomFact();

    // Refresh jokes/activities/quotes
    refreshJoke.addEventListener("click", getRandomJoke);
    refreshActivity.addEventListener("click", getRandomActivity);
    refreshQuote.addEventListener("click", getRandomQuote);
    refreshFact.addEventListener("click", getRandomFact);
  } else {
    $('.links-button').click(function() {
      let activeLinksAreaSelector = '.' + this.id + '-links';
      $('.link-display-area').addClass('hidden-links');
      $(activeLinksAreaSelector).removeClass('hidden-links');
      $('.links-button').removeClass('active-links-button');
      $(this).addClass('active-links-button');
    });
  }

});
