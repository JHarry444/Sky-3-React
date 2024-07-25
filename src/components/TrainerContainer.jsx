import Trainer from "./Trainer";
import { v4 as uuidv4 } from 'uuid';

const TrainerContainer = ({ trainers }) => {
    return (
        <>
            {
                trainers.map(({ id, name, age, specialism, location }) => (<Trainer
                    key={uuidv4()}
                    id={id}
                    name={name}
                    age={age}
                    specialism={specialism}
                    location={location} />))
            }
        </>
    );
}

export default TrainerContainer;