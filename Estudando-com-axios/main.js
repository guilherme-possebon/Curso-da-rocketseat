const url = 'http://localhost:5500/api' 
const element = document.getElementsByClassName('element');

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(e=> console.error(e))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => response.data)
    .catch(e=> console.error(e))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userId.textContent = data.id
        userImg.src = data.avatar
    })
    .catch(e=> console.error(e))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => {console.log(response)})
    .catch(e => console.error(e))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(e => console.error(e))
}



const userUpdated = {
    name: "Marcelo",
    avatar: 'https://picsum.photos/100/100',
    city: 'Recife'
}
const newUser = {
    name: 'marcos',
    avatar: 'https://picsum.photos/100/100',
    city: 'Rio de janeiro'
}

getUser(3) // Para selecionar o id 
updateUser(3, userUpdated) // Para mexer no usuario
deleteUser(2) // Para deletar um usuario


// addNewUser(newUser) // Para criar novos usuarios
getUsers() // Para chamar a função