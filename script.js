// script.js
    // const GITHUB_API_URL = `https://api.github.com/users/kushvijay234`;
    // fetch(GITHUB_API_URL).then(response => {
    //     if (!response.ok) {
    //         alert('Failed to fetch data from GitHub API');
    //     }
    //     return response.json();
    // }).then((data) => {
    //     console.log(data);
    // }).catch(error => {
    //     console.error('Error fetching data:', error);
    // });


let serachButton = document.querySelector('#searchButton');;

serachButton.addEventListener('click', () => {
    let input = document.querySelector('#usernameInput');
    let inputValue = input.value;

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ` Result for <strong>${inputValue}</strong>...`;

    result.innerHTML = '';
    result.appendChild(paragraph);

    const GITHUB_API_URL = `https://api.github.com/users/${inputValue}`;
    fetch(GITHUB_API_URL).then(response => {    
        if (!response.ok) {
            alert('Failed to fetch data from GitHub API');
            return;
        }
        return response.json();
    }).then((data) => {
        console.log(data);
        let userInfo = document.createElement('div');
        userInfo.innerHTML = `
            <div class = "card m-3 p-3"> 
            <div class="card-header">
                <div class="card-title">
                    <h3 class="text-center">GitHub User Profile</h3>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${data.avatar_url}" alt="Avatar" class="img-fluid rounded-circle">
                    </div>
                    <div class="col-md-8">
                        <h2 class="heading">${data.name}</h2>
                        <p>Username: <b>${data.login}</b></p>
                        <p>Followers: <b>${data.followers}</b></p>
                        <p>Following: <b>${data.following}</b></p>
                        <p>Public Repos: <b>${data.public_repos}</b></p>
                         <p>Profile Link: <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a></p>
                        <p>Bio: ${data.bio ? data.bio : 'No bio available'}</p>
                        <p>Account Created At: ${new Date(data.created_at).toLocaleDateString()}</p>
                        <p>Location: ${data.location ? data.location : 'Not specified'}</p>
                    </div>
                </div>
        `;
        result.appendChild(userInfo);
    }).catch(error => {
        console.error('Error fetching data:', error);
        let errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error fetching user data. Please try again.';
        result.appendChild(errorMessage);
    });
});




