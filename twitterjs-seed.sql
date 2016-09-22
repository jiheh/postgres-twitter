TRUNCATE TABLE Users, Tweets;

INSERT INTO users (name, pictureUrl) VALUES ('Donald Trump',    'http://i.imgur.com/CTil4ns.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Ted Cruz',        'http://i.imgur.com/Ru6KUIm.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Bernie Sanders',  'http://i.imgur.com/KhisgEO.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Hillary Clinton', 'http://i.imgur.com/XbsjDcr.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Marco Rubio',     'http://i.imgur.com/cYxVyyg.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('John Kasich',     'http://i.imgur.com/I8WtzSw.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Kanye West',      'http://i.imgur.com/MItGWVS.jpg');
INSERT INTO users (name, pictureUrl) VALUES ('Taylor Swift',    'http://i.imgur.com/JKInSVz.jpg');

INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Donald Trump'),    'Make Fullstack great again!');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Ted Cruz'),        'We need a shutdown of Fullstack until Avalon is allowed again.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Bernie Sanders'),  'Fullstack should be free for all!');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Hillary Clinton'), 'It takes a village to raise a programmer.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Marco Rubio'),     'They''re making Promises they cannot resolve.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='John Kasich'),     'Only one person tweeting here has ever written Hello World.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Kanye West'),      'I''ma let you finish coding, but…');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Taylor Swift'),    'I knew you were trouble when you logged in.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Kanye West'),      'I think what Kanye West is going to mean is something similar to what Steve Jobs means.');
INSERT INTO tweets (userId, content) VALUES ((SELECT id from users where name='Taylor Swift'),    'I''ve got some whitespace baby — and I''ll write your `.name`');
