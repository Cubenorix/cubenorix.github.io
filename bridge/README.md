# Cubexus Bridge 0.1.0

Тихий мост. Не VPN и не взлом чужих сайтов.

## Что делает

1. Качает файл через origin Cubexus (`/api/file`), если cdn.modrinth.com у тебя не резолвится.
2. Собирает и читает `cubexus-pack.json` — сборки и избранное, чтобы передать другу.

## Сканер

```
node cubexus-bridge.mjs pack-out
node cubexus-bridge.mjs pack-in cubexus-pack.json
```

URL файла с карточки проекта можно сохранить так:

```
node cubexus-bridge.mjs get "https://ТВОЙ-CUBEXUS/api/file?url=...&name=mod.jar" ./mod.jar
```
