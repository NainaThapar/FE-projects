import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


it("should load contact us Component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})