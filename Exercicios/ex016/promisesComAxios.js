import axios from "axios";

axios
.get("https://api.github.com/users/maykbrito")
.then((response) => axios.get(response.data.repos_url))
.then((repos) => console.log(repos.data))
.catch((error) => console.log(error));


// https://codesandbox.io/s/determined-jerry-3ujdjz?file=/index.js:0-226 para executar o comando