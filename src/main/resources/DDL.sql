use kuro_sistema_uzsakovai;
drop table user;
drop table results;
create table user
(
    id       int PRIMARY KEY AUTO_INCREMENT,
    name     VARCHAR(100) null,
    username VARCHAR(250) not null UNIQUE,
    role     VARCHAR(50)  not null,
    password VARCHAR(60)  not null,
    date     date
);

CREATE TABLE results
(
    id                   int PRIMARY KEY AUTO_INCREMENT,
    customer_id          varchar(50) not null,
    protocol_id          varchar(50) not null,
    sample_id            varchar(50) not null,
    ash_value            double,
    total_moisture_value double,
    calorific_value      int,
    user_id              int         not null,
    date                 date,
    FOREIGN KEY (user_id) REFERENCES user (id)
);
show tables;

INSERT INTO `user`(name, username, role, password,date)
VALUES ('TauragesSiluma',
        'TauSil',
        'user',
        '$2a$10$qXeEgtffUOaFneHFwx4So.ClQIpCQgCX9EDbfpaVBKTM1GRHqcoVK',
        current_date);
INSERT INTO `user`(name, username, role, password,date)
VALUES ('DBT',
        'DBT',
        'user',
        '$2a$10$5V1pqxL8VOPyHHLaUTen8evWn.0UxXgc08SWQdjSsjwX7cv8riaJq',
        current_date);
INSERT INTO `user`(name, username, role, password,date)
VALUES ('admin',
        'admin',
        'admin',
        '$2a$10$dOjFBvg4.bwNtnwHJmf5LOoLyBJirmCPMhAm2dD2kjlGdyTo3jOTq',
        current_date);
delete from results where customer_id = 'admin';

insert into results ( customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id,
                     date)
values ('TauSil', '493', '1: BIOKURAS –BRK BENDRAS 2020.05.07 (G193881)', 6.09, 57.22, 17820, (select id from user where username = 'TauSil'), current_date);
insert into results ( customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id,
                     date)
values ('TauSil', '548', '1BB BRK SM3 2020.05.28 (G193875)', 3.93, 22.18, 18650, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '558', 'BIOKURAS – 1 BB BRK SM3 2020.06.05 (G193860)', 5.54, 32.70, 18510, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193809', 1.09, 48.53, 18735, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193811', 1.18, 38.69, 18548, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193812', 0.82, 43.92, 18625, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193842', 3.94, 32.42, 18482, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193843', 3.40, 31.70, 18867, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193844', 5.00, 36.74, 18814, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193845', 4.00, 28.09, 19415, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193850', 1.88, 29.90, 19180, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193851', 1.90, 39.85, 19038, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193852', 2.23, 33.34, 19196, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193853', 0.98, 33.23, 19156, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193855', 1.05, 48.09, 18845, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193868', 2.80, 24.97, 18773, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193869', 3.90, 35.57, 18991, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193870', 4.54, 35.14, 18925, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193871', 4.97, 40.30, 18899, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '578', 'G193893', 4.54, 34.30, 19020, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '596', 'G193834', 3.04, 0 , 18792, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '596', 'G193836', 4.50, 0, 18778, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '596', 'G193838', 1.88, 0, 18914, (select id from user where username = 'TauSil'), current_date),
       ('TauSil', '596', 'G193839', 0.98, 0, 18898, (select id from user where username = 'TauSil'), current_date),

       ('TauSil', '607', 'G193791(1-3TEŽ TK SM1 2020.06.26)', 1.17, 32.43, 19040, (select id from user where username = 'TauSil'), current_date);

insert into
    results ( customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id, date)
values ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date),
       ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date),
       ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date),
       ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date),
       ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date),
       ('id', 'protocol', 'sample', 0.0, 0.00, 0, (select id from user where username = 'TauSil'), current_date);

insert into results (customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id,
                     date)
values ('DBT', '1111', 'DD1234', 6.29, 20.24, 185641, (select id from user where username = 'DBT'), current_date);


select * from user;
select * from results;
