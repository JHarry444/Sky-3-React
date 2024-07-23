import App from '../App';
import { create } from 'react-test-renderer';

// path to the file - 2nd parameter is a function that RETURNS a function
jest.mock("../components/Footer", () => {
  return () => (
    <footer>
      11:00:00
    </footer>
  )
})

test("maffs", () => {
  expect(2).toEqual(1 + 1);
});


test("app matches snapshot", () => {
  const app = create(<App />);

  expect(app.toJSON()).toMatchSnapshot();

});