import { render, screen } from '@testing-library/react';
import { TitleBar } from './TitleBar';


describe('TitleBar', () => {
    it('renders the pageNumber Correctly', ()=>{
        render(<TitleBar pageNumber='6'/>)
        const pageNumberElement = screen.getByText("6")
        expect(pageNumberElement).toBeInTheDocument()
    })
    it('h1 shows corrrectly', ()=>{
        render(<TitleBar pageNumber='6'/>)
        const headingElement = screen.getByRole("heading",{level:1})
        expect(headingElement).toBeInTheDocument()
        expect(headingElement).toHaveTextContent("Fantasy Quiz #156")
    })
})