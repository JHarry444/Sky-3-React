import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'AGED': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'CHANGED_NAME': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const trainerReducer = useReducer(reducer, { name: "", age: 0, specialism: "", location: "" });

export default trainerReducer;