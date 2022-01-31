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
  const messageField = document.querySelector("#message-field");
  const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  };
  const sendEmail = (e) => {
    if(email.value !== "" && validateEmail(email.value)){
      e.preventDefault();
      let address = email.value;
      Email.send({
        SecureToken: "200c1ed5-0689-48c0-8be7-a8fea273cc27",
        To: address,
        From: "clover.mental.help@gmail.com",
        Subject: "Clover Mental Health",
        Body: `<h1>Thank you for subscribing to our newsletter</h1>
        <p>We will keep you updated with our latest news and updates</p>
        <p>You can access our website at <a href="https://lexach91.github.io/team-5-january-hackathon/">Clover</a></p>`,
      }).then((message) => {
        if (message === "OK") {
          messageField.innerText = "Thank you for subscribing to our newsletter";
          setTimeout(() => {
            messageField.innerText = "";
          }, 3000);
        } else {
          messageField.innerText = "There was an error sending your email";
          setTimeout(() => {
            messageField.innerText = "";
          }, 3000);
        }
      });

    } else if (!validateEmail(email.value)) {
      e.preventDefault();
      messageField.innerText = "Please enter a valid email address";
      setTimeout(() => {
        messageField.innerText = "";
      } , 3000);
    }

  };
  if (submitBtn) {
    submitBtn.addEventListener("click", sendEmail);
  }

  // Load jokes/activities/quotes on page load
  // Execute functions on corresponding pages
  if (window.location.pathname === "/stress.html") {
    getRandomJoke();
    refreshJoke.addEventListener("click", getRandomJoke);
  }
  if (window.location.pathname === "/exercise.html") {
    getRandomActivity();
    refreshActivity.addEventListener("click", getRandomActivity);
  }
  if (window.location.pathname === "/concentration.html") {
    getRandomQuote();
    refreshQuote.addEventListener("click", getRandomQuote);
  }
  if (window.location.pathname === "/sleep.html") {
    getRandomFact();
    refreshFact.addEventListener("click", getRandomFact);
  }

  if (window.location.pathname !== "/index.html") {
    $('.links-button').first().children('i').css('color', 'white');
    $('.links-button').click(function() {
      let activeLinksAreaSelector = '.' + this.id + '-links';
      $('.link-display-area').addClass('hidden-links');
      $(activeLinksAreaSelector).removeClass('hidden-links');
      $('.links-button').removeClass('active-links-button');
      $(this).addClass('active-links-button');
      $('.links-button').children('i').removeClass('fa-arrow-alt-circle-right');
      $('.links-button').children('i').addClass('fa-arrow-alt-circle-down');
      $('.links-button').children('i').removeAttr('style');
      $(this).children('i').removeClass('fa-arrow-alt-circle-down');
      $(this).children('i').addClass('fa-arrow-alt-circle-right');
      $(this).children('i').css('color', 'white');

    });
  }

  const stressContainer = document.querySelector(".top-left");
  const exerciseContainer = document.querySelector(".top-right");
  const concentrationContainer = document.querySelector(".bottom-left");
  const sleepContainer = document.querySelector(".bottom-right");

  if (window.location.pathname === "/index.html") {
    stressContainer.addEventListener("click", () => {
      window.location.href = "stress.html";
    });
    exerciseContainer.addEventListener("click", () => {
      window.location.href = "exercise.html";
    });
    concentrationContainer.addEventListener("click", () => {
      window.location.href = "concentration.html";
    });
    sleepContainer.addEventListener("click", () => {
      window.location.href = "sleep.html";
    });
  }

});
