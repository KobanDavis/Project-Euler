import './utils/prototypes'

const n = 600851475143

const d = n.properDivisors().sort((a, b) => b - a)

for (let i of d) {
	if (i.properDivisors().length === 1) {
		console.log(i)
		break
	}
}
