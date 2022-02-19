import { render, screen } from "@testing-library/react";
import Home from "./index.page";


describe('Home page', () => {
  it('renders', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
