# FairyTales Shop (Mint & Lavender)

Минимальный одностраничный лендинг "онлайн-магазина сказок" с чистыми HTML/CSS/JS и заготовками backend на PHP и Python/Flask.

## Структура
- `public/` — статические файлы фронтенда.
- `backend/php/api.php` — заглушка API на PHP.
- `backend/python/app.py` — заглушка API на Flask.
- `data/` — будущие файлы заказов/отзывов.

## Запуск статического фронтенда
```bash
python -m http.server 8000 -d public
# или открыть public/index.html напрямую в браузере
```

## Запуск Python backend (Flask)
```bash
cd backend/python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
FLASK_APP=app.py flask run --port 5000
```
Сервер раздаёт статику из `public/` и принимает POST-запросы на `/api/order` и `/api/review`.

## PHP заглушка
Размещён в `backend/php/api.php`. Принимает POST-запросы на `/order` и `/review` и пишет данные в `data/orders.json` и `data/reviews.json`.

## Что пока заглушено
- Интеграция с PayPal/реальными платежами.
- Отправка писем/вебхуков после заказа или отзыва.
- Валидация и авторизация сделаны минимально, только базовые проверки входных данных.

## Лицензия
MIT
