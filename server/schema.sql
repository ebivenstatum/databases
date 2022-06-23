/*CREATE DATABASE chat;*/

USE chat;

/*CREATE TABLE messages (
  message_id int,
  user_id int,
  input text,
  room_id int,
  time_posted datetime,
  primary key (message_id)
);*/

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int,
  username varchar(255),
  primary key (id)
);

CREATE TABLE rooms (
  id int,
  roomname varchar(255),
  primary key (id)
);

alter table messages add foreign key (user_id) references users(id);
alter table messages add foreign key (room_id) references rooms(id);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

