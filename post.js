let title = document.getElementById("PostTitle");
let text = document.getElementById("PostText");
let comments = document.getElementById("Comments");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            console.log(data);

        }

        fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                console.log(data);

            }