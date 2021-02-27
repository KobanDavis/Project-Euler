import { fibonacciGenerator } from './utils/functions'

let n = BigInt(0)
let s = fibonacciGenerator()
let i = 0

while (n.toString().length < 1000) {
	n = s.next().value
	i++
}

console.log(i)
