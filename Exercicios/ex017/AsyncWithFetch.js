async function start() {
    const response = await fetch('https://api.github.com/users/maykbrito')
    const user = await response.jason()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}

start().catch(e => console.log(e))