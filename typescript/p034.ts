import './utils/prototypes'

const map = new Map([...Array(10)].map((_, i) => [i, i.factorial()]))

const a = []
for (let i = 3; i < 1000000; i++) {
	if (
		i
			.toArray()
			.map((v) => map.get(v))
			.sum() === i
	) {
		a.push(i)
	}
}

console.log(a.sum())
