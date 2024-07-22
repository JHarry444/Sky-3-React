import { create } from 'react-test-renderer';
import Trainer from '../components/Trainer';

test("trainer renders correctly with props", () => {
    const { root } = create(<Trainer name="Jordan H" specialism='software' />);


    const paragraphs = root.findAllByType("p");

    expect(paragraphs[0].children.join("")).toEqual("My name is Jordan H");
    expect(paragraphs[1].children.join("")).toEqual("I am 0 years old");
    expect(paragraphs[2].children.join("")).toEqual("I am a software trainer");
    // expect(paragraphs[0]).toContain("My name is Jordan H");
    expect(paragraphs.length).toEqual(3);

})

test("trainer renders correctly with location", () => {
    const { root } = create(<Trainer name="Jordan H" specialism='software' location="Staffordshire" />);


    const paragraphs = root.findAllByType("p");

    expect(paragraphs[0].children.join("")).toEqual("My name is Jordan H");
    expect(paragraphs[1].children.join("")).toEqual("I am 0 years old");
    expect(paragraphs[2].children.join("")).toEqual("I am a software trainer");
    expect(paragraphs[3].children.join("")).toEqual("And I live in Staffordshire");

    expect(paragraphs.length).toEqual(4);

})