const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Getting user data from Axios. Passing argument to createUserCard with data and getRepos only with username
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

// Getting repositories info sorted by the lasted repos and passing it to addReposToCard
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    console.log(data);

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repositories");
  }
}

// Passing all the info to the HTML

function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHTML = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${userID}</h2>
          ${userBio}

          <ul>
            <li>${user.followers}&nbsp;<strong>Followers</strong>&nbsp;</li>
            <li>${user.following}&nbsp;<strong>Following</strong>&nbsp;</li>
            <li>${user.public_repos}&nbsp;<strong>Repos</strong>&nbsp;</li>
          </ul>

          <div id="repos"></div>
        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

// Adding repositorie information to HTML
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
  console.log(reposEl);
  console.log(repos.data);
}

// Standard error card
function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

// Event Listener only on SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
