# Cubenorix

Фанатский некоммерческий сайт-агрегатор контента Minecraft: каталог модов/карт/шейдеров, сборщик модов с реальными JAR, генераторы (команды, текстур-паки), страницы проектов авторов. Работает на GitHub Pages без сервера; часть функций (общие аккаунты, живые комментарии) появится вместе с серверным режимом (Cloudflare Worker + D1).

## Запуск

```bash
npm ci
npm run dev            # дев-сервер
npm run build          # сборка в dist/ (нужен CUBENORIXX_ORIGIN=https://cubenorix.github.io)
```

## Тесты

```bash
node --test tests/core.test.mjs tests/pickver.test.mjs tests/local-admin.test.mjs   # юнит-набор
node tests/lch15.mjs   # e2e (нужен playwright + npx playwright install chromium и vite preview на :5174)
```

Полный список прогонов: `tests/` — юнит (`*.test.mjs`) и e2e-сценарии (`lch*.mjs`).

## Структура

- `src/api.js` — источники данных (Modrinth/GitHub/Wiki), кэш, ретраи
- `src/pages/Builds.jsx` — сборщик модов (каталог внутри, Русификатор, ZIP)
- `src/pages/TextureGen.jsx` — генератор текстур-паков (символы→картинки, именные предметы без OptiFine, датапак выдачи)
- `src/localUploads.js`, `src/published-uploads.js` — публичные проекты авторов
- `functions/` — Workers (аккаунты, файловый прокси) — для серверного режима

## Важно

- Секреты в код не зашивать: HF-ключ владельца упакован намеренно (решение владельца), GitHub-токен использовать только в командах деплоя и периодически ротировать.
- Стиль: «с душой», некоммерческий, дисклеймер Mojang обязателен.
