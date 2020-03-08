let user = document.getElementById("username");

fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            console.log(data);

        }