import { generatePrimes } from './functions'

declare global {
	interface String {
		isPalindromic(): boolean
	}
	interface Array<T> {
		sum(): number
		product(): number
		smallProduct(): number
		swap(index1: number, index2: number): Array<T>
		sortDescending(): Array<T>
		sortAscending(): Array<T>
		sortAlphabetical(): Array<string>
		getPermutations(): Array<T>[]
		cycle(): Array<T>
	}
	interface Number {
		properDivisors(): number[]
		factorial(): number
		toArray(): number[]
		isAbundant(): boolean
		isPrime(primes?: Set<number>): boolean
		isPandigital(): boolean
	}
}

String.prototype.isPalindromic = function() {
	return (
		this.valueOf()
			.split('')
			.reverse()
			.join('') === this.valueOf()
	)
}

Array.prototype.cycle = function() {
	const a: any[] = this.valueOf()
	a.unshift(a.pop())
	return a
}

Array.prototype.getPermutations = function() {
	const a = this.valueOf()
	const l = a.length - 1
	const findX = () => {
		for (let i = l - 1; i >= 0; i--) {
			if (a[i] < a[i + 1]) {
				return i
			}
		}
		return null
	}

	const findY = x => {
		for (let i = l; i >= 0; i--) {
			if (a[i] > a[x]) {
				return i
			}
		}
		return null
	}

	const p = [a.slice()]
	while (true) {
		let x = findX()
		if (x === null) return p
		let y = findY(x)
		a.swap(x, y)
		if (l - x > 1) {
			a.splice(x + 1, l - x + 2, ...a.slice(x + 1).reverse())
		}
		p.push(a.slice())
	}
}

Array.prototype.sortAlphabetical = function() {
	return this.valueOf().sort((a, b) => a.localeCompare(b))
}

Array.prototype.sortAscending = function() {
	return this.valueOf().sort((a, b) => a - b)
}

Array.prototype.sortDescending = function() {
	return this.valueOf().sort((a, b) => b - a)
}

Array.prototype.sum = function() {
	return this.valueOf().reduce((a, v) => a + Number(v), 0)
}

Array.prototype.product = function() {
	return this.valueOf().reduce((a, v) => a * BigInt(v), BigInt(1))
}

Array.prototype.smallProduct = function() {
	return this.valueOf().reduce((a, v) => a * v, 1)
}

Array.prototype.swap = function(a, b) {
	const t = this.valueOf()[a]
	this[a] = this[b]
	this[b] = t
	return this
}

Number.prototype.factorial = function() {
	let v = this.valueOf()
	let f = 1
	while (v) {
		f *= v
		v--
	}
	return f
}

Number.prototype.isPrime = function(primes: Set<number> = null) {
	return (primes || generatePrimes(this.valueOf())).has(this.valueOf())
}

Number.prototype.properDivisors = function() {
	let n = this.valueOf()
	if (n <= 1) return []
	let d = [1]
	let h = n
	for (let i = 2; i < h; i++) {
		if (n % i === 0) {
			const f = n / i
			d.push(i)
			if (f !== i) d.push(f)
			h = f
		}
	}

	return d.sort((a, b) => a - b)
}

Number.prototype.toArray = function() {
	return this.valueOf()
		.toString()
		.split('')
		.map(Number)
}

Number.prototype.isAbundant = function() {
	let n = this.valueOf()
	return n.properDivisors().sum() > this.valueOf()
}

Number.prototype.isPandigital = function() {
	let n = this.valueOf()
	let m = 0
	let i = 0
	while (n > 0) {
		m |= 1 << n % 10
		n = (n / 10) | 0
		i++
	}
	return 2 + m === 1 << (i + 1)
}
