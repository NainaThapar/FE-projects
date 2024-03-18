import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaurant component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();

});