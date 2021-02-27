import { generatePrimes } from './utils/functions'
import './utils/prototypes'

// 987654321.toArray().sum() % 9 === 0
// 87654321.toArray().sum() % 9 === 0
// Therefore upper bound is 7 digits

const p = [...generatePrimes(10000000)].filter((v) => v.isPandigital()).sortDescending()[0]

console.log(p)
