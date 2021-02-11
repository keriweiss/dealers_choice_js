const pg = require("pg");
const client = new pg.Client("postgres://localhost/elaines_bfs");

const syncAndSeed = async () => {
  const SQL = `
  DROP TABLE IF EXISTS episodes;
  DROP TABLE IF EXISTS details;
  DROP TABLE IF EXISTS top_5;
    CREATE TABLE top_5(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL
    );
    CREATE TABLE episodes(
        id SERIAL PRIMARY KEY,
        episode_name VARCHAR(250) NOT NULL,
        season INTEGER,
        episode_number INTEGER,
        boyfriend_id INTEGER REFERENCES top_5(id)
    );
    CREATE TABLE details(
        id SERIAL PRIMARY KEY,
        mugshot TEXT,
        job VARCHAR(100) NOT NULL,
        actor VARCHAR(100),
        breakup_reason TEXT,
        boyfriend_id INTEGER REFERENCES top_5(id)
    );
    INSERT INTO top_5 (name) VALUES 
        ('David Puddy'),
        ('Keith Hernandez'),
        ('Jake Jarmel'),
        ('Ned Isakoff'),
        ('Aaron');
    INSERT INTO details (mugshot, job, actor, breakup_reason, boyfriend_id) VALUES 
        ('/Puddy.jpg', 'Mechanic', 'Patrick Warburton', 'He wore body paint to a Devil''s game, he''s religious, he''s stupid, and Elaine''s going to prison.', 1),
        ('/keith.jpg', 'First Baseman for the NY Mets', 'Keith Hernandez', 'He''s a smoker.', 2),
        ('/Jake.png', 'Author', 'Marty Rackham', 'He refused to use exclamation points, and Elaine stopped for Jujyfruits.', 3),
        ('/ned.jpg', 'Communist', 'Todd Kimsey', 'Elaine gets Ned blacklisted from Hop Sing''s.', 4),
        ('/aaron.jpg', 'Close Talker', 'Judge Reinhold', 'He was too nice to Jerry''s parents.', 5);
    INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES 
        ('"The Fusilli Jerry"', 6, 21, 1),
        ('"The Face Painter"', 6, 23, 1),
        ('"The Butter Shave"', 9, 1, 1),
        ('"The Voice"', 9, 2, 1),
        ('"The Junk Mail"', 9, 5, 1),
        ('"The Apology"', 9, 9, 1),
        ('"The Dealership"', 9, 11, 1),
        ('"The Reverse Peephole"', 9, 12, 1),
        ('"The Burning"', 9, 16, 1),
        ('"The Finale"', 9, 24, 1),
        ('"The Boyfriend"', 3, 17, 2),
        ('"The Sniffling Accountant"', 5, 4, 3),
        ('"The Opposite"', 5, 22, 3),
        ('"The Scofflaw"', 6, 13, 3),
        ('"The Race"', 6, 10, 4),
        ('"The Raincoats"', 5, 18, 5);
    `;
  await client.query(SQL);
};

module.exports = { client, syncAndSeed };

const setUp = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log("connected");
  } catch (ex) {
    console.log(ex);
  }
};
setUp();
