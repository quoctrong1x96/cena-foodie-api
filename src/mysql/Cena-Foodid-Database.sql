/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.28 : Database - cena_foodie
*********************************************************************
*/

SET NAMES utf8;

SET SQL_MODE='';

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cena_foodie` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `cena_foodie`;


/*Table structure for table `persons` */

DROP TABLE IF EXISTS `persons`;

CREATE TABLE `persons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `reference_code` varchar(200) DEFAULT NULL,
  `sex` int DEFAULT '0',
  `date_of_birth` date DEFAULT NULL,
  `work` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `persons` */

LOCK TABLES `persons` WRITE;

insert  into `persons`(`id`,`first_name`,`last_name`,`phone`,`image`,`state`,`created`,`reference_code`,`sex`,`date_of_birth`,`work`) values 
(2,'Bùi Quốc','Trọng','0975033060','image-1667751368377.jpg',1,'2022-03-08 14:41:38','ABC',0,'1996-01-25',NULL),
(3,'Cena','Tester 33','0949412113','image-1648355903027.jpg',1,'2022-03-11 00:48:05','ABC1',0,NULL,NULL),
(4,'Store','Manager 01','0987654321','image-1647661558768.jpg',1,'2022-03-19 10:45:58','ABC2',0,NULL,NULL),
(5,'Store','Manager 02','0987654322','image-1647661656221.jpg',1,'2022-03-19 10:47:36','ABC3',0,NULL,NULL),
(6,'Store','Manager 03','0987654333','image-1647661810742.jpg',1,'2022-03-19 10:50:10','ABC4',0,NULL,NULL),
(7,'Store','Manager 04','0987654324','image-1647661897573.jpg',1,'2022-03-19 10:51:37','ABC5',0,NULL,NULL),
(8,'Store','Manager 05','0987654325','image-1647661974435.jpg',1,'2022-03-19 10:52:54','ABC6',0,NULL,NULL),
(9,'Store','Manager 06','0987654326','image-1647662030678.jpg',1,'2022-03-19 10:53:50','ABC7',0,NULL,NULL),
(10,'Shipper','Siêu Vip 01','0989898989','image-1647773780214.jpg',1,'2022-03-20 17:56:20','8WYYCBTZFF',0,NULL,NULL),
(11,'Bạch Hùng','Cường','0949412110','image-1647781849368.jpg',1,'2022-03-20 20:10:49','ABC9',0,NULL,NULL),
(12,'ship0','dogjj','0685255954','image-1647783717608.jpg',1,'2022-03-20 20:41:57','ABC10',0,NULL,NULL),
(13,'Cena','Bach','0975033060','image-1648385710223.jpg',1,'2022-03-27 19:55:14','ABC11',0,NULL,NULL),
(14,'Long','Trương','0862456706','image-1648386463596.jpg',1,'2022-03-27 20:07:45','ABC12',0,NULL,NULL),
(15,'shiper ','Cường','0975033060','image-1648389444944.jpg',1,'2022-03-27 20:57:27','ABC13',0,NULL,NULL),
(16,'Abc','Def','0949412114','image-1648406666974.jpg',1,'2022-03-28 01:44:41','ABC14',0,NULL,NULL),
(17,'Bùi Quốc','Trọng','0949412115','image-1648525398227.jpg',1,'2022-03-29 10:43:25','ABC15',0,NULL,NULL),
(18,'Dollar','Bạch','0822188696','image-1649602488677.jpg',1,'2022-04-10 21:54:50','ABC17',0,NULL,NULL),
(19,'Bùi Quốc','Trọng 1','0949412116','image-1649866637583.jpg',1,'2022-04-13 23:17:27','ABC16',0,NULL,NULL),
(20,'Bui Quoc','Trong','0949412137','image-1650564817151.jpg',1,'2022-04-22 01:13:39',NULL,0,NULL,NULL),
(21,'Bui Quoc','Trong','0959412142','image-1650565815437.jpg',1,'2022-04-22 01:30:15',NULL,0,NULL,NULL),
(22,'Ho va','Ten','0649412112','image-1650695215557.jpg',1,'2022-04-23 13:26:56',NULL,0,NULL,NULL),
(23,'Trọng','Bùi Quốc','0999999991','image-1651508148560.jpg',1,'2022-05-02 23:16:29',NULL,0,NULL,NULL),
(24,'shipper 02','vip','0353636392','image-1651544172552.jpg',1,'2022-05-03 09:16:15',NULL,0,NULL,NULL),
(25,'03','shipper','0965342121','image-1651544301870.jpg',1,'2022-05-03 09:18:24',NULL,0,NULL,NULL),
(26,'vip 04','shipper','0949412124','image-1651544413361.jpg',1,'2022-05-03 09:20:15',NULL,0,NULL,NULL),
(27,'vip 05','shipper','0949461213','image-1651544589819.jpg',1,'2022-05-03 09:23:13',NULL,0,NULL,NULL),
(28,'Test from','POSTMANT','0949412332','image-1654534651231.png',1,'2022-06-06 23:57:31',NULL,0,NULL,NULL),
(29,'Shipper test','postman_shipper','0949412333','image-1654943687014.png',1,'2022-06-11 17:34:47','WLB43MTE77',0,NULL,NULL),
(30,'Shipper test','postman_shipper','0949412333','image-1654943752459.png',1,'2022-06-11 17:35:52','691RFO1P99',0,NULL,NULL),
(55,'Tester067','User 0124568','0949412112','image-1665203839884.jpg',1,'2022-09-04 09:46:30','KZUNUH20UU',0,NULL,NULL);

UNLOCK TABLES;


/*Table structure for table `addresses` */

DROP TABLE IF EXISTS `addresses`;

CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int DEFAULT NULL,
  `receiver` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `person_id` int NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `building` varchar(100) DEFAULT NULL,
  `door` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `flag` int DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `person_id` (`person_id`),
  CONSTRAINT `pk_addresses_person` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `addresses` */

LOCK TABLES `addresses` WRITE;

insert  into `addresses`(`id`,`type_id`,`receiver`,`latitude`,`longitude`,`person_id`,`phone`,`building`,`door`,`address`,`note`,`flag`) values 
(3,1,'Cena  Foodie','10.813818311113879','106.60279970616102',2,'0949090909','rrrrrr','dddddd','255/18 Đường Quốc lộ 1A, Bình Tân, Thành phố Hồ Chí Minh','nnnnn',0),
(4,2,'Cena  Foodie','10.815243285336779','106.60163763910532',2,'0949090909','Toà nhà Two','Coōng sau','791 Lê Trọng Tấn, Bình Tân, Thành phố Hồ Chí Minh','no',1),
(5,2,'Cena  Foodie','10.835042382197155','106.6230621188879',2,'0949090909','build 1','door a','18 Đông Hưng Thuận 42, Quận 12, Thành phố Hồ Chí Minh','note',1),
(6,3,'Cena  Foodie','10.831506019570718','106.62352077662943',2,'0949090909','b','d','222/18 Hẻm 222 Trường Chinh, Quận 12, Thành phố Hồ Chí Minh','m',0),
(7,1,'Cena  Foodie','10.832047392997875','106.62441428750753',2,'0949090909','bb','tttt','2/66A10 Tổ 13 Kp5, Quận 12, Thành phố Hồ Chí Minh','uuuu',1),
(8,1,'Store  Manager 02','37.421998333333335','-122.084',5,'0987654322','rfcf','rdce','1600 Amphitheatre Parkway, Santa Clara County, California','I h he z',1),
(9,2,'Cena  Foodie','37.422067419360786','-122.08396766334772',2,'0949090909','Tia A','Cong','1600 Amphitheatre Parkway, Santa Clara County, California','note',1),
(10,1,'Cena  Tester11','10.7824817','106.6807927',3,'0949412112','','','20/16H Kỳ Đồng, Quận 3, Thành phố Hồ Chí Minh','Gọi trước khi đến',1),
(11,0,'Cena  Tester11','10.782821554629566','106.6802779957652',3,'0949412112','Cafe BlackJack','cửa chính','112 Rạch Bùng Binh, Quận 3, Thành phố Hồ Chí Minh','Gọi khi đến, đứng trước quán cafe',1),
(12,1,'nhà trọ 1','11.4885742','106.8846118',2,'0822188696','','','55 Đường tỉnh 741, , Bình Phước','',1),
(13,1,'Store  Manager 03','10.838443333333334','106.62064',6,'0984014152','avb','aaa','78 Đường Trường Chinh, Quận 12, Thành phố Hồ Chí Minh','ok k',1),
(14,0,'User 01  02','10.837933942570135','106.62146151065826',11,'0949412112','','','97/13P Tổ 3 Kp6, Quận 12, Thành phố Hồ Chí Minh','',1),
(15,1,'Bùi Quốc  Trọng','10.78367359813524','106.67850907891989',19,'','tòa nhà A','Cổng A','47A/70 Đường Trần Văn Đang, Quận 3, Thành phố Hồ Chí Minh','Gọi trước khi orders',1),
(16,1,'Bùi Quốc Trọng','10.78367359813524','106.67850907891989',19,'0949412112','tòa nhà A','Cổng A','47A/70 Đường Trần Văn Đang, Quận 3, Thành phố Hồ Chí Minh','Gọi trước khi orders',1),
(17,1,'User 012  Name 021','10.817067716681823','106.60227902233602',11,'0949412112','','','207 Đường Quốc lộ 1A, Bình Tân, Thành phố Hồ Chí Minh','',1),
(19,1,'Bạch Hùng  Cường','10.783245435871214','106.68022770434617',2,'0975033060','','','85 Rạch Bùng Binh, Quận 3, Thành phố Hồ Chí Minh','',1),
(20,1,'Bùi Quốc Trọng','10.782629640089358','106.68096016224433',2,'0949412112','','','90/8 Bà Huyện Thanh Quan, Phường 9, Quận 3, HCM','Mang đến nhớ gọi',1),
(21,1,'Test  User 01','10.7825094','106.6808028',55,'0949412112',NULL,'','20/16H Kỳ Đồng, Quận 3, Thành phố Hồ Chí Minh','',1),
(22,2,'Test  User 01','10.781072008950646','106.67961917817593',55,'0949412112',NULL,'','121a Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','',1),
(23,2,'Test  User 01','10.781072008950646','106.67961917817593',55,'0949412112',NULL,'','121a Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','',1),
(24,0,'Test  User 01','10.781072008950646','106.67961917817593',55,'0949412112',NULL,'','121a Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','',1),
(25,3,'Test  User 01','10.781072008950646','106.67961917817593',55,'0949412112',NULL,'','121a Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','',1),
(26,3,'Test  User 01','10.781475143119028','106.6824183985591',55,'0949412112',NULL,'','80 Bà Huyện Thanh Quan, Quận 3, Thành phố Hồ Chí Minh','',1),
(27,2,'Test  User 01','10.781475143119028','106.6824183985591',55,'0949412112',NULL,'','80 Bà Huyện Thanh Quan, Quận 3, Thành phố Hồ Chí Minh','',1),
(28,1,'Test  User 01','10.782803440033282','106.67798403650522',55,'0949412112',NULL,'02','96/34 Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','Gọi khi đến',1),
(29,3,'Test  User 01','10.782803440033282','106.67798403650522',55,'0949412112',NULL,'def','96/34 Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','ght',1),
(30,2,'Test  User 01','10.782803440033282','106.67798403650522',55,'0949412112',NULL,'fjjr','96/34 Nguyễn Thông, Quận 3, Thành phố Hồ Chí Minh','xhdhue82i',1);

UNLOCK TABLES;

/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `categories` */

LOCK TABLES `categories` WRITE;

insert  into `categories`(`id`,`category`,`description`,`store_id`) values 
(1,'Drinks','A drink is a liquid intended for human consumption.',0),
(2,'Món ngon 2','Món ngon mỗi ngày',0),
(3,'Rice','Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima.',0),
(4,'Snacks','A small amount of food that is eaten between meals, or a very small meal',0),
(5,'Ăn vặt','Đồ ăn vặt',0),
(9,'Thức uống có cồn','Thức uống có cồn cao quá cao',1),
(10,'Món mặn','Món dùng cho nhậu một',1),
(11,'monster','Thức uống lạnh',3),
(12,'Món ngon 2','Món ngon mỗi ngày',3),
(13,'Hải sản tươi sống','Hải sản tươi sống lấy từ Vũng Tàu',3),
(14,'Phúc long','Trà sữa loại ngon',1),
(15,'Trà sữa','Đây là món trà trộn với sữa',2),
(17,'Cay nóng','món cay ngon nóng bỏng',1),
(18,'Món ngon','Món ngon mỗi ngày',NULL),
(19,'Món 02','Món đúng tiêu chuẩn người Hoa kì',1),
(20,'Nước ép trái cây','Nước ép các loại',1);

UNLOCK TABLES;

/*Table structure for table `discount_types` */

DROP TABLE IF EXISTS `discount_types`;

CREATE TABLE `discount_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  `math` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `discount_types` */

LOCK TABLES `discount_types` WRITE;

insert  into `discount_types`(`id`,`name`,`unit`,`math`) values 
(1,'Giảm giá (Giá trị cố định)','vnđ','`total - value_discount`'),
(2,'Giảm giá (Theo %)','%','max((total - (total* value_discount)), (total - max_discount))'),
(3,'Tích điểm','điểm','`(total/value_discount).toInt()`');

UNLOCK TABLES;

/*Table structure for table `discounts` */

DROP TABLE IF EXISTS `discounts`;

CREATE TABLE `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_type_discount` int DEFAULT NULL,
  `min_orders` int DEFAULT NULL,
  `used_time` int DEFAULT '1',
  `value_discount` int DEFAULT NULL,
  `max_discount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `discounts` */

LOCK TABLES `discounts` WRITE;

insert  into `discounts`(`id`,`id_type_discount`,`min_orders`,`used_time`,`value_discount`,`max_discount`) values 
(1,1,100000,1,15000,15000),
(5,3,100000,1,20,100000),
(7,3,50000,1,50,200000),
(10,1,1000,1,45,100000);

UNLOCK TABLES;


/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `delivery_id` int DEFAULT NULL,
  `address_id` int NOT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'PAID OUT',
  `receipt` varchar(100) DEFAULT NULL,
  `amount` double(11,2) DEFAULT NULL,
  `pay_type` varchar(50) NOT NULL,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `store_id` int DEFAULT NULL,
  `store_latitude` varchar(50) DEFAULT NULL,
  `store_longitude` varchar(50) DEFAULT NULL,
  `delivered_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `delivery_id` (`delivery_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `fk_orders_addresses` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `fk_orders_person_client` FOREIGN KEY (`client_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `fk_orders_person_delivery` FOREIGN KEY (`delivery_id`) REFERENCES `persons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `orders` */

LOCK TABLES `orders` WRITE;

insert  into `orders`(`id`,`client_id`,`delivery_id`,`address_id`,`latitude`,`longitude`,`status`,`receipt`,`amount`,`pay_type`,`update_date`,`store_id`,`store_latitude`,`store_longitude`,`delivered_time`) values 
(8,5,10,8,'37.421998333333335','-122.084','DELIVERED',NULL,54000.00,'CASH PAYMENT','2022-03-20 19:09:35',1,NULL,NULL,NULL),
(9,2,10,5,'37.421998333333335','-122.084','ON WAY',NULL,284000.00,'CASH PAYMENT','2022-03-20 20:14:14',2,NULL,NULL,NULL),
(10,2,10,4,'37.421998333333335','-122.084','ON WAY',NULL,314000.00,'CASH PAYMENT','2022-03-20 20:25:22',1,NULL,NULL,NULL),
(11,2,10,9,'37.421998333333335','-122.084','DELIVERED',NULL,174000.00,'CASH PAYMENT','2022-03-20 20:36:20',1,NULL,NULL,NULL),
(12,2,12,6,NULL,NULL,'DISPATCHED',NULL,51000.00,'CASH PAYMENT','2022-03-20 20:36:20',1,NULL,NULL,NULL),
(13,2,10,5,'37.421998333333335','-122.084','ON WAY',NULL,381000.00,'CASH PAYMENT','2022-03-27 21:32:48',1,NULL,NULL,NULL),
(14,2,10,9,'37.421998333333335','-122.084','DELIVERED',NULL,54000.00,'CASH PAYMENT','2022-03-27 21:46:42',1,NULL,NULL,NULL),
(15,2,10,9,NULL,NULL,'DISPATCHED',NULL,755000.00,'CASH PAYMENT','2022-03-20 20:36:20',1,'11.53706945733815','106.90155789737005',NULL),
(16,5,NULL,8,NULL,NULL,'DELIVERED',NULL,29000.00,'CASH PAYMENT','2022-04-02 21:56:19',1,NULL,NULL,NULL),
(17,6,NULL,13,NULL,NULL,'DELIVERED',NULL,45000.00,'CASH PAYMENT','2022-04-03 08:31:10',1,NULL,NULL,NULL),
(18,11,10,14,NULL,NULL,'DISPATCHED',NULL,155000.00,'CASH PAYMENT','2022-04-03 12:06:05',1,'11.53706945733815','106.90155789737005',NULL),
(19,11,NULL,14,NULL,NULL,'DELIVERED',NULL,80000.00,'CASH PAYMENT','2022-04-03 12:19:25',1,NULL,NULL,NULL),
(20,11,10,14,NULL,NULL,'DISPATCHED',NULL,80000.00,'CASH PAYMENT','2022-04-03 12:19:49',1,'11.53706945733815','106.90155789737005',NULL),
(21,11,NULL,14,NULL,NULL,'DELIVERED',NULL,80000.00,'CASH PAYMENT','2022-04-03 12:22:17',1,NULL,NULL,NULL),
(27,11,10,14,NULL,NULL,'DISPATCHED',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:40:42',1,'11.53706945733815','106.90155789737005',NULL),
(28,11,NULL,14,NULL,NULL,'DELIVERED',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:50:38',1,NULL,NULL,NULL),
(29,11,NULL,14,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:51:19',2,NULL,NULL,NULL),
(30,11,NULL,14,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:51:26',2,NULL,NULL,NULL),
(31,11,NULL,14,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:51:45',2,NULL,NULL,NULL),
(32,11,NULL,14,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:51:51',2,NULL,NULL,NULL),
(33,11,NULL,14,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-04-03 12:52:12',3,NULL,NULL,NULL),
(38,11,NULL,14,NULL,NULL,'PAID OUT',NULL,90000.00,'CASH PAYMENT','2022-04-03 12:56:35',3,NULL,NULL,NULL),
(39,11,NULL,14,NULL,NULL,'PAID OUT',NULL,90000.00,'CASH PAYMENT','2022-04-03 12:57:03',3,NULL,NULL,NULL),
(40,11,10,14,'37.421998333333335','-122.084','ON WAY',NULL,90000.00,'CASH PAYMENT','2022-04-03 12:57:31',3,NULL,NULL,NULL),
(41,11,10,14,NULL,NULL,'DISPATCHED',NULL,125000.00,'CASH PAYMENT','2022-04-04 22:11:59',3,'11.536713265006131','106.895650722659',NULL),
(42,11,NULL,14,NULL,NULL,'PAID OUT',NULL,60000.00,'CASH PAYMENT','2022-04-10 18:24:58',NULL,NULL,NULL,NULL),
(44,2,NULL,4,NULL,NULL,'PAID OUT',NULL,100000.00,'CASH PAYMENT','2022-04-22 02:56:28',NULL,NULL,NULL,NULL),
(45,2,10,4,'10.838443333333334','106.62064','ON WAY',NULL,160000.00,'CASH PAYMENT','2022-04-22 09:44:12',1,'11.53706945733815','106.90155789737005',NULL),
(46,2,10,3,'10.7825316','106.6807665','ON WAY',NULL,90000.00,'CASH PAYMENT','2022-05-08 00:36:34',1,'11.53706945733815','106.90155789737005',NULL),
(47,2,NULL,4,NULL,NULL,'PAID OUT',NULL,110000.00,'CASH PAYMENT','2022-05-08 09:48:03',NULL,NULL,NULL,NULL),
(48,2,NULL,6,NULL,NULL,'PAID OUT',NULL,45000.00,'CASH PAYMENT','2022-05-08 09:53:29',NULL,NULL,NULL,NULL),
(49,2,NULL,7,NULL,NULL,'PAID OUT',NULL,30000.00,'CASH PAYMENT','2022-05-08 10:01:50',NULL,NULL,NULL,NULL),
(51,2,NULL,10,NULL,NULL,'PAID OUT',NULL,120000.00,'CASH PAYMENT','2022-06-11 19:00:33',NULL,NULL,NULL,NULL),
(52,2,NULL,10,NULL,NULL,'PAID OUT',NULL,120000.00,'CASH PAYMENT','2022-06-11 19:03:25',NULL,NULL,NULL,NULL),
(53,2,NULL,10,NULL,NULL,'PAID OUT',NULL,120000.00,'CASH PAYMENT','2022-06-12 16:44:33',NULL,NULL,NULL,NULL);

UNLOCK TABLES;


/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` double(11,2) NOT NULL,
  `status` int DEFAULT '1',
  `category_id` int NOT NULL,
  `store_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `fk_products_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `products` */

LOCK TABLES `products` WRITE;

insert  into `products`(`id`,`name`,`description`,`price`,`status`,`category_id`,`store_id`) values 
(17,'Trà sữa Ô long thượng hạng','Trà sữa Ô Long ngon nhất hiện nay',31000.00,1,1,1),
(18,'Trà sữa Kimochi','tea sua 02',270000.00,0,1,1),
(19,'Trà sữa Mèo hoang','tea sua des',37500.00,0,1,1),
(20,'Trà sữa Man rợ','dog guy',26000.00,0,1,1),
(22,'Sp01','sssss',150000.00,0,1,1),
(23,'sp1','dc1',123.00,1,10,-1),
(24,'banh Trang tron','bbb',15000.00,1,4,1),
(25,'My cat cap 1','My cat ngon ngon',35000.00,1,12,3),
(26,'nuoc ngot 7 up','abc',10000.00,1,1,3),
(27,'Rau câu Hạ Long','ngon bổ rẻ',19000.00,0,4,1),
(28,'Trà sữa Hà Lan','Trà sữa xuất xứ từ Hà Lan, mang hương vị của hoa Ly và hoa Cúc vàng',28000.00,1,1,1),
(29,'Bánh bông lan trứng muối','bánh bông an trứng nuối rất ngon',25000.00,1,17,1),
(30,'Trà sữa midu','Trà sữa 01',12000.00,1,12,3),
(31,'Trà sữa 01','Trà sữa 0222',12000.00,1,12,3),
(32,'Trà sữa 0000011111','Trà sữa 0000011111',12000.00,1,12,3),
(33,'Nước ép táo','Nước ép táo',26000.00,1,20,1),
(34,'Nước ép táo','Nước ép táo',26000.00,0,20,1),
(35,'Nước ép Cam','Nước ép Cam',26000.00,1,20,1),
(36,'Nước dưa Hấu','Nước ép dưa Hấu',200000.00,1,20,1);

UNLOCK TABLES;


/*Table structure for table `order_details` */

DROP TABLE IF EXISTS `order_details`;

CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` double(11,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `fk_rderdetails_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_rderdetails_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `order_details` */

LOCK TABLES `order_details` WRITE;

insert  into `order_details`(`id`,`order_id`,`product_id`,`quantity`,`price`) values 
(1,8,18,3,75000.00),
(2,8,17,1,29000.00),
(3,9,17,5,145000.00),
(4,9,19,1,35000.00),
(5,9,20,4,104000.00),
(6,10,17,6,174000.00),
(7,10,19,4,140000.00),
(8,11,17,6,174000.00),
(9,12,18,3,75000.00),
(10,12,20,3,78000.00),
(11,13,17,4,116000.00),
(12,13,18,5,125000.00),
(13,13,19,4,140000.00),
(14,14,17,1,29000.00),
(15,14,18,1,25000.00),
(16,15,18,2,50000.00),
(17,15,17,1,29000.00),
(18,15,22,3,450000.00),
(19,15,24,4,60000.00),
(20,15,19,4,140000.00),
(21,15,20,1,26000.00),
(22,16,17,2,58000.00),
(23,17,26,1,10000.00),
(24,17,25,1,35000.00),
(25,18,25,3,105000.00),
(26,18,26,5,50000.00),
(27,19,26,2,20000.00),
(28,19,25,2,70000.00),
(29,20,26,2,20000.00),
(30,20,25,2,70000.00),
(31,21,26,2,20000.00),
(32,21,25,2,70000.00),
(33,27,26,1,10000.00),
(34,27,25,1,35000.00),
(35,28,26,1,10000.00),
(36,28,25,1,35000.00),
(37,29,25,1,35000.00),
(38,29,26,1,10000.00),
(39,30,26,1,10000.00),
(40,30,25,1,35000.00),
(41,31,26,1,10000.00),
(42,31,25,1,35000.00),
(43,32,26,1,10000.00),
(44,32,25,1,35000.00),
(45,33,26,1,10000.00),
(46,33,25,1,35000.00),
(47,38,26,2,20000.00),
(48,38,25,2,70000.00),
(49,39,26,2,20000.00),
(50,39,25,2,70000.00),
(51,40,26,2,20000.00),
(52,40,25,2,70000.00),
(53,41,25,3,105000.00),
(54,41,26,2,20000.00),
(55,42,19,1,35000.00),
(56,42,18,1,25000.00),
(57,44,19,2,70000.00),
(58,44,24,2,30000.00),
(59,45,19,1,35000.00),
(60,45,18,5,125000.00),
(61,46,18,3,75000.00),
(62,46,19,4,140000.00),
(63,46,17,3,90000.00),
(64,47,17,2,60000.00),
(65,47,18,2,50000.00),
(66,48,26,1,10000.00),
(67,48,25,1,35000.00),
(68,49,17,1,30000.00),
(69,51,32,2,20000.00),
(70,51,31,2,20000.00),
(71,52,32,2,20000.00),
(72,52,31,2,20000.00),
(73,53,32,2,20000.00),
(74,53,31,2,20000.00);

UNLOCK TABLES;


/*Table structure for table `product_images` */

DROP TABLE IF EXISTS `product_images`;

CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) DEFAULT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `fk_productimages_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `product_images` */

LOCK TABLES `product_images` WRITE;

insert  into `product_images`(`id`,`picture`,`product_id`) values 
(48,'image-1647538813554.jpg',17),
(49,'image-1647686994853.jpg',18),
(50,'image-1647687117173.png',19),
(51,'image-1647687179650.jpg',20),
(53,'image-1648389780021.jpg',23),
(54,'image-1648528493265.jpg',24),
(55,'image-1648947829932.jpg',25),
(56,'image-1648947916775.jpg',26),
(57,'image-1649603265744.jpg',27),
(58,'image-1651420989603.jpg',29),
(59,'image-1654945172359.png',31),
(60,'image-1654945172361.png',31),
(61,'image-1654946169578.png',32),
(62,'image-1654946169579.png',32),
(63,'image-1668530698524.jpg',34),
(64,'image-1668530826664.jpg',35),
(65,'image-1668530987614.jpg',36);

UNLOCK TABLES;

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `state` int DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `roles` */

LOCK TABLES `roles` WRITE;

insert  into `roles`(`id`,`rol`,`description`,`state`) values 
(1,'Admin','Admin',1),
(2,'Client','Client',1),
(3,'Delivery','Delivery',1);

UNLOCK TABLES;

/*Table structure for table `stores` */

DROP TABLE IF EXISTS `stores`;

CREATE TABLE `stores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `open_time` time DEFAULT NULL,
  `close_time` time DEFAULT NULL,
  `price_advance` decimal(10,2) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `categories` varchar(50) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `stores` */

LOCK TABLES `stores` WRITE;

insert  into `stores`(`id`,`name`,`address`,`latitude`,`longitude`,`open_time`,`close_time`,`price_advance`,`user_id`,`categories`,`state`,`image`) values 
(1,'Cena Foodie Store','1137 Phú Riềng Đỏ, Thành phố Đồng Xoài, Phường Tân Bình, Thành Phố Đồng Xoài, Tỉnh Bình Phước','11.53706945733815','106.90155789737005','09:00:00','23:00:00',25000.00,2,'1,2,3',1,'image-1629870722142.jpg'),
(2,'Cena Foodie 02','562 QL14, Tân Phú, Đồng Xoài, Bình Phước, Vietnam','11.535693591534612','106.89230332567323','09:00:00','23:00:00',25000.00,4,'1,2,3,4',1,'image-1629871097926.jpg'),
(3,'Mì cay Seoul','615 QL14, Tân Phú, Đồng Xoài, Bình Phước, Vietnam','11.536713265006131','106.895650722659','09:00:00','23:00:00',25000.00,5,'3,4',1,'image-1629871097926.jpg'),
(4,'Bánh Khọt Cô Hai','Đường D20, Phường, Đồng Xoài, Bình Phước, Vietnam','11.53465289004868','106.89393410882015','09:00:00','23:00:00',25000.00,6,'1,2',1,'image-1629870861994.jpg'),
(5,'The King Cafe','71 Hùng Vương, Tân Bình, Đồng Xoài, Bình Phước, Vietnam','11.531371150577138','106.8899782992429','09:00:00','23:00:00',35000.00,7,'0,1',1,'image-1629870861994.jpg'),
(6,'Phố Nướng Seoul Đồng Xoài','Đường Phú Riềng Đỏ, Tân Xuân, Đồng Xoài, Bình Phước 83000, Vietnam','11.525817076011716','106.89364284005258','09:00:00','23:00:00',35000.00,8,'0,1',1,'image-1629871040218.jpg'),
(7,'Kenna Quán','Nguyễn Huệ, Tân Xuân, Đồng Xoài, Bình Phước, Vietnam','11.522179732072887','106.89681857559428','09:00:00','23:00:00',35000.00,9,'1,3',1,'image-1632453837395.jpg');

UNLOCK TABLES;

/*Table structure for table `user_reference` */

DROP TABLE IF EXISTS `user_reference`;

CREATE TABLE `user_reference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `reference_code` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_reference_idx` (`user_id`),
  CONSTRAINT `fk_reference` FOREIGN KEY (`user_id`) REFERENCES `persons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng dữ liệu cho mã giới thiêu người dùng';

/*Data for the table `user_reference` */

LOCK TABLES `user_reference` WRITE;

insert  into `user_reference`(`id`,`user_id`,`date`,`reference_code`) values 
(8,2,'2022-06-09 23:56:30','8WYYCBTZFF'),
(22,55,'2022-09-04 09:47:07','WLB43MTE77');

UNLOCK TABLES;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `person_id` int NOT NULL,
  `rol_id` int NOT NULL,
  `notification_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `person_id` (`person_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `fk_users_person` FOREIGN KEY (`person_id`) REFERENCES `persons` (`id`),
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

LOCK TABLES `users` WRITE;

insert  into `users`(`id`,`users`,`email`,`password`,`person_id`,`rol_id`,`notification_token`) values 
(2,'Cena','cenafoodie@gmail.com','$2b$10$lvhVxePuma3KHhB0JuZwW.mGuVzNATYFiFXqzVqaVIr.IJlIC9mV2',2,1,'c2vN3tIyR9GBRoMtOa4Okq:APA91bEpb1HaPd0lSEJeiF_7o0Ka7R005EYJnrDk2gvBWBlePuzpfrTRMljrMb__r81-abOa3_Gw96jb_j4Nu7tlc4BTWGJASo77C9V605wOCIpfcgLEdxRXtiWkkfWaba4jQ_4dRTGQ'),
(3,'Cena','cenatester1@gmail.com','$2b$10$dWvaV/z3Re5ZtsxQVsGwC.vwnLnL8JnOph9.Y8AKNHtI68vIs42ZO',3,2,'dDqJOh-KTwGUYtf_ZoY5qf:APA91bG5agz7C444huBtJMkoN8KMIokYc5oTvefop-Tk1WKwP0epwXhtsTKKxvpxHu9X7MAYzi1qPTJpQ4HC_jO83o1aoUOiwSVtTH72phNgrVYeXPWyCKKPhWN9t7yu-q4R1uktZ1Ud'),
(4,'Store','store01@gmail.com','$2b$10$GV1F.BQPuzPSBrXj3Rc83OmKqkoKfSHBEK5533yykIpZ.XJ2KEGUq',4,1,'ed21NoG2T3GUxHbRMQJV-J:APA91bGChujuTzXAqAT_AIlS-P3mrM6X68xIo_MCCLAmt7yTv4EoBJCBw_9ex6jKUAQrRkSHXXEVyMNkZoEnFDIn_xVPTGTmQAFJv8sGBMzQaQRTHuGfSdBwWigaIy9UUNu7oiWbJ3nA'),
(5,'Store','store02@gmail.com','$2b$10$JGnGkWW/Hb74dr.P9GCIouZfhcdn8pn4qz3drlYZkM9F/7b7LvZja',5,1,'di7PLMeFRSyClY8aoHe_pR:APA91bHckTYIBsWgiPBKe649QzpZANo0bUeZNvrYhSNSAQCFWE1SWQYH6USbkI6_UKBzOREYNQcnVNpdtNfzkmPIzql1XkXJSJFaNBmqpYZ-wS787SzRQRKEYaUAJ-r-cCns4s-R7Vwe'),
(6,'Store','store03@gmail.com','$2b$10$YcmsDiK9b4H3DaBP3htgG.xw9o3x6lE1d7wxx33t3R9ztumHwHwGq',6,1,'ei1O39eqRRKn39ZSfasBeP:APA91bFfF9yhp_pSs-yTCWFyzOyNUIv-VLOeyUQKAvbRvTRt9pStffXCyFWkZVv3feGZPQ4UT_4vsOQA4I62LWD0BjU9S9rlArFTk4HR7PHZc6Y0F8CDwxhKPj3gI0Wd-OaikXIOc4rs'),
(7,'Store','store04@gmail.com','$2b$10$4K7TxsruOFMe1YZpRPzj1O7K6zMvWac4WS8/9SbxxfqxA33esn/RS',7,1,'fdbTqL0iT8OBT5zew6PAFZ:APA91bHbSbYO7IVyIyFcwnnrVUjLcufoQjNnK3b3LEaZEQXjXcgrNZnu-f3U0u2BSB_7wca_USC8UvDC1SyvQ4zZBAKjL5gJr-Mj2sKd-Ke764gBl-2WzZWtDfD0If49Fhw4iw76vtTB'),
(8,'Store','store05@gmail.com','$2b$10$2HSac.FJpmLjqa6.I0sUkO.PVW32JpEbIQ5vhYqdcLltoS9r8WrvK',8,1,'fdbTqL0iT8OBT5zew6PAFZ:APA91bHbSbYO7IVyIyFcwnnrVUjLcufoQjNnK3b3LEaZEQXjXcgrNZnu-f3U0u2BSB_7wca_USC8UvDC1SyvQ4zZBAKjL5gJr-Mj2sKd-Ke764gBl-2WzZWtDfD0If49Fhw4iw76vtTB'),
(9,'Store','store06@gmail.com','$2b$10$xUtKKgHIN.NKdsrHYFEGp.IF51WHfc.KS4jycmUFlyuiYdmSnj6sW',9,1,'fdbTqL0iT8OBT5zew6PAFZ:APA91bHbSbYO7IVyIyFcwnnrVUjLcufoQjNnK3b3LEaZEQXjXcgrNZnu-f3U0u2BSB_7wca_USC8UvDC1SyvQ4zZBAKjL5gJr-Mj2sKd-Ke764gBl-2WzZWtDfD0If49Fhw4iw76vtTB'),
(10,'Shipper','ship01@gmail.com','$2b$10$I4J8NPBxt8fL.Eyh33beHuDvlmXwb610e1B/te8FtnSnHRE2bK2bW',10,3,'cvMVGlYdRPW_5Ce-EZXCe-:APA91bHgWVuVW9lrku1X_1tEUQLw7cjoYspQbbfy16tDWKJyVtVD81mS-BFfHf96sU9O29A0OSbvJoZhdPnSUw_oUWRws-nku3zGVRED4gh3vPu6vEharun_YqObLzScLDHzS0w3l0SB'),
(11,'User 01','user123@gmail.com','$2b$10$FVBC4Tfl2GzSpsyNPUTZVu4HQvgQE172bZKDrpy5bjPE/SJ7i8sm.',11,2,'eFr_1Mw-TJyhcw9OJVbLFg:APA91bEhp0cGcf8-M8dXCGrMGV6xP46E_PC9ELTemCrO4pDn-2colaPiJ4uyXFF5WEfX_3YtkQHpx38KIVP0gf6nZ7JkauvTZnr6eBUNUHMxP50EdI8hVIFMqYW8XW455-1IImdpaRsJ'),
(12,'ship0','shipper001@gmail.com','$2b$10$fI3JkRbcVArEZe60bEFU5.H24Z27OtzM78wjAK7Ms.X9f41GqDMU6',12,3,'ei1O39eqRRKn39ZSfasBeP:APA91bFfF9yhp_pSs-yTCWFyzOyNUIv-VLOeyUQKAvbRvTRt9pStffXCyFWkZVv3feGZPQ4UT_4vsOQA4I62LWD0BjU9S9rlArFTk4HR7PHZc6Y0F8CDwxhKPj3gI0Wd-OaikXIOc4rs'),
(13,'Cena','cena.bach89@gmail.com','$2b$10$TJyJqYgLnSgB/GbQMAK4T.gkUA0gDZrACe7FEPRgD6CoEQVITL5wC',13,2,'cu1s5uSURUWatcWtUBcA2Q:APA91bE4Ls0W4_ODtr0HdA547oDqBT51S_2x3WJaS0AFN187UGxm767qFS58QEOdlVk6EbtxG49RMg_Cj027Q0N2_GY57945orrbLBPIdASZ4Ayj-hCuqI7W2mIJ_oJyKiCFBDdfn9M9'),
(14,'Long','truongconglong88@gmail.com','$2b$10$SxaKG7HgE2Ib2uDC/w.Z3eODp8SBn9zmrXFREZhHg5lV06ZslCycS',14,2,'diDT84aYQXy8sDeioI2fvo:APA91bFR-D2Xu-ySPNB4M6Th-1Xj0906XPeHgDsBdxmxyDaRk9no5sjvTYyl04TegYqDSwY4S0sOtWzS_WzNFgp10Xy7V1r2hPVVH0ElM63XLNjh8InP1La1Aoje0ibSzUu7fMwtcStj'),
(15,'shiper ','cena.bach8989@gmail.com','$2b$10$jLPTwn4BNG1h0/NZMu9AZevgbcRJCamaCO753ESjypWCere8AIt1C',15,2,'cu1s5uSURUWatcWtUBcA2Q:APA91bE4Ls0W4_ODtr0HdA547oDqBT51S_2x3WJaS0AFN187UGxm767qFS58QEOdlVk6EbtxG49RMg_Cj027Q0N2_GY57945orrbLBPIdASZ4Ayj-hCuqI7W2mIJ_oJyKiCFBDdfn9M9'),
(16,'Abc','cenafoofie1@gmail.com','$2b$10$glIWnAdKMdv4Kqy4QcVT5efMWLfG0UsjJ85Il9t9C05LBTSIRa1cO',16,2,'dDqJOh-KTwGUYtf_ZoY5qf:APA91bG5agz7C444huBtJMkoN8KMIokYc5oTvefop-Tk1WKwP0epwXhtsTKKxvpxHu9X7MAYzi1qPTJpQ4HC_jO83o1aoUOiwSVtTH72phNgrVYeXPWyCKKPhWN9t7yu-q4R1uktZ1Ud'),
(17,'Bùi Quốc','trongbq.bpc@gmail.com','$2b$10$8K10vjgJTG5fwvQdNrlrQ.dQ2FLQLBZucA2AFUkGUdtYcy311IpSe',17,2,'ffyFurvXRBybgISOknQCqb:APA91bFbQcfWI4PHqkQmsesFVvuch3eW-9V99tKj-C8Os1qBzq4dONpBCBRsARke74XLrQKkpQ_XJQApFEEC5qU2WRTiE5z4z4qJ8J3rv_nG2r4o_78qLbTUzOzshMn32ZiPYYPEfkkc'),
(18,'Dollar','cena.bach5@gmail.com','$2b$10$Soi1zce/DnClHSUqSgS.GOJJz4eCzv/lQeCO8ZUVjrJjG8T43WDnG',18,2,'ed21NoG2T3GUxHbRMQJV-J:APA91bGChujuTzXAqAT_AIlS-P3mrM6X68xIo_MCCLAmt7yTv4EoBJCBw_9ex6jKUAQrRkSHXXEVyMNkZoEnFDIn_xVPTGTmQAFJv8sGBMzQaQRTHuGfSdBwWigaIy9UUNu7oiWbJ3nA'),
(19,'Bùi Quốc','quoctrong1x96@gmail.com','$2b$10$2eieLLoIPikWMj9.SAKoTecP7r.Wdg1n0ssuIRfV.sHKMuTvekI/W',19,2,'dDqJOh-KTwGUYtf_ZoY5qf:APA91bG5agz7C444huBtJMkoN8KMIokYc5oTvefop-Tk1WKwP0epwXhtsTKKxvpxHu9X7MAYzi1qPTJpQ4HC_jO83o1aoUOiwSVtTH72phNgrVYeXPWyCKKPhWN9t7yu-q4R1uktZ1Ud'),
(20,'Bui Quoc','trongbq@gmail.com','$2b$10$YcNMsDeC9C8GtRRgDlCib.Z2k5YxCzlilACBj/.7JsdQYVmnutIt6',20,2,'dd95sq8jSl2xOQuzc7Df-1:APA91bGQK8SOWhOIqnPYTSHvHjQlF-LJVaBgRR-bqDGMIWHDP_VBnrnGN6qLVK_4pzZ16SSc8gF4Ohn7ETEmK2aAmhEikr5DXBb-BHg8krpdVL3NrFhnFzNDrl-NIf41y-kGVlvTXhB3'),
(21,'Bui Quoc','email@gmail.com','$2b$10$Ztrx1GdPCd5VPJEutcpAy.zEdJ3PwYNxfvvN5A9ZRTn2IsMnFzmpO',21,2,'dd95sq8jSl2xOQuzc7Df-1:APA91bGQK8SOWhOIqnPYTSHvHjQlF-LJVaBgRR-bqDGMIWHDP_VBnrnGN6qLVK_4pzZ16SSc8gF4Ohn7ETEmK2aAmhEikr5DXBb-BHg8krpdVL3NrFhnFzNDrl-NIf41y-kGVlvTXhB3'),
(22,'Ho va','hovaten@gmail.com','$2b$10$I8QXFuBrLLfp21msQelcmubBAdxkP.gD/A1fsYMAVEwPSJHWe3wp2',22,2,'dd95sq8jSl2xOQuzc7Df-1:APA91bGQK8SOWhOIqnPYTSHvHjQlF-LJVaBgRR-bqDGMIWHDP_VBnrnGN6qLVK_4pzZ16SSc8gF4Ohn7ETEmK2aAmhEikr5DXBb-BHg8krpdVL3NrFhnFzNDrl-NIf41y-kGVlvTXhB3'),
(23,'Trọng','user02@gmail.com','$2b$10$RVbjoHAX/LdawwA8YfVy1exil6p4HN9VhSTPfpyOjRK5PEtp9KYGS',23,2,'da5qvO1_Td-_96vj_Q8iXD:APA91bGS3QhUE3b-jN_oD82ZdchTvOV3zvYuGdIVNfMS8cVz5_ciZel6Kngwa9sFcwuOwX1RD8ubq0nW7P8MSeqBD6yHsK7Eyw_j8pgsK_XGD8g5fbAF2PJoVTMH8RKimt9Qq5bnNBzj'),
(24,'shipper 02','shipper02@gmail.com','$2b$10$HGyKqB9uzsAd0JsO1gcoaOVLRr3nadRld4hP.FFzg6ShoAb8nTPFS',24,3,'da5qvO1_Td-_96vj_Q8iXD:APA91bGS3QhUE3b-jN_oD82ZdchTvOV3zvYuGdIVNfMS8cVz5_ciZel6Kngwa9sFcwuOwX1RD8ubq0nW7P8MSeqBD6yHsK7Eyw_j8pgsK_XGD8g5fbAF2PJoVTMH8RKimt9Qq5bnNBzj'),
(25,'03','shipper03@gmail.com','$2b$10$94V.JYsxUT/2nekPF.DkLeMxjX50vTfjVs203eVFi2WSObHpoBmm2',25,3,'da5qvO1_Td-_96vj_Q8iXD:APA91bGS3QhUE3b-jN_oD82ZdchTvOV3zvYuGdIVNfMS8cVz5_ciZel6Kngwa9sFcwuOwX1RD8ubq0nW7P8MSeqBD6yHsK7Eyw_j8pgsK_XGD8g5fbAF2PJoVTMH8RKimt9Qq5bnNBzj'),
(26,'vip 04','shipper04@gmail.com','$2b$10$zN6Z.Bm1RdqFpyLG7WdtcevDqGG5pO/u6Ge/C0PI07EbqnEA7qgRy',26,3,'da5qvO1_Td-_96vj_Q8iXD:APA91bGS3QhUE3b-jN_oD82ZdchTvOV3zvYuGdIVNfMS8cVz5_ciZel6Kngwa9sFcwuOwX1RD8ubq0nW7P8MSeqBD6yHsK7Eyw_j8pgsK_XGD8g5fbAF2PJoVTMH8RKimt9Qq5bnNBzj'),
(27,'vip 05','shipper05@gmail.com','$2b$10$bsypg98IUL6ZMt6IWN9ew.7y1nUPJNmL8aMvb5A.YKc6lRroQjlWW',27,3,'da5qvO1_Td-_96vj_Q8iXD:APA91bGS3QhUE3b-jN_oD82ZdchTvOV3zvYuGdIVNfMS8cVz5_ciZel6Kngwa9sFcwuOwX1RD8ubq0nW7P8MSeqBD6yHsK7Eyw_j8pgsK_XGD8g5fbAF2PJoVTMH8RKimt9Qq5bnNBzj'),
(28,'Shipper test','email-002@gmail.com','$2b$10$hS3HcpdWt59pGj86EM4yq.fXgiQEwCtF0hDFzsMdSUkqdNUdzICv6',30,3,'abcdcefghijklmnv opq'),
(51,'Test','user10@gmail.com','$2b$10$HlyMfYVnxg7feTdziNkUm.GcoQHoKZ7TGo0fNnLsmHHpcQINkHN7i',55,2,'cfuQr-GDQc-vf5p-j9sAr8:APA91bFoep959oyrTLFkOmf5X4jAul_SHyIrGuhioCkI_08Qt6vJ-yTMlIEdD0RCXGBFcCXq8lsswO2Lis9YdmyhXIegjGddK6SwgO58or10Vhq5fR5PdDztegUfAUCLp0jAwe52E2uS');

UNLOCK TABLES;

/*Table structure for table `vocher_apply_product` */

DROP TABLE IF EXISTS `vocher_apply_product`;

CREATE TABLE `vocher_apply_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `list_id_product` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_vocher` int DEFAULT NULL,
  `id_store` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `vocher_apply_product` */

LOCK TABLES `vocher_apply_product` WRITE;

insert  into `vocher_apply_product`(`id`,`list_id_product`,`id_vocher`,`id_store`) values 
(2,',18,19,',11,1);

UNLOCK TABLES;

/*Table structure for table `vocher_apply_store` */

DROP TABLE IF EXISTS `vocher_apply_store`;

CREATE TABLE `vocher_apply_store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `list_id_store` varchar(2000) DEFAULT NULL,
  `id_vocher` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `vocher_apply_store` */

LOCK TABLES `vocher_apply_store` WRITE;

insert  into `vocher_apply_store`(`id`,`list_id_store`,`id_vocher`) values 
(2,',1,2,3,4,',2),
(3,',1,2,',8);

UNLOCK TABLES;

/*Table structure for table `vocher_types` */

DROP TABLE IF EXISTS `vocher_types`;

CREATE TABLE `vocher_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `vocher_types` */

LOCK TABLES `vocher_types` WRITE;

insert  into `vocher_types`(`id`,`name`) values 
(1,'Vocher cho sản phẩm'),
(2,'Vocher cho toàn sản phẩm'),
(3,'Vocher cho toàn hệ thống'),
(4,'Vocher cho cửa hàng');

UNLOCK TABLES;

/*Table structure for table `vochers` */

DROP TABLE IF EXISTS `vochers`;

CREATE TABLE `vochers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `id_vocher_type` int DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `id_discount` int DEFAULT NULL,
  `image_panner` varchar(200) DEFAULT NULL,
  `image_avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `vochers` */

LOCK TABLES `vochers` WRITE;

insert  into `vochers`(`id`,`name`,`description`,`start_date`,`end_date`,`id_vocher_type`,`code`,`id_discount`,`image_panner`,`image_avatar`) values 
(2,'Miễn phí giao hàng','Miễn phí giao hàng cho đơn hàng đầu tiên trong ngày','2022-03-25 00:00:01','2022-03-31 00:00:01',2,'GIAM_NEW_APP',1,NULL,NULL),
(6,'Cửa hàng mới giảm 20%','Cửa hàng mới giảm 20% trên tổng đơn hàng (với đơn từ 100k) tối đa 100k','2022-03-01 00:00:01','2023-03-01 00:00:01',3,'NEW-STORE',5,NULL,NULL),
(8,'Giảm 50% 10 cửa hàng đầu tiên','Giảm 50% 10 cửa hàng đầu tiên với đơn 50k, tối đa giảm 200k','2022-03-01 00:00:01','2023-03-01 00:00:01',4,'TOP10-STORE',7,NULL,NULL),
(11,'Giảm món 45%','Giảm 45% cho món ưa thích của cửa hàng','2022-03-01 00:00:01','2023-03-01 00:00:01',1,'LIKE-FOOD',10,NULL,NULL);

UNLOCK TABLES;

/* Procedure structure for procedure `SP_AUTH_LOGIN_EMAIL` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_LOGIN_EMAIL` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_LOGIN_EMAIL`(IN email VARCHAR(100))
BEGIN
	SELECT p.id, p.first_name, p.last_name, p.image, p.phone, u.email, u.password, u.rol_id, u.notification_token FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE u.email = email AND p.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_AUTH_LOGIN_EMAIL_STORE` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_LOGIN_EMAIL_STORE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_LOGIN_EMAIL_STORE`(IN email VARCHAR(100))
BEGIN
	SELECT s.id, s.name, s.address, s.latitude, s.longitude, s.open_time, s.close_time, s.price_advance, s.user_id,
	s.categories, s.image FROM stores s
	INNER JOIN users u ON s.user_id = u.id
	WHERE u.email = email AND s.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_AUTH_LOGIN_PHONE` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_LOGIN_PHONE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_LOGIN_PHONE`(IN phone VARCHAR(11))
BEGIN
	SELECT p.id, p.first_name, p.last_name, p.image, u.email, p.phone, u.password, u.rol_id, u.notification_token FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE p.phone = phone AND p.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_AUTH_LOGIN_PHONE_STORE` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_LOGIN_PHONE_STORE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_LOGIN_PHONE_STORE`(IN phone VARCHAR(11))
BEGIN
	SELECT s.id, s.name, s.address, s.latitude, s.longitude, s.open_time, s.close_time, s.price_advance, s.user_id,
	s.categories, s.image FROM stores s
	INNER JOIN users u ON s.user_id = u.id
	INNER JOIN persons p ON p.id = u.person_id
	WHERE p.phone = phone AND s.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_AUTH_RENEW_TOKEN_LOGIN` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_RENEW_TOKEN_LOGIN` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_RENEW_TOKEN_LOGIN`(IN id INT )
BEGIN
	SELECT p.id, p.first_name, p.last_name, p.image, p.phone, u.email, u.rol_id, u.notification_token FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE p.id = id AND p.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_AUTH_RENEW_TOKEN_LOGIN_STORE` */

DROP PROCEDURE IF EXISTS  `SP_AUTH_RENEW_TOKEN_LOGIN_STORE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_AUTH_RENEW_TOKEN_LOGIN_STORE`(IN id INT)
BEGIN
	SELECT s.id, s.name, s.address, s.latitude, s.longitude, s.open_time, s.close_time, s.price_advance, s.user_id,
	s.categories, s.image FROM stores s
	INNER JOIN users u ON s.user_id = u.id
	INNER JOIN persons p ON p.id = u.person_id
	WHERE p.id = id AND s.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_CREATE_STORE` */

DROP PROCEDURE IF EXISTS  `SP_CREATE_STORE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREATE_STORE`(IN name VARCHAR(200), IN address VARCHAR(500), IN latitude VARCHAR(50),
    IN longitude VARCHAR(50), IN open_time TIME, IN close_time TIME, IN price_advance DECIMAL(10,2), 
    IN user_id INT, IN categories VARCHAR(50), IN state int, IN image VARCHAR(100))
BEGIN
		INSERT INTO stores(name, address, latitude, longitude, open_time, close_time,price_advance, user_id, categories, state, image)
		VALUE (name, address, latitude, longitude, open_time, close_time,price_advance, user_id, categories, state, image);
	END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_01_BY_ALLTIME` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_01_BY_ALLTIME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_01_BY_ALLTIME`(in storeId int)
BEGIN
	SELECT 
	coalesce(store_id, -1), 
	coalesce((SELECT name FROM stores WHERE id = store_id),"") AS name, 
	coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN 1
             ELSE 0
           END),0) AS delivered,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN amount
             ELSE 0
           END),0) AS delivered_amount,
       coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN 1
             ELSE 0
           END),0) AS onway,
           coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN amount
             ELSE 0
           END),0) AS onway_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'DISPATCHED' THEN 1
           ELSE 0
           END),0) AS dispatched,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DISPATCHED' THEN amount
             ELSE 0
           END),0) AS dispatched_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'PAID OUT' THEN 1
           ELSE 0
           END),0) AS paidout,
           coalesce(SUM(CASE 
             WHEN STATUS = 'PAID OUT' THEN amount
             ELSE 0
           END),0) AS paidout_amount,
        coalesce(SUM(1),0) AS total,
        coalesce(sum(amount),0) as total_amount
        
FROM orders 
WHERE  store_id = storeId;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_01_BY_DATE` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_01_BY_DATE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_01_BY_DATE`(IN storeId INT,IN fromDate VARCHAR(20))
BEGIN
	SELECT 
	COALESCE(store_id, -1) as store_id, 
	COALESCE((SELECT name FROM stores WHERE id = store_id),"") AS name, 
	COALESCE(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN 1
             ELSE 0
           END),0) AS delivered,
           COALESCE(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN amount
             ELSE 0
           END),0) AS delivered_amount,
       COALESCE(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN 1
             ELSE 0
           END),0) AS onway,
           COALESCE(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN amount
             ELSE 0
           END),0) AS onway_amount,
        COALESCE(SUM(CASE 
           WHEN STATUS = 'DISPATCHED' THEN 1
           ELSE 0
           END),0) AS dispatched,
           COALESCE(SUM(CASE 
             WHEN STATUS = 'DISPATCHED' THEN amount
             ELSE 0
           END),0) AS dispatched_amount,
        COALESCE(SUM(CASE 
           WHEN STATUS = 'PAID OUT' THEN 1
           ELSE 0
           END),0) AS paidout,
           COALESCE(SUM(CASE 
             WHEN STATUS = 'PAID OUT' THEN amount
             ELSE 0
           END),0) AS paidout_amount,
        COALESCE(SUM(1),0) AS total,
        COALESCE(SUM(amount),0) AS total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%d%m%Y') = fromDate AND store_id = storeId
GROUP BY store_id,(SELECT name FROM stores WHERE id = store_id);
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_01_BY_MONTH` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_01_BY_MONTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_01_BY_MONTH`(in storeId int,in fromMonth varchar(20))
BEGIN
	SELECT 
	coalesce(store_id, -1), 
	coalesce((SELECT name FROM stores WHERE id = store_id),"") AS name, 
	coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN 1
             ELSE 0
           END),0) AS delivered,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN amount
             ELSE 0
           END),0) AS delivered_amount,
       coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN 1
             ELSE 0
           END),0) AS onway,
           coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN amount
             ELSE 0
           END),0) AS onway_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'DISPATCHED' THEN 1
           ELSE 0
           END),0) AS dispatched,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DISPATCHED' THEN amount
             ELSE 0
           END),0) AS dispatched_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'PAID OUT' THEN 1
           ELSE 0
           END),0) AS paidout,
           coalesce(SUM(CASE 
             WHEN STATUS = 'PAID OUT' THEN amount
             ELSE 0
           END),0) AS paidout_amount,
        coalesce(SUM(1),0) AS total,
        coalesce(sum(amount),0) as total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%m%Y') = fromMonth and store_id = storeId;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_01_BY_YEAR` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_01_BY_YEAR` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_01_BY_YEAR`(in storeId int,in fromYear varchar(20))
BEGIN
	SELECT 
	coalesce(store_id, -1), 
	coalesce((SELECT name FROM stores WHERE id = store_id),"") AS name, 
	coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN 1
             ELSE 0
           END),0) AS delivered,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DELIVERED' THEN amount
             ELSE 0
           END),0) AS delivered_amount,
       coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN 1
             ELSE 0
           END),0) AS onway,
           coalesce(SUM(CASE 
             WHEN STATUS = 'ON WAY' THEN amount
             ELSE 0
           END),0) AS onway_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'DISPATCHED' THEN 1
           ELSE 0
           END),0) AS dispatched,
           coalesce(SUM(CASE 
             WHEN STATUS = 'DISPATCHED' THEN amount
             ELSE 0
           END),0) AS dispatched_amount,
        coalesce(SUM(CASE 
           WHEN STATUS = 'PAID OUT' THEN 1
           ELSE 0
           END),0) AS paidout,
           coalesce(SUM(CASE 
             WHEN STATUS = 'PAID OUT' THEN amount
             ELSE 0
           END),0) AS paidout_amount,
        coalesce(SUM(1),0) AS total,
        coalesce(sum(amount),0) as total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%Y') = fromYear and store_id = storeId;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_02_BY_ALLTIME` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_02_BY_ALLTIME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_02_BY_ALLTIME`(IN storeId INT)
BEGIN
	SELECT 
	COALESCE(store_id,-1) AS store_id, 
	COALESCE((SELECT name FROM stores WHERE id = store_id),' ') AS name, 
	COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN 1
             ELSE 0
           END),0) AS cash_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN amount
             ELSE 0
           END),0) AS cash_payment_amount,
       COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN 1
             ELSE 0
           END),0) AS cenafoodie_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN amount
             ELSE 0
           END),0) AS cenafoodie_payment_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'CREDIT CARD' THEN 1
           ELSE 0
           END),0) AS credit_card,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CREDIT CARD' THEN amount
             ELSE 0
           END),0) AS credit_card_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'ZALO PAY' THEN 1
           ELSE 0
           END),0) AS zalopay,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'ZALO PAY' THEN amount
             ELSE 0
           END),0) AS zalopay_amount,
        COALESCE(SUM(1),0) AS total,
        COALESCE(SUM(amount),0) AS total_amount
        
FROM orders 
WHERE   store_id = storeId AND STATUS = 'DELIVERED';
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_02_BY_DATE` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_02_BY_DATE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_02_BY_DATE`(IN storeId INT,IN fromDate VARCHAR(20))
BEGIN
	SELECT 
	COALESCE(store_id,-1) AS store_id, 
	COALESCE((SELECT name FROM stores WHERE id = store_id),' ') AS name, 
	COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN 1
             ELSE 0
           END),0) AS cash_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN amount
             ELSE 0
           END),0) AS cash_payment_amount,
       COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN 1
             ELSE 0
           END),0) AS cenafoodie_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN amount
             ELSE 0
           END),0) AS cenafoodie_payment_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'CREDIT CARD' THEN 1
           ELSE 0
           END),0) AS credit_card,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CREDIT CARD' THEN amount
             ELSE 0
           END),0) AS credit_card_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'ZALO PAY' THEN 1
           ELSE 0
           END),0) AS zalopay,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'ZALO PAY' THEN amount
             ELSE 0
           END),0) AS zalopay_amount,
        COALESCE(SUM(1),0) AS total,
        COALESCE(SUM(amount),0) AS total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%d%m%Y') = fromDate AND store_id = storeId AND STATUS = 'DELIVERED';
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_02_BY_MONTH` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_02_BY_MONTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_02_BY_MONTH`(IN storeId INT,IN fromMonth VARCHAR(20))
BEGIN
	SELECT 
	COALESCE(store_id,-1) AS store_id, 
	COALESCE((SELECT name FROM stores WHERE id = store_id),' ') AS name, 
	COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN 1
             ELSE 0
           END),0) AS cash_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN amount
             ELSE 0
           END),0) AS cash_payment_amount,
       COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN 1
             ELSE 0
           END),0) AS cenafoodie_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN amount
             ELSE 0
           END),0) AS cenafoodie_payment_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'CREDIT CARD' THEN 1
           ELSE 0
           END),0) AS credit_card,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CREDIT CARD' THEN amount
             ELSE 0
           END),0) AS credit_card_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'ZALO PAY' THEN 1
           ELSE 0
           END),0) AS zalopay,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'ZALO PAY' THEN amount
             ELSE 0
           END),0) AS zalopay_amount,
        COALESCE(SUM(1),0) AS total,
        COALESCE(SUM(amount),0) AS total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%m%Y') = fromMonth AND store_id = storeId AND STATUS = 'DELIVERED';
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_02_BY_YEAR` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_02_BY_YEAR` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_02_BY_YEAR`(IN storeId INT,IN fromYear VARCHAR(20))
BEGIN
	SELECT 
	COALESCE(store_id,-1) AS store_id, 
	COALESCE((SELECT name FROM stores WHERE id = store_id),' ') AS name, 
	COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN 1
             ELSE 0
           END),0) AS cash_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CASH PAYMENT' THEN amount
             ELSE 0
           END),0) AS cash_payment_amount,
       COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN 1
             ELSE 0
           END),0) AS cenafoodie_payment,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CENA FOODIE PAYMENT' THEN amount
             ELSE 0
           END),0) AS cenafoodie_payment_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'CREDIT CARD' THEN 1
           ELSE 0
           END),0) AS credit_card,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'CREDIT CARD' THEN amount
             ELSE 0
           END),0) AS credit_card_amount,
        COALESCE(SUM(CASE 
           WHEN pay_type = 'ZALO PAY' THEN 1
           ELSE 0
           END),0) AS zalopay,
           COALESCE(SUM(CASE 
             WHEN pay_type = 'ZALO PAY' THEN amount
             ELSE 0
           END),0) AS zalopay_amount,
        COALESCE(SUM(1),0) AS total,
        COALESCE(SUM(amount),0) AS total_amount
        
FROM orders 
WHERE  DATE_FORMAT(update_date, '%Y') = fromYear AND store_id = storeId AND STATUS = 'DELIVERED';
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_03_BY_ALLTIME` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_03_BY_ALLTIME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_03_BY_ALLTIME`(in storeId int, in page int)
BEGIN
	SET @query =  CONCAT('SELECT  o.store_id, o.id as order_id, o.client_id AS user_id,',
	' CONCAT(p.first_name," ", p.last_name) AS user_name, a.address,sum(od.quantity) as quantity,',
	' sum(1) as product_count, sum(o.amount) as amount',
	' FROM orders o, stores s, addresses a, users u, persons p, order_details od',
	' WHERE  o.store_id = ',storeId,' AND o.status = "DELIVERED"',
	' AND o.store_id = s.id	AND o.client_id = u.id and o.id = od.order_id AND u.person_id = p.uid and o.address_id = a.id',
	' GROUP BY o.store_id, o.id, o.store_id, o.client_id, CONCAT(p.first_name," ", p.last_name), a.address',
	' ORDER BY o.store_id asc,o.id desc LIMIT ',page,',10');
	PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_03_BY_DATE` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_03_BY_DATE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_03_BY_DATE`(IN storeId INT,IN fromDate VARCHAR(20), IN PAGE INT)
BEGIN
	SET @query =  CONCAT('SELECT  o.store_id, o.id as order_id, o.client_id AS user_id,',
	' CONCAT(p.first_name," ", p.last_name) AS user_name, a.address,sum(od.quantity) as quantity,',
	' sum(1) as product_count, sum(o.amount) as amount',
	' FROM orders o, stores s, addresses a, users u, persons p, order_details od',
	' WHERE  DATE_FORMAT(update_date, "%d%m%Y") = "',fromDate,'" AND o.store_id = ',storeId,' AND o.status = "DELIVERED"',
	' AND o.store_id = s.id	AND o.client_id = u.id and o.id = od.order_id AND u.person_id = p.uid and o.address_id = a.id',
	' GROUP BY o.store_id, o.id, o.store_id, o.client_id, CONCAT(p.first_name," ", p.last_name), a.address',
	' ORDER BY o.store_id asc,o.id desc LIMIT ',PAGE,',10');
	PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_03_BY_MONTH` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_03_BY_MONTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_03_BY_MONTH`(in storeId int,in fromMonth varchar(20), in page int)
BEGIN
	SET @query =  CONCAT('SELECT  o.store_id, o.id as order_id, o.client_id AS user_id,',
	' CONCAT(p.first_name," ", p.last_name) AS user_name, a.address,sum(od.quantity) as quantity,',
	' sum(1) as product_count, sum(o.amount) as amount',
	' FROM orders o, stores s, addresses a, users u, persons p, order_details od',
	' WHERE  DATE_FORMAT(update_date, "%m%Y") = "',fromMonth,'" AND o.store_id = ',storeId,' AND o.status = "DELIVERED"',
	' AND o.store_id = s.id	AND o.client_id = u.id and o.id = od.order_id AND u.person_id = p.uid and o.address_id = a.id',
	' GROUP BY o.store_id, o.id, o.store_id, o.client_id, CONCAT(p.first_name," ", p.last_name), a.address',
	' ORDER BY o.store_id asc,o.id desc LIMIT ',page,',10');
	PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_03_BY_YEAR` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_03_BY_YEAR` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_03_BY_YEAR`(in storeId int,in fromYear varchar(20), in page int)
BEGIN
	SET @query =  CONCAT('SELECT  o.store_id, o.id as order_id, o.client_id AS user_id,',
	' CONCAT(p.first_name," ", p.last_name) AS user_name, a.address,sum(od.quantity) as quantity,',
	' sum(1) as product_count, sum(o.amount) as amount',
	' FROM orders o, stores s, addresses a, users u, persons p, order_details od',
	' WHERE  DATE_FORMAT(update_date, "%Y") = "',fromYear,'" AND o.store_id = ',storeId,' AND o.status = "DELIVERED"',
	' AND o.store_id = s.id	AND o.client_id = u.id and o.id = od.order_id AND u.person_id = p.uid and o.address_id = a.id',
	' GROUP BY o.store_id, o.id, o.store_id, o.client_id, CONCAT(p.first_name," ", p.last_name), a.address',
	' ORDER BY o.store_id asc,o.id desc LIMIT ',page,',10');
	PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_04_BY_ALLTIME` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_04_BY_ALLTIME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_04_BY_ALLTIME`(IN storeId INT)
BEGIN
	SELECT 	p.store_id, s.name AS name, 
	p.id, p.name AS product_name,
	0 AS liked, 
	0 AS viewer,
	COALESCE(SUM(od.quantity),0) AS quantity,
	COALESCE(SUM(od.price),0) AS amount
FROM products p 
INNER JOIN stores s ON p.store_id = s.id AND s.id = storeId
INNER JOIN orders o ON o.store_id = s.id AND o.status = "DELIVERED" 
LEFT JOIN order_details od ON p.id = od.product_id AND o.id = od.order_id
GROUP BY p.store_id, s.name, p.id, p.name
ORDER BY p.store_id, p.id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_04_BY_DATE` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_04_BY_DATE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_04_BY_DATE`(IN storeId INT,IN fromDate VARCHAR(20))
BEGIN
	SELECT 	p.store_id, s.name AS name, 
	p.id, p.name AS product_name,
	0 AS liked, 
	0 AS viewer,
	COALESCE(SUM(od.quantity),0) AS quantity,
	COALESCE(SUM(od.price),0) AS amount
FROM products p 
INNER JOIN stores s ON p.store_id = s.id AND s.id = storeId
INNER JOIN orders o ON o.store_id = s.id AND o.status = "DELIVERED" AND DATE_FORMAT(o.update_date, '%d%m%Y') = fromDate
LEFT JOIN order_details od ON p.id = od.product_id AND o.id = od.order_id
GROUP BY p.store_id, s.name, p.id, p.name
ORDER BY p.store_id, p.id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_04_BY_MONTH` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_04_BY_MONTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_04_BY_MONTH`(IN storeId INT,IN fromMonth VARCHAR(20))
BEGIN
	SELECT 	p.store_id, s.name AS name, 
	p.id, p.name AS product_name,
	0 AS liked, 
	0 AS viewer,
	COALESCE(SUM(od.quantity),0) AS quantity,
	COALESCE(SUM(od.price),0) AS amount
FROM products p 
INNER JOIN stores s ON p.store_id = s.id AND s.id = storeId
INNER JOIN orders o ON o.store_id = s.id AND o.status = "DELIVERED" AND DATE_FORMAT(o.update_date, '%m%Y') = fromMonth
LEFT JOIN order_details od ON p.id = od.product_id AND o.id = od.order_id
GROUP BY p.store_id, s.name, p.id, p.name
ORDER BY p.store_id, p.id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_04_BY_YEAR` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_04_BY_YEAR` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_04_BY_YEAR`(IN storeId INT,IN fromYear VARCHAR(20))
BEGIN
	SELECT 	p.store_id, s.name AS name, 
	p.id, p.name AS product_name,
	0 AS liked, 
	0 AS viewer,
	COALESCE(SUM(od.quantity),0) AS quantity,
	COALESCE(SUM(od.price),0) AS amount
FROM products p 
INNER JOIN stores s ON p.store_id = s.id AND s.id = storeId
INNER JOIN orders o ON o.store_id = s.id AND o.status = "DELIVERED" AND DATE_FORMAT(o.update_date, '%Y') = fromYear
LEFT JOIN order_details od ON p.id = od.product_id AND o.id = od.order_id
GROUP BY p.store_id, s.name, p.id, p.name
ORDER BY p.store_id, p.id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_05_BY_ALLTIME` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_05_BY_ALLTIME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_05_BY_ALLTIME`(in storeId int)
BEGIN
	SELECT  o.store_id,
	o.client_id as user_id,
	concat(p.first_name,' ', p.last_name) as user_name,
	sum(od.quantity) as quantity,
	sum(od.price) as amount,
	sum(1) as orders
FROM orders o, stores s,  order_details od, users u, persons p
WHERE  o.store_id = storeId AND o.status = 'DELIVERED'
	AND o.store_id = s.id
	AND o.id = od.order_id
	AND o.client_id = u.id
	and u.person_id = p.uid
GROUP BY o.store_id, 
	o.store_id,
	o.client_id, CONCAT(p.first_name,' ', p.last_name)
ORDER BY o.store_id,o.client_id
LIMIT 10;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_05_BY_DATE` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_05_BY_DATE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_05_BY_DATE`(in storeId int,in fromDate varchar(20))
BEGIN
	SELECT  o.store_id,
	o.client_id as user_id,
	concat(p.first_name,' ', p.last_name) as user_name,
	sum(od.quantity) as quantity,
	sum(od.price) as amount,
	sum(1) as orders
FROM orders o, stores s,  order_details od, users u, persons p
WHERE  DATE_FORMAT(update_date, '%d%m%Y') = fromDate
	AND o.store_id = storeId AND o.status = 'DELIVERED'
	AND o.store_id = s.id
	AND o.id = od.order_id
	AND o.client_id = u.id
	and u.person_id = p.uid
GROUP BY o.store_id, 
	o.store_id,
	o.client_id, CONCAT(p.first_name,' ', p.last_name)
ORDER BY o.store_id,o.client_id
LIMIT 10;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_05_BY_MONTH` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_05_BY_MONTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_05_BY_MONTH`(in storeId int,in fromMonth varchar(20))
BEGIN
	SELECT  o.store_id,
	o.client_id as user_id,
	concat(p.first_name,' ', p.last_name) as user_name,
	sum(od.quantity) as quantity,
	sum(od.price) as amount,
	sum(1) as orders
FROM orders o, stores s,  order_details od, users u, persons p
WHERE  DATE_FORMAT(update_date, '%m%Y') = fromMonth
	AND o.store_id = storeId AND o.status = 'DELIVERED'
	AND o.store_id = s.id
	AND o.id = od.order_id
	AND o.client_id = u.id
	and u.person_id = p.uid
GROUP BY o.store_id, 
	o.store_id,
	o.client_id, CONCAT(p.first_name,' ', p.last_name)
ORDER BY o.store_id,o.client_id
LIMIT 10;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_DASH_05_BY_YEAR` */

DROP PROCEDURE IF EXISTS  `SP_GET_DASH_05_BY_YEAR` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_DASH_05_BY_YEAR`(in storeId int,in fromYear varchar(20))
BEGIN
	SELECT  o.store_id,
	o.client_id as user_id,
	concat(p.first_name,' ', p.last_name) as user_name,
	sum(od.quantity) as quantity,
	sum(od.price) as amount,
	sum(1) as orders
FROM orders o, stores s,  order_details od, users u, persons p
WHERE  DATE_FORMAT(update_date, '%Y') = fromYear
	AND o.store_id = storeId AND o.status = 'DELIVERED'
	AND o.store_id = s.id
	AND o.id = od.order_id
	AND o.client_id = u.id
	and u.person_id = p.uid
GROUP BY o.store_id, 
	o.store_id,
	o.client_id, CONCAT(p.first_name,' ', p.last_name)
ORDER BY o.store_id,o.client_id
LIMIT 10;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_STORES` */

DROP PROCEDURE IF EXISTS  `SP_GET_STORES` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_STORES`(IN in_page INT)
BEGIN
  SET @query = CONCAT('select s.id, s.name, s.address, s.latitude, s.longitude, s.open_time, s.close_time, s.price_advance, s.image, s.state, s.categories from stores s LIMIT ', in_page, ', 10;');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_STORES_NEXT_LOCATION_BY_PAGE` */

DROP PROCEDURE IF EXISTS  `SP_GET_STORES_NEXT_LOCATION_BY_PAGE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_STORES_NEXT_LOCATION_BY_PAGE`(IN lat DECIMAL(12,9), IN lng DECIMAL(12,9) ,IN in_limit INT, IN in_offset INT)
BEGIN
  SET @query = CONCAT('select s.id, s.name, s.address, s.latitude, s.longitude,',
  's.open_time, s.close_time, s.price_advance, s.image, s.state, s.categories, 111.111 *',
    'DEGREES(ACOS(LEAST(1.0, COS(RADIANS(',lat,'))',
         '* COS(RADIANS(s.latitude))',
         '* COS(RADIANS(',lng,' - s.longitude))',
         '+ SIN(RADIANS(',lat,'))',
         '* SIN(RADIANS(s.latitude))))) AS distance_in_km from stores s order by distance_in_km asc LIMIT ',in_limit,' offset ', in_offset ,';');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_STORE_NOTIFICATION_TOKEN` */

DROP PROCEDURE IF EXISTS  `SP_GET_STORE_NOTIFICATION_TOKEN` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_STORE_NOTIFICATION_TOKEN`(in store_id INT)
BEGIN
		SELECT u.notification_token FROM users u INNER JOIN stores s on s.id = store_id and s.user_id = u.id WHERE rol_id = 1;
	END $$
DELIMITER ;

/* Procedure structure for procedure `SP_GET_SYSTEM_VOCHER` */

DROP PROCEDURE IF EXISTS  `SP_GET_SYSTEM_VOCHER` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GET_SYSTEM_VOCHER`()
BEGIN		
	SELECT 	vocher.id AS id, 
		vocher.name AS NAME,
		vocher.description AS DESCRIPTION,
		vocher.start_date AS start_date,
		vocher.end_date AS end_date, 
		vocher.code AS CODE,
		vocher.image_panner AS image_panner,
		vocher.image_avatar AS image_avatar,
		tdis.name AS type_discount,
		tdis.math AS math_discount,
		dis.min_orders AS min_order,
		dis.usedto_time AS usedto_time, 
		dis.value_discount AS value_discount,
		dis.max_discount AS max_discount
	FROM vochers vocher
	INNER JOIN discounts dis ON dis.id = vocher.id_discount
	INNER JOIN discount_types tdis ON tdis.id = dis.id_type_discount
	AND vocher.id_vocher_type = 3;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_LIST_PRODUCTS_ADMIN` */

DROP PROCEDURE IF EXISTS  `SP_LIST_PRODUCTS_ADMIN` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LIST_PRODUCTS_ADMIN`(IN user_id INT)
BEGIN
	SELECT pro.id, pro.name, pro.description, pro.price, pro.status, ip.picture, c.category, c.id AS category_id ,
	0 AS liked, 
	0 AS viewer,
	COALESCE(SUM(od.quantity),0) AS quantity,
	COALESCE(SUM(od.price),0) AS amount
	FROM products pro INNER JOIN categories c ON pro.category_id = c.id
	INNER JOIN imageProduct ip ON pro.id = ip.product_id
	INNER JOIN ( SELECT product_id, MIN(id) AS id_image FROM imageProduct GROUP BY product_id) p3 
	ON ip.product_id = p3.product_id AND ip.id = p3.id_image 
	INNER JOIN stores st ON st.id = pro.store_id
	INNER JOIN users us ON us.id = st.user_id AND us.id = user_id
	LEFT JOIN orders o ON o.store_id = st.id AND o.status = "DELIVERED"  AND o.client_id = us.id
	LEFT JOIN  order_details od ON pro.id = od.product_id AND o.id = od.order_id
GROUP BY pro.id, pro.name, pro.description, pro.price, pro.status, ip.picture, c.category
ORDER BY pro.id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_ORDERS_BY_DELIVERY` */

DROP PROCEDURE IF EXISTS  `SP_ORDERS_BY_DELIVERY` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ORDERS_BY_DELIVERY`(IN ID INT, IN statusName VARCHAR(30))
BEGIN
	SELECT o.id AS order_id, o.delivery_id, CONCAT(pe.first_name, " ", pe.last_name) AS delivery, pe.image AS delivery_image, 
	o.client_id, CONCAT(p.first_name, " ", p.last_name) AS cliente, p.image AS client_image, 
	p.phone AS client_phone, o.address_id, a.address, a.receiver, a.latitude, a.longitude, 
	o.status, o.pay_type, o.amount, o.update_date,
	o.store_id AS store_id, o.store_latitude AS store_latitude, o.store_longitude AS store_longitude
	FROM orders o
	INNER JOIN persons p ON o.client_id = p.id
	INNER JOIN addresses a ON o.address_id = a.id
	LEFT JOIN persons pe ON o.delivery_id = pe.id
	WHERE o.`status` = statusName AND pe.id = ID;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_ORDERS_BY_STATUS` */

DROP PROCEDURE IF EXISTS  `SP_ORDERS_BY_STATUS` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ORDERS_BY_STATUS`(IN statusName VARCHAR(30), IN  storeId INT)
BEGIN
	SELECT o.id AS order_id, o.delivery_id, CONCAT(pe.first_name, " ", pe.last_name) AS delivery, pe.image AS delivery_image, 
	o.client_id, CONCAT(p.first_name, " ", p.last_name) AS cliente, p.image AS client_image, 
	p.phone AS client_phone, o.address_id, a.address, a.receiver, a.latitude, a.longitude, 
	o.status, o.pay_type, o.amount, o.update_date,
	o.store_id AS store_id, o.store_latitude AS store_latitude, o.store_longitude AS store_longitude
	FROM orders o
	INNER JOIN stores s ON s.id = o.store_id
	INNER JOIN persons p ON o.client_id = p.id
	INNER JOIN addresses a ON o.address_id = a.id
	LEFT JOIN persons pe ON o.delivery_id = pe.id
	WHERE o.`status` = statusName AND s.id  = storeId;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_ORDERS_BY_STATUS_FOR_CLIENT` */

DROP PROCEDURE IF EXISTS  `SP_ORDERS_BY_STATUS_FOR_CLIENT` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ORDERS_BY_STATUS_FOR_CLIENT`(IN statusName VARCHAR(30), IN  clientId INT)
BEGIN
	SELECT o.id AS order_id, o.delivery_id, CONCAT(pe.first_name, " ", pe.last_name) AS delivery, pe.image AS delivery_image, 
	o.client_id, CONCAT(p.first_name, " ", p.last_name) AS cliente, p.image AS client_image, 
	p.phone AS client_phone, o.address_id, a.address, a.receiver, a.latitude, a.longitude, 
	o.status, o.pay_type, o.amount, o.update_date,
	o.store_id AS store_id, o.store_latitude AS store_latitude, o.store_longitude AS store_longitude
	FROM orders o
	INNER JOIN users u ON u.person_id = o.client_id
	INNER JOIN persons p ON o.client_id = p.id
	INNER JOIN addresses a ON o.address_id = a.id
	LEFT JOIN persons pe ON o.delivery_id = pe.id
	WHERE o.`status` = statusName AND u.person_id  = clientId;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_ORDERS_FOR_CLIENT` */

DROP PROCEDURE IF EXISTS  `SP_ORDERS_FOR_CLIENT` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ORDERS_FOR_CLIENT`(IN ID INT, IN STATUS VARCHAR(50))
BEGIN
	SELECT o.id, o.client_id, o.delivery_id, ad.reciever, ad.latitude AS latClient, ad.longitude AS lngClient ,CONCAT(p.first_name, ' ', p.last_name)AS delivery, p.phone AS deliveryPhone, p.image AS imageDelivery, o.address_id, o.latitude, o.longitude, o.`status`, o.amount, o.pay_type, o.update_date 
	FROM orders o
	LEFT JOIN persons p ON p.id = o.delivery_id
	INNER JOIN addresses ad ON o.address_id = ad.id 
	WHERE o.client_id = ID AND o.status = STATUS
	ORDER BY o.id DESC;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_ORDER_DETAILS` */

DROP PROCEDURE IF EXISTS  `SP_ORDER_DETAILS` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ORDER_DETAILS`(IN IDORDER INT)
BEGIN
	SELECT distinct od.id, od.order_id, od.product_id, p.name as product_name, ip.picture, od.quantity, od.price AS total
	FROM order_details od
	INNER JOIN products p ON od.product_id = p.id
	INNER JOIN product_images ip ON p.id = ip.product_id
	INNER JOIN ( SELECT product_id, MIN(id) AS id_image FROM product_images GROUP BY product_id) p3 ON ip.product_id = p3.product_id AND ip.id = p3.id_image
	WHERE od.order_id = IDORDER;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_SEARCH_FOR_CATEGORY` */

DROP PROCEDURE IF EXISTS  `SP_SEARCH_FOR_CATEGORY` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_SEARCH_FOR_CATEGORY`(IN IDCATEGORY INT)
BEGIN
	SELECT pro.id, pro.name, pro.description, pro.price, pro.status, ip.picture, c.category, c.id AS category_id FROM products pro
	INNER JOIN categories c ON pro.category_id = c.id
	INNER JOIN imageProduct ip ON pro.id = ip.product_id
	INNER JOIN ( SELECT product_id, MIN(id) AS id_image FROM imageProduct GROUP BY product_id) p3 ON ip.product_id = p3.product_id AND ip.id = p3.id_image
	WHERE pro.category_id = IDCATEGORY;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_SEARCH_PRODUCT` */

DROP PROCEDURE IF EXISTS  `SP_SEARCH_PRODUCT` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_SEARCH_PRODUCT`(IN name VARCHAR(100))
BEGIN
	SELECT pro.id, pro.name, pro.description, pro.price, pro.status, ip.picture, c.category, c.id AS category_id FROM products pro
	INNER JOIN categories c ON pro.category_id = c.id
	INNER JOIN imageProduct ip ON pro.id = ip.product_id
	INNER JOIN ( SELECT product_id, MIN(id) AS id_image FROM imageProduct GROUP BY product_id) p3 ON ip.product_id = p3.product_id AND ip.id = p3.id_image
	WHERE pro.name LIKE CONCAT('%', name , '%');
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_ADD_CATEGORY` */

DROP PROCEDURE IF EXISTS  `SP_STORES_ADD_CATEGORY` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_ADD_CATEGORY`(IN category VARCHAR(50), IN DESCRIPTION VARCHAR(100), IN store_id INT)
BEGIN
	INSERT INTO categories (category, DESCRIPTION, store_id) VALUE (category, DESCRIPTION, store_id);
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_ADD_VOUCHER` */

DROP PROCEDURE IF EXISTS  `SP_STORES_ADD_VOUCHER` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_ADD_VOUCHER`(IN NAME VARCHAR(200), IN DESCRIPTION VARCHAR(100), IN start_date DATETIME,
    IN end_date DATETIME, IN id_vocher_type INT, IN CODE VARCHAR(20), IN image_panner VARCHAR(200), IN image_avatar VARCHAR(200)
    ,IN id_type_discount INT, IN min_orders INT, IN used_time INT, 
    IN value_discount INT, IN max_discount INT, IN list_apply VARCHAR(2000))
BEGIN		
		DECLARE storeId  INT UNSIGNED DEFAULT 1;
		INSERT INTO vochers (NAME, DESCRIPTION, start_date, end_date, id_vocher_type, CODE,image_panner,image_avatar ) 
		VALUE (NAME, DESCRIPTION, start_date, end_date, id_vocher_type, CODE,image_panner,image_avatar);
		
		CASE id_vocher_type WHEN 1 THEN 
			SELECT store_id INTO storeId FROM products WHERE INSTR(list_apply,id) > 0 LIMIT 1;
			INSERT INTO vocher_apply_product(list_id_product, id_vocher, id_store) VALUE (list_apply, LAST_INSERT_ID(), storeId);
		WHEN 2 THEN 
			INSERT INTO vocher_apply_store(list_id_store, id_vocher) VALUE (list_apply, LAST_INSERT_ID());
		WHEN 4 THEN 
			INSERT INTO vocher_apply_store(list_id_store, id_vocher) VALUE (list_apply, LAST_INSERT_ID());
		ELSE  SELECT 1 FROM DUAL;
		END CASE;
		INSERT INTO discounts(id_type_discount, min_orders, used_time, value_discount, max_discount) 
		VALUE (id_type_discount, min_orders, used_time, value_discount, max_discount);
	
	END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_ALL_PRODUCTS` */

DROP PROCEDURE IF EXISTS  `SP_STORES_ALL_PRODUCTS` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_ALL_PRODUCTS`(IN store_id INT)
BEGIN
  SET @query = CONCAT(' SELECT pro.id, pro.name, pro.description, pro.price, pro.status, ip.picture, c.category, c.id AS category_id, pro.store_id AS store_id FROM products pro INNER JOIN categories c ON pro.category_id = c.id INNER JOIN product_images ip ON pro.id = ip.product_id INNER JOIN ( SELECT product_id, MIN(id) AS id_image FROM product_images GROUP BY product_id) p3 ON ip.product_id = p3.product_id AND ip.id = p3.id_image WHERE pro.store_id = ',store_id);
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_DELETE_CATEGORY` */

DROP PROCEDURE IF EXISTS  `SP_STORES_DELETE_CATEGORY` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_DELETE_CATEGORY`(IN  categoryId INT)
BEGIN
	DECLARE countOfProductIn INT;
	 Select count(1) INTO countOfProductIn from products where category_id = categoryId;
	 IF (countOfProductIn > 0) THEN Select 'Cannot deleted with CODE001' as message from dual;
	 ELSE 
		DELETE FROM categories where id = categoryId;
		SELECT 'Deleted' AS message FROM DUAL;
	 END IF;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_DELIVERIES` */

DROP PROCEDURE IF EXISTS  `SP_STORES_DELIVERIES` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_DELIVERIES`(IN store_id INT)
BEGIN
	SELECT p.id AS person_id, CONCAT(p.first_name, ' ', p.last_name) AS nameDelivery, p.phone, p.image, u.notification_token FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE u.rol_id = 3 AND p.state = 1 ;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_GET_VOUCHER` */

DROP PROCEDURE IF EXISTS  `SP_STORES_GET_VOUCHER` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_GET_VOUCHER`(IN store_id INT)
BEGIN		
	SELECT 	vocher.id AS id, 
		vocher.name AS NAME,
		vocher.description AS DESCRIPTION,
		vocher.start_date AS start_date,
		vocher.end_date AS end_date, 
		vocher.code AS CODE,
		vocher.image_panner AS image_panner,
		vocher.image_avatar AS image_avatar,
		tdis.id AS id_discount,
		tdis.name AS type_discount,
		tdis.math AS math_discount,
		dis.min_orders AS min_order,
		dis.used_time AS used_time, 
		dis.value_discount AS value_discount,
		dis.max_discount AS max_discount
	FROM vochers vocher
	INNER JOIN discounts dis ON dis.id = vocher.id_discount
	INNER JOIN discount_types tdis ON tdis.id = dis.id_type_discount
	INNER JOIN vocher_apply_store asotre ON vocher.id = asotre.id_vocher
	WHERE INSTR(asotre.list_id_store, CONCAT(',',store_id ,',')) > 0
	AND (vocher.id_vocher_type = 4 OR vocher.id_vocher_type = 2);
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_GET_VOUCHER_BY_PRODUCT` */

DROP PROCEDURE IF EXISTS  `SP_STORES_GET_VOUCHER_BY_PRODUCT` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_GET_VOUCHER_BY_PRODUCT`(IN product_id INT)
BEGIN		
	SELECT 	vocher.id AS id, 
		vocher.name AS NAME,
		vocher.description AS DESCRIPTION,
		vocher.start_date AS start_date,
		vocher.end_date AS end_date, 
		vocher.code AS CODE,
		vocher.image_panner AS image_panner,
		vocher.image_avatar AS image_avatar,
		tdis.name AS type_discount,
		tdis.math AS math_discount,
		dis.min_orders AS min_order,
		dis.used_time AS used_time, 
		dis.value_discount AS value_discount,
		dis.max_discount AS max_discount
	FROM vochers vocher
	INNER JOIN discounts dis ON dis.id = vocher.id_discount
	INNER JOIN discount_types tdis ON tdis.id = dis.id_type_discount
	INNER JOIN vocher_apply_product aproduct ON vocher.id = aproduct.id_vocher
	WHERE INSTR(aproduct.list_id_product, CONCAT(',',product_id ,',')) > 0
	AND vocher.id_vocher_type = 1;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_STORES_UPDATE_CATEGORY` */

DROP PROCEDURE IF EXISTS  `SP_STORES_UPDATE_CATEGORY` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_STORES_UPDATE_CATEGORY`(IN category VARCHAR(50), IN DESCRIPTION VARCHAR(100), IN in_id INT)
BEGIN
	UPDATE categories SET category = category, DESCRIPTION = DESCRIPTION WHERE id = in_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_UPDATE_PROFILE` */

DROP PROCEDURE IF EXISTS  `SP_UPDATE_PROFILE` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_UPDATE_PROFILE`(IN ID INT, IN first_name VARCHAR(50), IN last_name VARCHAR(50), IN phone VARCHAR(11))
BEGIN
	UPDATE persons
		SET first_name = first_name,
			 last_name = last_name,
			 phone = phone
	WHERE persons.id = ID;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_REFERENCE_ADD` */

DROP PROCEDURE IF EXISTS  `SP_USERS_REFERENCE_ADD` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_REFERENCE_ADD`(IN user_id INT, IN CODE CHARACTER(200))
BEGIN

	DECLARE isExistCode DOUBLE;
	DECLARE isExistUser BOOLEAN;
	
	  SELECT COUNT(1) INTO isExistCode FROM persons WHERE reference_code = CODE;
	  CALL SP_USERS_REFERENCE_CHECK(user_id, isExistUser);
	  /*IF*/
	  IF isExistCode = 0 THEN SELECT "Wrong refer code" as message;
	  ELSE IF isExistUser = TRUE THEN SELECT "Exist user" as message;
	  ELSE 
		INSERT INTO user_reference (user_id,DATE, reference_code) VALUES (user_id, CURRENT_TIME(), CODE);
        SELECT "successful" as message;
	  END IF;
      END IF;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_REFERENCE_CHECK` */

DROP PROCEDURE IF EXISTS  `SP_USERS_REFERENCE_CHECK` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_REFERENCE_CHECK`(IN user_id_input INT,OUT result BOOLEAN)
BEGIN

	DECLARE isExist DOUBLE;
  SELECT COUNT(1) INTO isExist FROM user_reference WHERE user_id = user_id_input;
  IF     isExist >= 1 THEN SELECT TRUE INTO result;
  ELSE SELECT FALSE INTO result;
  END IF;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_REGISTER` */

DROP PROCEDURE IF EXISTS  `SP_USERS_REGISTER` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_REGISTER`(IN first_name VARCHAR(50), IN last_name VARCHAR(50), IN phone VARCHAR(11), 
IN image VARCHAR(250), IN email VARCHAR(100), IN pass VARCHAR(100), IN rol INT, IN nToken VARCHAR(255))
BEGIN
INSERT INTO persons (first_name, last_name, phone, image) VALUE (first_name, last_name, phone, image);
SELECT @lid:=LAST_INSERT_ID();
UPDATE persons SET reference_code = CONCAT(
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@lid)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed:=ROUND(RAND(@seed)*4294967296))*36+1, 1),
  SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND(@seed)*36+1, 1)
)
WHERE id=@lid;

INSERT INTO users (users, email, PASSWORD, person_id, rol_id, notification_token) VALUE (first_name, email, pass, LAST_INSERT_ID(), rol, nToken);
	
	END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_UPDATE_DAY_OF_BIRTH` */

DROP PROCEDURE IF EXISTS  `SP_USERS_UPDATE_DAY_OF_BIRTH` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_UPDATE_DAY_OF_BIRTH`(IN user_id INT, IN date_of_birth DATE)
BEGIN
	UPDATE persons p SET p.date_of_birth = date_of_birth WHERE p.id = user_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_UPDATE_FIRST_NAME` */

DROP PROCEDURE IF EXISTS  `SP_USERS_UPDATE_FIRST_NAME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_UPDATE_FIRST_NAME`(IN user_id INT, IN first_name VARCHAR(50))
BEGIN
	UPDATE persons p SET p.first_name = first_name WHERE p.id = user_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_UPDATE_LAST_NAME` */

DROP PROCEDURE IF EXISTS  `SP_USERS_UPDATE_LAST_NAME` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_UPDATE_LAST_NAME`(IN user_id INT, IN last_name VARCHAR(50))
BEGIN
	UPDATE persons p SET p.last_name = last_name WHERE p.id = user_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_UPDATE_SEX` */

DROP PROCEDURE IF EXISTS  `SP_USERS_UPDATE_SEX` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_UPDATE_SEX`(IN user_id INT, IN sex VARCHAR(50))
BEGIN
	UPDATE persons p SET p.sex = sex WHERE p.id = user_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USERS_UPDATE_WORK` */

DROP PROCEDURE IF EXISTS  `SP_USERS_UPDATE_WORK` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USERS_UPDATE_WORK`(IN user_id INT, IN WORK VARCHAR(50))
BEGIN
	UPDATE persons p SET p.work = WORK WHERE p.id = user_id;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USER_BY_ID` */

DROP PROCEDURE IF EXISTS  `SP_USER_BY_ID` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USER_BY_ID`(IN ID INT)
BEGIN
	SELECT p.id, p.first_name, p.last_name, p.phone, p.image, u.email, u.rol_id, u.notification_token FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE p.id = ID AND p.state = TRUE;
END $$
DELIMITER ;

/* Procedure structure for procedure `SP_USER_UPDATED` */

DROP PROCEDURE IF EXISTS  `SP_USER_UPDATED` ;

DELIMITER $$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_USER_UPDATED`(IN ID INT)
BEGIN
	SELECT p.first_name, p.last_name, p.image, p.phone, u.email, u.rol_id FROM persons p
	INNER JOIN users u ON p.id = u.person_id
	WHERE p.id = ID AND p.state = TRUE;
END $$
DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
