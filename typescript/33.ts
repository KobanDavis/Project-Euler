// This solution is awfully messy

import './utils/prototypes'

const map = new Map<string, number>()

for (let i = 10; i < 100; i++) {
	for (let j = 10; j < 100; j++) {
		let c = null
		if (
			i.toArray().some((v) => {
				if (j.toArray().includes(v)) {
					c = v
					return true
				}
			})
		) {
			map.set([i, j].join('/'), c)
		}
	}
}

const a = []

for (let [k, p] of map) {
	let pair = k.split('/')

	if (
		pair[0] !== pair[1] &&
		pair[0] < pair[1] &&
		p !== 0 &&
		eval(k) ===
			eval(
				pair
					.map(
						(v) =>
							Number(v)
								.toArray()
								.find((v) => v !== p) || p
					)
					.join('/')
			)
	) {
		a.push(k)
	}
}

console.log(1 / a.map(eval).smallProduct())
