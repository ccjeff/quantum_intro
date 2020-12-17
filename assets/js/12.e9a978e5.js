(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{458:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quantum-computer-limitation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantum-computer-limitation"}},[e._v("#")]),e._v(" Quantum Computer Limitation")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"susceptibility-to-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#susceptibility-to-error"}},[e._v("#")]),e._v(" Susceptibility to Error")]),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v(" Quantum computers are much more susceptible to errors than classical computers due to decoherence and noise. The threshold theorem states that a noisy quantum computer can use quantum error-correcting codes to simulate a noiseless quantum computer assuming the error introduced in each computer cycle is less than some number. Numerical simulations suggest that that number may be as high as 3%. However, it is not yet definitively known how the resources needed for error correction will scale with the number of qubits. Skeptics point to the unknown behavior of noise in scaled-up quantum systems as a potential roadblock for successfully implementing quantum computing and demonstrating quantum supremacy.")])],1),e._v(" "),a("h2",{attrs:{id:"error-correction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-correction"}},[e._v("#")]),e._v(" Error correction")]),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v("  Quantum error correction (QEC) is used in quantum computing to protect quantum information from errors due to decoherence and other quantum noise. Quantum error correction is essential if one is to achieve fault-tolerant quantum computation that can deal not only with noise on stored quantum information, but also with faulty quantum gates, faulty quantum preparation, and faulty measurements.")])],1),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v("Classical error correction employs redundancy. The simplest way is to store the information multiple times, and—if these copies are later found to disagree—just take a majority vote; e.g. suppose we copy a bit three times. Suppose further that a noisy error corrupts the three-bit state so that one bit is equal to zero but the other two are equal to one. If we assume that noisy errors are independent and occur with some probability p, it is most likely that the error is a single-bit error and the transmitted message is three ones. It is possible that a double-bit error occurs and the transmitted message is equal to three zeros, but this outcome is less likely than the above outcome.")])],1),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v("Copying quantum information is not possible due to the no-cloning theorem. This theorem seems to present an obstacle to formulating a theory of quantum error correction. But it is possible to spread the information of one qubit onto a highly entangled state of several (physical) qubits. Peter Shor first discovered this method of formulating a quantum error correcting code by storing the information of one qubit onto a highly entangled state of nine qubits. A quantum error correcting code protects quantum information against errors of a limited form.")])],1),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v('Classical error correcting codes use a syndrome measurement to diagnose which error corrupts an encoded state. We then reverse an error by applying a corrective operation based on the syndrome. Quantum error correction also employs syndrome measurements. We perform a multi-qubit measurement that does not disturb the quantum information in the encoded state but retrieves information about the error. A syndrome measurement can determine whether a qubit has been corrupted, and if so, which one. What is more, the outcome of this operation (the syndrome) tells us not only which physical qubit was affected, but also, in which of several possible ways it was affected. The latter is counter-intuitive at first sight: Since noise is arbitrary, how can the effect of noise be one of only few distinct possibilities? In most codes, the effect is either a bit flip, or a sign (of the phase) flip, or both (corresponding to the Pauli matrices X, Z, and Y). The reason is that the measurement of the syndrome has the projective effect of a quantum measurement. So even if the error due to the noise was arbitrary, it can be expressed as a superposition of basis operations—the error basis (which is here given by the Pauli matrices and the identity). The syndrome measurement "forces" the qubit to "decide" for a certain specific "Pauli error" to "have happened", and the syndrome tells us which, so that we can let the same Pauli operator act again on the corrupted qubit to revert the effect of the error.')])],1),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v("The syndrome measurement tells us as much as possible about the error that has happened, but nothing at all about the value that is stored in the logical qubit—as otherwise the measurement would destroy any quantum superposition of this logical qubit with other qubits in the quantum computer. ")])],1),e._v(" "),a("h2",{attrs:{id:"quantum-supremacy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantum-supremacy"}},[e._v("#")]),e._v(" Quantum supremacy")]),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v(" In quantum computing, quantum supremacy or quantum advantage is the goal of demonstrating that a programmable quantum device can solve a problem that no classical computer can solve in any feasible amount of time (irrespective of the usefulness of the problem). Conceptually, quantum supremacy involves both the engineering task of building a powerful quantum computer and the computational-complexity-theoretic task of finding a problem that can be solved by that quantum computer and has a superpolynomial speedup over the best known or possible classical algorithm for that task. The term was originally popularized by John Preskill, but the concept of a quantum computational advantage, specifically for simulating quantum systems, dates back to Yuri Manin's (1980) and Richard Feynman's (1981) proposals of quantum computing. Examples of proposals to demonstrate quantum supremacy include the boson sampling proposal of Aaronson and Arkhipov, D-Wave's specialized frustrated cluster loop problems, and sampling the output of random quantum circuits. However, despite the lofty promises of quantum computation, the likelihood for high error when performing computations with a large number of qubits as well as advances in classical computation that are keeping classical performance comparable to quantum performance encourages skeptics to doubt the importance of demonstrating quantum supremacy at all. ")])],1),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/google.png"),alt:"google"}}),e._v("!")]),e._v(" "),a("h2",{attrs:{id:"comparable-classical-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparable-classical-performance"}},[e._v("#")]),e._v(" Comparable Classical Performance")]),e._v(" "),a("p",[a("font",{attrs:{size:"4"}},[e._v(" There have also been algorithmic breakthroughs in classical computing due to quantum computing research resulting in comparable performance of classical computers. This suggests that more research needs to be done into classical algorithms before a suitable test for quantum supremacy can be devised. Until it can be determined that a classical algorithm cannot be any more efficient using classical technology, a quantum computer cannot be said to be determinately better. This implies that at some level quantum supremacy may be trying to prove a negative. The negative, here, being that an algorithm doesn't exist that allows classical computers to perform equally well.\n")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);