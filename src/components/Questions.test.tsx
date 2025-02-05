import { fireEvent, render, screen } from "@testing-library/react";
import { Question } from "./Question";

describe("Questions", () => {
  it("should display question component when show is true", () => {
    render(
      <Question
        question="This is a question"
        pageNumber="4"
        options={["one", "two", "three", "four"]}
        show
        handleSelectOptionCallback={jest.fn}
      />
    );
    const questionElement = screen.getByTestId("question");
    expect(questionElement).toBeInTheDocument();
  });
  it("show display the question", () => {
    render(
      <Question
        question="This is a question"
        pageNumber="4"
        options={["one", "two", "three", "four"]}
        show
        handleSelectOptionCallback={jest.fn}
      />
    );
    const paragraphElement = screen.getByText("This is a question");
    expect(paragraphElement).toBeInTheDocument();
  });
  it("should render accurate number of Option components ", () => {
    render(
      <Question
        question="This is a question"
        pageNumber="4"
        options={["one", "two", "three", "four"]}
        show
        handleSelectOptionCallback={jest.fn}
      />
    );
    const optionElement = screen.getAllByTestId("option");
    expect(optionElement.length).toEqual(4);
  });
  it("should call handleSelectOptionalCallback when an option is clicked", () => {
    const mockHandleSelectOptionCallback = jest.fn();
    render(
      <Question
        question="This is a question"
        pageNumber="4"
        options={["one", "two", "three", "four"]}
        show
        handleSelectOptionCallback={mockHandleSelectOptionCallback}
      />
    );
    const optionElement = screen.getAllByTestId("option");
    fireEvent.click(optionElement[0]);
    expect(mockHandleSelectOptionCallback).toHaveBeenCalledWith("one");
  });
  it("should set correct selectedOption when option is click", () => {
    render(
      <Question
        question="This is a question"
        pageNumber="4"
        options={["one", "two", "three", "four"]}
        show
        handleSelectOptionCallback={jest.fn}
      />
    );
    const optionElement = screen.getAllByTestId("option");
    const firstOption= optionElement[0]
    fireEvent.click(firstOption);
    expect(firstOption).toHaveClass("selected");

  });
});
