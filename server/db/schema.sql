\c carmadb

DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(20),
    model VARCHAR(20),
    year INT,
    vin VARCHAR(80),
    registration TEXT,
    diamond TEXT
);