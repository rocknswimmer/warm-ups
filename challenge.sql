-- space for sql schema and filler, may help with date/time questions on relay app

drop table if exists Donations;
drop table if exists People;

create table People (
ID serial primary key,
fullName VARCHAR(60) NOT NULL,
streetAddress VARCHAR(60) NOT NULL,
);

create table Donations (
  ID serial primary key,
  People_ID INTEGER NOT NULL DEFAULT NULL REFERENCES People (id),
  Donation_Date VARCHAR(50) NOT NULL,
  Party INTEGER NOT NULL,
);