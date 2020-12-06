# Three Quantum Algorithms: Grove's Algorithm
## Grove’s algorithm
Grover's algorithm is a quantum algorithm that finds with high probability the unique input to a black box function that produces a particular output value. The complexity of the algorithm is O(√N). Comparing with the classical algorithms, Grove’s algorithm achieves square acceleration of calculation. Grove’s algorithm was put forward by Lov Grover in 1996 and in 1997, Bernnett and his team proved the solution to be optimal in black box input finding. 

Normally, people will divide the algorithm into three steps. First, initialize the system to the state. Second, perform the Grover iterations, whose number is asymptotically O√N. Third, perform the measurement which gives the eigenvalue $λ_ω$.


<img :src="$withBase('/grove.png')" alt="grove">


Grover's search algorithm is usually talked about in terms of finding a marked entry in an unsorted database. This is a natural formalism that lets it be applied directly to searching for solutions to NP problems. The algorithm is also applicable to Transcendental Logarithm Problem, Polynomial Root Finding Problem, and any other optimization problems that can be formulated as a search problem.
