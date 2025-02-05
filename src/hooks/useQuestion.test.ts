import { act, renderHook} from "@testing-library/react";
import { useQuestion } from "./useQuestion";
import { QuestionResponseType } from "../types/base";

describe("useQuestion", () => {
  const data: QuestionResponseType = {
    results: [
      {
        question: "what is your name",
        correct_answer: "Bola",
        incorrect_answers: ["lade", "joseph", "john"],
      },
      {
        question: "what is your age",
        correct_answer: "38",
        incorrect_answers: ["67", "45", "22"],
      },
    ],
  };
  it("should return initial question index", () => {
    const { result } = renderHook(() => useQuestion());
    expect(result.current.currentQuestionIndex).toBe(0);
  });
  it("should subtract 1 from the currentQuestionIndex", () => {
    const { result } = renderHook(() => useQuestion());
    act(() => result.current.handleContinueClick(data));
    act(() => result.current.handlePreviousClick());
    expect(result.current.currentQuestionIndex).toBe(0);
  });
  it("should add 1 to currentQuestionIndex", () => {
    const { result } = renderHook(() => useQuestion());
    act(() => result.current.handleContinueClick(data));
    expect(result.current.currentQuestionIndex).toBe(1);
  });
  it("it should return correct options array",()=>{
    const { result } = renderHook(() => useQuestion());
    const options= result.current.getOptions(data.results[0])
    expect(options).toEqual(["lade", "joseph", "john", "Bola"])
  })
});
