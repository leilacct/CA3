document.getElementById('getRandom').addEventListener('click', getRandom);


// This is the function which fetches the random API and gets the users data
function getRandom() {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results; //Assigning the 'results' to a variable makes easier to access the user data from the API
            let output = ''
            console.log(data);
            author.forEach(function (user) {
                output += `
                <br/>
                <img.src = " ">${user.picture.large}<img/>
                <div class="card card body m-4">
                
                    <h4 class="display-9 m-4">${user.name.first} ${user.name.last}<h4/>
                        <ul>
                            <li>${user.gender}</li>
                            <li>${user.phone}</li>
                            <li>${user.email}</li>
                        </ul>
                    </div>
                    `;
            });
            // To display the users on the screen
            document.getElementById('output').innerHTML = output;

        })
}


