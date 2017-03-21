create database if not exists Maker_Game;

use Maker_Game; 

create table if not exists Levels(id integer primary key auto_increment,rating integer, publishment date, creator char(20), high_score integer, name char(20));

create table if not exists Platforms(id integer primary key, rect geometry); 

create table if not exists Coins(id integer primary key, coin geometry);


/*example of populating a table*/
insert into Levels values (1, 10, str_to_date('3-21-2017'), 'chda6313', 20, 'exlevel1');
