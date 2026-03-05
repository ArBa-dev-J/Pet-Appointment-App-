BEGIN;

CREATE TABLE
    registered_user (
        "userId" SERIAL PRIMARY KEY,
        "fullName" VARCHAR(100) NOT NULL UNIQUE,
        "userName" VARCHAR(100) NOT NULL UNIQUE,
        "password" VARCHAR(500) NOT NULL,
        "emailAddress" VARCHAR(30) NOT NULL UNIQUE
    );

CREATE TABLE
    patients (
        "pacientId" SERIAL PRIMARY KEY,
        "name" VARCHAR(50) NOT NULL,
        "date" timestamp [ (p) ] with time zone NOT NULL,
        "description" TEXT NOT NULL,
        "isConfirmed" BOOLEAN NOT NULL,
        "userId" INT NOT NULL,
        CONSTRAINT fk_user FOREIGN KEY ("userId") REFERENCES registered_user ("userId") ON DELETE CASCADE
    );

-- CREATE TABLE
--     "admin" (
--         "adminId" SERIAL PRIMARY KEY,
--         "fullName" VARCHAR(50) NOT NULL UNIQUE,
--         "userName" VARCHAR(100) NOT NULL UNIQUE,
--         "password" VARCHAR(500) NOT NULL UNIQUE,
--         "emailAddress" VARCHAR(30) NOT NULL UNIQUE
--     );

END;