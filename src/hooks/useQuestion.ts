import { useState } from "react";
import { QuestionResponseType, QuestionType } from "../types/base";
import { getPageNumber } from "../utils/question";

export const useQuestion = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleContinueClick = (data: QuestionResponseType) => {
    if (currentQuestionIndex < data?.results?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isFinalQuestion = getPageNumber(currentQuestionIndex) === "10";
  const isFirstQuestion = getPageNumber(currentQuestionIndex) === "01";
  
  const getOptions = (item: QuestionType) => {
    return [...item.incorrect_answers, item.correct_answer];
  };

  return {
    isFinalQuestion,
    isFirstQuestion,
    handleContinueClick,
    handlePreviousClick,
    currentQuestionIndex,
    getOptions
}
};
