import './utils/prototypes'

const map: { [key: number]: number[][] } = {}

for (let a = 1; a < 500; a++) {
	for (let b = 1; b < 500; b++) {
		const c = Math.sqrt(a ** 2 + b ** 2)
		if (c % 1 === 0) {
			const k = [a, b, c]
			const s = k.sum()
			if (s > 1000) break
			if (map[s]) {
				map[s].push(k)
			} else {
				map[s] = [k]
			}
		}
	}
}

let maxL = 0
let maxV = null

for (let pair of Object.entries(map)) {
	const [k, v] = pair
	if (v.length > maxL) {
		maxL = v.length
		maxV = k
	}
}

console.log(maxV)
