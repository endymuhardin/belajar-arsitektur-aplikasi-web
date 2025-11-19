CREATE TABLE students (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    gender CHAR(1) CHECK (gender IN ('L', 'M')),
    birth_date DATE,
    phone VARCHAR(20),
    address TEXT
);
