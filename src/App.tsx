import { useEffect, useRef, useState } from "react";
// import "./App.css";
import { Button } from "./components/Button";
import { Progress } from "./components/Progress";
import { Question } from "./components/Question";
import { Completed } from "./components/Completed";
import { TitleBar } from "./components/TitleBar";
import {
  FailedProps,
  QuestionResponseType,
  QuestionType,
} from "./types/base";
import { getPageNumber } from "./utils/question";
import { useQuestion } from "./hooks/useQuestion";


export const App = () => {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<QuestionResponseType>({
    results: [],
  });
  const [failedQuestions, setFailedQuestions] = useState<FailedProps[]>([]);
  const [finish, setfinish] = useState(false);
  const isLoaded = useRef(false);
  const {
    isFinalQuestion,
    isFirstQuestion,
    handleContinueClick,
    handlePreviousClick,
    currentQuestionIndex,
    getOptions,
   } = useQuestion();

  useEffect(() => {
    if (isLoaded.current) {
      return;
    }
    isLoaded.current = true;
    const fetchData = async () => {
      // debugger

      setIsLoading(true);
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  const handleFinishClick = () => {
    setfinish(true);
  };

  const handleSelectOption = (option: string, item: QuestionType) => {
    if (option === item.correct_answer) {
      setScore(score + 1);
    }
    if (option !== item.correct_answer) {
      setFailedQuestions([
        ...failedQuestions,
        { failedQuestion: item.question, correctAnswer: item.correct_answer },
      ]);
    }
  };
  const totalScore = (score / data.results.length) * 100;

  return (
    <>
      {!finish && !isLoading && (
        <div className="rootContainer">
          <TitleBar pageNumber={getPageNumber(currentQuestionIndex)} />
          <div className="topContainer">
            {data?.results?.map((item: QuestionType, index: number) => (
              <Question
                question={item.question}
                pageNumber={getPageNumber(currentQuestionIndex)}
                options={getOptions(item)}
                key={index}
                show={index === currentQuestionIndex}
                handleSelectOptionCallback={(selectedOption) =>
                  handleSelectOption(selectedOption, item)
                }
              />
            ))}
          </div>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {finish && (
        <Completed
          totalScore={totalScore}
          remarks={totalScore >= 50 ? "PASS" : "FAIL"}
          failedQuestions={failedQuestions}
        />
      )}
      {!finish && (
        <div className="footer">
          <Progress
            value={currentQuestionIndex + 1}
            max={data?.results.length}
          />
          <div className="buttonContainer">
            <Button
              className={`${isFirstQuestion ? "fade" : " "} backButton`}
              onClick={handlePreviousClick}
            >
              {" "}
              BACK{" "}
            </Button>
            {isFinalQuestion ? (
              <Button onClick={handleFinishClick}>FINISH</Button>
            ) : (
              <Button onClick={() => handleContinueClick(data)}>
                CONTINUE
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}


