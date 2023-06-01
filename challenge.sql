-- space for sql schema and filler, may help with date/time questions on relay app

drop table if exists Donations;
drop table if exists People;

create table People (
ID serial primary key,
fullName VARCHAR(60) NOT NULL DEFAULT 'TBD',
streetAddress VARCHAR(60) NOT NULL DEFAULT 'TBD',
);

create table Donations (

);