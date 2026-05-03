# A Process-Relational Presentation of Finite Metric Geometry

**Author:** Jorge Leonardo González Céspedes  
**Date:** April 2026

> **Status:** This paper has been set aside following substantive critique from
> mathematicians in the Category Theory Zulip community. The critique confirmed
> that the machinery is classical and the contribution is organizational and
> conceptual rather than novel. The repository is kept as a record of the
> exploration. The questions remain open.

---

## Abstract

Classical geometry takes space and points as primitives, treating metric
and positional properties as intrinsic to geometric objects. This paper
explores whether these are not intrinsic but relational: whether they arise
from explicit comparisons with chosen reference structures. A presentation-level
semantic framework is sketched in which only finite relations and their
compositions are primitive. Finite composable sequences of relations, called
*configurations*, represent processes. Objects are approached as equivalence
classes under a *congruence* — an equivalence relation compatible with
composition — that expresses observational indistinguishability.

The machinery is classical: the quotient construction is a category presented
by generators and relations; metric emergence is the word metric; the
reconstruction and categorical equivalence results connect to Lawvere metric
spaces and enriched category theory. The primary contribution is organizational
and conceptual — geometric structure defined at the level of generators and
congruence laws, prior to quotienting, with metric properties arising as
invariants of congruence classes of processes. The paper arrived at this
territory independently, then found it already mapped.

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

## Interactive Demos

Two interactive demos were built to explore the ideas concretely. They are available in `demos/` and hosted at:

- **[PRG Homology Calculator](https://substrate.lat/prg_homology_calculator.html)** — define a relational system and compute its homology directly from the algebraic definition
- **[PRG Incremental Homology by Laws](https://substrate.lat/prg_homology_incremental_laws.html)** — observe how homology changes incrementally as relational laws are added

Pseudocode for a fuller application is in `app/`.

---

## License

The paper and all companion materials are released under
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
This work is dedicated to the public domain. You are free to copy, modify,
distribute, and use the work for any purpose without any conditions.
