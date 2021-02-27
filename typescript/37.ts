import './utils/prototypes'
import { generatePrimes } from './utils/functions'

const p = generatePrimes(1000000)
const a = []
for (let prime of p) {
	if (prime > 10) {
		if (
			prime.toArray().every((_, i, t) => p.has(Number(t.slice(i, t.length).join('')))) &&
			prime.toArray().every((_, i, t) => p.has(Number(t.slice(0, t.length - i).join(''))))
		) {
			a.push(prime)
		}
	}
}

console.log(a.sum())
