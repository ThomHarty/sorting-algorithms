import { SortingAlgorithms } from "../index";

describe("SortingAlgorithms Class", () => {
  const sort = new SortingAlgorithms();

  let arr: Array<number>;
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  beforeEach(() => (arr = [7, 3, 6, 8, 9, 4, 1, 2, 5]));

  it("bubble sort: returns the correct result", () => {
    expect(sort.bubble(arr)).toEqual(expected);
  });

  it("selection sort: returns the correct result", () => {
    expect(sort.selection(arr)).toEqual(expected);
  });

  it("insertion sort: returns the correct result", () => {
    expect(sort.insertion(arr)).toEqual(expected);
  });

  it("merge sort: returns the correct result", () => {
    expect(sort.merge(arr)).toEqual(expected);
  });
});
