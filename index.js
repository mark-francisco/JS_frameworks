/* global axios */
// const axios = require('axios').default;


axios.get("https://github.com/vuejs/vue")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
