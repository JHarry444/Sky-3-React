import Header from "../components/Header"
import { create } from "react-test-renderer";

test("header contains", () => {
    const header = create(<Header />);

    // acccesses the object - allows for specific tests
    const testInstance = header.root;


    const h1 = testInstance.findByType("h1");


    expect(h1.children).toContain("This is a header");

})