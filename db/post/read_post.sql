select title, img,  content, profile_pic as author_pic, username as author from foto_posts p 
join foto_users u on u.id = p.author_id
where p.id = $1;