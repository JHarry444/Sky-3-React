import axios from "axios";
import { useRef, useState } from "react";

const TrainerForm = ({ setTrainers }) => {

    const nameRef = useRef();

    const [name, setName] = useState("");
    const [age, setAge] = useState(21);
    const [specialism, setSpecialism] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8081/trainers", { name, age, specialism, location })
            .then(res => {
                console.log("RES:", res);
                setTrainers(trainers => [res.data, ...trainers]);
                setName("");
                setAge(21);
                setSpecialism("");
                setLocation("");
                nameRef.current.focus();

            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <h2>Trainer Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name</label>
                <input ref={nameRef} type="text" name="nameInput" id="nameInput" value={name} onChange={(event) => setName(event.target.value)} />
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
        </>

    );
}

export default TrainerForm;