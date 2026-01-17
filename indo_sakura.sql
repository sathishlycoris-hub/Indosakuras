-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 17, 2026 at 10:14 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `indo_sakura`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint UNSIGNED NOT NULL,
  `language` enum('en','ja') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description_ja` text COLLATE utf8mb4_unicode_ci,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_ja` longtext COLLATE utf8mb4_unicode_ci,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published_date` date NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('published','draft') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `language`, `title`, `title_ja`, `short_description`, `short_description_ja`, `content`, `content_ja`, `category`, `author`, `published_date`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'en', 'The Future of AI-Driven Software Developments', NULL, 'Explore how artificial intelligence is revolutionizing the way we build software, from codea', NULL, '<h2>Introduction</h2><p>Artificial Intelligence is revolutionizing development workflows, enabling faster, smarter, and more efficient software production.</p><h2>AI-Powered Code Generation</h2><p>AI can now generate production-ready code from natural language descriptions, drastically reducing development time and improving efficiency</p><h2>Automated Testing &amp; Quality Assurance</h2><p>Automated AI testing tools predict bugs, generate test cases, and validate performance—ensuring high-quality, stable releases.</p><h2>Intelligent Code Review</h2><p>AI-driven code review tools analyze logic, detect vulnerabilities, and provide real-time improvement suggestions.</p><h2>The Road Ahead</h2><p>The next wave of AI will bring autonomous development systems capable of designing, coding, testing, and deploying software with minimal human intervention.</p>', NULL, 'Technology', 'Tech Team', '2025-12-03', 'blogs/WjJNbQ0WcbTfJE7frMkZ9VAD9e9tTvzG6sXgugiA.jpg', 'published', '2025-12-24 05:41:29', '2025-12-26 01:08:19'),
(2, 'en', 'Cloud Migration Strategies for 2025', NULL, 'Discover the best approaches for migrating your infrastructure to the cloud with minimal disruption.', NULL, '<h2>Why Migrate to the Cloud?</h2><p>Cloud migration offers numerous benefits including cost optimization, scalability, improved performance, and enhanced security. Organizations that embrace cloud technology gain competitive advantages.</p><p><br></p><h2>Migration Approaches</h2><p>There are several migration strategies: Rehost (lift and shift), Replatform, Repurchase, Refactor, Retire, and Retain. Each approach has its own benefits and considerations.</p><p><br></p><h2>Best Practices</h2><p>Successful cloud migration requires thorough planning, stakeholder alignment, proper resource allocation, and continuous monitoring throughout the process.</p>', NULL, 'Cloud', 'henry', '2025-11-06', 'blogs/4ulataMkv2U9Bc5e5d8a5fmfhCwBqK0ekf8CeLax.jpg', 'published', '2025-12-27 01:13:23', '2025-12-27 01:13:23'),
(3, 'en', 'Zero Trust Security: A Complete Guide for Modern Enterprises', NULL, 'Learn how Zero Trust is shaping the future of cybersecurity by eliminating implicit trust and continuously verifying every request.', NULL, '<h2>What is Zero Trust?</h2><p>Zero Trust is a modern security model that requires continuous verification of every user and device, regardless of where the request originates.</p><h2>Core Principles of Zero Trust</h2><p>Zero Trust operates on the belief that no entity should be trusted automatically. Every access request is treated as a potential threat.</p><p><br></p><ul><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li>Verify explicitly</li><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li>Use least privilege access</li><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li>Assume breach</li></ul><h2>Key Implementation Steps</h2><p>Organizations implementing Zero Trust must follow a structured process to ensure a scalable and secure architecture.</p><p><br></p><ul><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li><strong>Identify sensitive data</strong></li><li>Start by mapping critical assets</li><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li><strong>Segment your environment</strong></li><li>Reduce attack surface by isolating workloads</li><li><span style=\"color: rgb(213, 57, 117);\">✓</span></li><li><strong>Implement monitoring</strong></li><li>Continuously validate identity and behavior</li></ul><h2>The Future of Zero Trust</h2><p>Zero Trust is rapidly becoming the global standard for cybersecurity, with enterprises adopting it across networks, applications, and devices.</p>', NULL, 'Security', 'navis', '2025-08-15', 'blogs/wTydN6d6NuJul0YhGsqA7h0UYAfuQ1TbRkoFsd85.jpg', 'published', '2025-12-27 01:14:58', '2026-01-09 05:24:13'),
(4, 'en', 'The Rise of Low-Code Development Platforms', NULL, 'How low-code platforms are democratizing software development and accelerating digital initiatives.', NULL, '<h2>What is Low-Code?</h2><p>Low-code development platforms enable users to create applications through graphical user interfaces and configuration instead of traditional hand-coded programming.</p><h2>Benefits for Enterprises</h2><p>Low-code platforms accelerate development by 10x, reduce costs, and enable business users to participate in application development, bridging the gap between IT and business.</p><h2>When to Use Low-Code</h2><p>Low-code is ideal for internal tools, workflow automation, customer portals, and rapid prototyping. For complex, mission-critical systems, traditional development may still be preferred.</p>', NULL, 'Development', 'louis', '2025-12-03', 'blogs/CYPFa0axTfatg3keXmQPxlAZOAJzryaAeguv2aNw.jpg', 'published', '2025-12-27 01:17:00', '2025-12-27 01:17:00');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint UNSIGNED NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `description`, `created_at`, `updated_at`) VALUES
(1, '<p>Indo-Sakura grows together with our partners. In addition, we have partnered with various partner companies to ensure that our customers can continue to use the service with peace of mind and to provide better services.</p><p>*Only companies that have permission to publish are listed. (Company name in alphabetical order, honorific titles omitted)</p>', '2025-12-31 05:33:01', '2025-12-31 05:33:01');

-- --------------------------------------------------------

--
-- Table structure for table `client_sections`
--

CREATE TABLE `client_sections` (
  `id` bigint UNSIGNED NOT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `section_type` enum('customer','alliance','contract','partner') COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_sections`
--

INSERT INTO `client_sections` (`id`, `client_id`, `section_type`, `name`, `sort_order`, `created_at`, `updated_at`) VALUES
(67, 1, 'customer', 'Astellas Pharma Corporation', 0, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(68, 1, 'alliance', 'Daiwabo Information Systems Co., Ltd.', 1, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(69, 1, 'contract', 'AWS Partner Network (APN) Advanced Tier Services Partner', 2, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(70, 1, 'partner', 'ABeam Consulting Co., Ltd.', 3, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(71, 1, 'customer', 'Iwaki Corporation', 4, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(72, 1, 'customer', 'ABC Fun Life Inc.', 5, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(73, 1, 'customer', 'Shichida Education Research Institute Co., Ltd.', 6, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(74, 1, 'customer', 'WDI Corporation', 7, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(75, 1, 'customer', 'House Wellness Foods Co., Ltd.', 8, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(76, 1, 'customer', 'BEMAC Corporation', 9, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(77, 1, 'customer', 'Fujiki Corporation', 10, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(78, 1, 'customer', 'Fujipan QSR Corporation', 11, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(79, 1, 'customer', 'Miyabi Corporation', 12, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(80, 1, 'customer', 'Yamamoto Shokai Co., Ltd.', 13, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(81, 1, 'customer', 'Apros Corporation', 14, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(82, 1, 'customer', 'Wizards Inc.', 15, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(83, 1, 'customer', 'MTI Corporation', 16, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(84, 1, 'alliance', 'GMO Makeup Shop Inc.', 17, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(85, 1, 'alliance', 'Assist Inc.', 18, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(86, 1, 'alliance', 'Interfactory Inc.', 19, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(87, 1, 'contract', 'RoboOperator Agency Partner', 20, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(88, 1, 'contract', 'Yellowfin Partner Authorized Distributor', 21, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(89, 1, 'contract', 'CCH Tagetik Certified Partner', 22, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(90, 1, 'partner', 'NEC Solution Innovator Corporation', 23, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(91, 1, 'partner', 'Qualica Corporation', 24, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(92, 1, 'partner', 'Sakura Information Systems Co., Ltd.', 25, '2026-01-06 05:14:26', '2026-01-06 05:14:26'),
(93, 1, 'partner', 'Daikin Information Systems Corporation', 26, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(94, 1, 'partner', 'TOPPAN Corporation', 27, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(95, 1, 'partner', 'Hitachi, Ltd.', 28, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(96, 1, 'partner', 'Fujitsu Limited', 29, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(97, 1, 'partner', 'Benic Solution Inc.', 30, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(98, 1, 'partner', 'ITOCHU Techno Solutions Corporation', 31, '2026-01-06 05:14:27', '2026-01-06 05:14:27'),
(99, 1, 'partner', 'NTT DATA Global Solutions Corporation', 32, '2026-01-06 05:14:27', '2026-01-06 05:14:27');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint UNSIGNED NOT NULL,
  `product_service` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classification` json NOT NULL,
  `requests` text COLLATE utf8mb4_unicode_ci,
  `expected_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_ja` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefecture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `product_service`, `classification`, `requests`, `expected_date`, `company_name`, `customer_position`, `department`, `post`, `name_en`, `name_ja`, `address_type`, `zip_code`, `prefecture`, `address`, `telephone`, `email`, `language`, `created_at`, `updated_at`) VALUES
(4, 'e-learning sites', '\"[\\\"request-info\\\",\\\"demo-request\\\"]\"', 'online guidelines', '1year', 'mithra soft', 'other', 'technical support', 'Manager', 'Shizunai Mena', 'しずない まない', 'company', '220-81287', 'Hokkaido', '450-1135, Minatomirai Kuinzutawab(12-k,  Nishi-ku Yokohama-shi, Kanagawa', '+8131-447-7464', 'ShizunaiMena@gmial.com', 'en', '2025-12-26 04:46:10', '2025-12-26 04:46:10'),
(5, 'software developement', '\"[\\\"request-info\\\",\\\"quotation\\\"]\"', 'sourcebyte AI conceptual requirement', '1year', 'lenier solutions', 'suggestions', 'general', 'deputy manager', 'Revan canel', 'は おそら', 'company', '220-812', 'Hokkaido', 'Flat No. G1 & G3, RS No. 378/1A, 1B, 1C, Aikya-2 Apartments, Korukonda Road, Konthamuru, Rajahmundry, East Godavari, Andhra Pradesh – 533102', '045-000-5555', 'revan@gmail.com', 'en', '2025-12-27 01:22:56', '2025-12-27 01:22:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint UNSIGNED NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`, `created_at`, `updated_at`) VALUES
(1, 'What kind of company culture is it?', 'We believe there are many people who love technology and want to contribute to society in some way. Customers often say that many of our employees are honest, dedicated, and steadfast in their commitment to excellence.', '2025-12-31 00:35:12', '2025-12-31 00:40:24'),
(2, 'What is the relationship between Indo-Sakura Software and other IT companies?', 'As a technology-focused company, we collaborate with leading IT partners worldwide, from system design to platform construction and system operation, to solve issues for customers and society based on our expertise in system integration and managed services.', '2025-12-31 00:37:13', '2025-12-31 00:39:27'),
(4, 'How is project assignment determined after joining the company?', 'During the recruitment screening, we confirm the desired location and job type, but we also have interviews during the training period for new employees to confirm the person\'s wishes. At our company, we decide where to assign after considering the skills and wishes of the person.', '2025-12-31 01:05:57', '2025-12-31 01:05:57'),
(5, 'Where will you be working?', 'Most of the employees work in the Tokyo metropolitan area (head office, customers, etc.), mainly in Yokohama and Tokyo, and some employees work in the Chubu area, Kansai area, and Chugoku region. We also have offices in India and USA.', '2025-12-31 01:06:38', '2025-12-31 01:06:38'),
(6, 'What kind of clothes do you wear to work?', 'In order to promote autonomous work styles, such as expanding flex work and establishing optimal work styles that combine in-person and remote work, the dress code has been free since October 2023. Depending on the location and TPO, many employees wear casual clothing such as T-shirts and denim during normal work.', '2025-12-31 01:07:09', '2025-12-31 01:07:09'),
(7, 'Can I get the job or project I want to do?', 'We have introduced an internal recruitment system, allowing you to open up your career by raising your hand in response to recruitment. In addition, there is a career plan support program aimed at learning how to develop your career and skills and becoming self-reliant in your career. Based on each individual\'s growth plan, we will provide maximum support for planned learning and active participation.', '2025-12-31 01:07:42', '2025-12-31 01:07:42'),
(8, 'I didn\'t study programming when I was a student, is that okay?', 'In order to cultivate excellent engineers who will continue to play an active role in the world, we carefully and carefully train new employees from the time they are newcomers, including basic training for three months after joining the company and manufacturing training for the next six months. You can learn the basics of IT and programming through training for prospective employees and training after joining the company. Even if you have no experience in programming at all, by the end of the training, you will be able to think and create specifications and program on your own.', '2025-12-31 01:08:24', '2025-12-31 01:08:24'),
(9, 'How is the evaluation done?', 'We use a comprehensive performance management system. Consult with your boss and decide on the annual goals you need to achieve. We evaluate the degree of achievement and process against that goal. Every six months, we will have an interview with our supervisor to provide feedback on the evaluation.', '2025-12-31 01:08:59', '2025-12-31 01:08:59');

-- --------------------------------------------------------

--
-- Table structure for table `greetings`
--

CREATE TABLE `greetings` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `greetings`
--

INSERT INTO `greetings` (`id`, `title`, `image`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Message from the President', 'greetings/qVSzCB2DIUKIpuzFWCFNkRjnM1dQsJWyAxzUjQhw.webp', '<p>We, Indo-Sakura Software Japan, have taken the lead in contributing to the realization of a sustainable society by responding to the needs of our customers and society through IT services that combine a diverse range of human resources and advanced information technology.</p><p><br></p><p><br></p><p><br></p><p>As society continues to change, companies are required to undergo digital transformation (DX) to transform their products, services, and business models in order to respond to changes in the business environment. As a bridge between Japan and India, we will develop innovative business solutions, which accumulates advanced digital technology, operational know-how, and knowledge, and support our customers\' DX promotion.</p><p><br></p><p><br></p><p><br></p><p>In addition to the technology and know-how we have cultivated so far, we will also provide services necessary to solve problems for society and customers through co-creation with customers and partner companies.</p><p><br></p><p><br></p><p><br></p><p>We will continue to make use of the human resources of each and every employee to provide services from the customer\'s perspective, aiming to be an IT service company that is truly trusted by society and customers, and working to realize a sustainable society.</p><p><br></p><p>Indo-Sakura Software Japan K.K.</p><p><br></p><p>Founder &amp; CEO</p><p>Atul Paswans</p>', '2026-01-06 08:03:52', '2026-01-10 02:17:50');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` bigint UNSIGNED NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `histories`
--

INSERT INTO `histories` (`id`, `year`, `month`, `description`, `created_at`, `updated_at`) VALUES
(1, '2025', 'January', '<p><span style=\"color: rgb(107, 114, 128);\">At South Tech Expo 2025, Indo-Sakura Software Japan showcased its flagship AI products — SourceBytes AI, MediChat, and MediAnalytics AI. The event helped build global connections and receive excellent feedback.</span></p>', '2025-12-31 04:33:45', '2025-12-31 04:33:45'),
(2, '2022', 'August', '<p><span style=\"color: rgb(107, 114, 128);\">Established Cyber Security Solutions division in partnership with BluSapphire Inc. (USA) and expanded cybersecurity offerings.</span></p>', '2025-12-31 04:34:18', '2025-12-31 05:36:40'),
(3, '2021', 'April', '<p><span style=\"color: rgb(107, 114, 128);\">Selected as an AI Vendor by SoftBank for high-quality deliveries and contributions to AI-related services.</span></p>', '2025-12-31 04:34:55', '2025-12-31 04:34:55'),
(4, '2020', 'March', '<p><span style=\"color: rgb(107, 114, 128);\">Formed a business alliance with SoftBank Group companies to enhance DevOps solution sales.</span></p>', '2025-12-31 04:35:28', '2025-12-31 04:35:28'),
(5, '2019', 'June', '<p><span style=\"color: rgb(107, 114, 128);\">Launched World HR (now world-hr.com) to meet the increasing demand for highly skilled IT professionals in Japan.</span></p>', '2025-12-31 04:35:46', '2025-12-31 04:35:46'),
(6, '2017', 'December', '<p><span style=\"color: rgb(107, 114, 128);\">Participated in cultural events for the 85th birthday celebration of the Emperor of Japan, hosted by the Consulate General of Japan in Bengaluru.</span></p>', '2025-12-31 04:36:08', '2025-12-31 04:36:08'),
(7, '2015', 'April', '<p><span style=\"color: rgb(107, 114, 128);\">Partnered with KOKUYO Japan to market and distribute digital stationery products in India.</span></p>', '2025-12-31 04:36:29', '2025-12-31 04:36:29'),
(8, '2012', 'May', '<p><span style=\"color: rgb(107, 114, 128);\">Expanded IT services to Japanese firms in the USA through a partnership with System 7 Inc., Los Angeles.</span></p>', '2025-12-31 04:36:54', '2025-12-31 04:36:54'),
(9, '2009', 'October', '<p><span style=\"color: rgb(107, 114, 128);\">Relocated Japan head office to Mimasaka (Okayama) and expanded services in the Kansai region. Launched Data Analysis Division.</span></p>', '2025-12-31 04:37:20', '2025-12-31 04:37:20'),
(10, '2008', 'July', '<p><span style=\"color: rgb(107, 114, 128);\">Launched full-time Japanese language training program with Omron Group for IT graduates.</span></p>', '2025-12-31 04:37:41', '2025-12-31 04:37:41'),
(11, '2007', 'March', '<p><span style=\"color: rgb(107, 114, 128);\">Established an Offshore Development Center to deliver IT services to the Omron Group in Japan.</span></p>', '2025-12-31 04:38:08', '2025-12-31 04:38:08'),
(12, '2006', 'September', '<p><span style=\"color: rgb(107, 114, 128);\">Opened the Bangalore Development Center and launched a 6-month Japanese language program.</span></p>', '2025-12-31 04:38:34', '2025-12-31 04:38:34'),
(13, '2005', 'December', '<p>Indo-Sakura Software Japan K.K. was founded by Mr. Atul Prasann, beginning its Japan–India IT innovation journey.</p>', '2025-12-31 04:39:05', '2025-12-31 04:39:05');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci,
  `about_role` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` enum('en','ja') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `status` enum('draft','published') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `slug`, `department`, `location`, `employment_type`, `experience`, `salary`, `short_description`, `about_role`, `language`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Software Engineer', 'software-engineer', 'Engineering', 'Tokyo, Japan / Mumbai, India', 'Full-time', '3-5 years', 'Competitive', '<h2>About the Role</h2><p>We are looking for an experienced Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-quality software applications that power our enterprise solutions.</p>', '<p><span style=\"color: rgb(107, 114, 128);\">We are looking for an experienced Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-quality software applications that power our enterprise solutions.</span></p>', 'en', 'published', '2025-12-25 02:51:42', '2025-12-26 04:04:26'),
(2, 'Data Scientist', 'data-scientist', 'AI & Data', 'Bangalore, India', 'Full-time', '2+ Years (Immediate)', 'Competitive', '<p><span style=\"color: rgb(107, 114, 128);\">We are looking for a highly skilled Data Scientist / AI-ML Engineer with deep hands-on experience in building intelligent AI systems. You will work across the full AI lifecycle—research, design, experimentation, development, deployment, and optimization. This role involves building advanced GenAI solutions, RAG pipelines, AI agents, and ML-driven applications that solve real-world problems at scale.</span></p>', '<p><span style=\"color: rgb(107, 114, 128);\"> This role involves building advanced GenAI solutions, RAG pipelines, AI agents, and ML-driven applications that solve real-world problems at scale.</span></p>', 'en', 'published', '2025-12-26 02:07:37', '2025-12-26 03:41:11'),
(3, 'Technical Content Writer', 'technical-content-writer', 'Content & Communication', 'Bangalore, India', 'Full-time (Work from Office)', '2+ Years', 'Competitive', NULL, '<p><span style=\"color: rgb(107, 114, 128);\">We are looking for a talented Technical Content Writer with strong writing and communication skills to create high-quality documentation and marketing content. You will translate complex technical concepts into simple, engaging, and accurate content for diverse audiences, helping bridge the gap between product teams and end users.</span></p>', 'en', 'published', '2025-12-26 04:14:42', '2025-12-26 04:15:12'),
(4, 'Global Project Manager', 'global-project-manager', 'Global Project Management', 'Tokyo, Japan', 'Full-time', '4yrs', '¥5M – ¥8M / year', NULL, '<p><span style=\"color: rgb(107, 114, 128);\">As a Global Project Manager, you will help drive Japan-originated business initiatives across India and Dubai. Working closely with multicultural engineering teams, you will oversee strategic IT and AI projects, ensuring timely delivery, client satisfaction, and effective risk management. This role is ideal for individuals passionate about global collaboration, leadership, and contributing to Japan’s rapidly evolving technology landscape.</span></p>', 'en', 'published', '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(5, 'Finance & Accounts Manager', 'finance-accounts-manager', 'Finance & Account', 'Bangalore, India', 'Full-time', '1–3 Years Experience', 'Competitive', NULL, '<p><span style=\"color: rgb(107, 114, 128);\">We are seeking an experienced Finance &amp; Accounts Manager to join our Bangalore team. In this role, you will oversee financial operations, ensure compliance with regulatory standards, and provide insights to support business decisions. You will work closely with leadership to optimize financial processes, maintain accurate reporting, and contribute to the organization’s long-term financial stability and growth.</span></p>', 'en', 'published', '2025-12-27 00:42:38', '2025-12-27 00:42:38'),
(6, 'SAP Consultants', 'sap-consultants', 'SAP Consultanting', 'Banglore', 'Part Time', '3-5 Years', 'Competitive', NULL, '<p><span style=\"color: rgb(107, 114, 128);\">We are hiring SAP Consultants across modules including MM, PP, SD, FI, and ABAP. The ideal candidates should have strong SAP implementation and support experience along with excellent communication skills. Both bilingual (Japanese + English) and non-bilingual consultants are welcome to apply. Consultants may be required to travel to Japan occasionally based on project needs.</span></p>', 'en', 'published', '2025-12-27 00:49:13', '2025-12-27 00:49:13');

-- --------------------------------------------------------

--
-- Table structure for table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` bigint UNSIGNED NOT NULL,
  `job_id` bigint UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover_letter` text COLLATE utf8mb4_unicode_ci,
  `resume` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('new','reviewed','rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'new',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_applications`
--

INSERT INTO `job_applications` (`id`, `job_id`, `full_name`, `email`, `phone`, `cover_letter`, `resume`, `status`, `created_at`, `updated_at`) VALUES
(3, 4, 'jhontoe', 'jhontoe@gmail.com', '+81 (03) 1234-5678', NULL, 'job-applications/Sx7FeC50j8nBiFjwzB8j6ksidrJSkyzRqqzLgMvu.pdf', 'new', '2025-12-26 05:11:50', '2025-12-26 05:11:50'),
(5, 6, 'henry', 'henry@gmail.com', '9878985898', NULL, 'job-applications/oEJ60IHzU4g7g5SvpQFBB9VO9E4rUJpMJHWXAHGF.pdf', 'new', '2025-12-27 08:36:56', '2025-12-27 08:36:56'),
(6, 6, 'caravel', 'caravel@gmail.com', '9689898999', NULL, 'job-applications/LoqfeP1dqcRfLQMKTeKYHzo80z0B905FUiCSdwXK.pdf', 'new', '2025-12-27 08:40:35', '2025-12-27 08:40:35');

-- --------------------------------------------------------

--
-- Table structure for table `job_sections`
--

CREATE TABLE `job_sections` (
  `id` bigint UNSIGNED NOT NULL,
  `job_id` bigint UNSIGNED NOT NULL,
  `section_type` enum('responsibilities','requirements','preferred','offer') COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_sections`
--

INSERT INTO `job_sections` (`id`, `job_id`, `section_type`, `content`, `sort_order`, `created_at`, `updated_at`) VALUES
(36, 2, 'responsibilities', 'Design, build, and deploy end-to-end AI/ML solutions across NLP, GenAI, and Computer Vision domains.', 0, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(37, 2, 'requirements', 'Bachelor’s or Master’s degree in Computer Science, Data Science, AI/ML, or related field.', 1, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(38, 2, 'preferred', 'Open-source contributions or active GitHub portfolio.', 2, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(39, 2, 'offer', 'Competitive compensation package aligned with skills and experience.', 3, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(40, 2, 'responsibilities', 'Work with both proprietary LLMs (GPT, Claude, Gemini) and open-source models (LLaMA, Mistral, BERT, Gemma).', 4, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(41, 2, 'responsibilities', 'Architect and optimize Retrieval-Augmented Generation (RAG) pipelines using LangChain, LangGraph, CrewAI, and LlamaIndex.', 5, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(42, 2, 'responsibilities', 'Develop AI agents, chatbot systems, and automation workflows for real-world applications.', 6, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(43, 2, 'responsibilities', 'Implement semantic search and retrieval systems using vector databases like FAISS, Milvus, Qdrant, Weaviate, pgvector, and ChromaDB.', 7, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(44, 2, 'responsibilities', 'Apply prompt engineering, few-shot learning, and fine-tuning techniques to maximize LLM performance.', 8, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(45, 2, 'requirements', '2+ years of hands-on experience in AI/ML engineering or data science roles.', 9, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(46, 2, 'requirements', 'Strong proficiency in Python and experience with FastAPI or Flask.', 10, '2025-12-26 03:41:11', '2025-12-26 03:41:11'),
(47, 2, 'requirements', 'Hands-on expertise in Large Language Models, Transformers, and Generative AI methods.', 11, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(48, 2, 'requirements', 'Experience with frameworks such as LangChain, LangGraph, LlamaIndex, CrewAI, and HuggingFace.', 12, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(49, 2, 'requirements', 'Cloud experience with AWS, Azure, or Google Cloud Platform.', 13, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(50, 2, 'requirements', 'Knowledge of SQL/NoSQL databases such as PostgreSQL, SQLite, MySQL, or MongoDB.', 14, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(51, 2, 'preferred', 'Experience with multimodal LLMs and advanced transformer architectures.', 15, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(52, 2, 'preferred', 'Strong statistical background or academic research in AI/ML.', 16, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(53, 2, 'preferred', 'Experience with rapid POC development and startup-style experimentation.', 17, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(54, 2, 'offer', 'Opportunity to work with cutting-edge AI, GenAI, and agent-based technologies.', 18, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(55, 2, 'offer', 'Access to modern tools, cloud infrastructure, and advanced compute resources.', 19, '2025-12-26 03:41:12', '2025-12-26 03:41:12'),
(64, 1, 'responsibilities', 'Design, develop, and maintain scalable web applications using modern technologies', 0, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(65, 1, 'requirements', 'Bachelor\'s degree in Computer Science, Engineering, or related field', 1, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(66, 1, 'preferred', 'Experience working in a global environment', 2, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(67, 1, 'offer', 'Competitive salary based on experience and skills', 3, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(68, 1, 'responsibilities', 'Collaborate with cross-functional teams to define, design, and ship new features', 4, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(69, 1, 'requirements', '3-5 years of professional software development experience', 5, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(70, 1, 'preferred', 'Knowledge of containerization (Docker, Kubernetes)', 6, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(71, 1, 'preferred', 'Knowledge of containerization (Docker, Kubernetes)', 7, '2025-12-26 04:04:26', '2025-12-26 04:04:26'),
(84, 3, 'responsibilities', 'Write and edit clear, engaging, and accurate technical content such as product documentation, user guides, manuals, FAQs, and API references.', 0, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(85, 3, 'requirements', 'Bachelor’s degree in English, Communications, Journalism, Computer Science, or a related field.', 1, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(86, 3, 'preferred', 'Experience writing for SaaS, AI, or software development companies.', 2, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(87, 3, 'offer', 'Competitive salary with performance-based growth opportunities.', 3, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(88, 3, 'responsibilities', 'Produce high-quality blogs, articles, whitepapers, and case studies explaining complex technical concepts in simple terms.', 4, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(89, 3, 'responsibilities', 'Develop compelling marketing content for websites, newsletters, email campaigns, and social media platforms.', 5, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(90, 3, 'requirements', '1–2 years of proven experience as a technical writer or content writer in the IT/software domain.', 6, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(91, 3, 'requirements', 'Excellent English writing, editing, and proofreading skills.', 7, '2025-12-26 04:15:12', '2025-12-26 04:15:12'),
(92, 3, 'preferred', 'Understanding of software development lifecycle and technical terminology.', 8, '2025-12-26 04:15:13', '2025-12-26 04:15:13'),
(93, 3, 'preferred', 'Basic knowledge of HTML, Markdown, or documentation tools.', 9, '2025-12-26 04:15:13', '2025-12-26 04:15:13'),
(94, 3, 'offer', 'A collaborative and creative work environment with supportive team members.', 10, '2025-12-26 04:15:13', '2025-12-26 04:15:13'),
(95, 3, 'offer', 'Opportunity to work closely with engineering, AI, and product teams.', 11, '2025-12-26 04:15:13', '2025-12-26 04:15:13'),
(96, 4, 'responsibilities', 'Lead planning, execution, and progress management of large-scale IT and AI projects in Japan, India, and Dubai.', 0, '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(97, 4, 'requirements', 'No prior project management or IT/AI industry experience required — AI tools will be utilized to support workflow.', 1, '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(98, 4, 'preferred', 'Experience or interest in global business strategy or cross-cultural management.', 2, '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(99, 4, 'offer', 'Annual salary range: ¥5,000,000 – ¥8,000,000 (with monthly pay between ¥416,666 – ¥666,666).', 3, '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(100, 4, 'responsibilities', 'Collaborate closely with multinational engineering teams and external partners to drive results and mitigate risks.', 4, '2025-12-26 04:22:49', '2025-12-26 04:22:49'),
(101, 4, 'requirements', 'Strong interest in business development, sales, consulting, or global project roles.', 5, '2025-12-26 04:22:50', '2025-12-26 04:22:50'),
(102, 4, 'requirements', 'Experience or interest in global business strategy or cross-cultural management.', 6, '2025-12-26 04:22:50', '2025-12-26 04:22:50'),
(103, 4, 'preferred', 'Strong leadership mindset and problem-solving orientation.', 7, '2025-12-26 04:22:50', '2025-12-26 04:22:50'),
(104, 4, 'offer', 'Opportunity to work closely with engineering, AI, and product teams.', 8, '2025-12-26 04:22:50', '2025-12-26 04:22:50'),
(118, 6, 'responsibilities', 'Implement, configure, and support SAP modules such as MM, PP, SD, FI, and ABAP based on business requirements.', 0, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(119, 6, 'requirements', 'Technical Round', 1, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(120, 6, 'preferred', 'Experience working in offshore delivery environments.', 2, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(121, 6, 'offer', 'Opportunity to work across multiple SAP domains including MM, PP, SD, FI, and ABAP.', 3, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(122, 6, 'responsibilities', 'Collaborate with cross-functional teams to analyze business processes and translate them into SAP solutions.', 4, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(123, 6, 'responsibilities', 'Perform gap analysis, requirement gathering, solution design, and documentation.', 5, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(124, 6, 'requirements', 'Client Managerial', 6, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(125, 6, 'requirements', 'HR Round', 7, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(126, 6, 'responsibilities', 'Relevant process', 8, '2025-12-27 00:49:13', '2025-12-27 00:49:13'),
(127, 6, 'requirements', '2 to 7 years of hands-on experience working with SAP modules: MM, PP, SD, FI, or ABAP.', 9, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(128, 6, 'preferred', 'Knowledge of SAP best practices and implementation methodologies.', 10, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(129, 6, 'preferred', 'Willingness to travel to Japan occasionally for project assignments.', 11, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(130, 6, 'offer', 'Career growth through challenging projects and client-facing opportunities.', 12, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(131, 6, 'offer', 'Competitive compensation based on experience and skills.', 13, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(132, 6, 'offer', 'Consultants may be required to travel to Japan occasionally as part of project delivery.', 14, '2025-12-27 00:49:14', '2025-12-27 00:49:14'),
(133, 5, 'responsibilities', 'Oversee day-to-day financial operations, including accounting, bookkeeping, and compliance activities.', 0, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(134, 5, 'requirements', 'Bachelor’s degree in Finance, Accounting, Commerce, or related field (CA Inter / MBA Finance preferred).', 1, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(135, 5, 'preferred', 'Experience working in IT, software, or multinational company environments.', 2, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(136, 5, 'offer', 'Competitive salary based on experience and industry standards.', 3, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(137, 5, 'responsibilities', 'Prepare and analyze financial statements, MIS reports, budgets, and forecasts to support business planning.', 4, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(138, 5, 'responsibilities', 'Manage accounts payable, accounts receivable, reconciliations, and month-end/year-end closing processes.', 5, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(139, 5, 'responsibilities', 'Ensure compliance with Indian accounting standards, taxation rules, and international reporting requirements.', 6, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(140, 5, 'requirements', '1–3 years of professional experience in finance, accounting, or audit roles.', 7, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(141, 5, 'requirements', 'Strong knowledge of accounting principles, financial reporting, GST, TDS, and compliance processes.', 8, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(142, 5, 'preferred', 'Knowledge of international accounting standards or cross-border finance operations.', 9, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(143, 5, 'preferred', 'Experience implementing financial automation tools or ERP systems.', 10, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(144, 5, 'offer', 'Opportunity to work in a fast-growing IT company with global reach.', 11, '2026-01-10 02:54:03', '2026-01-10 02:54:03'),
(145, 5, 'offer', 'Professional growth through exposure to financial planning, audits, and cross-border operations.', 12, '2026-01-10 02:54:03', '2026-01-10 02:54:03');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_11_29_103152_create_solutions_table', 2),
(6, '2025_12_01_044005_create_solutions_table', 3),
(7, '2025_12_01_071305_create_solutions_table', 4),
(8, '2025_12_03_112057_create_solution_masters_table', 5),
(9, '2025_12_04_064008_create_solution_details_table', 6),
(10, '2025_12_16_121754_create_newsevents_table', 7),
(11, '2025_12_22_105720_create_teams_table', 8),
(12, '2025_12_22_124130_create_seminars_table', 9),
(13, '2025_12_23_064724_create_contacts_table', 10),
(14, '2025_12_24_073854_create_seminar_table', 11),
(15, '2025_12_24_083527_create_seminars_table', 12),
(16, '2025_12_24_084125_create_seminars_table', 13),
(17, '2025_12_24_104623_create_blogs_table', 14),
(18, '2025_12_25_060903_create_jobs_table', 15),
(19, '2025_12_25_061052_create_job_sections_table', 15),
(20, '2025_12_25_105850_create_job_applications_table', 16),
(21, '2025_12_31_044504_create_faqs_table', 17),
(22, '2025_12_31_060233_create__faq_table', 18),
(23, '2025_12_31_072533_create_greetings_table', 19),
(24, '2025_12_31_083635_create_philosophies_table', 20),
(25, '2025_12_31_090940_create_profiles_table', 21),
(26, '2025_12_31_094834_create_profiles_table', 22),
(27, '2025_12_31_095553_create_histories_table', 23),
(28, '2025_12_31_102950_create_clients_table', 24),
(29, '2025_12_31_104216_create_client_sections_table', 24),
(30, '2025_12_31_114220_create_policies_table', 25),
(31, '2025_12_31_114314_create_policy_sections_table', 25),
(32, '2026_01_02_112123_create_solutions_table', 26),
(33, '2026_01_02_113705_create_solution_features_table', 26),
(34, '2026_01_02_113810_create_solution_use_cases_table', 26),
(35, '2026_01_02_113839_create_solution_industries_table', 26),
(36, '2026_01_02_113933_create_solution_case_studies_table', 26),
(37, '2026_01_05_050106_exit', 27),
(38, '2026_01_05_072135_create_solution_industries_table', 27),
(39, '2026_01_05_092526_create_services_table', 28),
(40, '2026_01_05_092622_create_service_highlights_table', 28),
(41, '2026_01_05_092703_create_service_benefits_table', 28),
(42, '2026_01_05_093650_create_service_highlights_table', 29),
(43, '2026_01_05_093715_create_service_benefits_table', 29),
(44, '2026_01_05_093815_create_service_industries_table', 29),
(45, '2026_01_06_042848_create_service_industries_table', 30),
(46, '2026_01_06_065025_create_seos_table', 31);

-- --------------------------------------------------------

--
-- Table structure for table `newsevents`
--

CREATE TABLE `newsevents` (
  `id` bigint UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `eventtype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pdf` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `newsevents`
--

INSERT INTO `newsevents` (`id`, `date`, `eventtype`, `short`, `description`, `image`, `pdf`, `created_at`, `updated_at`) VALUES
(2, '2025-09-12', 'Press Release', 'Indo-Sakura Software Japan Partners with Aletyx to Bring Enterprise-Grade Open-Source Rule and Process Engines to Japan', '<h2>Indo-Sakura Software Japan Partners with Aletyx to Bring Enterprise-Grade Open-Source Rule and Process Engines to Japan</h2><p><br></p><h3>FOR IMMEDIATE RELEASE</h3><h3>September 12, 2025</h3><p><strong>Tokyo, Japan&nbsp;</strong>–&nbsp;<a href=\"https://indosakura.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(204, 51, 102);\">Indo-Sakura Software Japan</a>&nbsp;K.K. (Headquarters: Tokyo, Japan; https://indosakura.com/jp/) today announced a strategic partnership with Aletyx Inc. (Headquarters: North Carolina, USA; https://aletyx.ai/) to introduce and support Aletyx’s flagship enterprise solutions in Japan:&nbsp;<strong>Aletyx Intelligent Decisioning</strong>&nbsp;(Enterprise Build of Drools) and&nbsp;<strong>Aletyx Intelligent Orchestration</strong>&nbsp;(Enterprise Build of Kogito).</p><p>These solutions are designed to help enterprises modernize IT systems, enhance governance, and accelerate digital transformation by leveraging rule-driven development, an approach that dramatically improves both development efficiency and maintainability.</p><h3><strong style=\"color: rgb(0, 0, 0);\">Meeting the Challenges of Modern Enterprise IT</strong></h3><p><span style=\"color: rgb(0, 0, 0);\">Traditional monolithic application development using COBOL or Java is increasingly burdened by legacy system risks, security challenges, and difficulties adapting to rapid business change. On the other hand, RPA and no-code/low-code tools often lack governance, making them unsuitable for mission-critical systems.</span></p><p><span style=\"color: rgb(0, 0, 0);\">Indo-Sakura is championing&nbsp;</span><strong style=\"color: rgb(0, 0, 0);\">rule-driven development</strong><span style=\"color: rgb(0, 0, 0);\">&nbsp;– an architecture and methodology built on microservices—as a next-generation standard for enterprise IT in Japan.</span></p><h3><strong style=\"color: rgb(0, 0, 0);\">About Aletyx</strong></h3><p><span style=\"color: rgb(0, 0, 0);\">Aletyx is recognized as a global leader in open-source enterprise software. The company’s core developers are behind Drools, the de facto standard open-source rule engine, and Kogito, a next-generation process engine. These technologies are already widely adopted in mission-critical systems across Japanese government agencies and major corporations, ensuring long-term stability and scalability.</span></p><p><span style=\"color: rgb(0, 0, 0);\">Through this partnership, Indo-Sakura and Aletyx aim to deliver robust IT platforms that withstand constant change, empowering Japanese enterprises with true digital agility and resilience.</span></p><h3><strong style=\"color: rgb(0, 0, 0);\">Product Highlights</strong></h3><p><strong style=\"color: rgb(0, 0, 0);\">Aletyx Intelligent Decisioning (Enterprise Build of Drools)</strong></p><ul><li><span style=\"color: rgb(0, 0, 0);\">High-performance, Java-based open-source rule engine</span></li><li><span style=\"color: rgb(0, 0, 0);\">Fully DMN-compliant (Decision Model and Notation)</span></li><li><span style=\"color: rgb(0, 0, 0);\">MCP support for safe integration with Generative AI within policy-based guardrails</span></li><li><span style=\"color: rgb(0, 0, 0);\">Cloud-native and hybrid deployment ready</span></li><li><span style=\"color: rgb(0, 0, 0);\">Compatible with the Apache KIE ecosystem</span></li><li><span style=\"color: rgb(0, 0, 0);\">Deterministic, explainable rule execution with enterprise-grade observability</span></li></ul><p><strong style=\"color: rgb(0, 0, 0);\">&nbsp;</strong></p><p><strong style=\"color: rgb(0, 0, 0);\">Aletyx Intelligent Orchestration (Enterprise Build of Kogito)</strong></p><ul><li><span style=\"color: rgb(0, 0, 0);\">Cloud-native workflow engine based on industry-standard BPMN (jBPM)</span></li><li><span style=\"color: rgb(0, 0, 0);\">Simplifies business process management through human-centric orchestration</span></li><li><span style=\"color: rgb(0, 0, 0);\">Developer-friendly modular structure with tools for Web and VSCode</span></li><li><span style=\"color: rgb(0, 0, 0);\">Embedded Drools and DMN rule engines</span></li><li><span style=\"color: rgb(0, 0, 0);\">100% compatibility with Apache KIE open source</span></li><li><span style=\"color: rgb(0, 0, 0);\">Framework support for building scalable cloud-native applications</span></li></ul><h3><br></h3><h3><strong style=\"color: rgb(0, 0, 0);\">Looking Ahead</strong></h3><p><span style=\"color: rgb(0, 0, 0);\">Together, Indo-Sakura and Aletyx will help accelerate Japan’s digital transformation by promoting rule-driven development and AI integration, delivering a sustainable and future-ready foundation for enterprise system development.</span></p><h2><strong style=\"color: rgb(0, 0, 0);\">Media Contact</strong></h2><p><span style=\"color: rgb(0, 0, 0);\">Indo-Sakura Software Japan K.K.</span></p><p><span style=\"color: rgb(0, 0, 0);\">Media Relations</span></p><p><span style=\"color: rgb(0, 0, 0);\">E-mail: info.japan@indosakura.com</span></p><p>Web:&nbsp;<a href=\"https://indosakura.com/jp/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(204, 51, 102);\">https://indosakura.com/jp/</a></p>', 'news/dud5t7SaLx4YTS3S6ZuVdrQtPhOGwsLJH0w6pyME.png', NULL, '2025-12-17 07:25:54', '2026-01-10 01:53:34'),
(3, '2025-05-12', 'Event', 'Indo-Sakura Software Takes the Spotlight at SusHi Tech Tokyo 2025', '<h2>A Game-Changing Moment in Innovation and Global Connections</h2><p><br></p><p>At&nbsp;Indo-Sakura Software Japan,&nbsp;we’re&nbsp;passionate about pushing the limits of technology&nbsp;and&nbsp;SusHi&nbsp;Tech Tokyo 2025&nbsp;gave us the perfect stage to&nbsp;showcase&nbsp;our&nbsp;latest innovations&nbsp;to the world.&nbsp;Held at&nbsp;Tokyo Big Sight (Kokusai&nbsp;Tenjijō)&nbsp;from&nbsp;May 8th to 10th, this prestigious event brought together top-tier startups, tech giants, and visionaries from around the globe. We were thrilled to be a part of this&nbsp;high-impact platform, where we could share our&nbsp;cutting-edge&nbsp;solutions&nbsp;and make connections that will shape the future of technology.&nbsp;</p><h3>What We Showcased</h3><p><br></p><p>At&nbsp;<strong>SusHi Tech Tokyo 2025</strong>, we proudly introduced&nbsp;<strong>three of our groundbreaking products</strong>&nbsp;that are transforming industries and driving innovation:&nbsp;</p><ul><li><strong>Source Bytes.AI</strong>&nbsp;– Our powerful AI platform that’s changing the game by helping businesses&nbsp;<strong>automate</strong>&nbsp;and&nbsp;<strong>accelerate</strong>&nbsp;their processes.&nbsp;</li><li><strong>MediChat</strong>&nbsp;– A next-gen communication tool designed to improve how healthcare professionals connect, collaborate, and deliver better patient care.&nbsp;</li><li><strong>MediAnalytics AI</strong>&nbsp;– Harnessing the power of data to help healthcare providers make faster, smarter, and more&nbsp;<strong>informed decisions</strong>.&nbsp;</li></ul><h3>Building Connections, Gaining Insights</h3><p><br></p><p>Beyond showcasing our innovations,&nbsp;<strong>SusHi Tech Tokyo 2025</strong>&nbsp;gave us the opportunity to meet with&nbsp;<strong>industry leaders</strong>,&nbsp;<strong>investors</strong>, and&nbsp;<strong>innovators</strong>&nbsp;who are shaping the future of technology. The event was buzzing with energy as we exchanged ideas, explored new trends, and received&nbsp;<strong>incredible feedback</strong>&nbsp;that reaffirms our vision and commitment to driving technological progress.&nbsp;</p><p>The&nbsp;<strong>global exposure</strong>&nbsp;and&nbsp;<strong>insightful conversations</strong>&nbsp;we gained at this event will play a major role in fueling our future innovations and partnerships.&nbsp;</p><h3>The Future is Bright</h3><p><br></p><p>The amazing response we received from&nbsp;SusHi&nbsp;Tech Tokyo 2025&nbsp;has only&nbsp;strengthened our drive&nbsp;to continue delivering&nbsp;game-changing technologies&nbsp;that make a tangible impact on industries worldwide. This is just the beginning, and&nbsp;we’re&nbsp;excited to see where our innovations will take us next.&nbsp;</p><p><br></p><h3>Event Details</h3><p><br></p><p><strong>Location:</strong>&nbsp;Tokyo Big Sight, Kokusai Tenjijō&nbsp;</p><p><strong>Date:</strong>&nbsp;May 8–10, 2025&nbsp;</p>', 'news/tmW5ud7jHhxfLefTdqBQjNWBoKTAhCR0dJJOI4YI.png', NULL, '2025-12-22 01:56:08', '2026-01-10 01:54:02'),
(4, '2025-01-24', 'Press Release', 'Payroll services offerings to our Japanese clients in India', '<p>Bangalore, India – 1 July 2024 – In a strategic move to strengthen its foothold in the Indian market,&nbsp;Doreming&nbsp;Services Pvt. Ltd., a leader in HR, attendance, and payroll outsourcing services, has appointed Indo-Sakura Software Pvt. Ltd. as its franchise headquarters.</p><h1>Doreming Services Pvt. Ltd. Appoints Indo-Sakura Software Pvt. Ltd. as Franchise Headquarters to Boost HR and Payroll Solutions in India</h1><h2>Date: 1 July 2024</h2><h2>Location: Bangalore, India</h2><p>Doreming Services Pvt. Ltd. Appoints Indo-Sakura Software Pvt. Ltd. as Franchise Headquarters to Boost HR and Payroll Solutions in India Bangalore, India – 1 July 2024 – In a strategic move to strengthen its foothold in the Indian market, Doreming Services Pvt. Ltd., a leader in HR, attendance, and payroll outsourcing services, has appointed Indo-Sakura Software Pvt. Ltd. as its franchise headquarters. This collaboration aims to enhance customer support and expand the reach of Doreming’s innovative HR and payroll solutions across India.&nbsp;</p><p>Atul Paswan, CEO of Indo-Sakura Software Pvt. Ltd., highlighted the synergies between the two companies, stating, “Partnering with Doreming allows us to offer an even more comprehensive suite of services to our clients. We see tremendous synergy in combining our strengths to provide exceptional HR and payroll solutions, further solidifying our market leadership.</p><p>“Indo-Sakura Software, renowned for its proficiency in system development and IT outsourcing for Japanese companies, and its exclusive distribution of Kingjim’s high-quality stationery products, is now set to promote and expand Doreming’s outsourcing services. Yoshikazu Takasaki, CEO of Doreming Services Pvt. Ltd., expressed his enthusiasm about the partnership, saying, “Our collaboration with Indo-Sakura Software marks a significant milestone in our expansion strategy. We are confident that their market expertise and established client relationships will accelerate the adoption of Doreming’s solutions, ultimately enhancing workplace morale and productivity for our clients in India.” This strategic partnership focuses on sales, developing new outsourcing partners, and comprehensive training programs to ensure robust customer support. The initiative is designed to leverage Indo-Sakura Software’s established market presence and client base, enhancing Doreming’s service delivery and market penetration in India.</p><p>This strategic partnership focuses on sales, developing new outsourcing partners, and comprehensive training programs to ensure robust customer support. The initiative is designed to leverage Indo-Sakura Software’s established market presence and client base, enhancing Doreming’s service delivery and market penetration in India.</p><p><strong>Key Details:</strong></p><p>● Who: Yoshikazu Takasaki, CEO of Doreming Services Pvt. Ltd., and Atul Paswan, CEO</p><p>of Indo-Sakura Software Pvt. Ltd.</p><p>● What: Appointment of Indo-Sakura Software as the franchise headquarters for Doreming Services in India.</p><p>● When: Effective from 1 July 2024.</p><p>● Where: Bangalore, India.</p><p>● Why: To leverage Indo-Sakura Software’s established market presence and client base, enhancing Doreming’s service delivery and market penetration in India.</p><p>● How: Through a structured partnership focusing on sales promotion, partner development, and training initiatives.</p><p><strong>About Doreming Services</strong></p><p>Doreming Services Pvt. Ltd. provides comprehensive outsourcing services covering HR, attendance management, payroll processing, and year-end adjustments. Doreming solutions include on-demand salary payment options to help employees manage unexpected expenses, ensuring consistent motivation and productivity. With operations spanning the United States, the United Kingdom, Vietnam, Saudi Arabia, and Singapore, we are dedicated to improving employee morale, particularly in the Indian market, by addressing cultural challenges and rewarding dedicated employees.</p><p><strong>About Indo-Sakura Software</strong></p><p>Indo-Sakura Software Pvt. Ltd. specializes in system development and IT outsourcing services for Japanese companies. Additionally, it is the exclusive distributor of Kingjim’s stationery products in India. With a robust portfolio of long-term customers and a strong presence in the Indian market, Indo-Sakura Software is well-positioned to drive the growth of Doreming’s HR and payroll solutions. This collaboration underscores the commitment of both companies to deliver top-notch HR and payroll services to Japanese companies in India, ensuring improved employee morale and productivity. The partnership not only aims to meet current market demands but also sets a foundation for future innovations and expansions.</p><p><strong>Multimedia Assets</strong></p><p>For more information or to inquire about our services, please contact us at Doreming Services or Indo-Sakura Software. Distribution Information This press release will be distributed through major industry publications, Japanese business networks, and targeted online platforms to reach Japanese companies operating in India.</p><p><strong>For further details, please contact:</strong></p><p>Primary:</p><p>● Giri, 89044-42473, bgiri@indosakura.com</p><p>Secondary:</p><p>● Masahiro Takasaki, 73534-14129, masahiro@doreming.com</p>', 'news/x1BdcDVYAWNw1LbOfc9KYnPNPy1Smp6XEav1IhkL.jpg', NULL, '2025-12-22 02:45:50', '2026-01-10 01:54:57'),
(5, '2023-11-01', 'Updates', 'The New Era of Cybersecurity: The Need for Automation and Comprehensive Countermeasures…', '<p><span style=\"color: rgb(61, 59, 59);\">The New Era of Cybersecurity: The Need for Automation and Comprehensive Countermeasures How to deal with cyber threats that constantly attack 24 hours a day, 365 days a year! Modern cyber security has become difficult to deal with by mere human resources. Automation” and “comprehensive response” of security measures are important to counter increasingly sophisticated cyber threats such as ransomware attacks, targeted attacks, and business email fraud. Through the&nbsp;webinar, we will explain in detail how to automate the operational work of security products and how to develop a total response strategy to threats. strategies to address threats in a comprehensive manner.</span></p>', 'news/ZOvU7jXZh82eErgTNnZ1nMeF70uW6ryeEydoJiCX.png', NULL, '2025-12-22 04:24:04', '2025-12-22 04:24:04'),
(6, '2023-01-04', 'Updates', 'Foreigner Intern Experience at Indo-Sakura Software: Sales, Research, and Exhibitions in Tokyo', '<p><span style=\"color: rgb(61, 59, 59);\">Foreigner Intern experience and feedback of Indo Sakura&nbsp;I’m a half-Japanese, half-American born in Okinawa, Japan. I attended a Japanese elementary school for six years and completed middle/high school in Colorado, USA. Currently studying Japanese at the University of Colorado, Boulder. As a senior, I interned for two months at Indo-Sakura Software Company in Tokyo, gaining valuable sales experience, including client research, lead contact, and proposal creation. Attending exhibitions at Tokyo Big Site was a highlight of my internship. Grateful for the opportunity and experience at Indo-Sakura Software Japan.</span></p>', 'news/kalsJ9kfuKwqZitJIjvCqSliqDWz8HpAYSA6i1vj.png', NULL, '2025-12-22 04:26:23', '2025-12-22 04:26:23'),
(7, '2021-08-10', 'Press Release', 'Yellow.ai partners with Indo-Sakura to provide AI-based CX automation solutions for Japanese companies.', '<h2>Experience seamless, real-time customer support with the world’s leading conversational CX platform—powered by AI and human intelligence for total customer satisfaction.</h2><h3>Indo-Sakura Software Japan K.K.</h3><h3><strong>Date : 2021/08/10</strong></h3><h3><strong>Bengaluru, August 10, 2021</strong></h3><p><strong style=\"color: rgb(51, 51, 51);\">Yellow.ai, the world’s leading conversational AI and CX automation platform, and Indosakura Software Japan K.K., a leading ICT provider in Japan for nearly two decades, today announced that they will leverage the capabilities of their platforms to help companies unlock the power of deep and actionable customer insights. By leveraging the power of deep, actionable</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">customer insights, Yellow.ai will help companies streamline marketing, HR, and ITSM processes, improve customer service, upsell and cross-sell across channels, and enable a rich and unprecedented personalized experience.</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Commenting on the partnership, Raghu Ravinutala, CEO and Co-founder,&nbsp;Yellow.ai, said, “With over 5 billion users across web, apps and conversational channels like Alexa, Facebook and WhatsApp, businesses are transforming the Omni-channel, intelligent and personalized customer experience. At Yellow.ai, we call it the total customer experience, where the best of AI and human intelligence come together to deliver real-time solutions. At Yellow.ai, we call it the total customer experience, bringing together the best of AI and human intelligence to provide real-time resolution and on-demand fulfillment. Our partnership with Indo-Sakura will improve business-to-consumer interactions for any company in the world in an intuitive, personal, and real-time way.</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Key features enabled by Yellow.ai</strong></p><ul><li><strong style=\"color: rgb(51, 51, 51);\">Bot Studio – low/no code platform</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">Agent Assist Dashboard – Enables seamless bot handoffs to agents while allowing customer</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">service agents to respond to 100+ languages.</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">Campaign Management – Smart campaign management tools to drive customer curiosity, interest,</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">and excitement.</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">Smart Analytics – Track and analyze key metrics to gain a deeper understanding of user intent</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">and improve goal attainment.</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">Insights Engine – Train bots in minutes on over 1,000 pages.</strong></li><li><strong style=\"color: rgb(51, 51, 51);\">Active Learning – Analyzes millions of conversations that Chatbots have on the platform.</strong></li></ul><p><strong style=\"color: rgb(51, 51, 51);\">About Yellow.ai</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Yellow.ai is the world’s leading Conversational AI and CX Automation Platform, recognized as a leader by Gartner, IDC and the G2 crowd. The platform is used by more than 700 companies in over 50 countries, including Domino’s, Sephora, Hyundai, Biogen International, Edelweiss Broking, Siemens</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Limited, Waste Connections, American Bureau of Shipping Weaving the best of AI and human intelligence to automate the customer and employee experience, the company aims to democratize AI through its noand low-code bot builder, Omni-channel virtual assistant, and ticket automation suite. Yellow.ai has raised over $102 million from blue chip investors and has offices in six countries.</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">For more information, please visit www.yellow.ai. For inquiries, please contact&nbsp;contact@yellow.ai</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Media inquiries:</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Suvina Rai</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Communications Lead, Yellow.ai</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Email: suvina@yellow.ai</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">About Indo-Sakura Software Japan K.K. (www.indosakura.com)</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Indo-Sakura is an IT firm based out of Tokyo, Providing ICT Services and Solutions to its clients across Japan. Since its inception in 2005, Indo-Sakura has won various accolades and recognitions for its adherence to quality standards and Japanese business practices. In recent years, Indo-Sakura has</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">created many success stories by providing DX solutions through AI/IoT and other emerging technologies.</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Contact for press related information</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Indo-Sakura Software Japan K.K.</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">International Marketing department</strong></p><p><strong style=\"color: rgb(51, 51, 51);\">Email :&nbsp;</strong><a href=\"mailto:info.japan@indosakura.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(204, 51, 102); background-color: transparent;\"><strong>info.japan@indosakura.com</strong></a></p><p><br></p>', 'news/sBULzhwovJfoSTpL4vs0LGA3NOlU6Mh07YuBOZSW.jpg', NULL, '2025-12-22 04:28:47', '2025-12-22 04:28:47');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `philosophies`
--

CREATE TABLE `philosophies` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `philosophies`
--

INSERT INTO `philosophies` (`id`, `title`, `content`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Our Code of Conduct', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Fostering growth with integrity, wisdom, and respect for lasting success</span></p>', 'philosophy/KXm9m9hMFa6ekM6HXIwn74OO1k79JNIF45hjNtqW.webp', '<p>In Japanese companies, the five confucians of Jin, righteousness, gratitude, wisdom, and faith are valued, and our company, which aims to develop and grow together with Japanese companies, also has the spirit of five confucians.</p><p><br></p><p>As a guideline, we will work with Japanese companies to aim for the lasting development of individuals and organizations. Always aim for maximum customer satisfaction with a spirit of compassion and justice.</p><p><br></p><p><br></p><p>Respect for courtesy and courtesy of Japanese companies, and build relationships that can respect each other beyond language and cultural barriers.</p><p><br></p><p>When hiring human resources at our company, not only being an excellent engineer, but also “I like Japan” is the most important condition, and we welcome them as our companions.</p>', '2025-12-31 03:21:00', '2025-12-31 03:21:00'),
(2, 'Origin of Corporate Name', '<p><span style=\"color: rgb(107, 114, 128);\">Indo-Sakura bridges India and Japan for growth, innovation, and revitalization</span></p>', 'philosophy/zEQ855vcv4mfJjvyufj7lLyzezjUiDYY0fgQ3XyD.webp', '<p>The company name “Indo-Sakura” reflects our desire to support the development and revitalization of Japanese companies as a bridge between Indian and Japanese companies.</p><p><br></p><p>We named the company “Indo-Sakura” because we want to become a bridge between Japan and India, to study, grow, revitalize, and aim for lasting development with Japanese companies that support Japan.</p><p><br></p><p>When hiring human resources at our company, not only being an excellent engineer, but also “I like Japan” is the most important condition, and we welcome them as our companions.</p>', '2025-12-31 03:23:22', '2025-12-31 03:23:52'),
(3, 'Our Mission, Vision & Value', '<h3>Shaping Growth with Innovation</h3>', 'philosophy/wwCQDsElFw8CbrDR1jsFhCjPQ3pxicI78Yy2hMn0.webp', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Our vision is to empower businesses by leveraging highly skilled Indian IT engineers to strengthen IT capabilities and support digital transformation while fostering competitiveness and sustainable growth, and our mission is to provide innovative, flexible IT solutions through a deep understanding of both Indian and Japanese cultures, aiming to enhance business capabilities with cutting-edge technologies such as AI, cybersecurity, and cloud services, ensuring long-term success and helping clients navigate digital challenges while achieving operational excellence and global competitiveness.</span></p>', '2025-12-31 03:25:29', '2026-01-10 02:18:28');

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `title`, `slug`, `intro`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Privacy Policy', 'privacy-policy', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">Indo-Sakura Software Japan Co., Ltd. (hereinafter referred to as “our company”) recognizes the importance of protecting personal information. We are committed to safeguarding personal information, personal numbers, and specific personal information (hereinafter collectively referred to as “specific personal information, etc.”) based on the following policy.</span></p>', 0, '2025-12-31 06:53:18', '2026-01-06 05:14:33'),
(2, 'Cookie Policy', 'cookie-policy', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">This Cookie Policy explains how Indo-Sakura Software Japan Co., Ltd. uses cookies and similar technologies to collect and process information when users interact with our website.</span></p>', 0, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(3, 'Quality Policy', 'quality-policy', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura Software Japan Co., Ltd. has established the following policies to earn and maintain the continuous trust and satisfaction of customers and all employees.</span></p>', 0, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(4, 'Information Security Policy', 'security-policy', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura Software Japan K.K. (hereinafter referred to as “the Company”) is committed to company-wide information security based on the following policy in order to protect information assets entrusted by customers, as well as the Company’s own information assets, from threats such as accidents, disasters, and crimes, and to uphold the trust of customers and society.</span></p>', 0, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(5, 'Managing Personal Information', 'personal-information', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura Software Japan Co., Ltd. (hereinafter referred to as “the Company”) recognizes the importance of protecting personal information in today’s advanced information and communication society. We believe it is our social responsibility to safely and appropriately handle the personal information of all individuals involved with the Company, including customers and business partners. As a business operator handling personal information, we have established a personal information protection management system and internal structure to ensure continuous improvement.</span></p>', 0, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(6, 'Environmental Policy', 'environmental-policy', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">At Indo-Sakura Software Japan K.K. (hereafter referred to as “Indo-Sakura”), we recognize the critical role we play in the preservation of the environment. We are committed to reducing the environmental impact of our operations, products, and services. Our Environmental Policy outlines our objectives for sustainable practices, compliance with environmental regulations, and continuous improvement in our environmental performance.</span></p>', 0, '2025-12-31 07:38:43', '2026-01-01 23:05:19'),
(7, 'Code of Ethics', 'code-ethics', '<p>At Indo-Sakura Software Japan K.K. (hereafter referred to as “Indo-Sakura”), we are committed to maintaining the highest standards of ethical behavior in everything we do. Our success depends not only on the quality of our products and services but also on the integrity and ethical conduct of our employees, managers, and partners. This Code of Ethics outlines the values that guide our actions and decisions and provides a framework for responsible behavior.</p>', 0, '2025-12-31 07:41:41', '2026-01-01 23:05:38'),
(8, 'Employee Health and Safety Policy', 'employee-health', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura Software Japan K.K. is committed to providing a safe and healthy work environment for all employees, contractors, visitors, and stakeholders. The health and safety of our people are a top priority, and preventing workplace accidents, injuries, and health hazards is essential to our success. This policy outlines our commitment and approach to ensuring safety and well-being across all operations.</span></p>', 0, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(9, 'Human Rights Policy', 'human-rights-policy', '<p>Indo-Sakura Software Japan K.K. is committed to upholding the highest standards of human rights in all aspects of our business operations. We believe that respecting and promoting human rights is essential to our business success and to the well-being of individuals, communities, and society. This policy outlines our approach to creating a positive, inclusive, and fair work environment.</p>', 0, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(10, 'Basic Policy on Anti-Social Force', 'anti-social-force', '<p>Indo-Sakura Software Japan Co., Ltd. (hereinafter referred to as \"the Company\") is committed to eliminating any relationships with antisocial forces that threaten social order and safety. To ensure fair and sound business operations, we establish the following basic policy.</p>', 0, '2026-01-01 23:37:53', '2026-01-01 23:37:53');

-- --------------------------------------------------------

--
-- Table structure for table `policy_sections`
--

CREATE TABLE `policy_sections` (
  `id` bigint UNSIGNED NOT NULL,
  `policy_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policy_sections`
--

INSERT INTO `policy_sections` (`id`, `policy_id`, `title`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(5, 2, 'Personal Data Collected', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">The website may collect Cookies and Usage Data. Cookies consist of small pieces of code stored in the user’s browser that assist in delivering the service according to the purposes described in this policy.</span></p>', 0, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(6, 2, 'Use of Cookies', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Cookies may be used to enable essential site functions, enhance user experience, and analyze website traffic. Some cookies may require user consent before being installed.</span></p>', 1, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(7, 2, 'Providing or Withdrawing Consent', '<p>Users may manage cookie preferences directly through their browser settings and can prevent third parties from installing cookies. Browser settings also allow users to delete previously stored cookies, including those saved during initial consent.</p>', 2, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(8, 2, 'Third-Party Cookies', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">When third-party cookies are installed, users can withdraw consent by using opt-out links provided by those third parties, checking their privacy policies, or contacting them directly.</span></p>', 3, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(9, 2, 'Owner and Data Controller', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura Software Japan Co., Ltd. Address: 7-F Raukuty Bldg, Toyo 3-5-5, Koto-Ku, Tokyo, Japan Email: info@indosakura.com</span></p>', 4, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(10, 2, 'Third-Party Tracking Disclaimer', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Because third-party tracking systems used within this website cannot be fully controlled by the Company, any references to such technologies are indicative. Users are advised to consult the privacy policies of respective third-party services for detailed information.</span></p>', 5, '2025-12-31 07:08:29', '2025-12-31 07:08:29'),
(11, 2, 'Additional Information', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Due to the complexity of technologies relying on cookies, users are encouraged to contact the Company if they require further clarification regarding cookie usage on this website.</span></p>', 6, '2025-12-31 07:08:30', '2025-12-31 07:08:30'),
(12, 2, 'Definitions', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">This policy defines key terms such as Personal Data, Usage Data, User, Data Subject, Data Processor, Data Controller, and Cookies, consistent with global data protection standards.</span></p>', 7, '2025-12-31 07:08:30', '2025-12-31 07:08:30'),
(13, 2, 'Policy Validity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">This Cookie Policy applies solely to this website unless otherwise stated. Enactment Date: April 2, 2018. 4th Edition: December 12, 2021. Indo-Sakura Software Japan Co., Ltd. President and CEO: Atul Paswan.</span></p>', 8, '2025-12-31 07:08:30', '2025-12-31 07:08:30'),
(14, 3, 'Commitment to Customer Satisfaction', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We aim to deliver quality that fully meets customer requirements and ensures long-term trust from our clients.</span></p>', 0, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(15, 3, 'Continuous Innovation and Skill Improvement', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We continuously innovate, study new technologies, and strive to enhance our technical capabilities and product quality through creativity and improvement.</span></p>', 1, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(16, 3, 'Quality Management System', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We build and operate a quality management system that meets the requirements of customers as well as JIS Q 9001 and JIS Q 9100, and we work to continually improve its effectiveness.</span></p>', 2, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(17, 3, 'Employee Awareness and Implementation', '<p>We ensure that all employees understand, implement, and maintain the Quality Policy. We set clear quality objectives, define necessary measures, and promote company-wide activities toward achieving them.</p>', 3, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(18, 3, 'Regular Review and Improvement', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We regularly review our Quality Policy and objectives, confirm their suitability, and continuously evaluate and improve our initiatives.</span></p>', 4, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(19, 3, 'Compliance with Requirements', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We comply with customer requirements and all applicable legal and regulatory obligations.</span></p>', 5, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(20, 3, 'Policy Validity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Enactment Date: April 2, 2018. 4th Edition: December 12, 2021. Indo-Sakura Software Japan Co., Ltd. President and CEO: Atul Paswan.</span></p>', 6, '2025-12-31 07:26:32', '2025-12-31 07:26:32'),
(21, 4, 'Management Responsibility', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Under the leadership of management, we strive to systematically and continuously improve and strengthen information security.</span></p>', 0, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(22, 4, 'Establishment of Internal Systems', '<p>We will establish an Information Security Committee to maintain and improve information security, and formalize existing information security–related rules as official company regulations.</p>', 1, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(23, 4, 'Efforts by Employees', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">All employees shall acquire the necessary knowledge and skills related to information security and ensure that they act with a strong commitment to protecting information assets.</span></p>', 2, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(24, 4, 'Compliance with Laws, Regulations, and Contractual Requirements', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We comply with all applicable laws, regulations, guidelines, and contractual obligations related to information security, and strive to meet the expectations of our customers.</span></p>', 3, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(25, 4, 'Response to Violations and Incidents', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">In the event of an information security violation or incident—whether involving laws, regulations, norms, or contractual obligations—we will take appropriate action and implement preventive measures to avoid recurrence.</span></p>', 4, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(26, 4, 'Policy Validity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Enactment Date: April 2, 2018. 5th Edition: April 1, 2024. Indo-Sakura Software Japan Co., Ltd. President and CEO: Atul Paswan.</span></p>', 5, '2025-12-31 07:29:11', '2025-12-31 07:29:11'),
(27, 5, 'Handling of Personal Information', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We will appropriately handle all personal information entrusted to us and strive to ensure its protection in accordance with our policies and management framework.</span></p>', 0, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(28, 5, 'Prevention of Eavesdropping During Communication', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">When personal information is provided through our website, we use SSL (Secure Sockets Layer) encryption or equivalent security technologies to prevent unauthorized access or eavesdropping by third parties during communication.</span></p>', 1, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(29, 5, 'Use of Cookies and Web Beacons', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">This website uses cookies and web beacons to obtain customer access information for purposes such as identifying issues on the server and delivering information and services that match user interests. Although access information does not directly identify individuals, it may be associated with personal information held by the Company and used for marketing purposes. Cookies may be disabled via browser settings, but doing so may cause some website functions to operate improperly.</span></p>', 2, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(30, 5, 'Cookies', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Cookies are a technology used to identify a user\'s computer so that the website can be browsed more conveniently upon subsequent visits.</span></p>', 3, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(31, 5, 'Web Beacons', '<p>Web beacons are a technology used together with cookies to collect access trends from a user\'s device and analyze statistics such as the viewing rate of specific web pages.</p>', 4, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(32, 5, 'Protection of Personal Information on Linked Sites', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We cannot guarantee the protection of personal information on third-party websites linked from our site. For details regarding personal information protection on linked sites, please review the privacy policies published by those respective websites.</span></p>', 5, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(33, 5, 'Policy Validity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Enactment Date: April 2, 2018. 4th Edition: December 12, 2021. Indo-Sakura Software Japan Co., Ltd. President and CEO: Atul Paswan.</span></p>', 6, '2025-12-31 07:31:54', '2025-12-31 07:31:54'),
(68, 6, 'Compliance with Environmental Laws and Regulations', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We will adhere to all applicable environmental laws, regulations, and industry standards in the countries and regions where we operate. We are committed to ensuring that our operations meet or exceed regulatory requirements.</span></p>', 0, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(69, 6, 'Sustainability and Resource Efficiency', '<p>We aim to reduce the use of natural resources and minimize waste generation. Our focus is on optimizing the efficiency of energy, water, and raw materials in all aspects of our operations.</p>', 1, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(70, 6, 'Pollution Prevention', '<p>We are dedicated to preventing pollution by managing waste, emissions, and discharges responsibly. We aim to reduce our carbon footprint, minimize the release of hazardous materials, and continuously explore cleaner production technologies.</p>', 2, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(71, 6, 'Sustainable Products and Services', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We will develop products and services with minimal environmental impact throughout their lifecycle — from design and production to distribution, usage, and disposal. We strive to promote the use of recyclable, reusable, and eco-friendly materials.</span></p>', 3, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(72, 6, 'Continuous Improvement', '<p>We commit to continuously improving our environmental management practices. This includes setting measurable environmental goals, monitoring progress regularly, and taking corrective actions when necessary.</p>', 4, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(73, 6, 'Energy Efficiency', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We will implement energy-efficient technologies, reduce overall energy consumption, and make use of renewable energy sources where feasible.</span></p>', 5, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(74, 6, 'Waste Reduction and Recycling', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We strive to minimize waste generation through efficient management and encourage recycling within our operations, including reducing packaging waste and ensuring responsible disposal of non-recyclable materials.</span></p>', 6, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(75, 6, 'Water Conservation', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We reduce water consumption by adopting water-efficient technologies and processes and encourage responsible use of water in all our facilities.</span></p>', 7, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(76, 6, 'Carbon Footprint Reduction', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We will measure, track, and reduce our carbon footprint, aiming for year-on-year reductions in greenhouse gas emissions. This includes optimizing transportation and logistics to limit emissions</span></p>', 8, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(77, 6, 'Sustainable Procurement', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We integrate sustainability criteria into our procurement processes and work with suppliers who demonstrate environmental responsibility and utilize sustainable practices.</span></p>', 9, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(78, 6, 'Implementation and Accountability', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We maintain and continuously enhance an Environmental Management System (EMS) aligned with internationally recognized standards such as ISO 14001. All employees are responsible for following this policy, with senior management leading environmental initiatives. We regularly monitor environmental performance, track progress toward goals, and report results to stakeholders to ensure transparency.</span></p>', 10, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(79, 6, 'Engagement with Stakeholders', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We actively engage with customers, suppliers, local communities, and regulators to promote environmental responsibility and pursue opportunities for collaboration on sustainability initiatives.</span></p>', 11, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(80, 6, 'Conclusion', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">At Indo-Sakura, we are committed to contributing to environmental well-being. By following this policy, we aim to minimize ecological impact, create value for stakeholders, and support the transition to a more sustainable future.</span></p>', 12, '2026-01-01 23:05:19', '2026-01-01 23:05:19'),
(81, 7, 'Integrity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We act with honesty, transparency, and accountability, ensuring that our decisions and actions align with strong moral principles.</span></p>', 0, '2026-01-01 23:05:38', '2026-01-01 23:05:38'),
(82, 7, 'Respect', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We take responsibility for our actions and their impact on stakeholders, society, and the environment. We pursue sustainable business practices and consider the long-term effects of our decisions.</span></p>', 1, '2026-01-01 23:05:38', '2026-01-01 23:05:38'),
(83, 7, 'Fairness', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We are committed to fairness in all interactions. Employees, clients, and stakeholders are treated equitably and without bias.</span></p>', 2, '2026-01-01 23:05:38', '2026-01-01 23:05:38'),
(84, 7, 'Confidentiality', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We respect the privacy and confidentiality of sensitive information entrusted to us. We protect intellectual property and ensure ethical handling of all confidential data.</span></p>', 3, '2026-01-01 23:05:38', '2026-01-01 23:05:38'),
(85, 7, 'Compliance with Laws and Regulations', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We comply with all applicable laws, rules, and regulations, and ensure that our actions meet both legal and ethical standards.</span></p>', 4, '2026-01-01 23:05:38', '2026-01-01 23:05:38'),
(86, 7, 'Professionalism', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We maintain a high standard of professionalism in all interactions, internally and externally. Employees are expected to demonstrate ethical decision-making and appropriate workplace conduct.</span></p>', 5, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(87, 7, 'Conflict of Interest', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Employees and leaders must avoid situations where personal interests conflict with organizational responsibilities. Any potential conflicts must be disclosed and handled appropriately.</span></p>', 6, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(88, 7, 'Anti-Discrimination and Harassment', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We are committed to maintaining a workplace free from discrimination, harassment, and bullying. Every individual deserves a respectful and inclusive work environment.</span></p>', 7, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(89, 7, 'Bribery and Corruption', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We strictly prohibit bribery, corruption, and unethical financial practices. No employee or manager may offer, accept, or request bribes, kickbacks, or improper payments.</span></p>', 8, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(90, 7, 'Health and Safety', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We ensure a safe and healthy working environment for all employees and stakeholders and comply with all health and safety regulations.</span></p>', 9, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(91, 7, 'Environmental Stewardship', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We proactively work to minimize the environmental impact of our activities and pursue sustainable practices that protect the planet for future generations.</span></p>', 10, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(92, 7, 'Reporting Violations', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">Employees are encouraged to report suspected violations of this Code of Ethics without fear of retaliation. Reports will be treated confidentially and investigated thoroughly.</span></p>', 11, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(93, 7, 'Enforcement', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">Failure to comply with this Code of Ethics may result in disciplinary action, including termination. All employees share the responsibility to maintain an ethical workplace and uphold these principles.</span></p>', 12, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(94, 7, 'Conclusion', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">Ethical conduct is essential to Indo-Sakura\'s reputation and long-term success. By adhering to this Code of Ethics, we ensure that our actions reflect our values and contribute to a sustainable and responsible organization.</span></p>', 13, '2026-01-01 23:05:39', '2026-01-01 23:05:39'),
(95, 8, 'Commitment to Safety', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We maintain a safe and healthy working environment by adhering to applicable health and safety regulations and standards. Our goal is to prevent accidents, injuries, and illnesses through proactive risk management and strong safety practices.</span></p>', 0, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(96, 8, 'Compliance with Laws and Regulations', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We comply with all relevant local, national, and international health and safety regulations and industry standards. We continuously monitor and update our practices to meet all legal and regulatory requirements.</span></p>', 1, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(97, 8, 'Risk Management and Hazard Prevention', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We identify, assess, and mitigate workplace hazards by conducting regular risk assessments, implementing controls, and taking preventive measures to eliminate or reduce risks.</span></p>', 2, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(98, 8, 'Employee Participation and Engagement', '<p>We encourage employees to actively participate in health and safety programs, report hazards, and contribute suggestions for continuous improvement. Safety is a shared responsibility.</p>', 3, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(99, 8, 'Training and Awareness', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide ongoing training to ensure employees understand workplace hazards, safe operating procedures, emergency responses, and best practices for health and safety.</span></p>', 4, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(100, 8, 'Health and Wellness', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We support the physical and mental well-being of our employees by promoting wellness programs, providing mental health resources, and ensuring access to healthcare services when needed.</span></p>', 5, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(101, 8, 'Accident and Injury Reduction', '<p>We aim to continuously reduce workplace accidents, injuries, and near-miss incidents by enforcing safety protocols and ensuring compliance with all safety guidelines.</p>', 6, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(102, 8, 'Emergency Preparedness', '<p>We aim to continuously reduce workplace accidents, injuries, and near-miss incidents by enforcing safety protocols and ensuring compliance with all safety guidelines.</p>', 7, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(103, 8, 'Workplace Ergonomics', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We implement ergonomic measures to minimize the risk of musculoskeletal disorders by providing appropriate workstations, equipment, and posture guidance.</span></p>', 8, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(104, 8, 'Health Monitoring and Support', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We regularly monitor the health of employees and provide wellness initiatives including health screenings, physical fitness encouragement, and mental health programs.</span></p>', 9, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(105, 8, 'Employer Responsibilities', '<p>We ensure a safe working environment free from recognized hazards, comply with all health and safety laws, provide safety equipment and training, maintain clear communication, and investigate incidents to prevent recurrence.</p>', 10, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(106, 8, 'Employee Responsibilities', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Employees must follow all health and safety guidelines, report hazards or incidents immediately, participate in training, use safety equipment correctly, and cooperate with audits and inspections.</span></p>', 11, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(107, 8, 'Workplace Safety Inspections', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We conduct regular safety inspections and audits to identify potential hazards and implement corrective actions to maintain a safe work environment.</span></p>', 12, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(108, 8, 'Incident Reporting and Investigation', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">All accidents, injuries, or near-miss incidents must be reported immediately. Thorough investigations will be conducted to identify root causes and prevent future occurrences.</span></p>', 13, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(109, 8, 'Personal Protective Equipment (PPE)', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide required personal protective equipment and ensure employees are trained in its proper use, care, and storage.</span></p>', 14, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(110, 8, 'Emergency Procedures', '<p>Emergency response procedures, including evacuation plans, first aid measures, and fire drills, are regularly updated and communicated to all employees.</p>', 15, '2026-01-01 23:23:38', '2026-01-01 23:23:38'),
(111, 8, 'Wellness and Health Promotion Programs', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We promote wellness through initiatives supporting healthy lifestyles, mental health awareness, and work-life balance.</span></p>', 16, '2026-01-01 23:23:39', '2026-01-01 23:23:39'),
(112, 8, 'Monitoring and Review', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We continually monitor health and safety performance through audits, employee feedback, and safety metrics. This policy is reviewed periodically to ensure alignment with best practices and legal requirements.</span></p>', 17, '2026-01-01 23:23:39', '2026-01-01 23:23:39'),
(113, 8, 'Enforcement and Accountability', '<p>Failure to comply with this policy may result in disciplinary action. All employees share the responsibility to maintain a safe and healthy workplace and follow safety standards.</p>', 18, '2026-01-01 23:23:39', '2026-01-01 23:23:39'),
(114, 8, 'Conclusion', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura is committed to maintaining a culture of health and safety. We believe that a safe and healthy workplace is essential for achieving excellence and protecting the well-being of all employees.</span></p>', 19, '2026-01-01 23:23:39', '2026-01-01 23:23:39'),
(115, 9, 'Respect for Fundamental Human Rights', '<p>We respect the dignity and rights of all individuals and align our business practices with international human rights standards, including the United Nations Universal Declaration of Human Rights and the International Labour Organization (ILO) conventions.</p>', 0, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(116, 9, 'Non-Discrimination and Equal Opportunity', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We ensure equal opportunity in hiring, training, compensation, and career advancement. We do not tolerate discrimination based on race, ethnicity, gender, sexual orientation, religion, age, disability, marital status, nationality, or any legally protected status.</span></p>', 1, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(117, 9, 'Freedom of Association and Collective Bargaining', '<p>We respect the rights of employees to freely associate, form labor unions, and engage in collective bargaining without fear of retaliation. We support constructive dialogue regarding working conditions and employee rights.</p>', 2, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(118, 9, 'No Forced or Child Labor', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We strictly prohibit forced labor, bonded labor, and child labor in our operations and supply chains. All employment must be voluntary, and employees have the freedom to leave their employment in accordance with applicable laws.</span></p>', 3, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(119, 9, 'Fair Wages and Working Conditions', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide fair wages that meet or exceed legal requirements and strive to ensure working conditions that are safe, respectful, and compliant with labor laws and international standards.</span></p>', 4, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(120, 9, 'Health and Safety', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide a safe and healthy workplace and ensure employees receive proper safety training. We take proactive measures to prevent work-related accidents, injuries, and health risks.</span></p>', 5, '2026-01-01 23:32:39', '2026-01-01 23:32:39'),
(121, 9, 'Privacy and Data Protection', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We respect the privacy of employees, customers, and business partners. We protect personal data in accordance with applicable data protection laws and ensure appropriate safeguards are in place.</span></p>', 6, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(122, 9, 'Ethical Treatment', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We expect all employees and partners to treat others with respect and dignity. Harassment, bullying, abuse, or any form of mistreatment is strictly prohibited.</span></p>', 7, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(123, 9, 'Integrity and Ethical Behavior', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">All employees, contractors, and partners are expected to act with integrity, uphold human rights principles, and contribute to maintaining an ethical workplace.</span></p>', 8, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(124, 9, 'Reporting Human Rights Violations', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Employees are encouraged to report any suspected human rights violations without fear of retaliation. We provide confidential reporting channels, and all reports will be properly investigated.</span></p>', 9, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(125, 9, 'Training and Awareness', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide training to ensure employees understand human rights principles and how to uphold them. We encourage suppliers and partners to adopt similar ethical and human rights standards.</span></p>', 10, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(126, 9, 'Supplier and Partner Accountability', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We expect our suppliers and business partners to follow the same human rights standards outlined in this policy. This includes ensuring operations are free from exploitation, discrimination, or unethical practices.</span></p>', 11, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(127, 9, 'Human Rights Due Diligence', '<p>We perform regular human rights risk assessments to identify, prevent, and mitigate potential negative impacts related to our operations and supply chains.</p>', 12, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(128, 9, 'Grievance Mechanisms', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We provide clear and accessible channels for employees and stakeholders to raise concerns regarding human rights or ethical issues, ensuring timely and fair resolution.</span></p>', 13, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(129, 9, 'Continuous Improvement', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">We regularly review and improve our human rights practices to align with international standards and ensure we maintain the highest level of ethical responsibility.</span></p>', 14, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(130, 9, 'Enforcement and Consequences', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Violations of this Human Rights Policy may result in disciplinary action, including termination of employment or suspension of business relationships. All reported violations are taken seriously and investigated thoroughly.</span></p>', 15, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(131, 9, 'Conclusion', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">Indo-Sakura is committed to fostering a culture of respect, fairness, and accountability. By adhering to this Human Rights Policy, we ensure that all individuals are treated with dignity and support the long-term sustainability and integrity of our organization.</span></p>', 16, '2026-01-01 23:32:40', '2026-01-01 23:32:40'),
(132, 10, 'Elimination of Relationships with Anti-Social Forces', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">The Company strictly prohibits any relationships with organized crime groups, companies affiliated with such groups, corporate extortionists, groups engaging in criminal activities under the guise of social movements, special intelligence crime groups, or any other similar entities (hereinafter referred to as \"anti-social forces\"). If it is discovered that a business partner or related party falls under the category of anti-social forces, we will take immediate action to terminate the relationship or contract.</span></p>', 0, '2026-01-01 23:37:53', '2026-01-01 23:37:53'),
(133, 10, 'Response to Unjust Demands', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">The Company firmly rejects any unreasonable demands from antisocial forces under any circumstances. If such demands are made, we will promptly share the information within the organization and take appropriate countermeasures to ensure a firm and resolute response</span></p>', 1, '2026-01-01 23:37:53', '2026-01-01 23:37:53'),
(134, 10, 'Organizational Response and Employee Safety', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">The Company ensures that responses to anti-social forces are not handled by individual employees or specific departments alone, but rather through a collective organizational effort. We prioritize the safety of our employees and conduct training programs to ensure that they do not succumb to threats or pressure from anti-social forces.</span></p>', 2, '2026-01-01 23:37:54', '2026-01-01 23:37:54'),
(135, 10, 'Collaboration with External Specialist Organizations', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">In dealing with threats or unjust demands from anti-social forces, the Company will work closely with law enforcement agencies, legal professionals, anti-crime organizations, and other relevant external entities to take swift and appropriate action.</span></p>', 3, '2026-01-01 23:37:54', '2026-01-01 23:37:54'),
(136, 10, 'Prohibition of Financial and Other Benefits', '<p><span style=\"background-color: rgb(247, 238, 242); color: rgb(107, 114, 128);\">The Company strictly prohibits any financial contributions, transactions, or other forms of benefits that may provide support to anti-social forces, regardless of the reason or form. We ensure that no direct or indirect benefits are given under any pretense, such as donations or sponsorships.</span></p>', 4, '2026-01-01 23:37:54', '2026-01-01 23:37:54'),
(137, 10, 'Strengthening Internal Management Systems', '<p>To prevent any involvement with anti-social forces, the Company will strengthen its internal control systems by conducting thorough investigations when entering contracts, performing regular due diligence, and providing employee training. Additionally, we will establish a system that enables swift decision-making and action by management in the event of an incident.</p><p>All executives and employees of the Company are expected to fully understand and comply with this policy to uphold our corporate social responsibility and maintain ethical and lawful business operations.</p>', 5, '2026-01-01 23:37:54', '2026-01-01 23:37:54'),
(138, 1, 'Formulation and Continuous Improvement of Personal Information Protection Program', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We ensure that all officers and employees understand the importance of personal information protection. To protect personal information and specific personal information appropriately, we establish, implement, maintain, and continuously improve a Personal Information Protection Compliance Program, including this policy, basic regulations, and internal rules.</span></p>', 0, '2026-01-06 05:14:34', '2026-01-06 05:14:34'),
(139, 1, 'Compliance with Basic Regulations on Personal Information Protection', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">In accordance with our company’s Basic Regulations on Personal Information Protection and other internal rules, we collect, use, and provide personal information and specific personal information appropriately. We maintain a strict management system tailored to each department’s operations and scale, and we make every effort to respond to requests for disclosure or correction from the information owner.</span></p>', 1, '2026-01-06 05:14:34', '2026-01-06 05:14:34'),
(140, 1, 'Ensuring Accuracy and Safety', '<p>To maintain the accuracy and security of personal information and specific personal information, we keep such information up-to-date and accurate. We also implement reasonable security measures—both technologically and organizationally—to prevent unauthorized access, loss, destruction, falsification, or leakage.</p>', 2, '2026-01-06 05:14:34', '2026-01-06 05:14:34'),
(141, 1, 'Compliance with Laws and Regulations', '<p><span style=\"color: rgb(107, 114, 128); background-color: rgb(247, 238, 242);\">We comply with all applicable laws, government guidelines, and other norms related to the protection of personal information and specific personal information.</span></p>', 3, '2026-01-06 05:14:35', '2026-01-06 05:14:35');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `title`, `sub_title`, `content`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Corporate Structure / Group Companies', '<p>Indo-Sakura Software Japan K.K.</p><p>Indo-Sakura Software Pvt Ltd</p><p>Indo-Sakura Consulting LLC</p><p>Sakura Trading &amp; Consulting LLP</p><p>DxMinds Innovation Labs Pvt Ltd</p>', '2025-12-31 04:19:20', '2025-12-31 04:19:20'),
(2, NULL, 'Founder / Group Leadership', '<p><span style=\"background-color: rgba(243, 244, 246, 0.2); color: rgb(40, 44, 52);\">Atul Paswan</span></p>', '2025-12-31 04:19:43', '2025-12-31 04:19:43'),
(3, NULL, 'Total Workforce (As of 2025/04/01)', '<p><span style=\"background-color: rgba(243, 244, 246, 0.2); color: rgb(40, 44, 52);\">155+</span></p>', '2025-12-31 04:20:21', '2025-12-31 04:20:21'),
(4, NULL, 'Global Presence / Operational Regions', '<p>Japan, India, USA, UAE</p>', '2025-12-31 04:20:43', '2025-12-31 04:20:43'),
(5, NULL, 'Business Overview / Core Operations', '<p><span style=\"background-color: rgba(243, 244, 246, 0.2); color: rgb(40, 44, 52);\">Indo-Sakura, founded in 2005, is a global IT services company with offices in Japan, India, the USA, and the UAE. It specializes in software solutions, digital transformation, and leveraging Generative AI for intelligent automation. The company is CMMI Level 3 compliant and ISO/IEC 27001:2022 certified, ensuring high standards of quality and security. Indo-Sakura delivers innovative solutions to clients worldwide.</span></p>', '2025-12-31 04:21:01', '2025-12-31 04:21:01'),
(6, NULL, 'Accreditations & Official Licenses', '<p>General dispatch business license 派１３−３１２２３</p><p>ISO/IEC 27001:2022</p><p>CMMI Level 3 Qualification</p>', '2025-12-31 04:21:19', '2025-12-31 04:21:19');

-- --------------------------------------------------------

--
-- Table structure for table `seminar`
--

CREATE TABLE `seminar` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ja` text COLLATE utf8mb4_unicode_ci,
  `location_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `participation_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `participation_fee_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizer_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorship` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorship_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cooperation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cooperation_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('upcoming','archived') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'upcoming',
  `tags` json DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seminars`
--

CREATE TABLE `seminars` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ja` text COLLATE utf8mb4_unicode_ci,
  `location_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `participation_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `participation_fee_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizer_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorship` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sponsorship_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cooperation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cooperation_ja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('upcoming','archived') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'upcoming',
  `tags` json DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seminars`
--

INSERT INTO `seminars` (`id`, `title`, `description`, `location`, `title_ja`, `description_ja`, `location_ja`, `participation_fee`, `participation_fee_ja`, `organizer`, `organizer_ja`, `sponsorship`, `sponsorship_ja`, `cooperation`, `cooperation_ja`, `date`, `time`, `status`, `tags`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Cloud Migration Best Practices', 'Learn proven strategies for successful cloud migration with minimal risk and maximum business value.', 'Osaka Convention Center, Room B-204 5-minute walk from Osaka Station', NULL, NULL, NULL, 'Free — Advance registration required', NULL, 'Indo Sakura Engineering Services Co., Ltd.', NULL, 'Indo Sakura Cloud Solutions Indo Sakura Infrastructure Team Indo Sakura Field Services', NULL, 'Partner companies', NULL, '2025-12-11', '15:00-8:00', 'archived', '[\"Cloud\"]', 'seminars/jLIlozUzEfeHa9LfsEziHYQLB27AGGII75u87grN.jpg', '2025-12-24 03:15:19', '2026-01-10 04:03:54'),
(2, 'AI & Digital Transformation Summit 2025', 'Join us for an in-depth exploration of how AI is reshaping business operations and driving digital transformation', 'TKP Garden City PREMIUM Yokohama Station Shin-Takashima Yokohama Grand Gate, 2nd floor, 5-1-1 Minatomirai, Nishi-ku, Yokohama, Kanagawa Prefecture 7-minute walk from JR Yokohama Station 1-minute walk from Shin-Takashima Station on the Minatomirai Line', NULL, NULL, NULL, '500000', NULL, 'Indosakura', NULL, 'delem limited', NULL, 'indus priorities', NULL, '2025-12-11', '12:00-15:00', 'upcoming', '[\"AI\", \"DX\"]', 'seminars/9LnujSyeJ7dNZIoJ6wKEtV903NFIp112t7i3VC96.jpg', '2025-12-26 06:47:29', '2025-12-26 06:51:00'),
(4, 'Enterprise AI Integration Forum', 'Discover how leading enterprises are integrating AI into their core business processes for competitive advantage.', 'Yokohama Grand Hotel', NULL, NULL, NULL, NULL, NULL, '300+ participants', NULL, 'Enterprise AI Strategy', NULL, 'Enterprise AI Use Cases', NULL, '2025-12-10', '09:30-11:00', 'upcoming', '[\"AI Forum\"]', 'seminars/DMKDaHLQYmFKHQAwPPgzJHIBn39EOzXz0oTKhV5V.jpg', '2025-12-27 01:10:13', '2025-12-27 01:10:13');

-- --------------------------------------------------------

--
-- Table structure for table `seos`
--

CREATE TABLE `seos` (
  `id` bigint UNSIGNED NOT NULL,
  `page` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seos`
--

INSERT INTO `seos` (`id`, `page`, `meta_title`, `meta_description`, `meta_keywords`, `created_at`, `updated_at`) VALUES
(1, 'home', 'Indo Sakura Software Japan | IT Services & Digital Transformation Company', 'Indo Sakura Software Japan delivers trusted IT services, AI-driven solutions, cloud, and digital transformation with 20+ years of Japanese excellence.', 'Indo Sakura, IT services Japan, software company Japan, digital transformation, AI solutions, cloud services, enterprise IT', '2026-01-06 01:46:05', '2026-01-06 01:46:05'),
(2, 'solutions', 'AI & Enterprise Software Solutions | Indo Sakura Software Japan', 'Explore Indo Sakura’s AI-powered and enterprise software solutions including SourceBytes.AI, SmartSynch.AI, cybersecurity, and business automation tools.', 'AI solutions, enterprise software, SourceBytes AI, SmartSynch AI, cybersecurity solutions, business automation, Indo Sakura', '2026-01-06 01:50:31', '2026-01-06 01:50:31'),
(3, 'services', 'IT Services & Software Development | Indo Sakura Software Japan', 'Indo Sakura offers AI-driven development, custom software, enterprise applications, cloud, and managed IT services tailored for global businesses.', 'IT services, software development, AI driven development, enterprise applications, managed services, cloud IT, Indo Sakura', '2026-01-06 01:51:46', '2026-01-06 01:51:46'),
(4, 'case-studies', 'Case Studies | Real-World IT Success Stories by Indo Sakura', 'Discover real-world case studies showcasing how Indo Sakura helped enterprises succeed with AI, cloud migration, and digital transformation.', 'Discover real-world case studies showcasing how Indo Sakura helped enterprises succeed with AI, cloud migration, and digital transformation.', '2026-01-06 01:52:15', '2026-01-06 01:52:15'),
(5, 'corporate-info', 'About Indo Sakura Software Japan | 20+ Years of IT Excellence', 'Learn about Indo Sakura Software Japan, our mission, global presence, leadership, and commitment to delivering world-class IT solutions.', 'Indo Sakura company, about Indo Sakura, IT company Japan, software company profile, corporate information', '2026-01-06 01:52:50', '2026-01-06 01:52:50'),
(6, 'recruitment', 'Careers at Indo Sakura Software Japan | Join Our IT Team', 'Join Indo Sakura Software Japan and build your career in AI, software development, cloud, and enterprise IT with global opportunities.', 'IT jobs Japan, software developer jobs, Indo Sakura careers, AI jobs, cloud engineer jobs, enterprise IT careers.', '2026-01-06 01:53:38', '2026-01-06 01:53:38');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_description` text COLLATE utf8mb4_unicode_ci,
  `hero_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `how_it_works` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `slug`, `subtitle`, `hero_description`, `hero_image`, `how_it_works`, `created_at`, `updated_at`) VALUES
(5, 'AI-Driven Development', 'diven-develope', 'The potential of AI development is not determined by the number of member skills.  AI will change the common sense.', '<p>Leverage cutting-edge AI technologies to transform your software development process, delivering faster results with higher quality.</p>', 'services/U1b0hFnHa996UNX55i8ZZesudDJ2UwwbXg2jIung.jpg', '<p><span style=\"color: rgb(55, 65, 81);\">AI driven development is not magic. It is a highly reproducible scientific process that leverages AI\'s strengths at each stage of development, allowing humans to focus on more creative and essential tasks.</span></p>', '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(6, 'AI-Driven Modernization', 'driven-modern', 'Leverage cutting-edge AI to analyze, plan, and execute legacy system modernization with unprecedented speed, precision, and cost efficiency.', '<p>Legacy systems are no longer a burden — they become a competitive advantage.</p><p>AI redefines what modernization means.</p>', 'services/bkXHmAJfQGielKQwMHbFrrXyxOXFL9pbLsSdOHff.jpg', '<p><span style=\"color: rgb(107, 114, 128);\">AI-driven modernization is no longer a futuristic concept — it’s a proven, end-to-end process that turns risky, multi-year legacy overhauls into fast, predictable, and remarkably low-risk transformations.</span></p>', '2026-01-06 04:19:20', '2026-01-06 04:28:46'),
(7, 'Enterprise Applications', 'enterprise-app', 'We build powerful, integrated, future-proof enterprise systems that become the backbone of your digital transformation.', '<p>Generic software slows enterprises down.</p><p>Enterprise applications accelerate them.</p>', 'services/Y53L1mi0dsD6iRKBFEySOjHyI2LcIIpDBNUbzwpN.png', '<p><span style=\"color: rgb(107, 114, 128);\">Our enterprise applications operate through a meticulously engineered process that transforms complex business needs into robust, scalable systems. It begins with in-depth discovery, where we analyze your operations, interview stakeholders, and map out a strategic roadmap to align technology with your goals.</span></p>', '2026-01-06 04:27:21', '2026-01-10 05:08:26'),
(8, 'Custom Software Development', 'soft-develope', 'We build powerful, scalable, and beautiful software tailored exactly to your business — no compromises, no limitations.', '<p>Off-the-shelf software limits your potential.</p><p>Custom software unlocks it.</p>', 'services/PH31nM9eQG7utUVjBeb0r1OlTs81hAbAo1776Y90.jpg', '<p><span style=\"color: rgb(107, 114, 128);\">Transparent, collaborative, and results-focused — every step designed to deliver maximum value with zero surprises.</span></p>', '2026-01-06 04:31:47', '2026-01-06 04:31:47'),
(9, 'Infra Managed Services', 'infra-manage', 'Your infrastructure should accelerate your business — not slow it down.  Let experts manage it. You focus on growth.', '<p>Your infrastructure should accelerate your business — not slow it down.</p><p>Let experts manage it. You focus on growth.</p>', 'services/FGtMacuV87eyX82g9Htq4J5qkgNoD6kqEplNpAff.jpg', '<p><span style=\"color: rgb(107, 114, 128);\">From the moment you hand over the keys, our team + AI-powered platform takes full ownership 24/7/365. We monitor every server, container, network device, and cloud resource in real time, detecting and fixing issues — often before you even know they exist. Security threats are blocked automatically, patches are applied without downtime, capacity is auto-scaled to match demand, and costs are continuously optimized so you never overpay.</span></p>', '2026-01-06 04:35:31', '2026-01-10 05:07:55');

-- --------------------------------------------------------

--
-- Table structure for table `service_benefits`
--

CREATE TABLE `service_benefits` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_benefits`
--

INSERT INTO `service_benefits` (`id`, `service_id`, `title`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(51, 5, 'Maximizing development speed', '<p>Dramatically shorten time to market</p><p><br></p><p>Generative AI accelerates requirements drafting, specifications, and prototyping. Automated code generation shortens the implementation phase, enabling overwhelming development speed and eliminating missed business opportunities.</p>', 0, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(52, 5, 'Overwhelming improvement in quality', '<p>Eliminate rework and personal dependency</p><p><br></p><p>AI detects inconsistencies and vulnerabilities in real time, reducing human errors and rework. Even inexperienced members can consistently produce standardized, high-quality output.</p>', 1, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(53, 5, 'Project Cost Optimization', '<p>Thoroughly reduce \'invisible costs\'</p><p><br></p><p>Improved development speed and reduced rework translate directly into lower labor and management costs, maximizing ROI across the entire project.</p>', 2, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(60, 6, 'Legacy Transformation', '<p class=\"ql-align-center\"><strong>Revitalize outdated systems</strong></p><p class=\"ql-align-center\">Transform outdated systems into efficient, scalable modern architectures through AI-driven assessment and automated redesign.</p>', 0, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(61, 6, 'AI-Powered Data Migration', '<p class=\"ql-align-center\"><strong>Seamless, safe migration</strong></p><p class=\"ql-align-center\">AI validates data quality, correctness, and mapping, ensuring smooth migration with minimal downtime.</p>', 1, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(62, 6, 'Cloud Modernization', '<p class=\"ql-align-center\"><strong>Optimize for the cloud era</strong></p><p class=\"ql-align-center\">AI recommends optimal cloud resources, architecture, and cost models for maximum performance and efficiency.<strong>﻿</strong></p>', 2, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(74, 8, 'Tailored Solutions', '<h3 class=\"ql-align-center\"><br></h3><p class=\"ql-align-center\">Built exclusively for your business</p><p class=\"ql-align-center\">No templates. No compromises. Software designed from scratch to perfectly fit your processes, users, and growth strategy.</p>', 0, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(75, 8, 'Full-Stack Expertise', '<p class=\"ql-align-center\">End-to-end ownership</p><p class=\"ql-align-center\">From pixel-perfect UI to scalable backend, DevOps, and cloud infrastructure — one expert team handles everything.</p>', 1, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(76, 8, 'Long-Term Partnership', '<p class=\"ql-align-center\">Your system evolves with you</p><p class=\"ql-align-center\">Post-launch support, continuous improvement, performance monitoring, and feature evolution — we’re with you for the long haul.</p>', 2, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(77, 9, 'Infrastructure Management', '<p class=\"ql-align-center\">Full control, zero hassle</p><p class=\"ql-align-center\">We manage servers, networks, databases, and cloud environments so your team can focus on innovation — not operations.</p>', 0, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(78, 9, 'Proactive Security', '<p class=\"ql-align-center\">Threats stopped before they start</p><p class=\"ql-align-center\">Real-time threat detection, automated response, compliance management, and regular penetration testing — all included.</p>', 1, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(79, 9, 'Performance Optimization', '<p class=\"ql-align-center\">Always fast, always efficient</p><p class=\"ql-align-center\">AI-driven performance monitoring and auto-scaling ensure your systems run at peak efficiency — without overprovisioning.</p>', 2, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(80, 7, 'Scalable Global Architecture', '<p class=\"ql-align-center\"><strong>Grow without limits</strong></p><p class=\"ql-align-center\">Microservices, multi-region cloud, and horizontal scaling — built to support millions of users from day one</p>', 0, '2026-01-10 05:08:26', '2026-01-10 05:08:26'),
(81, 7, 'Seamless System Integration', '<p class=\"ql-align-center\"><strong>One platform, all your tools</strong></p><p class=\"ql-align-center\">Connect ERP, CRM, SCM, HRIS, legacy systems, and third-party APIs into a unified, real-time ecosystem.</p>', 1, '2026-01-10 05:08:26', '2026-01-10 05:08:26'),
(82, 7, 'Real-Time Business Intelligence', '<p class=\"ql-align-center\"><strong>Decide faster, win faster</strong></p><p class=\"ql-align-center\">Embedded analytics, predictive insights, and executive dashboards — turn data into competitive advantage instantly.</p>', 2, '2026-01-10 05:08:26', '2026-01-10 05:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `service_highlights`
--

CREATE TABLE `service_highlights` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_highlights`
--

INSERT INTO `service_highlights` (`id`, `service_id`, `value`, `title`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(51, 5, '51.3%', 'Reduction in development time', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">In a recent survey of software engineers, more than half said they have already implemented generative AI in their development.</span></p><p><br></p><p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">The use of AI is no longer a future option, but the current standard.</span></p>', 0, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(52, 5, '80%+', 'Companies adopting AI-driven solutions', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">Over 80% of companies responded that they are short of personnel capable of promoting DX.</span></p><p><br></p><p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">With competition for recruitment intensifying, it is becoming extremely difficult to strengthen development structures using traditional methods.</span></p>', 1, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(53, 5, '15x', 'Faster code reviews', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">The domestic generative AI market is expected to expand to 1.7 trillion yen by 2030 (15 times the size of 2023).</span></p><p><br></p><p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">To win in this fast-growing market, action is needed now.</span></p>', 2, '2026-01-06 03:41:18', '2026-01-06 03:41:18'),
(60, 6, '60%', 'Cost reduction in maintenance', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">AI-driven automation eliminates repetitive manual tasks and reduces technical debt, achieving up to 60% lower long-term maintenance costs compared to traditional methods.</span></p>', 0, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(61, 6, '3x', 'Faster migration speed', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">Automated refactoring, AI-assisted planning, and intelligent migration tools shorten modernization timelines by up to 3 times.</span></p>', 1, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(62, 6, '90%', 'Legacy code analysis accuracy', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">Our AI engines analyze millions of lines of legacy code with over 90% accuracy in detecting dependencies, risks, and hidden technical debt.</span></p>', 2, '2026-01-06 04:28:46', '2026-01-06 04:28:46'),
(73, 8, '95%', 'Custom Solutions Delivered', '<p>From enterprise platforms to startup MVPs — we’ve built over 1,000 mission-critical systems that power businesses worldwide.</p>', 0, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(74, 8, '50%+', 'On-Time Delivery Rate', '<p>Our battle-tested agile process, clear communication, and disciplined execution deliver projects on schedule — consistently.</p>', 1, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(75, 8, '1000+', 'Average Cost Savings', '<p>Through reusable components, clean architecture, and efficient processes, our clients reduce long-term ownership costs by over 50%.</p>', 2, '2026-01-06 04:37:00', '2026-01-06 04:37:00'),
(76, 9, '24/7', 'Monitoring & Support', '<p>Our expert team and AI-powered monitoring tools watch your infrastructure around the clock — preventing issues before they impact your business.</p>', 0, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(77, 9, '99.99%', 'Uptime Guarantee', '<p>Enterprise-grade SLA with financial penalties if we fail. Your systems stay online — period.</p>', 1, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(78, 9, '30%+', 'Average Cost Reduction', '<p>Through automation, rightsizing, and predictive optimization, our clients consistently reduce infrastructure costs by 30% or more.</p>', 2, '2026-01-10 05:07:55', '2026-01-10 05:07:55'),
(79, 7, '500+', 'Enterprise Applications Delivered', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">From Fortune 500 to fast-growing enterprises — we’ve built mission-critical systems that power operations across 20+ countries.</span></p>', 0, '2026-01-10 05:08:26', '2026-01-10 05:08:26'),
(80, 7, '99.9%', 'System Uptime Guarantee', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">High-availability architecture with geo-redundancy and auto-failover — your business never stops.</span></p>', 1, '2026-01-10 05:08:26', '2026-01-10 05:08:26'),
(81, 7, '40%+', 'Average Efficiency Gain', '<p><span style=\"background-color: rgba(255, 255, 255, 0.8); color: rgb(107, 114, 128);\">Our clients report 40–60% improvements in process speed, decision-making, and operational costs after deployment</span></p>', 2, '2026-01-10 05:08:26', '2026-01-10 05:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `service_industries`
--

CREATE TABLE `service_industries` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_industries`
--

INSERT INTO `service_industries` (`id`, `service_id`, `title`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Healthcare', '<p><span style=\"color: rgb(107, 114, 128);\">Streamlined healthcare IT solutions to improve patient care and operations</span></p>', 1, '2026-01-05 23:31:53', '2026-01-05 23:32:57'),
(2, NULL, 'Finance', '<p><span style=\"color: rgb(107, 114, 128);\">Secure, compliant ICT services to optimize financial systems and data management</span></p>', 2, '2026-01-06 04:39:32', '2026-01-06 04:39:32'),
(3, NULL, 'Education', '<p><span style=\"color: rgb(107, 114, 128);\">Innovative educational technology to enhance learning experiences and operational efficiency</span></p>', 3, '2026-01-06 04:39:50', '2026-01-06 04:39:50'),
(4, NULL, 'Manufacturing', '<h3><span style=\"color: rgb(107, 114, 128);\">Smart manufacturing solutions to optimize production, logistics, and supply chain</span></h3>', 4, '2026-01-06 04:40:12', '2026-01-06 04:40:12'),
(5, NULL, 'Retail', '<p><span style=\"color: rgb(107, 114, 128);\">E-commerce, point-of-sale systems, and customer experience technologies</span></p>', 5, '2026-01-06 04:40:30', '2026-01-06 04:40:30'),
(6, NULL, 'Government', '<p><span style=\"color: rgb(107, 114, 128);\">Reliable ICT infrastructure to support government operations and public services</span></p>', 6, '2026-01-06 04:40:44', '2026-01-06 04:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `solutions`
--

CREATE TABLE `solutions` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_description` text COLLATE utf8mb4_unicode_ci,
  `hero_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `features` json DEFAULT NULL,
  `use_cases` json DEFAULT NULL,
  `industries` json DEFAULT NULL,
  `case_studies` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solutions`
--

INSERT INTO `solutions` (`id`, `title`, `slug`, `subtitle`, `hero_description`, `hero_image`, `features`, `use_cases`, `industries`, `case_studies`, `created_at`, `updated_at`) VALUES
(9, 'SourceBytes.AI', 'sourcebyte-ai', 'Unified GenAI Platform Powering Enterprise Intelligence', '<p>SourceBytes.AI is a powerful Enterprise Knowledge Discovery Platform built to help organizations manage and access their data more efficiently. It connects to multiple sources like URLs, APIs, S3, Google Drive, and FTP, allowing you to centralize knowledge from across your enterprise. With advanced AI capabilities, SourceBytes.AI enables intelligent document processing, data extraction, and real-time analytics, empowering businesses to make informed decisions and drive innovation.</p>', 'solutions/ADeDUaBSNsW2PZ2oWzg0fArU4dXpA6g1z7RNgos9.jpg', NULL, NULL, NULL, NULL, '2026-01-05 02:15:21', '2026-01-06 03:22:49'),
(10, 'BlueprintOffice.AI', 'blueprint-ai', 'Digital blueprint management system with AI-powered document control and workflow automation', '<p>BlueprintEditor.AI helps organizations centralize, govern, and automate business-critical documents with intelligent processing, workflow automation, and full compliance support. From contract management to policy enforcement, BlueprintEditor.AI ensures accuracy, efficiency, and enterprise-wide document intelligence.</p>', 'solutions/xXeCIcd0khYPWizSuFscrSI6pInss1l8VRUSqbxf.jpg', NULL, NULL, NULL, NULL, '2026-01-06 02:04:16', '2026-01-06 02:16:38'),
(11, 'SmartSync.AI', 'smart-ai', 'Real-Time Data Synchronization Across Your Enterprise', '<p>SmartSync.AI seamlessly connects enterprise systems, eliminating data silos and ensuring real-time accuracy across applications, databases, and cloud environments with automated AI-driven conflict resolution.</p>', 'solutions/3rErNwmSIW7ogWBqTmQkhS7cfW2aq5ErWiRgm8Gi.jpg', NULL, NULL, NULL, NULL, '2026-01-06 03:54:35', '2026-01-06 04:13:21'),
(12, 'Cybersecurity Solutions', 'cyber-security', 'Enterprise-Grade Protection for Your Digital Infrastructure', '<p>Our Cybersecurity Solutions help organizations defend against advanced cyber threats, secure critical data, and maintain compliance across cloud, on-premise, and hybrid systems.</p>', 'solutions/TQeMHXWfTMSa71MLcBKTJNwky4GkgxACZje9h81d.jpg', NULL, NULL, NULL, NULL, '2026-01-06 04:02:28', '2026-01-06 04:12:43'),
(13, 'BRMS Solutions', 'brms-solution', 'Centralize, Automate & Optimize Business Rules', '<p>Indo-Sakura’s BRMS simplifies how enterprises manage and automate decision-making. By separating business logic from core applications, organizations gain faster rule updates, greater accuracy, and enterprise-wide consistency — all without modifying code.</p>', 'solutions/3sNMiHt2QRvItwyBZV18AYmKhBFwrozueos9Z64p.jpg', NULL, NULL, NULL, NULL, '2026-01-06 04:12:12', '2026-01-06 04:12:12');

-- --------------------------------------------------------

--
-- Table structure for table `solution_case_studies`
--

CREATE TABLE `solution_case_studies` (
  `id` bigint UNSIGNED NOT NULL,
  `solution_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci,
  `result` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solution_case_studies`
--

INSERT INTO `solution_case_studies` (`id`, `solution_id`, `title`, `client`, `summary`, `result`, `sort_order`, `created_at`, `updated_at`) VALUES
(16, 10, 'AI-Driven Document Control Eliminates Manual Errors and Improves Compliance', NULL, '<p>A global enterprise streamlined its internal document lifecycle using BlueprintEditor.AI.</p><p>Enterprise Operations Division</p><p>Reduced document processing time by 60% and improved compliance adherence by over 45% with automated approval workflows.</p>', NULL, 0, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(17, 10, 'Automated Revision Tracking Enhances Accuracy for Enterprise Contract Teams', NULL, '<p>Legal teams achieved seamless contract versioning and automated clause extraction.</p><p>International Legal Firm</p><p>Achieved 70% faster contract review cycles and eliminated document mix-ups with AI version intelligence.</p>', NULL, 1, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(18, 9, 'Automated Extraction: Makes Core Operations Smoother and More Efficient', NULL, '<p>High scalability development design and improved improvements led to operational advancements.</p><p>INSUR: USA Life &amp; Health Co. Agent</p><p>Some tasks that were previously automated manually have been automated, significantly boosting productivity and streamlining tasks while enhancing processing times by 50%.</p>', NULL, 0, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(19, 9, 'Integrated Multiple Core Systems with AI to Optimize Business Processes', NULL, '<p>Complete digital transformation across enterprise operations.</p><p>Major Manufacturing Corporation</p><p>Successfully reduced data processing time by 57% and increased detection rate by over 90%, leading to greater test savings and improved accuracy rates of 40 percent or so.</p>', NULL, 1, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(28, 12, 'AI-Based Threat Detection Reduced Data Breaches by 90%', NULL, '<p>A financial institution adopted AI threat analytics to secure high-volume transactions.</p><p><br></p><p><strong>Leading Banking Corporation</strong></p><h3>Cyber attacks dropped by 90% and incident response time improved from hours to minutes.</h3>', NULL, 0, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(29, 12, 'Healthcare Platform Achieved HIPAA-Ready Security', NULL, '<h3>Healthcare Platform Achieved HIPAA-Ready Security</h3><p><br></p><p>Encrypted patient management workflows with automated compliance tracking.</p><p>Major Medical Network</p><p><br></p><p>Ensured 100% compliance readiness and strengthened patient data privacy across all locations.</p>', NULL, 1, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(30, 11, 'Real-Time Sync Reduced Data Errors by 80%', NULL, '<p>A global retailer unified 8 platforms with zero manual reconciliation.</p><p><br></p><p><strong>Large Retail Chain</strong></p><p>Achieved 80% reduction in data duplication and 60% improvement in operational efficiency.</p>', NULL, 0, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(31, 11, 'Manufacturing Operations Improved Through Live Inventory Sync', NULL, '<p>Integrated production and supply systems with SmartSyncAI.</p><p><br></p><p><strong>Automotive Parts Manufacturer</strong></p><p>Better inventory accuracy and 40% faster production scheduling were achieved.</p>', NULL, 1, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(34, 13, 'Automated Rule Engine Reduced Manual Workload by 70%', NULL, '<p>A major insurance company deployed BRMS to automate underwriting and policy processing.</p><p><br></p><p><strong>Insurance Enterprise – USA</strong></p><p>Decision-making time reduced from hours to seconds, improving accuracy and customer satisfaction.</p>', NULL, 0, '2026-01-06 06:01:34', '2026-01-06 06:01:34'),
(35, 13, 'Retail Pricing Optimization Increased Sales by 22%', NULL, '<p>Dynamic pricing rules allowed the company to adjust prices automatically based on demand and market trends.</p><p><br></p><p><strong>Global Retail Chain</strong></p><p>Rule automation boosted sales conversions by 22% and reduced pricing errors across 300+ stores.</p>', NULL, 1, '2026-01-06 06:01:34', '2026-01-06 06:01:34');

-- --------------------------------------------------------

--
-- Table structure for table `solution_features`
--

CREATE TABLE `solution_features` (
  `id` bigint UNSIGNED NOT NULL,
  `solution_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solution_features`
--

INSERT INTO `solution_features` (`id`, `solution_id`, `title`, `description`, `icon`, `sort_order`, `created_at`, `updated_at`) VALUES
(43, 10, 'AI Document Understanding', '<p>Smarter Analysis</p><p><br></p><p>Automatically read, classify, and analyze documents using AI-powered OCR, entity extraction, and document intelligence.</p>', NULL, 0, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(44, 10, 'Workflow Automation', '<p>Streamline Operations</p><p><br></p><p>Automate approvals, routing, version control, and document lifecycle processes with customizable rule-based workflows.</p>', NULL, 1, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(45, 10, 'Version & Revision Control', '<p>Document Accuracy</p><p><br></p><p>Maintain complete revision history, compare versions instantly, and eliminate human error with automated change tracking.</p>', NULL, 2, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(46, 10, 'Compliance & Audit', '<p>Policy Enforcement</p><p><br></p><p>Ensure regulatory compliance with automated document tagging, audit trails, policy enforcement, and secure retention rules.</p>', NULL, 3, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(47, 10, 'Collaborative Editing', '<p>Real-Time Workspaces</p><p><br></p><p>Enable real-time comments, annotations, and collaborative editing across teams, departments, and global workforces.</p>', NULL, 4, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(48, 10, 'Enterprise Security', '<p>Full Protection</p><p><br></p><p>Protect sensitive documents using encryption, access control, SOC2-aligned security, and secure cloud environments.</p>', NULL, 5, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(49, 9, 'Document Recognition', '<p>Smarter Processing</p><p>Integrate with 100+ data sources including APIs, SQL, NoSQL databases, cloud storage, and legacy systems.</p>', NULL, 0, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(50, 9, 'Smart Automation', '<p>Transform Workflow</p><p>AI-driven data discovery and automated workflow orchestration with 99%+ accuracy.</p>', NULL, 1, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(51, 9, 'Actionable Insights', '<p>Real-time Analytics</p><p>Real-time analytics and actionable insights to improve business outcomes and efficiencies.</p>', NULL, 2, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(52, 9, 'Intelligent Extraction', '<p>Analyze Patterns</p><p>Unlock hidden patterns, forecast business trends, and maps with AI-powered advanced AI.</p>', NULL, 3, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(53, 9, 'AI Chatbots', '<p>Enhanced Support</p><p>Create custom AI chatbots for enhanced customer support and employee assistance.</p>', NULL, 4, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(54, 9, 'Enterprise Security', '<p>Complete Safe</p><p>Offer robust security with advanced encryption, SOC2 compliance, and block chain integration.</p>', NULL, 5, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(79, 12, 'Threat Detection', '<p>AI-Powered Monitoring</p><p><br></p><p>Continuously detect suspicious activity using behavioral AI and anomaly pattern recognition.</p>', NULL, 0, '2026-01-06 04:12:43', '2026-01-06 04:12:43'),
(80, 12, 'Zero-Trust Security', '<p>Identity &amp; Access Control</p><p><br></p><p>Restrict access to sensitive resources with strict identity verification and device authentication.</p>', NULL, 1, '2026-01-06 04:12:43', '2026-01-06 04:12:43'),
(81, 12, 'Cloud Protection', '<p>Secure Cloud Operations</p><p><br></p><p>Protect cloud infrastructures across AWS, Azure, and GCP with real-time scanning and alerts.</p>', NULL, 2, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(82, 12, 'Vulnerability Assessment', '<p>Proactive Scanning</p><p><br></p><p>Detect system weaknesses early through periodic scans, dashboards, and prioritized risk scoring.</p>', NULL, 3, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(83, 12, 'Data Encryption', '<p>Secure Storage</p><p><br></p><p>Ensure total data security with enterprise-grade encryption for both in-transit and at-rest data.</p>', NULL, 4, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(84, 12, 'Incident Response', '<p>Rapid Mitigation</p><p><br></p><p>Resolve threats quickly with automated alerts, guided playbooks, and AI-assisted root-cause analysis.</p>', NULL, 5, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(85, 11, 'Unified Data Sync', '<p>Cross-Platform Integration</p><p><br></p><p>Connect ERP, CRM, HRMS, databases, and cloud apps with seamless real-time data flow.</p>', NULL, 0, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(86, 11, 'AI Conflict Resolution', '<p>Smart Data Accuracy</p><p><br></p><p>Automatically detect duplicates and mismatches with intelligent AI-driven data validation.</p>', NULL, 1, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(87, 11, 'Workflow Synchronization', '<p>Event-Driven Actions</p><p><br></p><p>Trigger automated workflows instantly based on business events across connected systems.</p>', NULL, 2, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(88, 11, 'Multi-System Orchestration', '<p>End-to-End Visibility</p><p><br></p><p>Manage enterprise-wide integrations through a unified orchestration dashboard.</p>', NULL, 3, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(89, 11, 'Scalable Integration', '<p>Enterprise Load Ready</p><p><br></p><p>Sync millions of records effortlessly with high scalability and performance optimization.</p>', NULL, 4, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(90, 11, 'Secure Data Transfer', '<p>Encrypted Sync</p><p><br></p><p>Protect all synchronization pipelines with end-to-end encryption and strict security protocols.</p>', NULL, 5, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(97, 13, 'Centralized Rule EngineUnified Rule Governance  Manage all your business rules from a single centralized dashboard, ensuring consistency and reducing manual errors.', '<p>Unified Rule Governance</p><p><br></p><p>Manage all your business rules from a single centralized dashboard, ensuring consistency and reducing manual errors.</p>', NULL, 0, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(98, 13, 'Rule Versioning', '<p>Track Every Change</p><p><br></p><p>Maintain full control over rule updates with historical tracking, rollback options, and audit visibility.</p>', NULL, 1, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(99, 13, 'Decision Automation', '<p>Smart Decision Flows</p><p><br></p><p>Automate complex decision logic with flow-based rule execution and high scalability for enterprise workloads.</p>', NULL, 2, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(100, 13, 'Compliance Enforcement', '<p>Policy Adherence</p><p><br></p><p>Ensure policies, regulations, and industry standards are always reflected in your rule sets with automated compliance.</p>', NULL, 3, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(101, 13, 'High Performance Engine', '<p>Real-time Processing</p><p><br></p><p>Execute rule sets in milliseconds with optimized logic execution — ideal for finance, insurance, and retail operations.</p>', NULL, 4, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(102, 13, 'Visual Rule Modeling', '<p>Drag &amp; Drop UI</p><p><br></p><p>Simplify rule creation with graphical tools that require zero coding experience for business users.</p>', NULL, 5, '2026-01-06 06:01:33', '2026-01-06 06:01:33');

-- --------------------------------------------------------

--
-- Table structure for table `solution_industries`
--

CREATE TABLE `solution_industries` (
  `id` bigint UNSIGNED NOT NULL,
  `solution_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solution_industries`
--

INSERT INTO `solution_industries` (`id`, `solution_id`, `title`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(30, 10, 'Corporate', 'Enterprise Operations', 0, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(31, 10, 'Compliance', 'Policy & Audits', 1, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(32, 10, 'Legal', 'Contracts & Governance', 2, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(33, 10, 'Finance', 'Risk & Control', 3, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(34, 10, 'Technology', 'Secure Workflows', 4, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(35, 9, 'Construction', 'Strategic Partnership', 0, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(36, 9, 'Manufacturing', 'Production Efficiency', 1, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(37, 9, 'Logistics', 'Supply Chain', 2, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(38, 9, 'Retail', 'Business Analytics', 3, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(39, 9, 'Technology', 'IT Services', 4, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(55, 12, 'Finance', 'Fraud Prevention', 0, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(56, 12, 'Manufacturing', 'Systems Security', 1, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(57, 12, 'Logistics', 'Network Protection', 2, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(58, 12, 'Retail', 'Secure Payments', 3, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(59, 12, 'Technology', 'Cyber Defense', 4, '2026-01-06 04:12:45', '2026-01-06 04:12:45'),
(60, 11, 'Retail', 'Omni-Channel Sync', 0, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(61, 11, 'Manufacturing', 'Production Data', 1, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(62, 11, 'Logistics', 'Supply Chain', 2, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(63, 11, 'E-Commerce', 'Unified Catalog', 3, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(64, 11, 'Technology', 'System Integration', 4, '2026-01-06 04:13:22', '2026-01-06 04:13:22'),
(70, 13, 'Finance', 'Risk Scoring', 0, '2026-01-06 06:01:34', '2026-01-06 06:01:34'),
(71, 13, 'Manufacturing', 'Operational Rules', 1, '2026-01-06 06:01:34', '2026-01-06 06:01:34'),
(72, 13, 'Logistics ', 'Routing Logic', 2, '2026-01-06 06:01:34', '2026-01-06 06:01:34'),
(73, 13, 'Retail ', 'Pricing Rules', 3, '2026-01-06 06:01:34', '2026-01-06 06:01:34'),
(74, 13, 'Technology', 'Workflow Rules', 4, '2026-01-06 06:01:34', '2026-01-06 06:01:34');

-- --------------------------------------------------------

--
-- Table structure for table `solution_use_cases`
--

CREATE TABLE `solution_use_cases` (
  `id` bigint UNSIGNED NOT NULL,
  `solution_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `solution_use_cases`
--

INSERT INTO `solution_use_cases` (`id`, `solution_id`, `title`, `subtitle`, `description`, `sort_order`, `created_at`, `updated_at`) VALUES
(39, 10, 'Corporate Operations', NULL, '<p>Document Compliance</p><p><br></p><p>Automate document approvals, manage SOPs, enforce policies, and maintain complete compliance with organizational standards.</p>', 0, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(40, 10, 'Human Resources', NULL, '<p>Employee Documentation</p><p><br></p><p>Digitize onboarding paperwork, streamline contract management, and maintain secure employee document archives.</p>', 1, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(41, 10, 'Legal Department', NULL, '<p>Contract Review</p><p><br></p><p>Use AI to accelerate contract review, monitor obligations, extract key clauses, and maintain controlled version histories.</p>', 2, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(42, 10, 'Finance', NULL, '<p>Audit &amp; Reporting</p><p><br></p><p>Automate invoice processing, expense approvals, and audit documentation with full traceability and accuracy.</p>', 3, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(43, 10, 'Procurement', NULL, '<p>Vendor Documentation</p><p><br></p><p>Standardize procurement workflows, track compliance certificates, and manage vendor document submissions effortlessly.</p>', 4, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(44, 10, 'Quality Management', NULL, '<p>SOP &amp; Policy Control</p><p><br></p><p>Centralize SOPs, automate distribution, manage deviations, and ensure teams follow up-to-date controlled documents.</p>', 5, '2026-01-06 02:16:39', '2026-01-06 02:16:39'),
(45, 9, 'Banking & Finance', NULL, '<p>Financial Services</p><p>Automate loan processing, enable analytics, and ensure AML compliance using highly scalable AI-backed processing systems.</p>', 0, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(46, 9, 'Healthcare', NULL, '<p>Medical &amp; Clinical</p><p>Simplify patient record handling, streamline data-driven insights processes for better care delivery.</p>', 1, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(47, 9, 'Insurance', NULL, '<p>Policy &amp; Claims</p><p>Accelerate claim processing, improve underwriting and risk engineering with intelligent AI operations.</p>', 2, '2026-01-06 03:22:49', '2026-01-06 03:22:49'),
(48, 9, 'Legal Services', NULL, '<p>Contract Management</p><p>Resolve complex contract review, improve negotiations management, and drive operational efficiency.</p>', 3, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(49, 9, 'Education', NULL, '<p>Academic Management</p><p>Digitize student data entry, automate grading tasks, and provide better learning experience.</p>', 4, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(50, 9, 'Research & Development', NULL, '<p>Data Analysis</p><p>Automate research, manage IP data for scientific studies, and accelerate discoveries with AI models.</p>', 5, '2026-01-06 03:22:50', '2026-01-06 03:22:50'),
(75, 12, 'Financial Security', NULL, '<p>Banking &amp; Finance</p><p><br></p><p>Prevent fraud, ensure secure transactions, and maintain compliance with advanced threat monitoring.</p>', 0, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(76, 12, 'Healthcare Compliance', NULL, '<p>Clinical Data Safety</p><p><br></p><p>Protect sensitive patient data and enforce HIPAA-level security for hospitals &amp; medical systems.</p>', 1, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(77, 12, 'Insurance Security', NULL, '<p>Policy &amp; Claims Protection</p><p><br></p><p>Secure claim processing workflows and protect customer data from unauthorized access or breaches.</p>', 2, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(78, 12, 'Corporate Governance', NULL, '<p>Enterprise Security</p><p><br></p><p>Secure internal workflows, employee systems, networks, and endpoints across large enterprises.</p>', 3, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(79, 12, 'Education Protection', NULL, '<p>Academic &amp; Admin</p><p><br></p><p>Safeguard student data, assessments, and digital infrastructures for universities and schools.</p>', 4, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(80, 12, 'Government Systems', NULL, '<p>Secure Administration</p><p><br></p><p>Protect confidential operations and ensure integrity across mission-critical government applications.</p>', 5, '2026-01-06 04:12:44', '2026-01-06 04:12:44'),
(81, 11, 'ERP ↔ CRM Sync', NULL, '<p>Business Operations</p><p><br></p><p>Ensure customer, product, and transaction data stay consistently updated across systems.</p>', 0, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(82, 11, 'HR Data Alignment', NULL, '<p>HR &amp; Payroll</p><p><br></p><p>Synchronize employee records, attendance, and payroll information automatically.</p>', 1, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(83, 11, 'Inventory Sync', NULL, '<p>Logistics &amp; Supply Chain</p><p><br></p><p>Maintain real-time stock updates across warehouses, retail outlets, and vendors.</p>', 2, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(84, 11, 'Cloud Migration Sync', NULL, '<p>Hybrid Architecture</p><p><br></p><p>Keep legacy and new systems synchronized throughout cloud adoption cycles.</p>', 3, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(85, 11, 'Finance Data Sync', NULL, '<p>Accounting Systems</p><p><br></p><p>Ensure real-time financial updates and avoid manual reconciliation errors.</p>', 4, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(86, 11, 'Retail Omni-Channel Sync', NULL, '<p>E-Commerce</p><p><br></p><p>Align product catalogs, orders, and pricing rules across multiple channels.</p>', 5, '2026-01-06 04:13:21', '2026-01-06 04:13:21'),
(93, 13, 'Underwriting Automation', NULL, '<p>Insurance</p><p><br></p><p>Automate risk assessment, premium calculation, and policy approvals with rule-driven decision flows.</p>', 0, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(94, 13, 'Loan Eligibility Rules', NULL, '<p>Banking</p><p><br></p><p>Streamline loan approvals with automated business rules that evaluate customer profiles instantly.</p>', 1, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(95, 13, 'Retail Pricing Engine', NULL, '<p>E-commerce</p><p><br></p><p>Manage discounts, dynamic pricing, and promotions without modifying core system code.</p>', 2, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(96, 13, 'Manufacturing QA Rules', NULL, '<p>Production</p><p><br></p><p>Automate quality checks, safety compliance, and production decision-making workflows.</p>', 3, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(97, 13, 'Healthcare Policy Checks', NULL, '<p>Clinical</p><p><br></p><p>Ensure compliance with medical guidelines, billing rules, and patient management protocols.</p>', 4, '2026-01-06 06:01:33', '2026-01-06 06:01:33'),
(98, 13, 'Logistics & Routing Logic', NULL, '<p>Supply Chain</p><p><br></p><p>Define automated routing decisions, shipment prioritization, and SLA-based rule execution.</p>', 5, '2026-01-06 06:01:33', '2026-01-06 06:01:33');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint UNSIGNED NOT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `language`, `name`, `designation`, `category`, `description`, `image`, `created_at`, `updated_at`) VALUES
(3, 'en', 'ATUL PASWAN', 'Founder & CEO', 'Management Team', 'Mr. Atul Paswan moved to Japan in 1999, worked in IT for over 5 years, and founded Indo-Sakura Software Japan K.K. in 2005, bridging India and Japan in ICT and advanced technologies.', 'team/82tl6uI5lqdKgHp12bik226uTROm5RAlvm3b1IVd.webp', '2025-12-22 06:23:54', '2025-12-22 06:23:54'),
(4, 'en', 'MAKOTO WATANABE', 'Chief Growth Officer', 'Advisory Board', 'As Chief Growth Officer at Indo-Sakura, he leads market expansion, strategy, and customer relations to drive success in tech.', 'team/TVzjJ6xQsjgMI5w4hBDZTkhJKpPcCj11kOQqScpp.png', '2025-12-22 06:25:27', '2025-12-22 06:25:27'),
(5, 'en', 'YASUO KIKUCHI', 'Director, General Manager', 'Management Team', 'After graduate school at Nagaoka University of Technology, he worked for an IT vendor with 30 years in banking, he shifted careers and has led ISS management and tech since 2013.', 'team/G3UjZrVzR9qbq6MeXZMRSwun8ED7PNhEvk3LKI7h.png', '2025-12-22 06:26:58', '2025-12-22 06:26:58'),
(6, 'en', 'TAKASHI MOTOYA', 'COO (Japan)', 'Management Team', 'After graduating from Saitama University, I worked in finance, the public sector, and quality control. After that, I led digitalization in a Japanese government agency.', 'team/Z8sDM1Bvzz12pytChqLIdTNByPTWMJBWuqn8v7xP.webp', '2025-12-22 06:27:59', '2025-12-22 06:28:26'),
(7, 'en', 'BHABANI SANKAR JENA', 'Chief Technology Officer', 'Technology & Innovation Leadership', 'Bhabani leads the India Offshore Development Center and heads the GenAI COE, driving technological innovation and growth. He completed his management studies at IIT Delhi.', 'team/8phsWBunRYtm5fgSRtJCw2XKu1XtuO5iUv6MYy4J.png', '2025-12-22 06:29:42', '2025-12-22 06:29:42'),
(9, 'en', 'TAKAAKI UENO', 'Senior Manager: Engineering Department', 'Technology & Innovation Leadership', 'Takaaki Ueno joined Indo-Sakura in 2018 to lead AI business solutions. A University of Tokyo graduate, he spent 28 years at Toshiba developing systems for the railroad industry.', 'team/W4VHiWVsyoRLhmWO19vyzrvftsslcgQCRBu3QECU.png', '2025-12-26 01:45:28', '2025-12-26 01:45:28'),
(10, 'en', 'KUNIO AOKI', 'Chief Growth Officer', 'Advisory Board', 'Kunio Aoki identifies market trends and optimizes growth initiatives to drive expansion at Indo-Sakura.', 'team/ngrm6Qz7ZNAsqqw8W9K2yesv64A0eY0MJ9KUsW7l.png', '2025-12-26 01:46:30', '2025-12-26 01:46:30'),
(11, 'en', 'SACHIE HAZUMI', 'Sales Head (Japan)', 'Regional Leadership', 'After graduating, she worked in system development at a major IT company. Joining Indo-Sakura in 2016, she now handles sales in Japan and supports Japanese business in the U.S.', 'team/vj66iV5IqtAqyizQhyhV9UArZKoxUi27hD8KK9Om.webp', '2025-12-26 01:49:11', '2025-12-26 01:49:11'),
(12, 'en', 'ATSUSHI OOKOSHI', 'Senior Manager: Sales Department', 'Regional Leadership', 'Atsushi Ookoshi joined Indo-Sakura in 2021, focusing on customer development. Previously, he worked in microcontroller sales and expanded into the Indian market.', 'team/EQeWR5daMBo8X1jjMlOxF0pYQfricOzslnLARCZn.webp', '2025-12-26 01:49:49', '2025-12-26 01:50:05'),
(13, 'en', 'NABEEL GAITH', 'Partner, UAE', 'Strategic Alliance Partners', 'Nabeel Gaith is an accomplished partner at Indo-Sakura Dubai with 25 years of experience in tech, telecom, and event industries.', 'team/HbiXegjL7ET2hZUlWNBAaY7LWDSzRVNEtkUACcKc.png', '2025-12-26 01:52:06', '2025-12-26 23:34:08'),
(14, 'en', 'TOSHIMITSU ICHINOSE', 'Strategy Officer', 'Strategic Alliance Partners', 'As Strategy Officer at Indo-Sakura, he leads strategy development, ensuring alignment with long-term vision and growth.', 'team/Pc1uVdJXag8Pr8bZwETW0YmOXkxMCTxWklivAVfG.png', '2025-12-26 01:53:32', '2025-12-26 04:55:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'sathish.lycoris@gmail.com', NULL, '$2y$12$4Lo3EkYgOSUZk8AOI0DKBO1rb9GDzdKQBNIP7NeEnup/NB37FWnAi', 'pta3Lxq01qNhSN18ONxNYbEMw99HfLi82uzNliAaW4rI3CdNS13hVYG7wjGJ', '2025-11-28 07:05:20', '2026-01-10 00:48:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_sections`
--
ALTER TABLE `client_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_sections_client_id_foreign` (`client_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `greetings`
--
ALTER TABLE `greetings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jobs_slug_unique` (`slug`);

--
-- Indexes for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_applications_job_id_foreign` (`job_id`);

--
-- Indexes for table `job_sections`
--
ALTER TABLE `job_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_sections_job_id_foreign` (`job_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsevents`
--
ALTER TABLE `newsevents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `philosophies`
--
ALTER TABLE `philosophies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `policies_slug_unique` (`slug`);

--
-- Indexes for table `policy_sections`
--
ALTER TABLE `policy_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `policy_sections_policy_id_foreign` (`policy_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seminar`
--
ALTER TABLE `seminar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seminars`
--
ALTER TABLE `seminars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seos`
--
ALTER TABLE `seos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `seos_page_unique` (`page`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_slug_unique` (`slug`);

--
-- Indexes for table `service_benefits`
--
ALTER TABLE `service_benefits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_benefits_service_id_foreign` (`service_id`);

--
-- Indexes for table `service_highlights`
--
ALTER TABLE `service_highlights`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_highlights_service_id_foreign` (`service_id`);

--
-- Indexes for table `service_industries`
--
ALTER TABLE `service_industries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `solutions`
--
ALTER TABLE `solutions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `solutions_slug_unique` (`slug`);

--
-- Indexes for table `solution_case_studies`
--
ALTER TABLE `solution_case_studies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solution_case_studies_solution_id_foreign` (`solution_id`);

--
-- Indexes for table `solution_features`
--
ALTER TABLE `solution_features`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solution_features_solution_id_foreign` (`solution_id`);

--
-- Indexes for table `solution_industries`
--
ALTER TABLE `solution_industries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solution_industries_solution_id_foreign` (`solution_id`);

--
-- Indexes for table `solution_use_cases`
--
ALTER TABLE `solution_use_cases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solution_use_cases_solution_id_foreign` (`solution_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `client_sections`
--
ALTER TABLE `client_sections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `greetings`
--
ALTER TABLE `greetings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job_sections`
--
ALTER TABLE `job_sections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `newsevents`
--
ALTER TABLE `newsevents`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `philosophies`
--
ALTER TABLE `philosophies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `policy_sections`
--
ALTER TABLE `policy_sections`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `seminar`
--
ALTER TABLE `seminar`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seminars`
--
ALTER TABLE `seminars`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `seos`
--
ALTER TABLE `seos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `service_benefits`
--
ALTER TABLE `service_benefits`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `service_highlights`
--
ALTER TABLE `service_highlights`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `service_industries`
--
ALTER TABLE `service_industries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `solutions`
--
ALTER TABLE `solutions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `solution_case_studies`
--
ALTER TABLE `solution_case_studies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `solution_features`
--
ALTER TABLE `solution_features`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `solution_industries`
--
ALTER TABLE `solution_industries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `solution_use_cases`
--
ALTER TABLE `solution_use_cases`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `client_sections`
--
ALTER TABLE `client_sections`
  ADD CONSTRAINT `client_sections_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD CONSTRAINT `job_applications_job_id_foreign` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_sections`
--
ALTER TABLE `job_sections`
  ADD CONSTRAINT `job_sections_job_id_foreign` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `policy_sections`
--
ALTER TABLE `policy_sections`
  ADD CONSTRAINT `policy_sections_policy_id_foreign` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_benefits`
--
ALTER TABLE `service_benefits`
  ADD CONSTRAINT `service_benefits_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_highlights`
--
ALTER TABLE `service_highlights`
  ADD CONSTRAINT `service_highlights_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `solution_case_studies`
--
ALTER TABLE `solution_case_studies`
  ADD CONSTRAINT `solution_case_studies_solution_id_foreign` FOREIGN KEY (`solution_id`) REFERENCES `solutions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `solution_features`
--
ALTER TABLE `solution_features`
  ADD CONSTRAINT `solution_features_solution_id_foreign` FOREIGN KEY (`solution_id`) REFERENCES `solutions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `solution_industries`
--
ALTER TABLE `solution_industries`
  ADD CONSTRAINT `solution_industries_solution_id_foreign` FOREIGN KEY (`solution_id`) REFERENCES `solutions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `solution_use_cases`
--
ALTER TABLE `solution_use_cases`
  ADD CONSTRAINT `solution_use_cases_solution_id_foreign` FOREIGN KEY (`solution_id`) REFERENCES `solutions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
