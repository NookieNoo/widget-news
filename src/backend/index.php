<?php

require("config.php");

try {
    initApplication();
} catch (Exception $e) { 
    $results['errorMessage'] = $e->getMessage();
    require(TEMPLATE_PATH . "/viewErrorPage.php");
}


function initApplication()
{
    $route = $_SERVER['REQUEST_URI'];

    switch ($route) {
        case '/articles':
            getArticles();
            break;
        default:
            echo 'error';
    }
}


function getArticles() 
{
    $results = [];
    
    $data = Article::getList();

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
    echo(json_encode($data));

}

function archive() 
{
    $results = [];
    
    $categoryId = ( isset( $_GET['categoryId'] ) && $_GET['categoryId'] ) ? (int)$_GET['categoryId'] : null;
    
    $results['category'] = Category::getById( $categoryId );
    
    $data = Article::getList( 100000, $results['category'] ? $results['category']->id : null);
    
    $results['articles'] = $data['results'];
    $results['totalRows'] = $data['totalRows'];
    
    $data = Category::getList();
    $results['categories'] = array();
    
    foreach ( $data['results'] as $category ) {
        $results['categories'][$category->id] = $category;
    }
    
    $results['pageHeading'] = $results['category'] ?  $results['category']->name : "Article Archive";
    $results['pageTitle'] = $results['pageHeading'] . " | Widget News";
    
    require( TEMPLATE_PATH . "/archive.php" );
}



function archiveSubCategories() 
{
    $results = [];
    
    $subCategory_id = ( isset( $_GET['subCategory_id'] ) ) ? (int)$_GET['subCategory_id'] : null;
    
    $results['subCategory'] = subCategory::getById($subCategory_id);
    
    //??
    //$data = Article::getList( 100000, null, "publicationDate DESC", null, $results['subCategory'] ? $results['subCategory']->id : null );
    //var_dump($results['subCategory']);
    $data = Article::getList(100000, null, "publicationDate DESC", null, $results['subCategory']->id);
    
    $results['articles'] = $data['results'];
    $results['totalRows'] = $data['totalRows'];

    $data = SubCategory::getList();
    $results['subCategories'] = array();
    
    foreach ( $data['results'] as $subCategory ) {
        $results['subCategories'][$subCategory->id] = $subCategory;
    }
    
    $results['pageHeading'] = $results['subCategory'] ?  $results['subCategory']->name : "Article Archive";
    $results['pageTitle'] = $results['pageHeading'] . " | Widget News";
    //var_dump($results);
    require( TEMPLATE_PATH . "/archiveSubCategories.php" );
}


/**
 * Загрузка страницы с конкретной статьёй
 * 
 * @return null
 */
function viewArticle() 
{   
    if ( !isset($_GET["articleId"]) || !$_GET["articleId"] ) {
      homepage();
      return;
    }

    $results = array();
    $articleId = (int)$_GET["articleId"];
    $results['article'] = Article::getById($articleId);
    
    if (!$results['article']) {
        throw new Exception("Статья с id = $articleId не найдена");
    }
    
    $results['category'] = Category::getById($results['article']->categoryId);
    $results['pageTitle'] = $results['article']->title . " | Простая CMS";
    
    require(TEMPLATE_PATH . "/viewArticle.php");
}

/**
 * Вывод домашней ("главной") страницы сайта
 */
function homepage() 
{
    $results = array();
    $data = Article::getList(HOMEPAGE_NUM_ARTICLES, null, "publicationDate DESC"
            , "WHERE active=1");
    $results['articles'] = $data['results'];
    $results['totalRows'] = $data['totalRows'];
    
    $data = Category::getList();
    $results['categories'] = array();
    foreach ( $data['results'] as $category ) { 
        $results['categories'][$category->id] = $category;
    } 
    
    $data = SubCategory::getList();
    $results['subCategories'] = array();
    foreach ( $data['results'] as $subCategory ) { 
        $results['subCategories'][$subCategory->id] = $subCategory;
    }     
      

    $results['pageTitle'] = "Простая CMS на PHP";

//    echo "<pre>";
//    print_r($data);
//    echo "</pre>";
//    die();
       
    }