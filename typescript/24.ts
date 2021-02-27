import './utils/prototypes'

// Find the largest index x such that a[x] < a[x + 1]. If no such index exists, the permutation is the last permutation.
// Find the largest index y greater than x such that a[x] < a[y].
// Swap the value of a[x] with that of a[y].
// Reverse the sequence from a[x + 1] up to and including the final element a[n].

const nthLexographicalPermutation = (a, n) => {
	const l = a.length - 1
	const findX = () => {
		for (let i = l - 1; i >= 0; i--) {
			if (a[i] < a[i + 1]) {
				return i
			}
		}
		return null
	}

	const findY = (x) => {
		for (let i = l; i >= 0; i--) {
			if (a[i] > a[x]) {
				return i
			}
		}
		return null
	}

	// const p = [a.slice()]
	let i = 1
	while (i < n) {
		let x = findX()
		if (x === null) break
		let y = findY(x)
		a.swap(x, y)
		if (l - x > 1) {
			a.splice(x + 1, l - x + 2, ...a.slice(x + 1).reverse())
		}
		// p.push(a.slice())
		i++
	}
	return a
}

console.log(nthLexographicalPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000).join``)
