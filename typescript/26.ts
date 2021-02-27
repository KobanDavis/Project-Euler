import { generatePrimes } from './utils/functions'
import './utils/prototypes'

const cycleLength = (b) => {
	let a = 1
	let t = 0
	do {
		a = (a * 10) % b
		t++
	} while (a !== 1)
	return t
}

let h = 0
for (let prime of [...generatePrimes(1000)].filter((v) => v.toArray().length > 1)) {
	const l = cycleLength(prime)
	if (l > h) h = prime
}

console.log(h)
