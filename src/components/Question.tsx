import { useState } from "react"
import { Option } from './Option'

type QuestionProps = {
    question: string
    pageNumber: string
    options: string[]
    children?: React.ReactNode
    show:boolean
    handleSelectOptionCallback:(item:string)=>void

}

export const Question: React.FC<QuestionProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState(0)
    

    const handleOptionClick = (option:string,index: number) => {
        setSelectedOption(index)
        props.handleSelectOptionCallback(option)
    

    }

return (props.show && <div data-testid="question" className="question">

    <p className="questionItem">{props.question}</p>
    <div>
        {props.options.map((option, index) => (
            <Option
                key={index}
                title={option}
                index={index}
                selected={selectedOption === index}
                onClick={() => handleOptionClick(option, index)}
            />
        ))}
    </div>
</div>)

}