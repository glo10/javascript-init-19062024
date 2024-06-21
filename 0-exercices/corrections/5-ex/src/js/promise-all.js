const templatePromise = fetch("html/partials/card.html")
  .then((res) => res.text())
  .catch((error) => console.error('error html template', error));

const usersPromise = fetch("data/users.json")
  .then((res) => res.json())
  .catch((error) => console.error('error users github', error));

function display(template, users) {
  const div = document.querySelector(".row");
  users.forEach((user) => {
    let templateReplaced = template
        .replace("{{AVATAR}}", user.avatar_url)
        .replace("{{LOGIN}}", user.login)
        .replace("{{TYPE}}", user.type)
        .replace("{{ID}}", user.id)
        .replace("{{ADMIN}}", user.site_admin === true ? 'Oui' : 'Non')
        .replace("{{LIEN_GITHUB}}", user.url)
        .replace("{{LINK_REPOSITORIES}}", user.repos_url);
    div.insertAdjacentHTML("afterbegin", templateReplaced);
  });
}

Promise.all([templatePromise, usersPromise]).then((results) =>
  display(results[0], results[1])
);
