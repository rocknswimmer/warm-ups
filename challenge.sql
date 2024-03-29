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
  Donation_Date INTEGER NOT NULL DEFAULT NULL,
  Party INTEGER NOT NULL,
);

insert into People (fullName, streetAddress) values ("A", "9A");
insert into People (fullName, streetAddress) values ("B", "8B");
insert into People (fullName, streetAddress) values ("C", "7C");
insert into People (fullName, streetAddress) values ("D", "6D");
-- insert into People (fullName, streetAddress) values ("E", "5E")

insert into Donations (People_ID, Donation_Date, Party) values (1, 1, 1)
insert into Donations (People_ID, Donation_Date, Party) values (1, 2, 1)
insert into Donations (People_ID, Donation_Date, Party) values (1, 3, 1)
insert into Donations (People_ID, Donation_Date, Party) values (1, 4, 1)

insert into Donations (People_ID, Donation_Date, Party) values (2, 1, -1)
insert into Donations (People_ID, Donation_Date, Party) values (2, 2, -1)
insert into Donations (People_ID, Donation_Date, Party) values (2, 3, -1)
insert into Donations (People_ID, Donation_Date, Party) values (2, 5, -1)

insert into Donations (People_ID, Donation_Date, Party) values (3, 1, -1)
insert into Donations (People_ID, Donation_Date, Party) values (3, 2, 1)
insert into Donations (People_ID, Donation_Date, Party) values (3, 3, -1)
insert into Donations (People_ID, Donation_Date, Party) values (3, 6, 1)

insert into Donations (People_ID, Donation_Date, Party) values (4, 1, -1)
insert into Donations (People_ID, Donation_Date, Party) values (4, 2, -1)
insert into Donations (People_ID, Donation_Date, Party) values (4, 3, 1)
insert into Donations (People_ID, Donation_Date, Party) values (4, 7, 1)

-- need to return name, most recent donation, political party guess, Address
-- extra-still works with no donations in

-- individual statements before combining
-- select fullName, streetAddress from People
-- figure out how to pull just largest value, like converting date to unix if no better way to do dates
-- sum up the values in party where fullName matches, should use ID's but not sure how to handle multiple similar full names in SQL based off promt and have already created my own db and seed file to attempt the promt, if positive R if negative D if even 0, questioned political statements of positive and negative