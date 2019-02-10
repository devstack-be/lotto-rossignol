# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: eu-cdbr-west-02.cleardb.net (MySQL 5.6.42-log)
# Base de données: heroku_d8e47286581e2ab
# Temps de génération: 2019-02-10 17:36:20 +0000
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `numbers` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `drawings` WRITE;
/*!40000 ALTER TABLE `drawings` DISABLE KEYS */;

INSERT INTO `drawings` (`id`, `date`, `numbers`)
VALUES
	(1,'2019-02-02','3,8,10,39,40,43'),
	(2,'2019-02-09','11,12,15,22,42,43');

/*!40000 ALTER TABLE `drawings` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table players
# ------------------------------------------------------------

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `numbers` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;

INSERT INTO `players` (`id`, `name`, `numbers`)
VALUES
	(1,'Natan','1,2,6,8,19,23,24,30,37,41'),
	(2,'Mathieu','5,7,12,14,16,22,24,25,28,38'),
	(3,'Axelle','3,9,10,12,14,22,23,31,41,43'),
	(4,'Juliette','5,7,8,14,17,23,25,34,40,42'),
	(5,'Damien','2,3,5,7,14,15,17,19,23,37'),
	(6,'Djafar','4,7,11,18,20,21,27,28,38,41'),
	(7,'Bernard','1,5,8,15,20,22,28,35,39,41'),
	(8,'Sven','9,10,19,22,28,33,35,41,42,45'),
	(9,'Beire Coca','4,12,25,27,30,34,38,39,42,43'),
	(10,'Pamu','1,10,11,12,13,14,15,16,17,26'),
	(11,'Yannick','2,8,14,17,23,27,33,37,41,44'),
	(12,'Chantal','1,2,3,4,7,9,11,12,29,35'),
	(13,'Patche','6,13,14,15,17,20,23,25,27,34'),
	(14,'Francis','4,12,14,20,25,30,33,35,38,40'),
	(15,'Marcus','4,7,11,18,23,24,30,37,39,44'),
	(17,'Nico 2','1,3,6,11,19,21,22,23,24,25'),
	(18,'Yves','1,8,13,15,17,20,22,39,42,44'),
	(19,'Jenny','6,9,10,15,17,18,22,30,39,43'),
	(21,'Marc D','4,7,12,21,26,29,31,34,36,41'),
	(31,'Livin','3,7,9,12,15,23,26,40,41,44'),
	(41,'Dirkus','8,14,18,20,21,27,28,36,38,41'),
	(51,'Jlc','2,4,7,9,11,20,27,29,30,33'),
	(61,'Bebeck','10,13,14,24,33,34,36,38,40,42'),
	(71,'Jc8','2,5,11,13,23,25,29,34,40,43'),
	(81,'Beto','2,6,13,17,19,22,29,30,31,42'),
	(91,'Pappy (Biert.)','2,4,6,8,10,12,24,28,32,44'),
	(101,'Stoffels','7,8,9,10,21,22,23,24,25,42'),
	(111,'Suzanne Res.','1,2,5,6,10,14,19,28,41,45'),
	(121,'Bobo','8,12,15,16,20,22,24,26,29,37'),
	(131,'Polle Flik','1,2,4,13,21,24,27,33,39,44'),
	(141,'Willy Z','7,9,11,14,17,26,31,34,37,41'),
	(151,'Gerrit','3,4,7,9,11,17,20,29,30,31'),
	(161,'Patte','1,15,19,23,25,28,33,34,38,40'),
	(171,'Mumu','1,6,9,13,15,17,27,33,41,42'),
	(181,'Gilles','1,13,19,20,21,25,29,30,33,40'),
	(191,'Nante','2,3,5,7,9,10,13,18,25,42'),
	(201,'Chris','18,20,21,25,27,28,36,38,41,42'),
	(211,'Leten','3,7,17,20,24,25,31,32,38,45'),
	(221,'Henri','1,7,9,10,22,31,37,39,40,45'),
	(231,'Paul VDB','3,12,13,17,24,32,35,36,40,41'),
	(241,'Sonia','1,6,11,12,16,25,28,31,36,44'),
	(251,'Amandine','5,12,16,18,19,21,25,28,38,43'),
	(261,'Rosette','2,4,7,14,17,19,23,34,36,45'),
	(271,'Alois','4,6,8,18,27,29,33,36,40,44'),
	(281,'Dany H','1,3,22,23,25,28,31,35,37,41'),
	(291,'Louis BOT','5,7,13,19,26,27,29,31,33,42'),
	(301,'Fred','2,9,14,15,17,19,22,30,35,43'),
	(311,'Collo I','1,2,3,4,5,6,7,8,9,10'),
	(321,'Frederic (Coco)','3,11,14,21,25,28,35,37,42,43'),
	(331,'Joeri (Coco)','5,6,9,14,15,19,23,37,40,42'),
	(341,'Sylvana (Coco)','2,6,7,10,18,25,26,32,38,42'),
	(351,'Godelieve Res.','7,11,13,19,25,30,36,39,40,45'),
	(361,'Luc RSCA','4,8,12,16,22,26,30,34,38,40'),
	(371,'Didier Biert.','6,7,10,12,24,26,38,39,40,45'),
	(381,'Monique Biert.','16,23,27,31,32,35,42,43,44,45'),
	(391,'Coco','1,2,3,4,5,41,42,43,44,45'),
	(401,'Capi','2,5,7,12,18,26,36,37,42,45'),
	(411,'J-Pol','7,12,15,21,26,28,30,34,35,39'),
	(421,'Manu','2,7,14,16,19,21,27,30,35,40'),
	(431,'Pabo','2,4,5,6,7,12,17,21,30,45'),
	(441,'Steve R.','5,8,9,22,23,27,32,33,42,43'),
	(451,'Mon','4,6,9,10,11,14,26,27,35,43'),
	(461,'Alain','1,3,7,8,10,14,16,22,30,33'),
	(471,'Chantal Res.','1,2,5,6,13,15,18,21,26,42'),
	(481,'Jeanine Res.','4,8,9,15,17,24,25,30,31,36'),
	(491,'Stef Res.','1,2,5,6,10,19,28,29,41,42'),
	(501,'Odette Res.','3,4,11,18,19,21,23,27,37,39'),
	(511,'Luc W','4,7,8,9,11,12,16,21,26,30'),
	(521,'Marc N','9,10,11,12,28,31,33,39,42,45'),
	(531,'Sandra Res.','1,2,5,8,9,10,23,24,28,29'),
	(541,'Polle Res.','4,7,10,12,19,20,25,26,28,35'),
	(551,'Justin','2,4,12,13,25,27,28,35,41,42'),
	(561,'Nini','1,4,7,11,12,25,26,27,30,35'),
	(571,'Emile Res.','3,5,9,14,17,24,25,28,41,45'),
	(581,'Karel','1,3,4,7,8,9,16,22,33,44'),
	(591,'Andrea Res.','1,8,9,13,16,21,22,31,33,42'),
	(601,'Philippe','1,3,6,9,10,22,27,33,39,45'),
	(611,'Olivier B','1,4,5,6,8,9,10,13,14,31'),
	(621,'Greg B','6,9,16,19,24,27,32,33,41,42'),
	(631,'Marie Jo','2,8,10,13,17,23,26,32,38,42'),
	(641,'Corinne','11,13,18,21,23,27,36,38,40,45'),
	(651,'Dimi','20,21,22,23,24,25,26,27,28,29'),
	(661,'Bart','16,18,20,21,25,27,28,36,38,41'),
	(671,'Ilia','2,3,9,15,16,21,28,29,38,44'),
	(681,'Thierry','9,12,18,19,24,27,31,37,41,43'),
	(691,'Jp Tips','2,5,10,11,12,17,26,29,31,37'),
	(701,'Lahorra','1,2,3,5,6,14,24,30,41,44');

/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
