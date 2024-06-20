import { sum } from "../../utils/formatters";

describe("when call sum(1,2)", () => {
  it("must get 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
