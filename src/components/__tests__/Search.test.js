import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render Body component with Search", async () => {
    await act(async() => render(<BrowserRouter>
    <Body />
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");
    // const cards = screen.getAllByTestId("resCard");

    fireEvent.change(searchInput, {target: { value: "Burger"} });
    fireEvent.click(searchBtn);

    // //screen should load 1 card
    const cards = screen.getByTestId("resCard");

    expect(cards.length).toBe(1);

    
})