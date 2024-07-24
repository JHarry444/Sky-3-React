import { act, create } from "react-test-renderer"
import TrainerForm from "../components/TrainerForm"


test("should update state correctly", () => {
    const { root: testInstance } = create(<TrainerForm />);

    const ageInput = testInstance.findByProps({ id: "ageInput" });

    expect(ageInput.props.value).toBe(21);

    act(() => ageInput.props.onChange({ target: { value: 30 } }));

    expect(ageInput.props.value).toBe(30);

})