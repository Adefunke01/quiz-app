import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders the Button Properly', () => {
        render(<Button  onClick={jest.fn}>Click</Button> )

        expect(screen.getByRole("button")).toBeInTheDocument()
    });
    it("disabled property works correctly when true", ()=>{
        render(<Button disabled onClick={jest.fn}>Click</Button>)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeDisabled()
    })
    it("disabled property works correctly when false", ()=>{
        render(<Button  onClick={jest.fn}>Click</Button>)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeEnabled()
    })
    it("calls onClick when enabled", ()=>{
        const handleClick = jest.fn()
        render(<Button  onClick={handleClick}>Click</Button>)
        const buttonElement = screen.getByRole("button")
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    it("does not call onClick when disabled", ()=>{
        const handleClick = jest.fn()
        render(<Button disabled onClick={handleClick}>Click</Button>)
        const buttonElement = screen.getByRole("button")
        fireEvent.click(buttonElement)
        expect(handleClick).not.toHaveBeenCalled()
        
    })

})