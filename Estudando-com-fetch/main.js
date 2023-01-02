const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch((e) => console.log(e))
}

function getUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        UserName.textContent = data.name
        UserCity.textContent = data.city
        UserAvatar.src = data.avatar
    })
    .catch((e) => console.log(e))
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch((e) => console.log(e))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch((e) => console.log(e))
}

function deletUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch((e) => console.log(e))
}

const newUser = {
    name: "Seilapontocom",
    avatar: 'http://picsum.photos/200/300',
    city: 'Porto alegre'
}

// addUser(newUser)

const updatedUser = {
    name: 'Guilherme Capitão', 
    avatar: 'https://avatars.githubusercontent.com/u/52411032?v=4',
    city: 'Porto Alegre'
}

deletUser(5)
updateUser(updatedUser, 4)
getUsers()
getUser(1)
