import { useState } from "react";

const Counter = () => {

    // NEVER change state directly
    // ALWAYS use a setX

    // useState(default)
    const [count, setCount] = useState(0);

    // let count = 0;

    return (<>
        <h2>Counter</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <input value={count} type="number" readOnly />
        <button onClick={() => {
            console.log("Count:", count);
            setCount(count + 1);
        }}>+</button>
    </>);
}

export default Counter;