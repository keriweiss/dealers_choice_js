const html = require("html-template-tag");

module.exports = ({ detail, episodes }) => html`<!DOCTYPE html>
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
      <div class="each-bf">
        <h2>${detail.boyfriend}</h2>
        <p id="image">
          <img src=${detail.mugshot} width="400" />
        </p>
        <div class="info">
          <p><span class="bullet">Played By:</span> ${detail.actor}</p>
          <p><span class="bullet">Job:</span> ${detail.job}</p>
          <p>
            <span class="bullet">Reason for breakup:</span>
            ${detail.breakup_reason}
          </p>

          <p class="episode-list">
            <span class="bullet">Appeared in:</span>
            ${episodes.map(
              (episode) =>
                html` <p class="each-ep">
                  ${episode.episode_name} Season: ${episode.season} Episode:
                  ${episode.episode_number}
                </p>`
            )}
          </p>
        </div>
      </div>
    </body>
  </html> `;
