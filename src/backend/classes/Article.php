<?php


/**
 * Класс для обработки статей
 */
class Article
{
    // Свойства
    /**
    * @var int ID статей из базы данны
    */
    public $id = null;

    /**
    * @var int Дата первой публикации статьи
    */
    public $publicationDate = null;

    /**
    * @var string Полное название статьи
    */
    public $title = null;

     /**
    * @var int ID категории статьи
    */
    public $categoryId = null;

    /**
    * @var string Краткое описание статьи
    */
    public $summary = null;

    /**
    * @var string HTML содержание статьи
    */
    public $content = null;
    
    /**
    * @var string Описание статьи (50 символов + ...)
    */
    public $newSummary = null;
    
    /**
    * @var int Поле видимости статьи.
     *  По умолчанию, =0, статья не видима/опубликована.
    */
    public $active = null;
    
    /**
    * @var int Ссылка на подкатегорию (внешний ключ к subCategories).
    */
    public $subCategory_id = null;
    
    /**
    * Устанавливаем свойства с помощью значений в заданном массиве
    *
    * @param assoc Значения свойств
    */

    /**
     * Создаст объект статьи
     * 
     * @param array $data массив значений (столбцов) строки таблицы статей
     */
    public function __construct($data=array())
    {
        
      if (isset($data['id'])) {
          $this->id = (int) $data['id'];
      }
      
      if (isset( $data['publicationDate'])) {
          $this->publicationDate = (string) $data['publicationDate'];     
      }

      if (isset($data['title'])) {
          $this->title = $data['title'];        
      }
      
      if (isset($data['categoryId'])) {
          $this->categoryId = (int) $data['categoryId'];      
      }
      
      if (isset($data['summary'])) {
          $this->summary = $data['summary'];         
      }
      
      if (isset($data['subCategory_id'])) {
          $this->subCategory_id = $data['subCategory_id'];      
      }
      
      if (isset($data['content'])) {
          $this->content = $data['content'];  
      }
      
      if (isset($data['active'])) {
          $this->active = (int) $data['active'];      
      }
    }


    /**
    * Устанавливаем свойства с помощью значений формы редактирования записи в заданном массиве
    *
    * @param assoc Значения записи формы
    */
    public function storeFormValues ($params) {
      // Сохраняем все параметры
      $this->__construct($params);
      
      // Разбираем и сохраняем дату публикации
      if ( isset($params['publicationDate']) ) {
        $publicationDate = explode ( '-', $params['publicationDate'] );

        if ( count($publicationDate) == 3 ) {
          list ( $y, $m, $d ) = $publicationDate;
          $this->publicationDate = mktime ( 0, 0, 0, $m, $d, $y );
        }
      }
    }


    /**
    * Возвращаем объект статьи соответствующий заданному ID статьи
    *
    * @param int ID статьи
    * @return Article|false Объект статьи или false, если запись не найдена или возникли проблемы
    */
    public static function getById($id) {
        $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
        $sql = "SELECT *, UNIX_TIMESTAMP(publicationDate) "
                . "AS publicationDate FROM articles WHERE id = :id";
        $st = $conn->prepare($sql);
        $st->bindValue(":id", $id, PDO::PARAM_INT);
        $st->execute();
        
        $row = $st->fetch();
        $conn = null;
        
        if ($row) { 
            return new Article($row);
        }
    }


    /**
    * Возвращает все (или диапазон) объекты Article из базы данных
    *
    * @param int $numRows Количество возвращаемых строк (по умолчанию = 1000000)
    * @param int $categoryId Вернуть статьи только из категории с указанным ID
    * @param string $order Столбец, по которому выполняется сортировка статей (по умолчанию = "publicationDate DESC")
    * @param string $activeFilter Столбец со статусом видимости статьи (по умолчанию = не используется)
    * @return Array|false Двух элементный массив: results => массив объектов Article; totalRows => общее количество строк
    */
    public static function getList($numRows=1000000, $categoryId=null,
            $order="publicationDate DESC", $activeFilter = "",
            $subCategory_id=null) 
    {
        $conn = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
        $categoryClause = $categoryId ? "WHERE categoryId = :categoryId" : "";
        $subCategoryClause = $subCategory_id ? "WHERE subCategory_id = :subCategory_id" : "";
        
        $sql = "SELECT SQL_CALC_FOUND_ROWS a.*
                FROM articles a $categoryClause"."$subCategoryClause".$activeFilter."
                ORDER BY  $order  LIMIT :numRows";

        $st = $conn->prepare($sql);
        
        $st->bindValue(":numRows", $numRows, PDO::PARAM_INT);
        
        if (isset($categoryId)) {
            $st->bindValue( ":categoryId", $categoryId, PDO::PARAM_INT);
        }
        
        if (isset($subCategory_id)) {
            $st->bindValue( ":subCategory_id", $subCategory_id, PDO::PARAM_STR);
        }
        $st->execute(); // выполняем запрос к базе данных
//                        echo "<pre>";
//                        print_r($st);
//                        echo "</pre>";
//                        Здесь $st - текст предполагаемого SQL-запроса, причём переменные не отображаются
        $list = array();
        
        while ($row = $st->fetch()) {
            $article = new Article($row);
            // Вырезаем 50 символов и добавляем ...
            $article->newSummary = mb_substr($article->summary, 0, 50)."...";
            $list[] = $article;
        }

        foreach ($list as $item) {
            $item->category = Category::getById($item->categoryId);
            $item->subCategory = SubCategory::getById($item->subCategory_id);
        }

        // Получаем общее количество статей, которые соответствуют критерию
        $sql = "SELECT FOUND_ROWS() AS totalRows";
        $totalRows = $conn->query($sql)->fetch();
        $conn = null;
        
        return (array(
            "items" => $list, 
            "totalRows" => $totalRows[0]
            ) 
        );
    }


    public function getAuthors() {
        $conn = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);

        $sql = "SELECT users.id, users.username 
                FROM  article_users
                LEFT JOIN users 
                ON user_id = id 
                WHERE article_users.article_id = :id";
        
        $st = $conn->prepare($sql);
        $st->bindValue(":id", $this->id, PDO::PARAM_INT);
        $st->execute();
        
        $list = array();
        
        while ($row = $st->fetch()) {
            $list[] = $row;
        }
        
        if ($list) { 
            return $list;
        }
    }


    /**
    * Вставляем текущий объек Article в базу данных, устанавливаем его ID.
    */
    public function insert() {

        // Вставляем статью
        $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
        $sql = "INSERT INTO articles (publicationDate, categoryId, title, summary,"
                . " content, active, subCategory_id)"
                . " VALUES (FROM_UNIXTIME(:publicationDate), :categoryId,"
                . " :title, :summary, :content, :active, :subCategory_id)";

        var_dump($sql);

        $st = $conn->prepare ($sql);
        $st->bindValue( ":publicationDate", $this->publicationDate, PDO::PARAM_INT );
        $st->bindValue( ":categoryId", $this->categoryId, PDO::PARAM_INT );
        $st->bindValue( ":title", $this->title, PDO::PARAM_STR );
        $st->bindValue( ":summary", $this->summary, PDO::PARAM_STR );
        $st->bindValue( ":content", $this->content, PDO::PARAM_STR );
        $st->bindValue( ":active", $this->active, PDO::PARAM_STR );
        $st->bindValue( ":subCategory_id", $this->subCategory_id, PDO::PARAM_STR );
        $st->execute();
        $this->id = $conn->lastInsertId();
        $conn = null;
    }

    public function insertAuthor($user_id) {
        
        $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
        
        $sql = "INSERT INTO `article_users` (`article_id`, `user_id`) VALUES (:article_id, :user_id)";
        
        $st = $conn->prepare($sql);
        $st->bindValue( ":article_id", $this->id, PDO::PARAM_INT );
        $st->bindValue( ":user_id", $user_id, PDO::PARAM_INT );
        $st->execute();
        $conn = null;
    }
    
    /**
    * Обновляем текущий объект статьи в базе данных
    */
    public function update() {

      // Есть ли у объекта статьи ID?
      if ( is_null( $this->id ) ) trigger_error ( "Article::update(): "
              . "Attempt to update an Article object "
              . "that does not have its ID property set.", E_USER_ERROR );

      // Обновляем статью
      $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
      $sql = "UPDATE articles SET publicationDate=FROM_UNIXTIME(:publicationDate),"
              . " categoryId=:categoryId, title=:title, summary=:summary,"
              . " content=:content, active=:active, subCategory_id=:subСategory_id"
              . " WHERE id = :id";
      
      $st = $conn->prepare ( $sql );
      $st->bindValue( ":publicationDate", $this->publicationDate, PDO::PARAM_INT );
      $st->bindValue( ":categoryId", $this->categoryId, PDO::PARAM_INT );
      $st->bindValue( ":title", $this->title, PDO::PARAM_STR );
      $st->bindValue( ":summary", $this->summary, PDO::PARAM_STR );
      $st->bindValue( ":content", $this->content, PDO::PARAM_STR );
      $st->bindValue( ":active", $this->active, PDO::PARAM_STR );
      $st->bindValue( ":subСategory_id", $this->subСategory_id, PDO::PARAM_INT);
      $st->bindValue( ":id", $this->id, PDO::PARAM_INT );   
      $st->execute();
      $conn = null;
    }


    /**
    * Удаляем текущий объект статьи из базы данных
    */
    public function delete() {

      // Есть ли у объекта статьи ID?
      if ( is_null( $this->id ) ) trigger_error ( "Article::delete(): Attempt to delete an Article object that does not have its ID property set.", E_USER_ERROR );

      // Удаляем статью
      $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
      $st = $conn->prepare ( "DELETE FROM articles WHERE id = :id LIMIT 1" );
      $st->bindValue( ":id", $this->id, PDO::PARAM_INT );
      $st->execute();
      $conn = null;
    }
    
    public function deleteAuthors() {
      $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
      $st = $conn->prepare ( "DELETE FROM article_users WHERE article_id = :id" );
      $st->bindValue( ":id", $this->id, PDO::PARAM_INT );
      $st->execute();
      $conn = null;
    }
}
