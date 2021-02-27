import './utils/prototypes'

const n = [...Array(100)].map((_, i) => i + 1) // [1 .. 100]

console.log(Math.pow(n.sum(), 2) - n.map((v) => Math.pow(v, 2)).sum())
