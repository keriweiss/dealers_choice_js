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
        boyfriend_id INTEGER REFERENCES top_5(id)
    );
    INSERT INTO top_5 (name) VALUES 
        ('David Puddy'),
        ('Keith Hernandez'),
        ('Jake Jarmel'),
        ('Ned Isakoff'),
        ('Aaron');
    INSERT INTO details (job, actor, boyfriend_id) VALUES 
        ('Mechanic', 'Patrick Warburton', 1),
        ('First Baseman for the NY Mets', 'Keith Hernandez', 2),
        ('Author', 'Marty Rackham', 3),
        ('Communist', 'Todd Kimsey', 4),
        ('Close Talker', 'Judge Reinhold', 5);
    INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES 
        ('The Fusilli Jerry', 6, 21, 1),
        ('The Face Painter', 6, 23, 1),
        ('The Butter Shave', 9, 1, 1),
        ('The Voice', 9, 2, 1),
        ('The Junk Mail', 9, 5, 1),
        ('The Apology', 9, 9, 1),
        ('The Dealership', 9, 11, 1),
        ('The Reverse Peephole', 9, 12, 1),
        ('The Burning', 9, 16, 1),
        ('The Finale', 9, 24, 1),
        ('The Boyfriend', 3, 17, 2),
        ('The Sniffling Accountant', 5, 4, 3),
        ('The Opposite', 5, 22, 3),
        ('The Scofflaw', 6, 13, 3),
        ('The Race', 6, 10, 4),
        ('The Raincoats', 5, 18, 5);

--  DROP TABLE IF EXISTS episodes;
--   DROP TABLE IF EXISTS details;
--   DROP TABLE IF EXISTS top_5;
--     CREATE TABLE top_5(
--         id SERIAL PRIMARY KEY,
--         name VARCHAR(250) NOT NULL
--     );
--     CREATE TABLE episodes(
--         id SERIAL PRIMARY KEY,
--         episode_name VARCHAR(250) NOT NULL,
--         season INTEGER,
--         episode_number INTEGER,
--         boyfriend_id INTEGER REFERENCES top_5(id)
--     );
--     CREATE TABLE details(
--         id SERIAL PRIMARY KEY,
--         job VARCHAR(100) NOT NULL,
--         actor VARCHAR(100),
--         boyfriend_id INTEGER REFERENCES top_5(id)
--     );
--     INSERT INTO top_5 (name) VALUES ('David Puddy');
--     INSERT INTO top_5 (name) VALUES ('Keith Hernandez');
--     INSERT INTO top_5 (name) VALUES ('Jake Jarmel');
--     INSERT INTO top_5 (name) VALUES ('Ned Isakoff');
--     INSERT INTO top_5 (name) VALUES ('Aaron');
--     INSERT INTO details (job, actor, boyfriend_id) VALUES ('Mechanic', 'Patrick Warburton', 1);
--     INSERT INTO details (job, actor, boyfriend_id) VALUES ('First Baseman for the NY Mets', 'Keith Hernandez', 2);
--     INSERT INTO details (job, actor, boyfriend_id) VALUES ('Author', 'Marty Rackham', 3);
--     INSERT INTO details (job, actor, boyfriend_id) VALUES ('Communist', 'Todd Kimsey', 4);
--     INSERT INTO details (job, actor, boyfriend_id) VALUES ('Close Talker', 'Judge Reinhold', 5);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Fusilli Jerry', 6, 21, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Face Painter', 6, 23, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Butter Shave', 9, 1, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Voice', 9, 2, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Junk Mail', 9, 5, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Apology', 9, 9, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Dealership', 9, 11, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Reverse Peephole', 9, 12, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Burning', 9, 16, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Finale', 9, 24, 1);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Boyfriend', 3, 17, 2);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Sniffling Accountant', 5, 4, 3);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Opposite', 5, 22, 3);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Scofflaw', 6, 13, 3);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Race', 6, 10, 4);
--     INSERT INTO episodes (episode_name, season, episode_number, boyfriend_id) VALUES ('The Raincoats', 5, 18, 5);