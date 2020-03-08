let photos = document.getElementById("photos");

fetch('http://jsonplaceholder.typicode.com/photos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            console.log(data);

        }