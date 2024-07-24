import { useState } from "react";

const Converter = () => {
    const [miles, setMiles] = useState(0);
    const [kilometres, setKilometres] = useState(0);
    return (<>
        <h2>Converter</h2>
        <label htmlFor="milesInput">Miles</label>
        <input
            type="number"
            value={miles}
            min={0}
            name="milesInput"
            id="milesInput"
            onChange={e => {
                setMiles(parseFloat(e.target.value));
                setKilometres(e.target.value * 1.6);
            }}
        />
        <br />
        <label htmlFor="kmInput">Kilometres</label>
        <input
            type="number"
            value={kilometres}
            min={0}
            name="kmInput"
            id="kmInput"
            onChange={e => {
                setKilometres(parseFloat(e.target.value));
                setMiles(e.target.value / 1.6);
            }}
        />
    </>);
}

export default Converter;