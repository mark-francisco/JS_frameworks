// # Instructions: https://github.com/acltc/js-framework-watcher
// # Github pages:
// https://github.com/vuejs/vue
// https://github.com/angular/angular.js
// https://github.com/emberjs/ember.js/
// https://github.com/sveltejs/svelte
// https://github.com/facebook/react

// # Docs: https://docs.github.com/en/rest/reference/repos

/* global axios */
// instantiate constructor
function Language(name, author, watchers, stars, forks) {
  this.name = name;
  this.author = author;
  this.watchers = watchers;
  this.stars = stars;
  this.forks = forks;
}
// create array of languages to compare
let languages = [];
languages.push(new Language("vue", "vuejs", "", "", ""));
languages.push(new Language("angular.js", "angular", "", "", ""));
languages.push(new Language("ember.js", "emberjs", "", "", ""));
languages.push(new Language("svelte", "sveltejs", "", "", ""));
languages.push(new Language("react", "facebook", "", "", ""));
console.log(languages);
// feature idea: do a GET INDEX to populate name and author for all JS framework libraries. then, let the user select 5 libraries to compare stats on graph.

let i = 0;
for (let i = 0; i < 5; i++) {
  axios.get(`https://api.github.com/repos/${languages[i]["author"]}/${languages[i]["name"]}`)
    .then(function (response) {
      // Name = name, Watchers = subscribers_count, Stars = stargazers_count, Forks = forks_count
      languages[i]["watchers"] = response.data.subscribers_count;
      languages[i]["stars"] = response.data.stargazers_count;
      languages[i]["forks"] = response.data.forks_count;
    
      document.querySelector(`#name-${i}`).innerHTML = languages[i]["name"];
      document.querySelector(`#watchers-${i}`).innerHTML = languages[i]["watchers"];
      document.querySelector(`#stars-${i}`).innerHTML = languages[i]["stars"];
      document.querySelector(`#forks-${i}`).innerHTML = languages[i]["forks"];
    })
    .catch(function (error) {
      console.log(error);
    });
}



