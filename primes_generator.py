import sys

def generator(limit):
    numbers = [True] * limit
    numbers[0] = numbers[1] = False #0 and 1 aren't primes.

    for (num, isprime) in enumerate(numbers):
        if isprime:
            yield num
            for n in range(num*num, limit, num):
                numbers[n] = False #Marking the multiples as not primes.


primes = generator(int(sys.argv[1]))

for prime in primes:
	print(prime)