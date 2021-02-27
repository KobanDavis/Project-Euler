import './utils/prototypes'

let a = 999
let b = 999

const p = []

while (true) {
	const n = a * b
	if (n.toArray().reverse().join('') === n.toString()) {
		p.push(n)
	}
	if (a > 100) {
		a--
	} else if (b > 100) {
		a = 999
		b--
	} else {
		break
	}
}

console.log(p.sortDescending()[0])
