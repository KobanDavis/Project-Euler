import './utils/prototypes'

const set = new Set()

for (let m = 1; m <= 9; m++) {
	for (let n = 1234; n <= 9876; n++) {
		const x = m * n
		const p = Number(`${m}${n}${x}`)
		if (p.isPandigital()) {
			set.add(x)
		}
	}
}

for (let m = 12; m <= 98; m++) {
	for (let n = 123; n <= 987; n++) {
		const x = m * n
		const p = Number(`${m}${n}${x}`)
		if (p.isPandigital()) {
			set.add(x)
		}
	}
}

console.log([...set].sum())
