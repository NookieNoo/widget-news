<?php


namespace frontend\controllers;

use common\models\Articles;

use yii\rest\ActiveController;

class ArticleController extends ActiveController
{
    public $modelClass = Articles::class;
}