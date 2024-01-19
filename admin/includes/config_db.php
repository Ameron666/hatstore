<?php
function getSchema()
{
    return [
        'item' => [
            'menuName' => 'Товар',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'vendor' => [
                    'name' => 'Артикул',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Описание',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],

                'price' => [
                    'name' => 'Цена',
                    'element' => 'input',
                    'type' => 'number',
                    'required' => true,
                ],

                'price_discount' => [
                    'name' => 'Цена старая',
                    'element' => 'input',
                    'type' => 'number',
                    'required' => false,
                ],

                'color' => [
                    'name' => 'Цвета',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Фиолетовый", "Чёрный", "Белый", "Красный", "Синий", "Зелёный", "Оранжевый", "Голубой", "Желтый", "Серый"],
                    'selectOne' => false,
                    'required' => true,
                ],

                'size' => [
                    'name' => 'Размеры',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["52-54", "54-56", "56-58", "58-60", "60-62", "62-64"],
                    'selectOne' => false,
                    'required' => true,
                ],

                'for' => [
                    'name' => 'Размеры',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Для неё", "Для него", "Для детей"],
                    'selectOne' => true,
                    'required' => true,
                ],

                'composition' => [
                    'name' => 'Состав',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'lining' => [
                    'name' => 'Подкладка',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'tags' => [
                    'name' => 'Скидки и прочее',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Хит продаж", "Скидка", "Новое"],
                    'selectOne' => false,
                    'required' => false,
                ],

                'collection'=> [
                    'name' => 'Выбор коллекции',
                    'element' => 'select',
                    'options' => 'collections',
                    'required' => false,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'collections' => [
            'menuName' => 'Коллекции',
            'fields' => [
                'title' => [
                    'name' => 'Название коллекция',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
            ],
        ],

        'comment' => [
            'menuName' => 'Отзывы',
            'fields' => [
                'title' => [
                    'name' => 'ФИО',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Текст отзыва',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],
            ],
        ],
    
    ];
}