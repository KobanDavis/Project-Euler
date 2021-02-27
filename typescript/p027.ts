import { generatePrimes } from './utils/functions'
import './utils/prototypes'

let aMax = 0
let bMax = 0
let nMax = 0

const primes = generatePrimes(87400)

for (let a = -1000; a <= 1000; a++) {
	for (let b = -1000; b <= 1000; b++) {
		let n = 0
		// n^2 + an + b
		while (Math.abs(n ** 2 + a * n + b).isPrime(primes)) {
			n++
		}
		if (n > nMax) {
			aMax = a
			bMax = b
			nMax = n
		}
	}
}

console.log(aMax * bMax)
