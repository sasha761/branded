# WordPress REST API — документация для Nuxt.js интеграции

Базовый URL: `https://YOUR_DOMAIN/wp-json`

Все эндпоинты публичные (не требуют аутентификации), кроме `set_seo_identifiers`.
Сайт использует WPML — параметр `lang` определяет язык ответа (`ru`, `uk`, `en`).

---

## 1. Меню

### GET `/api/menu/get_menu_header`
Получить главное меню (header).

| Параметр | Тип    | Обязательный | По умолчанию | Описание       |
|----------|--------|-------------|-------------|----------------|
| lang     | string | нет         | ru          | Код языка WPML |

**Ответ** — массив пунктов меню:
```json
[
  {
    "title": "Женщинам",
    "url": "https://...",
    "slug": "/women/",
    "image": { "url": "...", "title": "...", "alt": "..." },
    "submenu": [ /* рекурсивная вложенность */ ]
  }
]
```

### GET `/api/menu/get_menu_footer`
Меню футера. Параметры и формат ответа аналогичны `get_menu_header`.

### GET `/api/menu/get_menu_mobile`
Мобильное меню. Параметры: `lang`.

**Ответ:**
```json
{
  "man": [ /* массив пунктов */ ],
  "woman": [ /* массив пунктов */ ]
}
```

### GET `/api/menu/languages`
Список доступных языков.

| Параметр | Тип    | Обязательный | Описание       |
|----------|--------|-------------|----------------|
| lang     | string | нет         | Текущий язык   |
| url      | string | нет         | URL страницы   |

**Ответ:**
```json
{
  "current_lang": "ru",
  "languages": { /* объект языков из WPML */ }
}
```

---

## 2. Главная страница

### GET `/api/home/get_home_info`
Получить данные главной страницы.

| Параметр | Тип    | Обязательный | По умолчанию |
|----------|--------|-------------|-------------|
| lang     | string | нет         | ru          |

**Ответ:**
```json
{
  "products_brand": [ /* массив товаров из категории women */ ],
  "products_sale": [ /* массив товаров из категории accessories */ ],
  "best_offers": [ /* товары из ACF поля best_offers */ ],
  "banners_group": /* ACF поле banners_group */,
  "accesories": /* ACF поле accesories */
}
```

Каждый товар в массиве — объект формата **ProductShort** (см. раздел "Формат товара" ниже).

---

## 3. Каталог / Архив товаров

### GET `/api/archive/get_products`
Получить список товаров с фильтрацией, сортировкой и пагинацией.

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| url      | string | **да**      | —           | URL-путь категории/бренда с query-параметрами (напр. `women/dresses?orderby=price&color=red`) |
| lang     | string | нет         | ru          | Код языка |
| slug     | string | нет         | —           | Slug категории товара |
| page     | int    | нет         | 1           | Номер страницы |
| offset   | int    | нет         | 0           | Смещение |

**Логика фильтрации через URL:**
- Если в URL есть `/brand/SLUG` — фильтрация по бренду
- Query-параметры (кроме `orderby`, `page`, `s`) интерпретируются как атрибуты WooCommerce (`pa_COLOR`, `pa_SIZE` и т.д.)
- `?s=текст` — поиск по названию товара
- `?orderby=` — сортировка: `popularity`, `price`, `price-asc`, `price-desc`, `date`, `rating`

**Ответ:**
```json
{
  "products_count": 48,
  "products": [ /* массив ProductShort */ ],
  "product_cat": {
    "id": 15,
    "name": "Платья",
    "parent": "Женщинам",
    "url": "https://..."
  }
}
```

Пагинация: 16 товаров на страницу. По умолчанию товары сортируются: сначала "в наличии", потом "нет в наличии", затем по дате (новые первые).

### GET `/api/archive/get_sidebar`
Получить дерево категорий для бокового меню (sidebar) на странице каталога.

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| lang     | string | нет         | ru          | Код языка |
| slug     | string | нет         | —           | Slug текущей категории (для определения активной группы) |

**Ответ:**
```json
[
  {
    "id": 16,
    "label": "Мужчинам",
    "is_active": false,
    "children": [
      { "term_id": 101, "name": "Куртки", "slug": "kurtki", "count": 12 },
      { "term_id": 102, "name": "Брюки", "slug": "bryuki", "count": 8 }
    ]
  },
  {
    "id": 17,
    "label": "Женщинам",
    "is_active": true,
    "children": [
      { "term_id": 201, "name": "Платья", "slug": "platya", "count": 25 },
      { "term_id": 202, "name": "Юбки", "slug": "yubki", "count": 15 }
    ]
  },
  {
    "id": 18,
    "label": "Детям",
    "is_active": false,
    "children": [...]
  }
]
```

**Примечания:**
- Возвращает 3 корневые категории (Мужчинам, Женщинам, Детям) с их подкатегориями
- `is_active` = `true` для группы, к которой принадлежит текущая категория (по `slug`)
- `count` — количество товаров в подкатегории
- На фронте: раскрывать аккордеон для группы с `is_active: true`

---

### GET `/api/archive/get_filters`
Получить доступные фильтры для каталога (атрибуты, ценовой диапазон, сортировки).

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| lang     | string | нет         | ru          | Код языка |
| slug     | string | нет         | —           | Slug категории (если не указан — фильтры по всем товарам) |

**Ответ:**
```json
{
  "filters": [
    {
      "attribute": "color",
      "label": "Цвет",
      "options": [
        { "slug": "red", "name": "Красный", "count": 12 },
        { "slug": "blue", "name": "Синий", "count": 8 }
      ]
    },
    {
      "attribute": "size",
      "label": "Размер",
      "options": [
        { "slug": "s", "name": "S", "count": 15 },
        { "slug": "m", "name": "M", "count": 22 }
      ]
    }
  ],
  "price_range": {
    "min": 150.00,
    "max": 5600.00
  },
  "sort_options": [
    { "value": "default", "label": "По умолчанию" },
    { "value": "popularity", "label": "По популярности" },
    { "value": "date", "label": "По новизне" },
    { "value": "price-asc", "label": "Цена: по возрастанию" },
    { "value": "price-desc", "label": "Цена: по убыванию" },
    { "value": "rating", "label": "По рейтингу" }
  ],
  "products_count": 48
}
```

**Примечания:**
- `count` в каждом фильтре показывает количество товаров с этим атрибутом в данной категории
- Бренд (`pa_brand`) исключён из фильтров — он обрабатывается через URL
- Фильтры с `count: 0` автоматически скрываются
- Атрибут `attribute` используется как query-параметр при фильтрации: `?color=red&size=m`

---

## 4. Товар (одиночный)

### GET `/api/product/get_single_product`
Получить полную информацию о товаре.

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| url      | string | **да**      | —           | Slug товара |
| lang     | string | нет         | ru          | Код языка |

**Ответ** — объект **ProductShort** + дополнительные поля:
```json
{
  /* ...все поля ProductShort... */
  "categories_str": "Женщинам, Платья",
  "product_info": {
    /* ACF поля бренда */
    "specification": "<p><b>Бренд:</b> ...</p>..."
  },
  "rating": "4.5",
  "count": 12,
  "comments": [ /* массив комментариев WP */ ],
  "related_products": [ /* массив ProductShort — до 10 похожих товаров */ ]
}
```

**Ошибки:**
- `404` — `{ "code": "not_found", "message": "Продукт не найден" }`

---

## 5. Поиск

### POST `/api/search/search`
Поиск товаров по названию.

**Тело запроса (JSON):**

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| query    | string | **да**      | —           | Строка поиска (мин. 3 символа) |
| lang     | string | нет         | ru          | Код языка |

**Ответ:**
```json
{
  "products_count": 5,
  "products": [ /* массив ProductShort, макс. 7 штук */ ]
}
```

**Ошибки:**
- `400` — `{ "code": "search_error", "message": "Введите минимум 3 символа" }`

---

## 6. Страницы

### POST `/api/page/page`
Получить контент статической страницы.

**Тело запроса (JSON):**

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| url      | string | **да**      | —           | URL-путь страницы (напр. `about-us` или `uk/about-us`) |
| lang     | string | нет         | ru          | Код языка |

**Ответ:**
```json
{
  "page": {
    "ID": 123,
    "title": "О нас",
    "content": "<p>HTML контент страницы...</p>"
  },
  "related_pages": [
    { "ID": 431, "title": "Доставка", "link": "https://..." },
    { "ID": 441, "title": "Оплата", "link": "https://..." }
  ]
}
```

**Ошибки:**
- `400` — `{ "code": "no_url", "message": "No URL provided" }`
- `404` — `{ "code": "no_page", "message": "Page not found" }`

---

## 7. Корзина / Заказы

### GET `/api/cart/get_cart_url`
Получить URL корзины и чекаута.

| Параметр | Тип    | Обязательный | По умолчанию |
|----------|--------|-------------|-------------|
| lang     | string | нет         | ru          |

**Ответ:**
```json
{
  "cart": "https://.../cart/",
  "checkout": "https://.../checkout/"
}
```

### POST `/api/cart/create_order`
Создать заказ (быстрый заказ).

**Тело запроса (JSON):**

| Параметр  | Тип    | Обязательный | Описание |
|-----------|--------|-------------|----------|
| email     | string | да          | Email покупателя |
| firstName | string | да          | Имя |
| lastName  | string | да          | Фамилия |
| phone     | string | да          | Телефон |
| city      | string | да          | Город |
| address   | string | да          | Адрес доставки |
| products  | array  | да          | Массив товаров |
| comments  | string | нет         | Комментарий к заказу |

**Формат `products`:**
```json
[
  {
    "id": 123,
    "quantity": 2,
    "size_selected": [{ "id": 456 }]
  }
]
```
- Если `size_selected[0].id` указан — используется как ID вариации
- Иначе используется `id` основного товара

**Ответ:** URL страницы "Заказ получен" (строка) или `false` при ошибке.

### GET `/api/cart/get_order_info`
Получить информацию о заказе.

| Параметр | Тип | Обязательный | Описание |
|----------|-----|-------------|----------|
| order_id | int | да          | ID заказа |

**Ответ:**
```json
{
  "order_data": {
    "order_id": 1001,
    "order_number": "1001",
    "order_date": "2024-01-15 14:30:00",
    "status": "on-hold",
    "order_total": "1500.00",
    "order_currency": "UAH",
    "payment_method_title": "...",
    "billing_first_name": "...",
    "billing_email": "...",
    "billing_phone": "...",
    /* ...остальные поля billing/shipping адреса... */
  },
  "products": [
    {
      "id": 123,
      "variation_id": 456,
      "name": "Платье летнее",
      "brand": [ /* термины бренда */ ],
      "qty": 2,
      "subtotal": "1500",
      "total": "1500",
      "cats": ["Женщинам", "Платья"]
    }
  ]
}
```

---

## 8. SEO данные (Yoast SEO)

### POST `/api/seo/get_seo`
Получить SEO мета-данные для любой страницы (из Yoast SEO).

**Тело запроса (JSON):**

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| url      | string | **да**      | —           | Slug или путь (напр. `summer-dress-2024`, `about-us`, `dresses`) |
| type     | string | **да**      | —           | Тип: `product`, `page`, `category`, `brand`, `home` |
| lang     | string | нет         | ru          | Код языка |

**Ответ:**
```json
{
  "title": "Платье летнее - Branded",
  "description": "Купить платье летнее в интернет-магазине...",
  "canonical": "https://.../product/summer-dress/",
  "og_title": "Платье летнее - Branded",
  "og_description": "Купить платье летнее...",
  "og_image": "https://.../uploads/dress.jpg",
  "robots": "index, follow",
  "schema": {
    "@type": "Product",
    "name": "Платье летнее",
    "description": "...",
    "image": "https://...",
    "sku": "1234",
    "offers": {
      "@type": "Offer",
      "price": "750",
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock"
    }
  }
}
```

**Примечания:**
- `schema` возвращается только для `type: product`, для остальных — `null`
- Если в Yoast SEO не заполнены поля, используются fallback-значения (title из WP, изображение из thumbnail)
- `robots` — `"index, follow"` по умолчанию, `"noindex"` если установлено в Yoast

**Значения `type`:**
- `product` — `url` = slug товара (напр. `summer-dress-2024`)
- `page` — `url` = путь страницы (напр. `about-us` или `uk/about-us`)
- `category` — `url` = slug категории товара (напр. `dresses`)
- `brand` — `url` = slug бренда (напр. `nike`)
- `home` — `url` = любое значение (игнорируется), возвращает SEO главной страницы

---

## 9. Хлебные крошки (Breadcrumbs)

### POST `/api/seo/get_breadcrumbs`
Получить хлебные крошки для любой страницы.

**Тело запроса (JSON):**

| Параметр | Тип    | Обязательный | По умолчанию | Описание |
|----------|--------|-------------|-------------|----------|
| url      | string | **да**      | —           | Slug или путь |
| type     | string | **да**      | —           | Тип: `product`, `page`, `category`, `brand` |
| lang     | string | нет         | ru          | Код языка |

**Ответ:**
```json
{
  "breadcrumbs": [
    { "text": "Главная", "url": "https://.../" },
    { "text": "Женщинам", "url": "https://.../women/" },
    { "text": "Платья", "url": "https://.../women/dresses/" },
    { "text": "Платье летнее", "url": null }
  ],
  "schema": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://.../" },
      { "@type": "ListItem", "position": 2, "name": "Женщинам", "item": "https://.../women/" },
      { "@type": "ListItem", "position": 3, "name": "Платья", "item": "https://.../women/dresses/" },
      { "@type": "ListItem", "position": 4, "name": "Платье летнее" }
    ]
  }
}
```

**Примечания:**
- Последний элемент в `breadcrumbs` всегда имеет `url: null` (текущая страница)
- `schema` — готовый JSON-LD для вставки в `<script type="application/ld+json">`
- Для товаров автоматически строится цепочка: Главная → Родительская категория → Дочерняя категория → Товар
- Для категорий: Главная → Родительские категории → Текущая категория
- Для страниц: учитываются родительские страницы WP

---

## Формат товара (ProductShort)

Общий формат объекта товара, возвращаемый во всех списках:

```json
{
  "brand": [ /* термины WC бренда */ ],
  "id": 123,
  "name": "Платье летнее",
  "price": "750",
  "price_html": "<del>1000</del> <ins>750</ins>",
  "is_stock": "instock",
  "post_attr_size": "S, M, L",
  "post_attr_color": "Красный",
  "post_attr_brand": "BrandName",
  "post_link_brand": "brand-slug",
  "post_brand_url": "https://.../pa_brand/brand-slug/",
  "short_description": "<p>Краткое описание</p>",
  "description": "<p>Описание из excerpt</p>",
  "post_img_l": "https://...archive_xl.jpg",
  "post_img_m": "https://...archive_md.jpg",
  "post_img_xl": "https://...large.jpg",
  "video": null,
  "permalink": "https://.../product/dress/",
  "other_colors": null,
  "is_sale": true,
  "stockStatus": "В наличии",
  "percent": 25,
  "images": ["https://...gallery1.jpg", "https://...gallery2.jpg"],
  "size_attribute": [
    { "id": 456, "name": "S", "availability": true },
    { "id": 457, "name": "M", "availability": false },
    { "id": 458, "name": "L", "availability": true }
  ]
}
```

**Примечания по полям:**
- `is_stock` — `"instock"` / `"outofstock"`
- `percent` — процент скидки (целое число) или `false`
- `is_sale` — `true` / `false`
- `size_attribute` — для простых товаров: `[{ "id": productId, "name": "one size", "availability": true }]`
- `images` — галерея (может отсутствовать)
- `video`, `other_colors` — ACF поля (могут быть `null`)

---

## Сводная таблица эндпоинтов

| Метод | Эндпоинт | Описание |
|-------|----------|----------|
| GET   | `/api/menu/get_menu_header?lang=ru` | Меню шапки |
| GET   | `/api/menu/get_menu_footer?lang=ru` | Меню подвала |
| GET   | `/api/menu/get_menu_mobile?lang=ru` | Мобильное меню |
| GET   | `/api/menu/languages?lang=ru` | Список языков |
| GET   | `/api/home/get_home_info?lang=ru` | Главная страница |
| GET   | `/api/archive/get_products?url=...&lang=ru&slug=...&page=1` | Каталог товаров |
| GET   | `/api/archive/get_sidebar?lang=ru&slug=dresses` | Sidebar категорий |
| GET   | `/api/archive/get_filters?lang=ru&slug=dresses` | Фильтры каталога |
| GET   | `/api/product/get_single_product?url=product-slug&lang=ru` | Карточка товара |
| POST  | `/api/search/search` (body: `{query, lang}`) | Поиск |
| POST  | `/api/page/page` (body: `{url, lang}`) | Статическая страница |
| GET   | `/api/cart/get_cart_url?lang=ru` | URL корзины/чекаута |
| POST  | `/api/cart/create_order` (body: `{email, firstName, ...}`) | Создать заказ |
| GET   | `/api/cart/get_order_info?order_id=123` | Информация о заказе |
| POST  | `/api/seo/get_seo` (body: `{url, type, lang}`) | SEO мета-данные |
| POST  | `/api/seo/get_breadcrumbs` (body: `{url, type, lang}`) | Хлебные крошки |

---

## Примеры запросов (fetch)

```js
// Меню шапки
const menu = await $fetch('/wp-json/api/menu/get_menu_header', {
  params: { lang: 'ru' }
})

// Каталог с фильтрами
const catalog = await $fetch('/wp-json/api/archive/get_products', {
  params: {
    url: 'women/dresses?orderby=price-asc&color=red',
    lang: 'uk',
    slug: 'dresses',
    page: 2
  }
})

// Товар
const product = await $fetch('/wp-json/api/product/get_single_product', {
  params: { url: 'summer-dress-2024', lang: 'ru' }
})

// Поиск
const results = await $fetch('/wp-json/api/search/search', {
  method: 'POST',
  body: { query: 'платье', lang: 'ru' }
})

// Страница
const page = await $fetch('/wp-json/api/page/page', {
  method: 'POST',
  body: { url: 'about-us', lang: 'ru' }
})

// Создание заказа
const orderUrl = await $fetch('/wp-json/api/cart/create_order', {
  method: 'POST',
  body: {
    email: 'user@example.com',
    firstName: 'Иван',
    lastName: 'Иванов',
    phone: '+380991234567',
    city: 'Киев',
    address: 'ул. Крещатик, 1',
    products: [
      { id: 123, quantity: 1, size_selected: [{ id: 456 }] }
    ],
    comments: 'Позвоните перед доставкой'
  }
})

// Sidebar категорий
const sidebar = await $fetch('/wp-json/api/archive/get_sidebar', {
  params: { slug: 'dresses', lang: 'ru' }
})

// Фильтры для категории
const filters = await $fetch('/wp-json/api/archive/get_filters', {
  params: { slug: 'dresses', lang: 'ru' }
})

// SEO данные для товара
const seo = await $fetch('/wp-json/api/seo/get_seo', {
  method: 'POST',
  body: { url: 'summer-dress-2024', type: 'product', lang: 'ru' }
})

// SEO данные для категории
const categorySeo = await $fetch('/wp-json/api/seo/get_seo', {
  method: 'POST',
  body: { url: 'dresses', type: 'category', lang: 'ru' }
})

// SEO данные для главной
const homeSeo = await $fetch('/wp-json/api/seo/get_seo', {
  method: 'POST',
  body: { url: '', type: 'home', lang: 'ru' }
})

// Хлебные крошки для товара
const breadcrumbs = await $fetch('/wp-json/api/seo/get_breadcrumbs', {
  method: 'POST',
  body: { url: 'summer-dress-2024', type: 'product', lang: 'ru' }
})

// Хлебные крошки для категории
const catBreadcrumbs = await $fetch('/wp-json/api/seo/get_breadcrumbs', {
  method: 'POST',
  body: { url: 'dresses', type: 'category', lang: 'ru' }
})

