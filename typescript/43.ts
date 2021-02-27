import './utils/prototypes'

const p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].getPermutations()

let c = 0
for (let permutation of p) {
	if (
		Number(permutation.slice(1, 4).join('')) % 2 === 0 &&
		Number(permutation.slice(2, 5).join('')) % 3 === 0 &&
		Number(permutation.slice(3, 6).join('')) % 5 === 0 &&
		Number(permutation.slice(4, 7).join('')) % 7 === 0 &&
		Number(permutation.slice(5, 8).join('')) % 11 === 0 &&
		Number(permutation.slice(6, 9).join('')) % 13 === 0 &&
		Number(permutation.slice(7, 10).join('')) % 17 === 0
	) {
		c += Number(permutation.join(''))
	}
}

console.log(c)
