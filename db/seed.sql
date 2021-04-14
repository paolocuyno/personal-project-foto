

CREATE TABLE foto_users(
    id serial primary key,
    username varchar(100) not null,
    password varchar(100) not null,
    profile_pic text
);

CREATE TABLE foto_posts(
    id serial primary key,
    title varchar(45) not null,
    img text,
    content text,
    author_id integer REFERENCES foto_users(id) ,
    date_created timestamp
);