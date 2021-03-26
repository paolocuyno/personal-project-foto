DROP TABLE IF EXISTS helo_users;

CREATE TABLE helo_users(
    id serial primary key,
    username varchar(100) not null,
    password varchar(30) not null,
    profile_pic text
)

CREATE TABLE helo_posts(
    id serial primary key,
    title varchar(45) not null,
    content text,
    img text,
    author_id integer,
    date_created timestamp
)