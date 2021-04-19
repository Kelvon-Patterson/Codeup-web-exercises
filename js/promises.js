function getGithubUsername(username){
    let promise = fetch(`https://api.github.com/users/${username}/events`, {headers:{'Authorization': `token ${githubAPIKey}`}})

    promise.then(response => response.json()).then(events=>console.log(events))
}
console.log(getGithubUsername())