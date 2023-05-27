import sum, { multy } from "./utils.js";

console.log(sum);

console.log(multy(2,3));

const axios = require('axios');


axios.post('https://reqres.in/api/users', {
    name: 'Natia',
    job: 'Frontend Developer :d'
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});

