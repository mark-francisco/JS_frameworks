// # Instructions: https://github.com/acltc/js-framework-watcher
// # Github pages:
// https://github.com/vuejs/vue
// https://github.com/angular/angular.js
// https://github.com/emberjs/ember.js/
// https://github.com/sveltejs/svelte
// https://github.com/facebook/react

// # Docs: https://docs.github.com/en/rest/reference/repos

/* global axios, Chart */
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
// feature idea: do a GET INDEX to populate name and author for all JS framework libraries. then, let the user select 5 libraries to compare stats on graph.

function getData() {
  let i = 0;
  for (let i = 0; i < languages.length; i++) {
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
}
getData();

// need to make this async
setTimeout(function makeChart() {
  var ctx = document.getElementById("chart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [languages[0]["name"], languages[1]["name"], languages[2]["name"], languages[3]["name"], languages[4]["name"]],
      datasets: [
        {
          label: "Watchers",
          data: [languages[0]["watchers"],languages[1]["watchers"],languages[2]["watchers"],languages[3]["watchers"],languages[4]["watchers"],],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}, 100);