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


insert into results (customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id,
                     date)
values ('TauSil', '9999', 'KJ1256', 5.89, 25.14, 205641, (select id from user where username = 'TauSil'), current_date);

insert into results (customer_id, protocol_id, sample_id, ash_value, total_moisture_value, calorific_value, user_id,
                     date)
values ('DBT', '1111', 'DD1234', 6.29, 20.24, 185641, (select id from user where username = 'DBT'), current_date);


select * from user;
