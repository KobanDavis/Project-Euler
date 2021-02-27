import { LCM } from './utils/functions'

let n = 1
for (var i = 1; i <= 20; ++i) n = LCM(n, i)
console.log(n)
