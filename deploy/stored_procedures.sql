

DELIMITER $$
CREATE PROCEDURE checkLoginAndPassword(
    IN _email VARCHAR(32), 
    IN _password VARCHAR(64)
)
BEGIN
    SELECT *
    FROM users 
    WHERE Email=_email AND Password=_password;
END $$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE searchNew
(IN _id INT)
BEGIN
    SELECT * FROM news WHERE Id=_id;
END $$
DELIMITER ;
