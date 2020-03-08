let username = document.getElementById("username");

function getUserByName(username) {
    return new Promise(function (resolve, reject) {
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function (users) {
            if (users.length)
                resolve(users[0]);
            else
                reject('User with name ' + username + 'not found');
        });
    })
}

function handleUsernameError(err) {
    console.warn(err, 'Using id=1 instead');
    return {
        username: "Sample User",
        id: 1
    };
}

function showUserItems() {
    getUserByName('Nadia')
        .catch(handleUsernameError)
        .then(getPostsByUser)
        .then(render);
}