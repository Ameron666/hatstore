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
                    'name' => 'Размеры',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Хит продаж", "Скидка", "Новое"],
                    'selectOne' => false,
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'colections' => [
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

        'shares' => [
            'menuName' => 'Акции',
            'fields' => [
                'title' => [
                    'name' => 'Заголовок акции',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Текст акции',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки акции',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'galery' => [
            'menuName' => 'Фотографии',
            'fields' => [
                'tags_next' => [
                    'name' => 'Теги картинок',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Эстетическая трихология", "Стрижка мужская", "Стрижка женская", "Стрижка детская", "СПА уходовые процедуры", "Окрашивание", "Биозавивка", "Патронажная услуга"],
                    'selectOne' => true,
                    'required' => false,
                ],

                'img' => [
                    'name' => 'Картинки для галереи',
                    'element' => 'input',
                    'type' => 'file',
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

                'img' => [
                    'name' => 'Фотография',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],
        'pricelist' => [
            'menuName' => 'Прайс лист',
            'fields' => [
                'title' => [
                    'name' => 'Выбор услуги',
                    'element' => 'select',
                    'options' => 'services',
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