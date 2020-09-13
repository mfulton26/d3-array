const tape = require("tape-await");
const d3 = require("../");

tape("sort(values) returns a sorted copy", (test) => {
  const input = [1, 3, 2, 5, 4];
  test.deepEqual(d3.sort(input), [1, 2, 3, 4, 5]);
  test.deepEqual(input, [1, 3, 2, 5, 4]); // does not mutate
});

tape("sort(values) defaults to ascending, not lexicographic", (test) => {
  const input = [1, "10", 2];
  test.deepEqual(d3.sort(input), [1, 2, "10"]);
});

tape("sort(values, comparator) uses the specified comparator", (test) => {
  test.deepEqual(d3.sort([1, 3, 2, 5, 4], d3.descending), [5, 4, 3, 2, 1]);
});

tape("sort(values) returns an array", (test) => {
  test.strictEqual(Array.isArray(d3.sort(Uint8Array.of(1, 2))), true);
});

tape("sort(values) accepts an iterable", (test) => {
  test.deepEqual(d3.sort(new Set([1, 3, 2, 1, 2])), [1, 2, 3]);
  test.deepEqual(d3.sort((function*() { yield* [1, 3, 2, 5, 4]; })()), [1, 2, 3, 4, 5]);
  test.deepEqual(d3.sort(Uint8Array.of(1, 3, 2, 5, 4)), [1, 2, 3, 4, 5]);
});

tape("sort(values) enforces that values is iterable", (test) => {
  test.throws(() => d3.sort({}), TypeError);
});

tape("sort(values, comparator) enforces that comparator is a function", (test) => {
  test.throws(() => d3.sort([], {}), TypeError);
});

tape("sort(values) does not skip sparse elements", (test) => {
  // eslint-disable-next-line no-sparse-arrays
  test.deepEqual(d3.sort([, 1, 2,,]), [1, 2, undefined, undefined]);
});
