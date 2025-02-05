

export type QuestionType = {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]

}
export type QuestionResponseType = {
    results: QuestionType[];
};
export type FailedProps = {
    failedQuestion:string
    correctAnswer:string
     
 }
 
export type FailedQuestions= {
    questionsArray:FailedProps[]
}