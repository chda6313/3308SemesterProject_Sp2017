<<<<<<< HEAD
create database if not exists Maker_Game;

use Maker_Game; 

=======
>>>>>>> 48b76db6cbaba7d6bc66d3b3139966b1cb28185c
 create table if not exists Levels(id integer primary key auto_increment,rating integer, publishment date, creator char(20), high_score integer);

create table if not exists Platforms(id integer primary key, rect geometry); 

create table if not exists Coins(id integer primary key, coin geometry);

 
