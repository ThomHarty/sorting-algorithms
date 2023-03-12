import { Greeter } from "../index";

describe("Greeter Function", () => {
  it("returns the correct result", () => {
    expect(Greeter("John")).toBe("Hello John");
  });
});
