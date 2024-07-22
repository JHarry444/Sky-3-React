import PropTypes from 'prop-types';

const Trainer = ({ name, age, location, specialism }) => {
    location.toLowerCase();
    return (
        <>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <p>I am a {specialism} trainer</p>
            {location && <p>And I live in {location}</p>}
        </>
    )

}


Trainer.defaultProps = {
    name: "Jordan",
    age: 0,
    location: ""
}

Trainer.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    specialism: PropTypes.string.isRequired,
    location: PropTypes.string
}

export default Trainer;