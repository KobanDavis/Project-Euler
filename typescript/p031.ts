const target = 200
const coins = [1, 2, 5, 10, 20, 50, 100, 200]
const table = new Uint32Array(target + 1)
table[0] = 1
for (let i = 0; i < coins.length; i++) {
	for (let j = coins[i]; j <= target; j++) {
		table[j] += table[j - coins[i]]
	}
}

console.log(table[target])
