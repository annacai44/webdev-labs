-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id , first_name , last_name FROM users ORDER BY last_name ;




-- Exercise 4

SELECT id , user_id , image_url FROM posts WHERE user_id = 26 ;


-- Exercise 5
SELECT id , user_id , image_url FROM posts WHERE user_id = 26 or user_id = 12 ;



-- Exercise 6
SELECT count(id) as count FROM posts ;



-- Exercise 7

SELECT user_id , count(id) as count FROM comments
GROUP BY user_id ;



-- Exercise 8

SELECT posts.id , posts.image_url , posts.user_id , users.username , users.first_name , users.last_name FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE posts.user_id = 26 or posts.user_id = 12 ;



-- Exercise 9

SELECT posts.id , posts.pub_date , following.following_id FROM posts
INNER JOIN following ON posts.user_id = following.following_id ;



-- Exercise 10







-- Exercise 11
INSERT INTO bookmarks (user_id , post_id , timestamp)
VALUES(26 , 219 , now());
INSERT INTO bookmarks (user_id , post_id , timestamp)
VALUES(26 , 220 , now());
INSERT INTO bookmarks (user_id , post_id , timestamp)
VALUES(26 , 221 , now());




-- Exercise 12


DELETE FROM bookmarks 
photo_app_lab3-# WHERE post_id = 219 ;
DELETE FROM bookmarks 
photo_app_lab3-# WHERE post_id = 220 ;
DELETE FROM bookmarks 
photo_app_lab3-# WHERE post_id = 221 ;
;

-- Exercise 13
UPDATE users
SET email = 'knick2022@gmail.com'
photo_app_lab3-# WHERE id = 26;




-- Exercise 14
