# test_advanced_blog

Установка
------------

1. php >= 7.2
2. git clone https://github.com/iamanatolich/test_advanced_blog.git
3. В консоли прописать `chmod -R 777 {YOUR_PROJECT}` (Вместо {YOUR_PROJECT} укажите путь к вашему проекту) 
4. В консоли написать `php init` выбрать 0 (Development) и yes
5. `common/config/main-local.php` (Прописать логин, пароль и имя базы данных)
6. Импортировать базу данных из `bd/blogadvanced.sql` в свою
7. Вывод всех записей по адресу `http://{YOUR_PROJECT}/articles`
8. Вывод одной `http://{YOUR_PROJECT}/articles/{ID}` пример: (http://blogadvanced.ru/articles/5)
9. По запросу `?fields={VALUE}` можно вывести отдельные поля. Например: `http://{YOUR_PROJECT}/articles?fields=id,category`