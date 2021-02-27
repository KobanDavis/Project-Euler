import './utils/prototypes'

const a = []

for (let i = 10; i < 300000; i++) {
	if (
		i
			.toArray()
			.map((v) => v ** 5)
			.sum() === i
	) {
		a.push(i)
	}
}

console.log(a.sum())
