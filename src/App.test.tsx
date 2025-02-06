import { act } from "react";
import { App } from "./App";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { results } from "./mocks/questions";

global.fetch = jest.fn();

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it("fetches & shows loading text", () => {
    (fetch as jest.Mock).mockReturnValue({
      json: () => {
        return {
          results: [
            {
              category: "General Knowledge",
              type: "multiple",
              difficulty: "easy",
              question: "What is the capital of India?",
              correct_answer: "New Delhi",
              incorrect_answers: ["Chennai", "Mumbai", "Kolkata", "Bangalore"],
            },
          ],
        };
      },
    });
    render(<App />);
    act(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });
  it("fetches & displays data", async () => {
    (fetch as jest.Mock).mockReturnValue({
      json: () => {
        return {
          results: [
            {
              category: "General Knowledge",
              type: "multiple",
              difficulty: "easy",
              question: "What is the capital of India?",
              correct_answer: "New Delhi",
              incorrect_answers: ["Chennai", "Mumbai", "Kolkata", "Bangalore"],
            },
          ],
        };
      },
    });
    render(<App />);
    expect(fetch).toHaveBeenCalledWith(
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"
    );
    await waitFor(() => {
      expect(
        screen.getByText("What is the capital of India?")
      ).toBeInTheDocument();
    });

  });

  it("should show finish button", async () => {
    (fetch as jest.Mock).mockReturnValue({
      json: () => {
        return {
          results
        };
      },
    });
    render(<App />);
    const continueButton = await screen.findByText(/continue/i);

    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    fireEvent.click(continueButton);
    await waitFor(() => {});
    
    const finishButton = await screen.findByText(/finish/i);
    expect(finishButton).toBeInTheDocument();
  });

});
