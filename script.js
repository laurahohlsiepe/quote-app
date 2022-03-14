let btn = document.querySelector("#buttonid");

btn.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let obj = data.data[0];

      let quote = document.querySelector("#quote");
      quote.innerText = obj.quoteText;

      let author = document.querySelector("#author");
      author.innerText = obj.quoteAuthor;
    });
});
