import './utils/prototypes'
import { generatePrimes } from './utils/functions'

const p = generatePrimes(1000000)
const set = new Set()
for (let prime of p) {
	if (!set.has(p)) {
		const a = prime.toArray()
		const c = []
		let n = 0
		for (let i = 0; i < a.length; i++) {
			const j = Number(a.cycle().join(''))
			if (p.has(j)) {
				n++
			}
			c.push(j)
		}
		if (n === a.length) {
			c.forEach((v) => set.add(v))
		}
	}
}

console.log(set.size)
