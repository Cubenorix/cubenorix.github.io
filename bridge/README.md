# Cubenorixx Bridge 0.1.0

Тихий мост. Не VPN и не взлом чужих сайтов.

## Что делает

1. Качает файл через origin Cubenorixx (`/api/file`), если cdn.modrinth.com у тебя не резолвится.
2. Собирает и читает `cubenorixx-pack.json` — сборки и избранное, чтобы передать другу.

## Сканер

```
node cubenorixx-bridge.mjs pack-out
node cubenorixx-bridge.mjs pack-in cubenorixx-pack.json
```

URL файла с карточки проекта можно сохранить так:

```
node cubenorixx-bridge.mjs get "https://ТВОЙ-CUBENORIXX/api/file?url=...&name=mod.jar" ./mod.jar
```
