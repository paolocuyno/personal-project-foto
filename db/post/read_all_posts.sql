select p.id as post_id, title, img, content,  profile_pic, username as author_username, date_created from foto_posts p
join foto_users u on u.id = p.author_id
order by date_created desc;