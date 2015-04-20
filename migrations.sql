

CREATE DATABASE all_the_cards;

\c all_the_cards;

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));