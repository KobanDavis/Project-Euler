let a = 0
let b = 1

let n = 0

while (n < 4000000) {
	const temp = b
	b = a + b
	a = temp
	if (b % 2 === 0) {
		n += b
	}
}

console.log(n)
