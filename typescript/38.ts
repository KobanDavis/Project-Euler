import './utils/prototypes'

let m = 0
for (let i = 1; i < 10000; i++) {
	let s = ''
	let n = 1
	while (s.length < 9) {
		s += i * n++
	}
	if (s.length === 9 && Number(s).isPandigital() && Number(s) > m) m = Number(s)
}
console.log(m)
