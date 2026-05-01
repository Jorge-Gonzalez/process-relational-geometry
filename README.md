# A Process-Relational Foundation for Geometry

**Author:** Jorge Leonardo González Céspedes  
**Affiliation:** Independent Researcher  
**Date:** April 2026  

> **Status:** This paper is currently under revision following critique from
> mathematicians in the category theory community. The framework and results
> are being reviewed for clarity, scope, and accurate situating within existing
> literature. The version in this repository reflects the work in progress.

---

## Abstract

Classical geometry takes space and points as primitives, treating metric
and positional properties as intrinsic to geometric objects. This paper
argues that these are not intrinsic but relational: they arise from explicit
comparisons with chosen reference structures. A presentation-level semantic
framework is developed in which only finite relations and their compositions
are primitive. Finite composable sequences of relations, called *configurations*,
represent processes. Objects arise as equivalence classes under a *congruence* — an
equivalence relation compatible with composition — that expresses observational
indistinguishability.

The machinery is classical: the quotient construction is a category presented
by generators and relations; metric emergence is the word metric; the
reconstruction and categorical equivalence results connect to Lawvere metric
spaces and enriched category theory. The primary contribution is organizational
and conceptual — geometric structure defined at the level of generators and
congruence laws, prior to quotienting, with metric properties arising as
invariants of congruence classes of processes.

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

**Primary:** 18D20, 20F05, 51F99  
**Secondary:** 54E35, 20F65, 05C12

**Keywords:** relational geometry, metric emergence, enriched categories,
congruence classification, process-relational presentation, Lawvere metric spaces

---

## Companion Materials

- **Blog series:** [substrate.lat](https://substrate.lat) — five posts developing
  the ideas accessibly, from the problems with classical geometric primitives
  through the full framework and its projections:
  - *The Mathematics We Chose to Believe In*
  - *Why Does Geometry Need ε?*
  - *Geometry as Process — Direction, Distance, and a Rule*
  - *What Geometry Looks Like From Here*
  - *Framework Projections*
---

## Interactive Application

A 3D interactive application demonstrating the framework is in development.
It will allow users to define relational systems, observe the quotient
construction in real time, explore the induced metric, and connect two objects
to see the combined geometric structure. Pseudocode is in `app/`.

---

## License

The paper and all companion materials are released under
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
This work is dedicated to the public domain. You are free to copy, modify,
distribute, and use the work for any purpose without any conditions.
