const HCF = (a: number, b: number): number => (b == 0 ? a : HCF(b, a % b))
const LCM = (a: number, b: number) => (a * b) / HCF(a, b)
const fibonacciGenerator = function*(c = 1n, n = 1n): Generator<bigint> {
    while (true) {
        yield c
        ;[c, n] = [n, c + n]
    }
}
const generatePrimes = (limit: number): Set<number> => {
    const p: Boolean[] = []
    for (let i = 2; i < limit; i++) {
        p[i] = true
    }
    for (let j = 2; j * j < limit; j++) {
        if (p[j]) {
            for (let k = j * j; k <= limit; k += j) {
                p[k] = false
            }
        }
    }
    return p.reduce<Set<number>>((a, v, i) => (v && a.add(i), a), new Set())
}

export { HCF, LCM, fibonacciGenerator, generatePrimes }
