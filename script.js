const socialMedia = {
    github: 'eduardo-borges-goncalves',
    instagram: "santiago_shes/",
    youtube: "channel/UCEjYU3V9_HRE3QJpdQJ59uQ",
    facebook: "alemao.brk",
    twitter: "BorgesEddu",
}

function changeSocialMedia () {
    for (let li of SocialMediaList.children) {
        const social = li.getAttribute('class')

        li.children[0].href= `https://${social}.com/${socialMedia[social]}`
    }
}

changeSocialMedia()

function getGitHubProfileInfos (){
    const url = `https://api.github.com/users/${socialMedia.github}`

    fetch(url)
        .then( (response) => response.json())
        .then(data => {
            let userName = document.getElementById('userName')
            userName.innerText = data.name
            let userBio = document.getElementById('userBio')
            userBio.innerHTML = data.bio
            let avatar = document.getElementById('avatar')
            avatar.src = data.avatar_url
            userGithub = data.login
            userLinkGithub = data.html_url

        })
    }
        

getGitHubProfileInfos()
