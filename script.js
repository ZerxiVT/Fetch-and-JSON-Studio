window.addEventListener('load', (event) => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        let html = ``;
        response.json().then(function(json){
            json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });
            html += `
            <p>Number of Astronauts: ${json.length}</p>
            `
            for(let i = 0; i < json.length; i++) {
                console.log(json[i]);
                html += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li style="${json[i].active == true ? 'color: green':''}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `
            }
            let container = document.getElementById("container");
            container.innerHTML = html;
        });
    })

  });



