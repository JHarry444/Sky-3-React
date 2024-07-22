import App from './App';
import { create } from 'react-test-renderer';


test("maffs", () => {
  expect(2).toEqual(1 + 1);
});


test("app matches snapshot", () => {
  const app = create(<App />);

  expect(app.toJSON()).toMatchSnapshot();

});