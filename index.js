/* global axios */

// <!--
// # Instructions: https://github.com/acltc/js-framework-watcher

// # Github API Notes:
// https://github.com/vuejs/vue
// https://github.com/angular/angular.js
// https://github.com/emberjs/ember.js/
// https://github.com/sveltejs/svelte
// https://github.com/facebook/react

// # Fields we care about:
// # Watch = subscribers_count
// # Star = stargazers_count or watchers_count or watchers
// # Fork = forks_count or forks

// # Docs: https://docs.github.com/en/rest/reference/repos
// <!-- use chart.js -->
// <!-- # Bar Graph: show point-in-time popularity (cards for each language) # Long-Term Idea: Line Graph: somehow show
// popularity over time? pull a request every day and add to an array for each language? -->

// <!-- ############ -->

// <!-- figure out how to get data from axios into JS Language objects -->
// <!-- then, pass that data forward into HTML somehow -->


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
    let vue = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    // console.log(response.data);
    console.log(vue);
  })
  .catch(function (error) {
    console.log(error);
  });
