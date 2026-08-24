/*
 * Cubexus - Minecraft content aggregator
 * Copyright (C) 2025-2026 Cubexus Team
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
#!/usr/bin/env node
import { createWriteStream } from 'fs'
import { readFileSync, writeFileSync } from 'fs'
import { Readable } from 'stream'
import { finished } from 'stream/promises'

const [cmd, a, b] = process.argv.slice(2)

if (cmd === 'get' && a && b) {
  const r = await fetch(a)
  if (!r.ok) {
    console.error('http', r.status)
    process.exit(1)
  }
  await finished(Readable.fromWeb(r.body).pipe(createWriteStream(b)))
  console.log('ok', b)
  process.exit(0)
}

if (cmd === 'pack-out') {
  writeFileSync('cubexus-pack.json', JSON.stringify({ v: 1, at: Date.now(), builds: [], favorites: [] }, null, 2))
  console.log('cubexus-pack.json')
  process.exit(0)
}

if (cmd === 'pack-in' && a) {
  const j = JSON.parse(readFileSync(a, 'utf8'))
  if (j.v !== 1) {
    console.error('не пакет Cubexus')
    process.exit(1)
  }
  console.log('сборок', (j.builds || []).length, 'избранного', (j.favorites || []).length)
  process.exit(0)
}

console.log('cubexus-bridge get <url> <file>')
console.log('cubexus-bridge pack-out')
console.log('cubexus-bridge pack-in <json>')
