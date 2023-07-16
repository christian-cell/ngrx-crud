CREATE DATABASE Clients 


USE Clients 

CREATE SCHEMA MyFirstAPIschema 

CREATE TABLE laboratory_schema.Clients( ClientId INT IDENTITY(1,1) NOT NULL PRIMARY KEY , Name NVARCHAR(65), LastName nvarchar(130) , Age INT NULL , DNI nvarchar(23));