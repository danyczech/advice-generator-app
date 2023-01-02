adviceNumber = document.querySelector("#advice__number");
adviceText = document.querySelector("#advice__text");
adviceBtn = document.querySelector(".advice__btn");

//gets random advice from API server and runs the function to render web page with received data
const getAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      renderAdvice(data.slip);
    })
    // in case that no data were fetched, this is error display
    .catch((err) => {
      adviceNumber.textContent = `&#10041;`;
      adviceText.textContent = `"Computer is tired (for more details read console). It is high time for a break :-)."`;
      console.log(err);
    });
};

//renders page with fetched data
const renderAdvice = function (data) {
  adviceNumber.textContent = data.id;
  adviceText.textContent = `"` + data.advice + `"`;
};

//button starts new fetch to get another random advice from API
adviceBtn.addEventListener("click", getAdvice);

//runs first fetch when page is loaded
getAdvice();
