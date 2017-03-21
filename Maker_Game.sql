 create table if not exists Levels(id integer primary key auto_increment,rating integer, publishment date, creator char(20), high_score integer);

create table if not exists Platforms(id integer primary key, rect geometry); 

create table if not exists Coins(id integer primary key, coin geometry);

 
