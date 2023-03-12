import { TsAlgo } from "../index";

describe("TsAlgo Class", () => {
  const sort = new TsAlgo();

  let arr: Array<number>;
  const expected = [1, 1, 4, 6, 12, 25, 27, 43, 44, 55, 85, 97];

  beforeEach(() => (arr = [1, 25, 27, 85, 43, 55, 12, 6, 4, 44, 97, 1]));

  it("bubble sort: returns the correct result", () => {
    expect(sort.bubble(arr)).toEqual(expected);
  });

  it("selection sort: returns the correct result", () => {
    expect(sort.selection(arr)).toEqual(expected);
  });

  it("insertion sort: returns the correct result", () => {
    expect(sort.insertion(arr)).toEqual(expected);
  });
});
