limit = 4000000

a = 0
b = 1
n = 0

while b < limit:
    if b % 2 == 0:
        n += b
    t = b
    b = a + b
    a = t

print(n)
