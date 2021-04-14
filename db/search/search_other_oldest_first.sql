select p.id as post_id, title, img, content, profile_pic, date_created, username as author_username from foto_posts p
join foto_users u on u.id = p.author_id
where (p.author_id) not like $1
order by date_created asc;