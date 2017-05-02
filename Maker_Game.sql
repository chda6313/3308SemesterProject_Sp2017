create database if not exists Maker_Game;

use Maker_Game; 

create table if not exists Levels(id integer primary key auto_increment,rating integer, publishment date, creator char(20), high_score integer, name char(20), comments char(140), review_num integer);

create table if not exists Platforms(id integer primary key auto_increment,lvl_id char(20), rect GEOMETRY, x_size integer, y_size integer); 

create table if not exists Coins(id integer primary key auto_increment,lvl_id char(20), coin GEOMETRY);

create table if not exists Goal(id integer primary key auto_increment,lvl_id char(20), goal GEOMETRY, x_size integer, y_size integer); 

create table if not exists Users(id integer primary key auto_increment,first_n char(10), last_n char(20), username char(10), password char(15));


/*example of populating a table*/
/*insert into Levels values (default, 1, '2017-03-21', 'chda6313', 20, 'exlevel1','my first level I created',0);
insert into Levels values (default, 2, '2017-04-11', 'hane0248', 32, 'BEST LVL','CAN\'T BE BEAT',0);
insert into Levels values (default, 4, '2016-12-21', 'chda6313', 3567, 'CHALLENGE','Super HARD',0);
insert into Levels values (default, 3, '2001-06-12', 'hane0248', 23450, 'Hams LVL','GIT GUD',0);
*/

/* Test Values for levels */
insert into Users values (default, 'Charlie', 'Davies', 'chda6313', 'password1');
insert into Users values (default, 'Hamilton', 'Nelson', 'hane0248', 'password2');

insert into Platforms (lvl_id, rect, x_size, y_size) VALUES (7, ST_Geomfromtext('POINT(250 250)'),80, 20);
insert into Platforms (lvl_id, rect, x_size, y_size) VALUES (7, ST_Geomfromtext('POINT(350 450)'),100, 20);
insert into Platforms (lvl_id, rect, x_size, y_size) VALUES (8, ST_Geomfromtext('POINT(150 350)'),40, 20);


insert into Coins (lvl_id, coin) VALUES (7, ST_Geomfromtext('POINT(250 250)'));
insert into Coins (lvl_id, coin) VALUES (7, ST_Geomfromtext('POINT(10 350)'));
insert into Coins (lvl_id, coin) VALUES (8, ST_Geomfromtext('POINT(10 150)'));

insert into Goal (lvl_id, goal, x_size, y_size) VALUES (7, ST_Geomfromtext('POINT(450 150)'),50, 150);
insert into Goal (lvl_id, goal, x_size, y_size) VALUES (8, ST_Geomfromtext('POINT(200 400)'),100, 50);

