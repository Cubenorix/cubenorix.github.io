import{n as e}from"./rolldown-runtime-Dd_uD5pT.js";var t=e({decodeEntities:()=>r,giveProtect:()=>l,holdProtect:()=>c,htmlToMd:()=>o,plainPreview:()=>s}),n={amp:`&`,lt:`<`,gt:`>`,quot:`"`,apos:`'`,nbsp:` `,mdash:`—`,ndash:`–`,hellip:`…`,laquo:`«`,raquo:`»`,copy:`©`,reg:`®`,trade:`™`,times:`×`,minus:`−`};function r(e){return String(e||``).replace(/&(#x?[0-9a-f]+|[a-z]+);/gi,(e,t)=>{let r=String(t).toLowerCase();if(n[r])return n[r];if(r[0]===`#`){let e=r[1]===`x`?parseInt(r.slice(2),16):parseInt(r.slice(1),10);if(Number.isFinite(e)&&e>31&&e<1114112)return String.fromCodePoint(e)}return` `})}function i(e){let t=[],n=e=>(t.push(e),`‹${t.length-1}›`),r=String(e||``);return r=r.replace(/```[\s\S]*?```/g,n),r=r.replace(/`[^`\n]+`/g,n),{out:r,bag:t}}function a(e,t){return String(e||``).replace(/‹(\d+)›/g,(e,n)=>t[Number(n)]||``)}function o(e){let t=i(String(e||``).replace(/\r\n/g,`
`)),n=t.out;return n=n.replace(/<style[\s\S]*?<\/style>/gi,` `),n=n.replace(/<script[\s\S]*?<\/script>/gi,` `),n=n.replace(/<!--[\s\S]*?-->/g,` `),n=n.replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi,`[$2]($1)`),n=n.replace(/\[url\]([\s\S]*?)\[\/url\]/gi,`$1`),n=n.replace(/\[img\]([\s\S]*?)\[\/img\]/gi,`![]($1)`),n=n.replace(/\[\/?(?:b|bold)\]/gi,`**`),n=n.replace(/\[\/?(?:i|em)\]/gi,`*`),n=n.replace(/\[quote(?:=[^\]]*)?\]/gi,`
> `),n=n.replace(/\[\/?(?:center|size|color|font|spoiler|list|code|\*|left|right|justify)(?:=[^\]]*)?\]/gi,`
`),n=n.replace(/<br\s*\/?>/gi,`
`),n=n.replace(/<\/(p|div|h[1-6]|li|tr|blockquote|section|article|header|footer|table)>/gi,`

`),n=n.replace(/<h([1-6])[^>]*>/gi,(e,t)=>`
`+`#`.repeat(Number(t))+` `),n=n.replace(/<li[^>]*>/gi,`
- `),n=n.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi,`
![]($1)
`),n=n.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(e,t,n)=>`[${String(n).replace(/<[^>]+>/g,``).trim()||t}](${t})`),n=n.replace(/<\/?(?:b|strong)[^>]*>/gi,`**`),n=n.replace(/<\/?(?:i|em)[^>]*>/gi,`*`),n=n.replace(/<hr\s*\/?>/gi,`
---
`),n=n.replace(/<(?:center|font|span|div|p|section|article|table|tbody|thead|tr|td|th|ul|ol|blockquote)[^>]*>/gi,`
`),n=n.replace(/<[^>]+>/g,` `),n=r(n),n=n.replace(/<\/?[a-zA-Z][^>\n]{0,120}>/g,` `),n=n.replace(/\[\/[a-z*][a-z0-9=_#:-]{0,24}\]/gi,` `),n=n.replace(/\[(?:center|size|color|font|spoiler|list|code|quote|img|url|b|i|u|s|\*)(?:=[^\]]*)?\]/gi,` `),n=n.replace(/[<>]{1,}/g,` `),n=n.replace(/[ \t]+\n/g,`
`),n=n.replace(/\n{3,}/g,`

`),n=n.replace(/[ \t]{2,}/g,` `),a(n,t.bag).trim()}function s(e,t=280){return o(e).replace(/!\[[^\]]*\]\([^)]+\)/g,` `).replace(/\[([^\]]+)\]\([^)]+\)/g,`$1`).replace(/[#*_`>]/g,``).replace(/\s+/g,` `).trim().slice(0,t)}function c(e){let t=[],n=e=>(t.push(e),`‹${t.length-1}›`),r=String(e||``);return r=r.replace(/https?:\/\/[^\s)\]>'"]+/g,n),r=r.replace(/```[\s\S]*?```/g,n),r=r.replace(/`[^`\n]+`/g,n),r=r.replace(/!\[[^\]]*\]\([^)]+\)/g,n),{out:r,bag:t}}function l(e,t){return String(e||``).replace(/‹(\d+)›/g,(e,n)=>t[Number(n)]||``)}export{t as n,s as t};