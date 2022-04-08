var api = "https://api.unsplash.com/photos/random";
var appID = "6bULmcY5--I4qBCdku2wx3dt_JUhvc3G-Abyh5Q6Rds";
var query = api + "?client_id=" + appID;

var photo = document.querySelector("#photo");
let card = document.querySelector(".card-content");

var app = {
  getPhoto: () => {
    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.urls.small);
        let html = `<img id="photo" src="${data.urls.small}" />`;
        card.insertAdjacentHTML("beforeend", html);
      })
      .catch(function () {
        console.log("No result");
      });
  },
};
