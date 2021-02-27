let n = 1
let t = 1

for (let i = 2; i <= 1001; i += 2) {
	for (let j = 0; j < 4; j++) {
		t += n += i
	}
}

console.log(t)
