DELIMITER $$

CREATE TRIGGER LanguageCountTrigger
AFTER INSERT ON countrylanguage
FOR EACH ROW
BEGIN
    DECLARE lang_count INT;

    SELECT COUNT(*) INTO lang_count
    FROM countrylanguage
    WHERE CountryCode = NEW.CountryCode;

    IF lang_count >= 10 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Country has 10 or more languages';
    END IF;
END $$

DELIMITER ;


INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang1', 'F', 4);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang2', 'F', 3);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang3', 'F', 5);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang4', 'F', 1);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang5', 'F', 6);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang6', 'F', 2);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang7', 'F', 4);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang8', 'F', 1);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang9', 'F', 5);
INSERT INTO CountryLanguage (CountryCode, Language, IsOfficial, Percentage) VALUES ('USA', 'Lang10', 'F', 4);