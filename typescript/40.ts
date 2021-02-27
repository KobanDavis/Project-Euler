import './utils/prototypes'

const a = []
for (let i = 0; i < 7; i++) {
	let n = 10 ** i
	let r
	let s = 0
	let k = 0

	while (s < n) {
		r = s
		s += 9 * 10 ** k++ * k
	}

	let h = n - r - 1
	let t = 10 ** (k - 1) + h / k
	let p = h % k

	a.push(+String(t)[p])
}

console.log(a.product())
