<?php

namespace common\models;

use Yii;
use function foo\func;

/**
 * This is the model class for table "articles".
 *
 * @property int $id
 * @property string $publicationDate
 * @property int $categoryId
 * @property int|null $subcategoryId
 * @property string $title
 * @property string $summary
 * @property string $content
 * @property int $isActive
 *
 * @property Categories $category
 * @property ArticlesUsers[] $articlesUsers
 * @property Users[] $users
 */
class Articles extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'articles';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['publicationDate', 'categoryId', 'title', 'summary', 'content'], 'required'],
            [['publicationDate'], 'safe'],
            [['categoryId', 'subcategoryId', 'isActive'], 'integer'],
            [['summary', 'content'], 'string'],
            [['title'], 'string', 'max' => 255],
            [['categoryId'], 'exist', 'skipOnError' => true, 'targetClass' => Categories::className(), 'targetAttribute' => ['categoryId' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'publicationDate' => 'Publication Date',
            'categoryId' => 'Category ID',
            'subcategoryId' => 'Subcategory ID',
            'title' => 'Title',
            'summary' => 'Summary',
            'content' => 'Content',
            'isActive' => 'Is Active',
        ];
    }

    public function fields()
    {
        return [
            'id',
            'publicationDate',
            'category',
            'subcategoryId',
            'title',
            'summary',
            'content',
            'isActive',
        ];
    }

//    public function extraFields()
//    {
//        return [
//            'category'
//        ];
//    }

    /**
     * Gets query for [[Category]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Categories::className(), ['id' => 'categoryId']);
    }

    /**
     * Gets query for [[ArticlesUsers]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getArticlesUsers()
    {
        return $this->hasMany(ArticlesUsers::className(), ['article_id' => 'id']);
    }

    /**
     * Gets query for [[Users]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getUsers()
    {
        return $this->hasMany(Users::className(), ['id' => 'user_id'])->viaTable('articles_users', ['article_id' => 'id']);
    }
}
