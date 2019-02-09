# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.5.5-10.1.37-MariaDB)
# Base de données: lotto
# Temps de génération: 2019-02-09 16:38:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table drawings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `drawings`;

CREATE TABLE `drawings` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `numbers` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `drawings` WRITE;
/*!40000 ALTER TABLE `drawings` DISABLE KEYS */;

INSERT INTO `drawings` (`id`, `date`, `numbers`)
VALUES
	(1,'2019-02-02','3,8,10,39,40,43'),
	(2,'2019-02-09','3,8,10,39,40,22');

/*!40000 ALTER TABLE `drawings` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table players
# ------------------------------------------------------------

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) NOT NULL,
  `numbers` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;

INSERT INTO `players` (`id`, `name`, `numbers`)
VALUES
	(2,'mathieu','1,2'),
	(6,'Vanshcep','3,10,12,22,29,35'),
	(7,'Antoine','2,5,11,20,25,30'),
	(8,'Zhair','3,10,13,22,29,30'),
	(9,'Natan','1,5,10,39,40,41'),
	(10,'Mathieu','3,8,10,22,40,43'),
	(11,'Axelle','1,5,10,20,25,30'),
	(12,'Justin','3,10,12,22,29,30'),
	(13,'Gilles','1,5,10,20,25,30'),
	(14,'Vanshcep','3,10,12,22,29,35'),
	(15,'Antoine','2,5,11,20,25,30'),
	(16,'Zhair','3,10,13,22,29,30'),
	(17,'joueurlol','1,2,3'),
	(18,'joueurnew','1,2'),
	(19,'joueurnewee','1,2'),
	(20,'testencore','1,2'),
	(21,'moi','1,2');

/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
