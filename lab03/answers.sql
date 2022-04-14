-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26;



-- Exercise 5
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26 OR user_id = 12;




-- Exercise 6
SELECT count(*) 
FROM posts;



-- Exercise 7
SELECT user_id, count(*)
FROM comments
GROUP BY user_id
ORDER BY count(*) DESC;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE user_id = 26 or user_id = 12;



-- Exercise 9
SELECT p.id, p.pub_date, f.following_id
FROM following f
INNER JOIN posts p 
ON f.following_id = p.user_id
WHERE f.user_id = 26;


-- Exercise 10
SELECT p.id, p.pub_date, f.following_id, u.username
FROM following f
INNER JOIN posts p 
    ON f.following_id = p.user_id
INNER JOIN users u
    ON u.id = f.following_id
WHERE f.user_id = 26
ORDER BY p.pub_date desc;



-- Exercise 11

INSERT INTO bookmarks (id, user_id, post_id, timestamp)
VALUES (596, 26, 219, now());

INSERT INTO bookmarks(id, user_id, post_id, timestamp)
VALUES (597, 26, 220, now());

INSERT INTO bookmarks(id, user_id, post_id, timestamp)
VALUES (598, 26, 221, now());


-- Exercise 12
DELETE FROM bookmarks
WHERE post_id = 219;

DELETE FROM bookmarks
WHERE post_id = 220;

DELETE FROM bookmarks
WHERE post_id = 221;


-- Exercise 13
UPDATE table_name
SET column1 = value1,
    column2 = value2,
    ...
WHERE condition;


-- Exercise 14
SELECT p.id, p.user_id, count(c.id), concat(substring(p.caption, 0, 50), '...')
FROM posts p
INNER JOIN comments c ON p.id = c.post_id
WHERE p.user_id = 26
GROUP BY p.id, p.user_id, p.caption
ORDER BY count(c.id) desc;