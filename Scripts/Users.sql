CREATE TABLE `Users` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(500) NOT NULL DEFAULT '',
	`EmailAddress` VARCHAR(255) NOT NULL DEFAULT '',
	`Password` VARCHAR(50) NOT NULL DEFAULT '',
	`MobileNumber` VARCHAR(15) NOT NULL DEFAULT '',
	`Course` VARCHAR(100) NOT NULL DEFAULT '',
	`Specialization` VARCHAR(200) NOT NULL DEFAULT '',
	`Experience` INT NOT NULL DEFAULT '0',
	UNIQUE KEY `MobileNumber` (`MobileNumber`) USING HASH,
UNIQUE KEY `EmailAddress` (`EmailAddress`) USING HASH,
	PRIMARY KEY (`Id`)
);
