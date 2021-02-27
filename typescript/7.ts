const getPrimes = n => {
	const primes = []

	for (let i = 2; i < n; i++) {
		primes[i] = true
	}

	for (let j = 2; j * j < n; j++) {
		if (primes[j]) {
			for (let k = j * j; k <= n; k += j) {
				primes[k] = false
			}
		}
	}

	return primes.reduce((a, v, i) => (v && a.push(i), a), [])
}
const limit = 2000000
console.log(getPrimes(limit)[10000]) // 0 indexed
