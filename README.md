# d3-arrays

Utilities for array manipulation: ordering, summarizing, searching, etc. This code is currently EXPERIMENTAL and represents the in-development D3 4.0 API. The 4.0 API is largely backwards-compatible, but differs from 3.x in several ways:

* The range method now returns the empty array for infinite ranges, rather than throwing an error.

* The map and set classes have been removed. Please use ES6 Map and Set instead.

* The nest.map method now always returns an ES6 Map.
