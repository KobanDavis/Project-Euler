import './utils/prototypes'

for (let i = 1; i < 500; i++) {
	for (let j = i + 1; j < 1000 - i + 1; j++) {
		const k = Math.sqrt(i ** 2 + j ** 2)
		if (i + j + k === 1000) {
			console.log(i * j * k)
		}
	}
}
