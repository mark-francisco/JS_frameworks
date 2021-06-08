// <!--
// # Instructions: https://github.com/acltc/js-framework-watcher

// # Github API Notes:
// https://github.com/vuejs/vue
// https://github.com/angular/angular.js
// https://github.com/emberjs/ember.js/
// https://github.com/sveltejs/svelte
// https://github.com/facebook/react

// # Docs: https://docs.github.com/en/rest/reference/repos






/* global axios */

function Language(name, watchers, stars, forks) {
  this.name = name;
  this.watchers = watchers;
  this.stars = stars;
  this.forks = forks;
}

axios.get("https://api.github.com/repos/vuejs/vue")
  .then(function (response) {
    // # Watchers = subscribers_count
    // # Stars = stargazers_count
    // # Forks = forks_count
    let vue = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    console.log(vue);
    document.querySelector("#vue-name").innerHTML = vue.name;
    document.querySelector("#vue-watchers").innerHTML = vue.watchers;
    document.querySelector("#vue-stars").innerHTML = vue.stars;
    document.querySelector("#vue-forks").innerHTML = vue.forks;
  })
  .catch(function (error) {
    console.log(error);
  });
axios.get("https://api.github.com/repos/angular/angular.js")
  .then(function (response) {
    let angular = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    console.log(angular);
    document.querySelector("#angular-name").innerHTML = angular.name;
    document.querySelector("#angular-watchers").innerHTML = angular.watchers;
    document.querySelector("#angular-stars").innerHTML = angular.stars;
    document.querySelector("#angular-forks").innerHTML = angular.forks;
  })
  .catch(function (error) {
    console.log(error);
  });
axios.get("https://api.github.com/repos/emberjs/ember.js")
  .then(function (response) {
    let ember = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    console.log(ember);
  })
  .catch(function (error) {
    console.log(error);
  });
axios.get("https://api.github.com/repos/sveltejs/svelte")
  .then(function (response) {
    let svelte = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    console.log(svelte);
  })
  .catch(function (error) {
    console.log(error);
  });
axios.get("https://api.github.com/repos/facebook/react")
  .then(function (response) {
    let react = new Language(response.data.name, response.data.subscribers_count, response.data.stargazers_count, response.data.forks_count);
    console.log(react);
  })
  .catch(function (error) {
    console.log(error);
  });
