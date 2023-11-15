-- use xploraTours

-- SELECT * from Users

CREATE PROCEDURE loginUser(
    @email varchar(200),
    @password VARCHAR(200)
)
AS
BEGIN
    SELECT * FROM Users WHERE email = @email 
END

DROP PROCEDURE loginUser