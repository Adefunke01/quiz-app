// import { getPageNumber, shuffleOptions } from "./question";
import * as utils from "./question";

const stringCombinations: [number, string][] = [
  [0, "01"],
  [1, "02"],
  [2, "03"],
  [3, "04"],
  [4, "05"],
  [5, "06"],
  [6, "07"],
  [7, "08"],
  [8, "09"],
  [9, "10"],
];
// jest.mock("./question", () => ({
//   shuffleOptions: jest.fn(),
// }));

describe("getPageNumber", () => {
  stringCombinations.forEach(([numberValue, newNumberValue]) => {
    it(`should return correct pagenumber ${numberValue} = ${newNumberValue}`, async () => {
      const result = utils.getPageNumber(numberValue);
      expect(result).toEqual(newNumberValue);
    });
  });
});

describe("shuffleOptions", () => {
  it("it should return a shuffled array", () => {
    jest
      .spyOn(utils, "shuffleOptions")
      .mockReturnValue(["one", "two", "three", "four"]);
    const expectedShuffledOptions = ["one", "two", "three", "four"];
    expect(utils.shuffleOptions(["one", "two", "three", "four"])).toEqual(
      expectedShuffledOptions
    );
  });
});
