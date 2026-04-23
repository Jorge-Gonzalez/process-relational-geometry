# A Process-Relational Foundation for Geometry

**Author:** Jorge Leonardo González Céspedes  
**Affiliation:** Independent Researcher  
**Date:** April 2026  

---

## Abstract

Classical geometry takes space and points as primitives, treating metric
and positional properties as intrinsic to geometric objects. This paper
argues that these are not intrinsic but relational: they arise from explicit
comparisons with chosen reference structures. A foundational framework is
developed in which only finite relations and their compositions are primitive.
Finite composable sequences of relations, called *configurations*, represent
processes. Objects arise as equivalence classes under a *congruence* — an
equivalence relation compatible with composition — that expresses observational
indistinguishability.

**Main results:**

- **Quotient Construction** — Any congruence on an associative relational system yields a well-defined quotient with associative composition.
- **Metric Emergence** — A weight function induces a pseudometric (and under a separation condition, a genuine metric) on the quotient, derived from path optimization.
- **Reconstruction** — Every finite metric space arises, up to isometry, from a relational system. The framework is universal for finite metric geometry.
- **Categorical Equivalence** — After identifying metrically equivalent relational systems, the metric realization functor yields an equivalence of categories between relational systems and finite metric spaces.
- **Space Emergence** — Space itself is not a primitive container but emerges from inter-system relational structure: when two relational systems are connected by weighted relations, the combined system induces a finite metric space whose geometry is fully determined by the internal structure of each object and the connecting relations between them.

---

## Repository Structure

```
process-relational-geometry/
├── README.md
├── paper/
│   ├── process_relational_geometry.tex   — LaTeX source
│   └── process_relational_geometry.pdf   — Compiled PDF
└── app/
    └── pseudocode.md                     — Interactive application pseudocode
```

---

## MSC Classification

**Primary:** 18B35, 51F99, 18D20  
**Secondary:** 54E35, 68Q45, 05C12

**Keywords:** relational geometry, metric emergence, enriched categories,
congruence classification, process-relational foundation, Gromov-Hausdorff
convergence, space emergence

---

## Companion Materials

- **Blog series:** [substrate.lat](https://substrate.lat) — five posts developing
  the ideas accessibly, from the problems with classical geometric primitives
  through the full framework and its projections:
  - *The Mathematics We Chose to Believe In*
  - *Mathematics Has Been Solving a Problem It Created Itself*
  - *Geometry as Process — Direction, Distance, and a Rule*
  - *What Geometry Looks Like From Here*
  - *Framework Projections*
- **arXiv:** link to be added upon submission

---

## Interactive Application

A 3D interactive application demonstrating the framework is in development.
It will allow users to define relational systems, observe the quotient
construction in real time, explore the induced metric, and connect two objects
to see the emergence of a combined geometric space. Pseudocode is in `app/`.

---

## License

The paper and all companion materials are released under
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
This work is dedicated to the public domain. You are free to copy, modify,
distribute, and use the work for any purpose without any conditions.