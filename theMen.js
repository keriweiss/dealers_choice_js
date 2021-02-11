const html = require("html-template-tag");

module.exports = (bfs) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Elaine's Top 5 Boyfriends Ranked</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <h1>Elaine's Top 5 Boyfriends Ranked</h1>
      <nav>
        <a id="top5" href="/">Top 5</a>
        <a href="/boyfriends/1">Puddy</a>
        <a href="/boyfriends/2">Keith Hernandez</a>
        <a href="/boyfriends/3">Jake Jarmel</a>
        <a href="/boyfriends/4">Ned Isakoff</a>
        <a href="/boyfriends/5">Aaron</a>
      </nav>
      <div class="bf-list">
        ${bfs.map(
          (bf) => html` <div class="list-names">
            <span class="bf-position"
              >${bf.id}.
              <a href="/boyfriends/${bf.id}">${bf.boyfriend}</a></span
            >
            <p class="image"><img src=${bf.mugshot} width="200" /></p>
          </div>`
        )}
      </div>
    </body>
  </html> `;
