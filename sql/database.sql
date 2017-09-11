create table user(id int, name varchar(20));

	alter table user add mail_adress varchar(50);

	alter table user rename main;

	alter table main drop id, drop name, drop password;

	alter table main drop description;

	alter table main change column mail_adress email varchar(50);

	alter table main add follower int(11) after follows;

	alter table main change column follows followee int(11);

	alter table main drop created_time;


create table tweets (email varchar(50), tweet text, created_time datetime);


create table followd (email varchar(50), follower int(11));
	
	alter table followd rename followed;


create table following (email varchar(50), followee int(11));


create table user (email varchar(50), name varchar(30), password varchar(255))


alter table followd rename followed;