import './utils/prototypes'

const a = []
for (let i = 0; i < 1000000; i++) {
	if (i.toString().isPalindromic() && i.toString(2).isPalindromic()) a.push(i)
}

console.log(a.sum())
