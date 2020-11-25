-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Ноя 25 2020 г., 17:33
-- Версия сервера: 8.0.22-0ubuntu0.20.04.2
-- Версия PHP: 7.3.24-3+ubuntu20.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `apitest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `articles`
--

CREATE TABLE `articles` (
  `id` smallint UNSIGNED NOT NULL,
  `publicationDate` date NOT NULL,
  `categoryId` smallint UNSIGNED NOT NULL,
  `subcategoryId` smallint UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `content` mediumtext NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `articles`
--

INSERT INTO `articles` (`id`, `publicationDate`, `categoryId`, `subcategoryId`, `title`, `summary`, `content`, `isActive`) VALUES
(5, '1970-01-01', 1, 1, 'оврплрпловплво', 'вглгвуклвгуклугл', 'алавглкгнлкнглгк', 1),
(6, '1970-01-01', 1, 0, 'Вакансии', 'Cfgdfhghh', 'dshsrhsrh', 1),
(7, '1970-01-01', 1, 1, 'Ошибка composer', 'gbshsfghgf', 'snsgfnjsrh', 1),
(9, '2020-07-08', 3, 0, 'Изготовление Иприта в домашних устовиях', 'Изготавливаем ОМП', 'В большую емкость наливаем воду, Внимательно следим за кислотно-щелочным балансом в Ёмкости', 1),
(10, '2020-07-09', 4, 4, 'Космический годовой параллакс: гипотеза и теории', 'Каллисто разрушаем. Космогоническая гипотеза Шмидта позволяет достаточно просто объяснить эту нестыковку, однако полнолуние прочно колеблет поперечник. Эпоха существенно отражает первоначальный возмущающий фактор. Перигей, по определению, меняет эллиптический радиант, но это не может быть причиной наблюдаемого эффекта.', 'Маятник Фуко, как бы это ни казалось парадоксальным, неравномерен. Солнечное затмение, и это следует подчеркнуть, параллельно. Большая Медведица гасит центральный метеорит. Как мы уже знаем, исполинская звездная спираль с поперечником в 50 кпк точно притягивает первоначальный астероид. Южный Треугольник, по определению, отражает экваториальный дип-скай объект.\r\n\r\nГелиоцентрическое расстояние традиционно иллюстрирует Южный Треугольник. Планета параллельна. Хотя хpонологи не увеpены, им кажется, что газопылевое облако потенциально. Узел, это удалось установить по характеру спектра, изменяем.\r\n\r\n', 1),
(11, '2020-07-09', 4, 4, 'Первоначальный ионный хвост: методология и особенности', 'Различное расположение притягивает поперечник. Засветка неба недоступно решает маятник Фуко - это солнечное затмение предсказал ионянам Фалес Милетский. Красноватая звездочка, в первом приближении, гасит метеорит.', 'Многие кометы имеют два хвоста, однако солнечное затмение гасит керн, но это не может быть причиной наблюдаемого эффекта. Планета наблюдаема. Тропический год пространственно притягивает близкий секстант.\r\n\r\nБолид меняет эксцентриситет, это довольно часто наблюдается у сверхновых звезд второго типа. Кульминация представляет собой астероидный секстант. Пpотопланетное облако, после осторожного анализа, стабильно.\r\n\r\nБольшая Медведица, после осторожного анализа, точно отражает керн. Прямое восхождение, а там действительно могли быть видны звезды, о чем свидетельствует Фукидид меняет близкий дип-скай объект. Натуральный логарифм последовательно гасит перигелий. Звезда, несмотря на внешние воздействия, жизненно решает первоначальный часовой угол.', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `articles_users`
--

CREATE TABLE `articles_users` (
  `article_id` smallint UNSIGNED NOT NULL,
  `user_id` smallint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `articles_users`
--

INSERT INTO `articles_users` (`article_id`, `user_id`) VALUES
(6, 2),
(7, 1),
(9, 2),
(10, 35),
(11, 35);

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` smallint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(1, 'devops', 'devops и всякое'),
(3, 'frontend', 'Визуальное оформление и взаимодействие с пользователями'),
(4, 'Астрономия', 'Наука окосмосе и всяких телах наполняющих его');

-- --------------------------------------------------------

--
-- Структура таблицы `subcategory`
--

CREATE TABLE `subcategory` (
  `id` smallint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` smallint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `subcategory`
--

INSERT INTO `subcategory` (`id`, `name`, `description`, `categoryId`) VALUES
(1, 'прпрпрп', 'что то там', 1),
(3, 'домашние сети', 'Организация домашних сеток', 1),
(4, 'Наблюдение', 'Наблюдение за космосом вооруженным и безоружным', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` smallint NOT NULL,
  `login` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` date NOT NULL,
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `salt` int NOT NULL,
  `role` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `pass`, `timestamp`, `email`, `salt`, `role`) VALUES
(1, 'admin', '$2y$10$pZFOjksKoy9zS0T.6w3Ll.07kvWgaV6qSXr/n5V0cu5HHR6TkXy9i', '2018-07-04', 'admin@admin.admin', 716953, 'admin'),
(2, 'Mery', '$2y$10$YyvPebNkLg90fkx1w/NIdOF62nJ.LgOU5VhcL4LPDd/hvXmOg0NKG', '2017-08-01', 'email@rrt', 426915, 'auth_user'),
(35, 'losyash', '$2y$10$/1DNhT2fsu2LwtV8OfdnaO.R8nRw3BrZBWobY69Wkhn1rV7aBFmTC', '2020-07-09', 'losyash@smesh.ru', 498077, 'auth_user'),
(36, 'krosh', '$2y$10$MFJk.d9k/qsFk/BIDpHKOu7zVtWBR2Lma3.6sK8eW3rNuepPXF3dy', '2020-07-09', 'krosh@smesh.ru', 224359, 'admin'),
(37, 'nysha', '$2y$10$ufYWHavZzD9g8b7vjMbqUekXUQkxEOzqNRU6gKkbEMHLuKCsCgfGG', '2020-07-09', 'nysha@smesh.ru', 433529, 'admin');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Индексы таблицы `articles_users`
--
ALTER TABLE `articles_users`
  ADD PRIMARY KEY (`article_id`,`user_id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`categoryId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `articles`
--
ALTER TABLE `articles`
  MODIFY `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` smallint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` smallint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `articles_users`
--
ALTER TABLE `articles_users`
  ADD CONSTRAINT `FK_articles` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
