function getLastPushDate(githubUsername){

    let promise = fetch(`https://api.github.com/users/${githubUsername}/events`, {headers:{'Authorization': `token ${githubAPIKey}`}})

    promise.then(response => response.json()).then(events=>{ for(let event of events){
        if(event.type === 'PushEvent'){
            console.log(event.created_at)
            return new Date(event.created_at)
        }
    }
    })
}
console.log(getLastPushDate('Kelvon-Patterson'))
    .then((date)=>console.log(date));
