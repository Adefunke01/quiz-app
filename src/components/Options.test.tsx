import { fireEvent, render, screen } from "@testing-library/react"
import { Option } from "./Option"

describe("Options", ()=>{
     const alphabetList= ["A","B","C", "D"]
     alphabetList.forEach((item, index)=>{
        it(`should return ${item} alphabet correctly`, ()=>{
            render(<Option title="Thiss is a question" index={index} selected onClick={jest.fn} />)
            const alphabetElement = screen.getByText(item)
            expect(alphabetElement).toBeInTheDocument()
        })
     })
   it("should add selected classname when selected is true",()=>{
    render(<Option title="Thiss is a question" index={1} selected onClick={jest.fn} />)
    const optionElement= screen.getByTestId("option")
    expect(optionElement).toHaveClass("selected")
   })
   it("should not add selected classname when selected is false",()=>{
    render(<Option title="Thiss is a question" index={1} selected={false} onClick={jest.fn} />)
    const optionElement= screen.getByTestId("option")
    expect(optionElement).not.toHaveClass("selected")
   })
   it("should call onClick",()=>{
   const handleClick =jest.fn()
    render(<Option title="Thiss is a question" index={1} selected={false} onClick={handleClick} />)
    const optionElement= screen.getByTestId("option")
    fireEvent.click(optionElement)
    expect(handleClick).toHaveBeenCalled()
   })
})