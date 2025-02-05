import { FailedQuestions } from "../types/base"




export const FailedSummary: React.FC<FailedQuestions> = (props) => {

    return (
        <div className="failed">
            <div>
                <p className="failedText">FAILED QUESTION & CORRECT ANSWER</p>
                { props.questionsArray.map((item,index) =>
                <div key={index}>
                    <p className="failedQuestion">{item.failedQuestion}</p>
                    <p className="failedQuestion">{item.correctAnswer}</p>
                    <hr />
                </div>
                ) }
            </div>
        </div>
    )
}