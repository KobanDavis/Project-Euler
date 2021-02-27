import { readFileSync } from 'fs'
const a = eval(`[${readFileSync('../files/words.txt')}]`)
const set = new Set()

let c = 0
for (let i = 1; i <= 100; i++) {
	c += i
	set.add(c)
}

c = 0
for (let w of a) {
	const t = w.split('').reduce((a, v) => a + v.charCodeAt(0) - 64, 0)
	if (set.has(t)) c++
}

console.log(c)
