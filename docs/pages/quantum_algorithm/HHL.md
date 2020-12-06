# Three Quantum Algorithms: HHL
---
## HHL
HHL is a quantum algorithm for linear systems of equations. Proposed by Aram Harrow and his team in 2009, the algorithm is one of the main fundamental algorithms expected to provide a speedup over their classical counterparts. For a linear system with N variables and condition number of k, the algorithm is able to achieve the runtime of $O(log(N) k^2)$. This offers an exponential speedup over the fastest classical algorithm.

Input an n × n matrix A and an n-dimensional vector b, the system will output an n-dimensional vector x which satisfies the equation of Ax = b.  
The algorithm is mainly divided into three phases, phase estimation, controlled rotation, and inverse phase estimation. 
<img :src="$withBase('/HHL.png')" alt="HHL">


HLL algorithm is widely used in many quantum machine learning algorithms. According to Jacob Biamonte, well-known methods including Bayesian Inference, Least squares fitting, Quantum PCA, and Quantum SVM all included HLL.
<img :src="$withBase('/HHL_application.png')" alt="HHL_app">