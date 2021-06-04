/* global axios */

function Language(name, watchers, stars, forks) {
  this.name = name;
  this.watchers = watchers;
  this.stars = stars;
  this.forks = forks;
}
// Language.prototype.methodNameHere = function () {
//   return "this is where you would define the fn's behavior";
// };
let vue = new Language("Vue", 1, 2, 3);

// let angular = {};
// let ember = {};
// let svelte = {};
// let react = {};


axios.get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
