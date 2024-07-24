import { useState } from "react";

const TrainerForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(21);
    const [specialism, setSpecialism] = useState("");
    const [location, setLocation] = useState("");

    return (
        <form>
            <label htmlFor="nameInput">Name</label>
            <input type="text" name="nameInput" id="nameInput" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <label htmlFor="ageInput">Age</label>
            <input type="number" min={21} max={100} step={1} name="ageInput" id="ageInput" value={age} onChange={(event) => setAge(parseInt(event.target.value))} />
            <br />
            <label htmlFor="specialismInput">Specialism</label>
            <input type="text" name="specialismInput" id="specialismInput" value={specialism} onChange={(event) => setSpecialism(event.target.value)} required />
            <br />
            <label htmlFor="locationInput">Location</label>
            <input type="text" name="locationInput" id="locationInput" value={location} onChange={(event) => setLocation(event.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TrainerForm;