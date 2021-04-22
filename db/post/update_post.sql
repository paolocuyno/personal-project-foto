UPDATE foto_posts
SET title=$2
WHERE id=$1
returning *;