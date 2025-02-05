import React from "react"
import { FailedProps } from "../types/base"
import { FailedSummary } from "./FailedSummary"

type CompletedProps = {
    totalScore :number
    remarks: "PASS" | "FAIL"
    failedQuestions: FailedProps[]


}


export const Completed: React.FC<CompletedProps> = (props) => {

    return (
    <div className="completedContainer">
    <div className="completed">
        <div>
        <p className="completedText">QUIZ COMPLETED</p>
        </div>
        <div className="score-container">
            <p className="score">{`${props.totalScore}%`}</p>
            <p className="remarks">{props.remarks}</p>
            <FailedSummary questionsArray={props.failedQuestions} />
        </div>
        </div>
    </div>)
}