# Interactive Application — Pseudocode

This folder contains the pseudocode for a planned interactive web application
that demonstrates the process-relational geometry framework visually.

The application will allow users to:
- Define a relational system by specifying generators, weights, and congruence laws
- Watch the quotient construction computed in real time
- Explore the induced metric on the resulting geometric object
- Adjust external parameters (resolution, step size, initial direction) and observe
  that the relational identity of the object does not change
- Connect two relational systems with inter-system relations and observe the
  emergence of a combined metric space

The implementation uses a 3D rendering framework. Full pseudocode is documented
in the companion blog post series at [substrate.lat](https://substrate.lat).

## Core Layers

### Layer 1: Relational System
```
RelationalSystem {
  generators: Map<id, { weight: float, inverse: id }>
  congruence_laws: List<{ lhs: Word, rhs: Word }>
}
Word = List<generator_id>
```

### Layer 2: Quotient Construction (Union-Find Saturation)
```
function buildQuotient(system, maxLength):
  words = enumerateWords(system.generators, maxLength)
  uf = UnionFind(words)
  changed = true
  while changed:
    changed = false
    for each word w in words:
      for each law (lhs, rhs) in system.congruence_laws:
        for each position i where lhs fits in w:
          w_rewritten = w[0..i] + rhs + w[i+len(lhs)..]
          if w_rewritten in words:
            if uf.find(w) != uf.find(w_rewritten):
              uf.union(w, w_rewritten)
              changed = true
  return uf.classes(), uf
```

### Layer 3: Metric Emergence (Dijkstra)
```
function computeMetric(objects, uf, system):
  graph = WeightedGraph(nodes = objects)
  for each object A in objects:
    for each generator r in system.generators:
      B = uf.find(representative(A) + [r])
      graph.addEdge(A, B, weight = system.generators[r].weight)
  metric = {}
  for each object A in objects:
    metric[A] = dijkstra(graph, source = A)
  return metric
```

### Layer 4: Geometric Embedding (External Contextual Parameter)
```
function embed3D(objects, metric, strategy):
  // strategy: "MDS" | "spring" | "intrinsic"
  // The embedding is NOT part of the relational object —
  // it is the external context in which the object is placed
  if strategy == "MDS":
    return classicalMDS(metric, dimensions = 3)
  if strategy == "spring":
    return springLayout(metric)
  if strategy == "intrinsic":
    shape = recognizeShape(objects, metric)
    return embedKnownShape(shape)
```

### Layer 5: Shape Recognition
```
function recognizeShape(objects, metric):
  n = len(objects)
  if isCyclic(metric, n):       return { type: "circle", n: n }
  if isProductOfCycles(metric):  return { type: "torus", n1, n2 }
  if isTree(metric, objects):    return { type: "tree", k: branchingFactor }
  if isFlat(metric):             return { type: "flat", n: n }
  return { type: "unknown", n: n }
```

### Layer 6: User Interaction
```
UserInput {
  addGenerator(name, weight)
  addInverse(generator, inverse)
  addLaw(word1, word2)         // word1 ~ word2
  setResolution(maxLength)     // external parameter — does not change the object
  setEmbeddingStrategy(mode)   // external parameter — does not change the object
  setStepSize(d)               // external parameter
  setInitialDirection(theta)   // external parameter
  clickObject(A)               // inspect equivalence class and distances
  connectSystems(A, B, weight) // inter-system relation — creates combined space
}
```
