import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';


const Trainer = ({ id, name, age, location, specialism }) => {
    const navigate = useNavigate();


    const myContext = useContext(MyContext);

    return (
        <div onClick={() => navigate("/trainer/get/" + id)} className='trainer'>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <p>I am a {specialism} trainer</p>
            {location && <p>And I live in {location}</p>}
            {myContext}
        </div>
    )

}


Trainer.defaultProps = {
    name: "Jordan",
    age: 0,
    location: ""
}

Trainer.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    age: PropTypes.number,
    specialism: PropTypes.string.isRequired,
    location: PropTypes.string
}

export default Trainer;