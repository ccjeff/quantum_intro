# Three Quantum Algorithms: Shor Algorithm
## Shor algorithm 

Shor’s algorithm is a polynomial-time quantum computer algorithm for integer factorization. The algorithm firstly formulated by Peter Shor in 1994, is almost exponentially faster than the most efficient known classical factoring algorithm. The runtime of the method is $O((logN)^2 (loglogN)(logloglogN))$ where N represents the integer value. 

In order to find the prime factor for integer N, Shor’s algorithm mainly has three steps. First, randomly pick a positive integer a which is smaller than and relatively prime with N. Second, define a f(x) function that equals to a^x  mod N. We can use the Quantum Fourier transform to get the function period r, repeatedly generate arbitrary a until r is an odd number. Third, find $n_1$ and $n_2$, which are defined as $gcd⁡(a^{(r/2)}-1,N)$ and $gcd⁡(a^{(r/2)}+1,N)$ respectively. 
<img :src="$withBase('/shor.png')" alt="shor">